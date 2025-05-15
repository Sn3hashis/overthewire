import { Level } from '../types';

export const kryptonLevels: Level[] = [
  {
    id: 0,
    title: 'Level 0',
    description: 'Welcome to Krypton! The first level is easy. The following string encodes the password: S1JZUFRPTklTR1JFQVQ=',
    commands: [
      'echo "S1JZUFRPTklTR1JFQVQ=" | base64 -d'
    ],
    hints: [
      'This is a Base64 encoded string.',
      'Use the base64 command-line tool to decode it.'
    ]
  },
  {
    id: 1,
    title: 'Level 0 → Level 1',
    description: 'The password for level 2 is in the file \'krypton2\'. It is \'encrypted\' using a simple rotation called ROT13.',
    commands: [
      'cat /krypton/krypton1/krypton2 | tr \'A-Za-z\' \'N-ZA-Mn-za-m\''
    ],
    hints: [
      'ROT13 rotates each letter by 13 positions.',
      'The tr command can help with character substitution.'
    ]
  }
];