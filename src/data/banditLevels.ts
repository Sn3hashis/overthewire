import { Level } from '../types';

export const banditLevels: Level[] = [
  {
    id: 0,
    title: 'Level 0',
    description: 'The goal of this level is for you to log into the game using SSH. The host to which you need to connect is bandit.labs.overthewire.org, on port 2220. The username is bandit0 and the password is bandit0.',
    commands: [
      'ssh bandit0@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'This level requires you to use the SSH command to connect to the server.',
      'The password is bandit0.'
    ]
  },
  {
    id: 1,
    title: 'Level 0 → Level 1',
    description: 'The password for the next level is stored in a file called readme located in the home directory. Use this password to log into bandit1 using SSH.',
    commands: [
      'cat ~/readme',
      'ssh bandit1@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use the "cat" command to display the contents of the file.',
      'The file is in the home directory (~).'
    ]
  },
  {
    id: 2,
    title: 'Level 1 → Level 2',
    description: 'The password for the next level is stored in a file called - located in the home directory.',
    commands: [
      'cat ./-',
      'cat < -',
      'ssh bandit2@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Dashes are treated as options in many commands.',
      'To read a file named with a dash, you need to specify the path.'
    ]
  },
  {
    id: 3,
    title: 'Level 2 → Level 3',
    description: 'The password for the next level is stored in a file called spaces in this filename located in the home directory.',
    commands: [
      'cat "spaces in this filename"',
      'cat spaces\\ in\\ this\\ filename',
      'ssh bandit3@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Spaces in filenames need to be escaped or the filename needs to be quoted.',
      'You can use tab completion to help with filenames that have spaces.'
    ]
  },
  {
    id: 4,
    title: 'Level 3 → Level 4',
    description: 'The password for the next level is stored in a hidden file in the inhere directory.',
    commands: [
      'ls -la inhere/',
      'cat inhere/.hidden',
      'ssh bandit4@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Hidden files in Linux start with a dot (.)',
      'Use "ls -la" to see hidden files.'
    ]
  },
  // Adding more levels...
  {
    id: 5,
    title: 'Level 4 → Level 5',
    description: 'The password for the next level is stored in the only human-readable file in the inhere directory.',
    commands: [
      'cd inhere',
      'file ./-file*',
      'cat ./-file07',
      'ssh bandit5@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'The "file" command can help identify file types.',
      'Look for ASCII text in the file command output.'
    ]
  }
];