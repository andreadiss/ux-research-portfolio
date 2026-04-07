export const POLLS = [
  {
    q: 'When exploring a new problem?',
    options: ['Interviews', 'Surveys'],
    feedback: {
      Interviews: 'Depth before scale works well.',
      Surveys: 'Broad signal, lower nuance.',
    },
  },
  {
    q: 'Best to validate interaction design?',
    options: ['Usability test', 'A/B test'],
    feedback: {
      'Usability test': 'Great for understanding friction.',
      'A/B test': 'Great for measuring impact.',
    },
  },
  {
    q: 'How would you shape information architecture?',
    options: ['Card sorting', 'Tree testing'],
    feedback: {
      'Card sorting': 'Useful for mental models.',
      'Tree testing': 'Useful for findability checks.',
    },
  },
  {
    q: 'Need to understand real-world context?',
    options: ['Field study', 'Lab test'],
    feedback: {
      'Field study': 'Context adds strong insight.',
      'Lab test': 'Control improves precision.',
    },
  },
  {
    q: 'What comes first in discovery?',
    options: ['Qualitative', 'Quantitative'],
    feedback: {
      Qualitative: 'Good for framing unknowns.',
      Quantitative: 'Good for sizing patterns.',
    },
  },
]
