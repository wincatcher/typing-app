import create from 'zustand';
import { biologySentece } from '../lib/topics/biology';

// Define the type for a sentence
type Sentence = {
  id: string;
  text: string;
  topic: string;
};

// Define the type for the store's state
interface SentenceStore {
  sentences: Sentence[];
  getSentencesByTopic: (topic: string) => string[];
}

// Initial sentences data
const initialSentences: Sentence[] = biologySentece

// Create the Zustand store with TypeScript types
export const useSentenceStore = create<SentenceStore>((set, get) => ({
  sentences: initialSentences,
  getSentencesByTopic: (topic: string) => {
    const state = get();
    return state.sentences
      .filter((sentence) => sentence.topic === topic)
      .map((sentence) => sentence.text);
  },
}));