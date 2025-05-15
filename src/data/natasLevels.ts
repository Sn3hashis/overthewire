import { Level } from '../types';

export const natasLevels: Level[] = [
  {
    id: 0,
    title: 'Level 0',
    description: 'You can find the password for the next level on this page. Username: natas0, Password: natas0',
    commands: [],
    hints: [
      'View the page source to find hidden information.',
      'Right-click and select "View Page Source" or use Ctrl+U.'
    ]
  },
  {
    id: 1,
    title: 'Level 0 → Level 1',
    description: 'You can find the password for the next level on this page, but right-clicking has been blocked!',
    commands: [],
    hints: [
      'There are other ways to view the page source besides right-clicking.',
      'Try using keyboard shortcuts or the browser\'s menu.'
    ]
  },
  {
    id: 2,
    title: 'Level 1 → Level 2',
    description: 'There is nothing on this page.',
    commands: [],
    hints: [
      'Check for files in other directories.',
      'Look at the page source for clues about file locations.'
    ]
  }
];