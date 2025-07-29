import React from 'react';
import NotesList from '@/components/features/NotesList';
import AddNote from '@/components/features/AddNote';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      <AddNote />
      <NotesList />
    </div>
  );
};

export default HomePage;
