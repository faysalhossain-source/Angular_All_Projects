export interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    borrowedBy?: string;
  }
  