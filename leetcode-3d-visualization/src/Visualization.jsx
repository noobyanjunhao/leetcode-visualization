// src/Visualization.jsx

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Nodes from './Nodes';
import Controls from './Controls';
import Statistics from './Statistics';
import { mockData } from './mockData';

const Visualization = () => {
  const [filter, setFilter] = useState('All');

  const filteredData =
    filter === 'All' ? mockData : mockData.filter((data) => data.category === filter);

  return (
    <>
      <Controls onFilterChange={setFilter} />
      <Statistics data={filteredData} />
      <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[50, 50, 50]} />
        <Nodes filter={filter} />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Visualization;
