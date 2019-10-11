import React from 'react';

function Dashboard ({ buttonFunctions }) {
  const labels = ['Strike', 'Ball', 'Foul', 'Reset'];
  return (
    Object.values(buttonFunctions)
      .map((button, i) => <button data-testid={`${labels[i].toLowerCase()}-button`} key={i} onClick={button}>{labels[i]}</button>)
  );
}

export default Dashboard;