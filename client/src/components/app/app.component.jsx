import React from 'react';
import { useBaseball } from '../../hooks/useBaseball';
import Display from '../display/display.component';
import Dashboard from '../dashboard/dashboard.component';

function App () {
  const { stats, ...buttons } = useBaseball();

  return (
    <>
      <Display stats={stats}/>
      <Dashboard buttonFunctions={buttons}/>
    </>
  );
}

export default App;