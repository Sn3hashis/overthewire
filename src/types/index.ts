export interface Wargame {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  levels: number;
  thumbnail: string;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  commands?: string[];
  hints?: string[];
  solution?: string;
}