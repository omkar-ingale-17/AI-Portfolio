import React from 'react';
import './VoiceToast.css';

export default function VoiceToast({ toast }) {
  return (
    <div className={`voice-toast ${toast.visible ? 'show' : ''}`}>
      {toast.message}
    </div>
  );
}
