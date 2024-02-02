// components/TransitionScreen.tsx
import { FC } from 'react';

interface TransitionScreenProps {
  text: string;
}

const TransitionScreen: FC<TransitionScreenProps> = ({ text }) => (
  <div className='flex items-center justify-center h-screen'>
    <div className='p-8 bg-gray-800 text-white rounded-md'>
      <p className='text-2xl'>{text}</p>
    </div>
  </div>
);

export default TransitionScreen;
