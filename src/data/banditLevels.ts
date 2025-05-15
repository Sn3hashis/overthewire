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
  },
  {
    id: 6,
    title: 'Level 5 → Level 6',
    description: 'The password for the next level is stored in a file somewhere under the inhere directory and has all of the following properties: human-readable, 1033 bytes in size, not executable.',
    commands: [
      'find inhere -type f -size 1033c ! -executable -exec file {} \\;',
      'ssh bandit6@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use the find command with size and permission filters.',
      'The -size option in find can specify bytes using the c suffix.'
    ]
  },
  {
    id: 7,
    title: 'Level 6 → Level 7',
    description: 'The password for the next level is stored somewhere on the server and has all of the following properties: owned by user bandit7, owned by group bandit6, 33 bytes in size.',
    commands: [
      'find / -user bandit7 -group bandit6 -size 33c 2>/dev/null',
      'ssh bandit7@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use find with user, group, and size filters.',
      'Redirect error messages to /dev/null to clean up the output.'
    ]
  },
  {
    id: 8,
    title: 'Level 7 → Level 8',
    description: 'The password for the next level is stored in the file data.txt next to the word millionth.',
    commands: [
      'grep millionth data.txt',
      'ssh bandit8@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use grep to find lines containing specific words.',
      'The password is on the same line as the word "millionth".'
    ]
  },
  {
    id: 9,
    title: 'Level 8 → Level 9',
    description: 'The password for the next level is stored in the file data.txt and is the only line of text that occurs only once.',
    commands: [
      'sort data.txt | uniq -u',
      'ssh bandit9@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use sort and uniq together to find unique lines.',
      'The -u option of uniq shows only lines that appear exactly once.'
    ]
  },
  {
    id: 10,
    title: 'Level 9 → Level 10',
    description: 'The password for the next level is stored in the file data.txt in one of the few human-readable strings, preceded by several "=" characters.',
    commands: [
      'strings data.txt | grep "="',
      'ssh bandit10@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use the strings command to find readable text in binary files.',
      'Look for lines containing multiple = characters.'
    ]
  },
  {
    id: 11,
    title: 'Level 10 → Level 11',
    description: 'The password for the next level is stored in the file data.txt, which contains base64 encoded data.',
    commands: [
      'base64 -d data.txt',
      'ssh bandit11@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use the base64 command with -d flag to decode.',
      'The decoded text will contain the password.'
    ]
  },
  {
    id: 12,
    title: 'Level 11 → Level 12',
    description: 'The password for the next level is stored in the file data.txt, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions.',
    commands: [
      'cat data.txt | tr "A-Za-z" "N-ZA-Mn-za-m"',
      'ssh bandit12@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'This is a ROT13 cipher.',
      'Use tr command to perform the character rotation.'
    ]
  },
  {
    id: 13,
    title: 'Level 12 → Level 13',
    description: 'The password for the next level is stored in the file data.txt, which is a hexdump of a file that has been repeatedly compressed.',
    commands: [
      'xxd -r data.txt > data',
      'file data',
      'mv data data.gz',
      'gzip -d data.gz',
      'ssh bandit13@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use xxd -r to reverse the hexdump.',
      'Check file types with the file command.',
      'You\'ll need to decompress multiple times.'
    ]
  },
  {
    id: 14,
    title: 'Level 13 → Level 14',
    description: 'The password for the next level is stored in /etc/bandit_pass/bandit14 and can only be read by user bandit14. For this level, you don\'t get the next password, but you get a private SSH key that can be used to log into the next level.',
    commands: [
      'ssh -i sshkey.private bandit14@localhost',
      'cat /etc/bandit_pass/bandit14',
      'ssh bandit14@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use the private key to log in as bandit14.',
      'Once logged in as bandit14, you can read the password file.'
    ]
  },
  {
    id: 15,
    title: 'Level 14 → Level 15',
    description: 'The password for the next level can be retrieved by submitting the password of the current level to port 30000 on localhost.',
    commands: [
      'nc localhost 30000',
      'ssh bandit15@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use netcat (nc) to connect to the port.',
      'Submit the current level\'s password to get the next one.'
    ]
  },
  {
    id: 16,
    title: 'Level 15 → Level 16',
    description: 'The password for the next level can be retrieved by submitting the password of the current level to port 30001 on localhost using SSL encryption.',
    commands: [
      'openssl s_client -connect localhost:30001',
      'ssh bandit16@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use OpenSSL to create an SSL/TLS connection.',
      'Submit the current password through the SSL connection.'
    ]
  },
  {
    id: 17,
    title: 'Level 16 → Level 17',
    description: 'The credentials for the next level can be retrieved by submitting the password of the current level to a port on localhost in the range 31000 to 32000. First find out which of these ports have a server listening on them. Then find out which of those speak SSL and which don\'t. There is only 1 server that will give the next credentials, the others will simply send back to you whatever you send to it.',
    commands: [
      'nmap -p 31000-32000 localhost',
      'openssl s_client -connect localhost:31790',
      'ssh bandit17@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use nmap to scan for open ports.',
      'Try connecting to each SSL port until you find the right one.'
    ]
  },
  {
    id: 18,
    title: 'Level 17 → Level 18',
    description: 'There are 2 files in the homedirectory: passwords.old and passwords.new. The password for the next level is in passwords.new and is the only line that has been changed between passwords.old and passwords.new.',
    commands: [
      'diff passwords.old passwords.new',
      'ssh bandit18@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Use the diff command to compare files.',
      'Look for the line that was changed between the files.'
    ]
  },
  {
    id: 19,
    title: 'Level 18 → Level 19',
    description: 'The password for the next level is stored in a file readme in the homedirectory. Unfortunately, someone has modified .bashrc to log you out when you log in with SSH.',
    commands: [
      'ssh bandit18@bandit.labs.overthewire.org -p 2220 "cat readme"',
      'ssh bandit19@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'You can execute commands directly through SSH.',
      'Bypass the modified .bashrc by running commands remotely.'
    ]
  },
  {
    id: 20,
    title: 'Level 19 → Level 20',
    description: 'To gain access to the next level, you should use the setuid binary in the homedirectory. Execute it without arguments to find out how to use it.',
    commands: [
      './bandit20-do cat /etc/bandit_pass/bandit20',
      'ssh bandit20@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'The setuid binary allows you to execute commands as another user.',
      'Use it to read files that bandit20 can access.'
    ]
  },
  {
    id: 21,
    title: 'Level 20 → Level 21',
    description: 'There is a setuid binary in the homedirectory that does the following: it makes a connection to localhost on the port you specify as a commandline argument. It then reads a line of text from the connection and compares it to the password in the previous level (bandit20). If the password is correct, it will transmit the password for the next level (bandit21).',
    commands: [
      'echo "current_password" | nc -l -p 1234 &',
      './suconnect 1234',
      'ssh bandit21@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'You\'ll need to run a listener and the binary simultaneously.',
      'Use netcat to create a listening port.'
    ]
  },
  {
    id: 22,
    title: 'Level 21 → Level 22',
    description: 'A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.',
    commands: [
      'cat /etc/cron.d/cronjob_bandit22',
      'cat /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv',
      'ssh bandit22@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Look at the cron job configuration file.',
      'Follow the script to find where the password is stored.'
    ]
  },
  {
    id: 23,
    title: 'Level 22 → Level 23',
    description: 'A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.',
    commands: [
      'cat /etc/cron.d/cronjob_bandit23',
      'echo I am user bandit23 | md5sum | cut -d " " -f 1',
      'cat /tmp/8ca319486bfbbc3663ea0fbe81326349',
      'ssh bandit23@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Analyze the script to understand how the temp file is named.',
      'Create the same MD5 hash to find the file.'
    ]
  },
  {
    id: 24,
    title: 'Level 23 → Level 24',
    description: 'A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.',
    commands: [
      'cat /etc/cron.d/cronjob_bandit24',
      'mkdir /tmp/mydir24',
      'cd /tmp/mydir24',
      'vim script.sh',
      'chmod +x script.sh',
      'ssh bandit24@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Create a script that will be executed by cron.',
      'Make sure your script is executable.'
    ]
  },
  {
    id: 25,
    title: 'Level 24 → Level 25',
    description: 'A daemon is listening on port 30002 and will give you the password for bandit25 if given the password for bandit24 and a secret numeric 4-digit pincode.',
    commands: [
      'for i in {0000..9999}; do echo "pass $i"; done | nc localhost 30002',
      'ssh bandit25@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'You\'ll need to brute force the PIN.',
      'Create a script to try all possible combinations.'
    ]
  },
  {
    id: 26,
    title: 'Level 25 → Level 26',
    description: 'Logging in to bandit26 from bandit25 should be fairly easy... The shell for user bandit26 is not /bin/bash, but something else. Find out what it is, how it works and how to break out of it.',
    commands: [
      'ssh -i bandit26.sshkey bandit26@localhost',
      'v',
      ':e /etc/bandit_pass/bandit26',
      'ssh bandit26@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Look at /etc/passwd to find bandit26\'s shell.',
      'The shell is set to display something and exit.'
    ]
  },
  {
    id: 27,
    title: 'Level 26 → Level 27',
    description: 'Good job getting a shell! Now hurry and grab the password for bandit27!',
    commands: [
      './bandit27-do cat /etc/bandit_pass/bandit27',
      'ssh bandit27@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Look for setuid binaries in the home directory.',
      'Use the binary to read the password file.'
    ]
  },
  {
    id: 28,
    title: 'Level 27 → Level 28',
    description: 'There is a git repository at ssh://bandit27-git@localhost/home/bandit27-git/repo. The password for the user bandit27-git is the same as for the user bandit27.',
    commands: [
      'git clone ssh://bandit27-git@localhost/home/bandit27-git/repo',
      'cat repo/README',
      'ssh bandit28@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Clone the repository to access its contents.',
      'Look for the password in the repository files.'
    ]
  },
  {
    id: 29,
    title: 'Level 28 → Level 29',
    description: 'There is a git repository at ssh://bandit28-git@localhost/home/bandit28-git/repo. The password for the user bandit28-git is the same as for the user bandit28.',
    commands: [
      'git clone ssh://bandit28-git@localhost/home/bandit28-git/repo',
      'git log',
      'git show commit_hash',
      'ssh bandit29@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Check the git commit history.',
      'Look for commits that might have contained the password.'
    ]
  },
  {
    id: 30,
    title: 'Level 29 → Level 30',
    description: 'There is a git repository at ssh://bandit29-git@localhost/home/bandit29-git/repo. The password for the user bandit29-git is the same as for the user bandit29.',
    commands: [
      'git clone ssh://bandit29-git@localhost/home/bandit29-git/repo',
      'git branch -a',
      'git checkout dev',
      'ssh bandit30@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Look for other branches in the repository.',
      'Check the development branch for the password.'
    ]
  },
  {
    id: 31,
    title: 'Level 30 → Level 31',
    description: 'There is a git repository at ssh://bandit30-git@localhost/home/bandit30-git/repo. The password for the user bandit30-git is the same as for the user bandit30.',
    commands: [
      'git clone ssh://bandit30-git@localhost/home/bandit30-git/repo',
      'git tag',
      'git show secret',
      'ssh bandit31@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Look for git tags in the repository.',
      'Some tags might contain hidden information.'
    ]
  },
  {
    id: 32,
    title: 'Level 31 → Level 32',
    description: 'There is a git repository at ssh://bandit31-git@localhost/home/bandit31-git/repo. The password for the user bandit31-git is the same as for the user bandit31.',
    commands: [
      'git clone ssh://bandit31-git@localhost/home/bandit31-git/repo',
      'echo "May I come in?" > key.txt',
      'git add -f key.txt',
      'git commit -m "Add key.txt"',
      'git push origin master',
      'ssh bandit32@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'Follow the instructions in the repository.',
      'You need to create and push a file.'
    ]
  },
  {
    id: 33,
    title: 'Level 32 → Level 33',
    description: 'After all this git stuff its time for another escape. Good luck!',
    commands: [
      '$0',
      'cat /etc/bandit_pass/bandit33',
      'ssh bandit33@bandit.labs.overthewire.org -p 2220'
    ],
    hints: [
      'The shell converts input to uppercase.',
      'Think about how to break out of this shell.'
    ]
  },
  {
    id: 34,
    title: 'Level 33 → Level 34',
    description: 'At this moment, level 34 does not exist yet.',
    commands: [],
    hints: [
      'Congratulations! You\'ve completed all the current levels!',
      'Check back later for new levels.'
    ]
  }
];