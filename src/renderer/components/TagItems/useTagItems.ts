import { useState } from 'react';
import { Tag } from '../Tag/type';

const useTagItems = () => {
  return useState<Tag[]>([]);
};

export { useTagItems };
