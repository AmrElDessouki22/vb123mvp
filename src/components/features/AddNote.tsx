'use client';

import React, { useState } from 'react';
import { useNotes } from '@/contexts/NotesContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const AddNote: React.FC = () => {
  const [note, setNote] = useState('');
  const { addNote } = useNotes();

  const handleAddNote = () => {
    if (note.trim()) {
      addNote(note);
      setNote('');
    }
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <Input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter your note here"
      />
      <Button onClick={handleAddNote} label="Add Note" />
    </div>
  );
};

export default AddNote;
