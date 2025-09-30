import { createContext, useState, useEffect } from 'react';
import styles from '../App.module.css'; 

const ModeContext = createContext();
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    document.body.className = mode === 'dark' ? styles.darkMode : styles.lightMode;
    return () => { document.body.className = ''; };
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    mode,
    setMode: toggleMode, 
  };

  return (
    <ModeContext.Provider value={contextValue}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;