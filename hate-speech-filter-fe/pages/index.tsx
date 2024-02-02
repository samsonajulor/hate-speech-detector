// pages/index.tsx
import { FC, useState } from 'react';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import SentenceCard from '@/components/SentenceCard';
import TransitionScreen from '@/components/TransitionScreen';

const sentences = ['I love coding!', 'Programming is challenging but fun.', 'I hate you!', 'Spread love, not hate.'];

const Home: FC = () => {
  const [selectedSentences, setSelectedSentences] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSentenceSelect = (sentence: string) => {
    if (selectedSentences.includes(sentence)) {
      setSelectedSentences((prev) => prev.filter((s) => s !== sentence));
    } else {
      setSelectedSentences((prev) => [...prev, sentence]);
    }
  };

  const handleProcessSentences = async () => {
    setLoading(true);
    // Implement logic to send selected sentences to the backend
    // and receive the response indicating hate speech presence
    // Set loading to false and update UI accordingly
    setLoading(false);
  };


  return (
    <div>
      <h1 className='text-3xl mb-4'>Welcome, {'Samson'}!</h1>
      <div className='flex space-x-4 mb-4'>
        <Button onClick={handleProcessSentences}>Process Sentences</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {sentences.map((sentence) => (
          <SentenceCard
            key={sentence}
            sentence={sentence}
            onClick={() => handleSentenceSelect(sentence)}
            selected={selectedSentences.includes(sentence)}
          />
        ))}
      </div>
      {loading && <TransitionScreen text='Processing...' />}
    </div>
  );
};

export default Home;
