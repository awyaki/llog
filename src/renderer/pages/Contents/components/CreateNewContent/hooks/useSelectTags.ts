import { useState } from 'react';
import { Tag } from '@prisma/client';

export const useSelectTags = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  
  
  const toggleSelect = (tag: Tag) => {
    setSelectedTags((prevTags) => {
      const index = prevTags.findIndex((prev) => prev.id === tag.id);
      return index !== -1
              ? prevTags.slice(0, index).concat(prevTags.slice(index+1))
              : prevTags.concat(tag);
    });
  };

  return { selectedTags, toggleSelect };
};
