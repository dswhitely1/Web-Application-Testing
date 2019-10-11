import React from 'react';

function Display ({ stats: { balls, strikes } }) {
  return (
    <>
      <h1 data-testid='strike-count'>{`Strikes: ${strikes}`}</h1>
      <h1 data-testid='ball-count'>{`Balls: ${balls}`}</h1>
    </>
  );
}

export default Display;