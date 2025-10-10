import { useContext } from 'react';
import ModeContext from '../context/ModeContext';

const useMode = () => {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};

export default useMode;
