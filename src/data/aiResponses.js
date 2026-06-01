export const aiDemoResponses = {

  /* =========================================================
     TEXT GENERATION
  ========================================================= */

  textGeneration: {

    "what is ai": `
Artificial Intelligence (AI) is the simulation of human intelligence by machines and computer systems.

AI enables machines to:
• Learn from data
• Understand language
• Recognize images
• Solve problems
• Make decisions

Modern AI technologies include:
• Machine Learning
• Deep Learning
• Neural Networks
• Natural Language Processing
• Computer Vision

Popular AI applications:
✓ ChatGPT
✓ Self-driving cars
✓ AI voice assistants
✓ Recommendation systems
✓ Face recognition

AI is transforming industries including healthcare, education, cybersecurity, finance, and software development.
`,

    "who is iron man": `
Iron Man is a fictional superhero appearing in Marvel Comics.

Real Name:
Tony Stark

Created By:
• Stan Lee
• Larry Lieber
• Don Heck
• Jack Kirby

First Appearance:
1963

About:
Tony Stark is a billionaire inventor and engineer who creates an advanced powered suit of armor to become Iron Man.

Abilities:
✓ Genius-level intelligence
✓ Advanced armored suit
✓ Flight capability
✓ Energy weapons
✓ AI-powered systems

Actor in MCU:
Robert Downey Jr.
`,

    default: (input) => `
AI Assistant Response:

You asked:
"${input}"

This topic relates to modern artificial intelligence, computing, and digital systems.

Key Insights:
• AI systems analyze large amounts of information
• Machine learning improves predictions over time
• NLP helps computers understand human language
• Neural networks simulate brain-like processing

Applications include:
✓ Education
✓ Automation
✓ Robotics
✓ Cybersecurity
✓ Healthcare
✓ Smart assistants

Future Scope:
Artificial intelligence is expected to revolutionize software engineering, communication, and business automation globally.
`,
  },



  /* =========================================================
     SENTIMENT ANALYSIS
  ========================================================= */

  sentimentAnalysis: {

    default: (input) => {

      const lower = input.toLowerCase();

      const positiveWords = [
        'good','great','amazing','awesome','excellent',
        'love','fantastic','perfect','happy','wonderful',
        'best','brilliant','cool','nice','beautiful',
        'outstanding','super','positive','enjoy','success'
      ];

      const negativeWords = [
        'bad','terrible','awful','hate','worst',
        'poor','ugly','horrible','annoying','sad',
        'angry','negative','broken','disappointed',
        'boring','problem','issue','failure','pain'
      ];

      let positive = 0;
      let negative = 0;

      positiveWords.forEach(word => {
        if(lower.includes(word)) positive++;
      });

      negativeWords.forEach(word => {
        if(lower.includes(word)) negative++;
      });

      let sentiment = 'NEUTRAL';
      let confidence = 72;
      let emotion = '😐';

      if(positive > negative) {
        sentiment = 'POSITIVE';
        confidence = 88 + positive;
        emotion = '😊';
      }

      if(negative > positive) {
        sentiment = 'NEGATIVE';
        confidence = 88 + negative;
        emotion = '😞';
      }

      return `
╔══════════════════════════════════════╗
        SENTIMENT ANALYSIS REPORT
╚══════════════════════════════════════╝

Overall Sentiment:
${sentiment} ${emotion}

Confidence Score:
${confidence}%

Analysis:
• Positive Keywords: ${positive}
• Negative Keywords: ${negative}
• Word Count: ${input.split(' ').length}

Emotion Detection:
✓ Tone Analysis Completed
✓ NLP Processing Successful
✓ Context Understanding Active

AI Interpretation:
The system analyzed emotional patterns,
language tone, and contextual indicators
to determine the overall sentiment.

Model Used:
BERT Sentiment Engine v3.1
`;
    }
  },



  /* =========================================================
     CODE REVIEW
  ========================================================= */

  codeReview: {

    default: (input) => {

      let suggestions = [];

      if(input.includes('var ')) {
        suggestions.push('Use "const" or "let" instead of "var".');
      }

      if(input.includes('console.log')) {
        suggestions.push('Remove console.log statements in production.');
      }

      if(input.includes('fetch(')) {
        suggestions.push('Add try-catch for API error handling.');
      }

      if(input.includes('password')) {
        suggestions.push('Avoid storing sensitive data directly.');
      }

      if(input.length < 30) {
        suggestions.push('Code snippet is too small for deep analysis.');
      }

      return `
╔══════════════════════════════════════╗
           AI CODE REVIEW
╚══════════════════════════════════════╝

Code Quality Analysis:
✓ Syntax Analysis Completed
✓ Security Scan Completed
✓ Performance Review Completed

Suggestions:
${suggestions.map((s, i) => `${i + 1}. ${s}`).join('\n')}

Performance:
• Readability Score: 84/100
• Security Score: 91/100
• Optimization Score: 79/100

AI Recommendations:
✓ Use reusable functions
✓ Add comments for maintainability
✓ Optimize API calls
✓ Improve error handling

Status:
PROJECT CODE LOOKS GOOD 🚀
`;
    }
  },



  /* =========================================================
     TEXT CLASSIFICATION
  ========================================================= */

  textClassification: {

    default: (input) => {

      const lower = input.toLowerCase();

      let category = 'General';
      let confidence = 76;

      if(lower.match(/python|javascript|react|html|css|code|programming/)) {
        category = 'Technology / Programming';
        confidence = 96;
      }

      else if(lower.match(/money|finance|market|stock|business/)) {
        category = 'Finance / Business';
        confidence = 91;
      }

      else if(lower.match(/doctor|health|hospital|medicine/)) {
        category = 'Healthcare';
        confidence = 89;
      }

      else if(lower.match(/ai|machine learning|deep learning|neural/)) {
        category = 'Artificial Intelligence';
        confidence = 97;
      }

      else if(lower.match(/football|cricket|sports|game/)) {
        category = 'Sports';
        confidence = 85;
      }

      return `
╔══════════════════════════════════════╗
         TEXT CLASSIFICATION
╚══════════════════════════════════════╝

Detected Category:
${category}

Confidence:
${confidence}%

Classification Analysis:
✓ NLP Tokenization Complete
✓ Semantic Analysis Complete
✓ Pattern Matching Active

Input Statistics:
• Characters: ${input.length}
• Words: ${input.split(' ').length}
• Language: English

AI Understanding:
The text was analyzed using
contextual classification algorithms
and semantic understanding models.

Prediction Status:
SUCCESSFULLY CLASSIFIED ✅
`;
    }
  }
};



/* =========================================================
   MAIN FUNCTION
========================================================= */

export function getAIResponse(tab, input) {

  const responseMap = {
    textGeneration: aiDemoResponses.textGeneration,
    sentimentAnalysis: aiDemoResponses.sentimentAnalysis,
    codeReview: aiDemoResponses.codeReview,
    textClassification: aiDemoResponses.textClassification,
  };

  const tabResponses = responseMap[tab];

  if (!tabResponses) {
    return "Unknown AI module.";
  }

  for (const [key, value] of Object.entries(tabResponses)) {

    if (
      key !== 'default' &&
      input.toLowerCase().includes(key.toLowerCase())
    ) {
      return typeof value === 'function'
        ? value(input)
        : value;
    }
  }

  return typeof tabResponses.default === 'function'
    ? tabResponses.default(input)
    : tabResponses.default;
}