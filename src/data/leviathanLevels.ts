import { Level } from '../types';

export const leviathanLevels: Level[] = [
  {
    id: 0,
    title: 'Level 0',
    description: 'There is no information for this level, intentionally. Connect to the game using SSH on port 2223.',
    commands: [
      'ssh leviathan0@leviathan.labs.overthewire.org -p 2223'
    ],
    hints: [
      'Look for hidden files and directories.',
      'Check configuration files for useful information.'
    ]
  },
  {
    id: 1,
    title: 'Level 0 → Level 1',
    description: 'There is a binary setuid that does something. Find it and determine how to make it give you the password for level 2.',
    commands: [
      'ls -la',
      'ltrace ./check'
    ],
    hints: [
      'Use ltrace to see library calls.',
      'Look for string comparisons in the output.'
    ]
  }
];