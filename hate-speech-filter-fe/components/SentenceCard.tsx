// components/SentenceCard.tsx
import { FC } from 'react';

interface SentenceCardProps {
  key: string;
  sentence: string;
  onClick: () => void;
  selected: boolean;
}

const SentenceCard: FC<SentenceCardProps> = ({ sentence, onClick, selected }) => (
  <div className='border p-4 m-4 rounded-md shadow-md bg-grey'>
    <p>{sentence}</p>
  </div>
);

export default SentenceCard;
