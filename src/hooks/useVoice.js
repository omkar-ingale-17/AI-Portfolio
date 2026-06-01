import { useState, useCallback, useRef } from 'react';

export function useVoice({ onCommand }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState(null);
  const recognitionRef = useRef(null);

  const isSupported = typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  const processCommand = useCallback((text) => {
    const lower = text.toLowerCase().trim();

    const commandMap = [
      { patterns: ['go home', 'home', 'top'],            section: 'hero',     label: 'Going to Home' },
      { patterns: ['about', 'who are you', 'about you'], section: 'about',    label: 'Opening About' },
      { patterns: ['skill', 'what can you do', 'expertise'], section: 'skills', label: 'Showing Skills' },
      { patterns: ['project', 'portfolio', 'work'],       section: 'projects', label: 'Going to Projects' },
      { patterns: ['demo', 'ai demo', 'playground'],      section: 'demo',     label: 'Opening AI Demo' },
      { patterns: ['contact', 'hire', 'email', 'reach'],  section: 'contact',  label: 'Opening Contact' },
      { patterns: ['toggle dark', 'dark mode', 'light mode', 'toggle theme'], section: 'theme', label: 'Toggling Theme' },
    ];

    for (const cmd of commandMap) {
      if (cmd.patterns.some(p => lower.includes(p))) {
        onCommand(cmd.section, cmd.label);
        return;
      }
    }
  }, [onCommand]);

  const startListening = useCallback(() => {
    if (!isSupported) {
      setError('Speech recognition not supported in this browser.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('');
      setError(null);
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      processCommand(result);
    };

    recognition.onerror = (event) => {
      setError(`Error: ${event.error}`);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  }, [isSupported, processCommand]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  }, []);

  const toggleListening = useCallback(() => {
    if (isListening) stopListening();
    else startListening();
  }, [isListening, startListening, stopListening]);

  return { isListening, transcript, error, isSupported, toggleListening };
}
