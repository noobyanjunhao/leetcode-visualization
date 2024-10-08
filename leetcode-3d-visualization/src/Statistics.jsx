// src/Statistics.jsx
import React from 'react';

const Statistics = ({ data }) => {
  const total = data.length;
  const completed = data.filter((d) => d.completed).length;
  const completionRate = ((completed / total) * 100).toFixed(2);

  return (
    <div style={{ position: 'absolute', bottom: 20, left: 20, color: '#fff', zIndex: 1 }}>
      <p>Total Problems: {total}</p>
      <p>Completed: {completed}</p>
      <p>Completion Rate: {completionRate}%</p>
    </div>
  );
};

export default Statistics;
