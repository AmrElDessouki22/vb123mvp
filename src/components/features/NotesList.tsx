'use client';

import React from 'react';
import { useNotes } from '@/contexts/NotesContext';
import NoteItem from './NoteItem';

const NotesList: React.FC = () => {
  const { notes } = useNotes();

  if (notes.length === 0) {
    return <p>No notes available. Add a note to get started!</p>;
  }

  return (
    <ul className="mt-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NotesList;
