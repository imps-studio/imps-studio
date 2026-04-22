import { useEffect } from 'react';
import { formatTitle } from '../data/constants.js';

export default function useDocumentTitle(page) {
  useEffect(() => {
    document.title = formatTitle(page);
  }, [page]);
}
