'use client';

import React from 'react';
import { Note } from '@/types';

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <li className="border-b p-2">
      {note.content}
    </li>
  );
};

export default NoteItem;
