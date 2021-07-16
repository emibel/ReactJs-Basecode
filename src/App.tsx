import React from 'react';

import Navigation from './components/generics/Navigation';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Navigation />
    </div>
  );
};

export default App;
