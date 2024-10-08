// src/Nodes.jsx
import React, { useMemo } from 'react';
import { Sphere } from '@react-three/drei';
import { mockData } from './mockData';

const Nodes = ({ filter }) => {
  const nodes = useMemo(() => {
    const filteredData =
      filter === 'All' ? mockData : mockData.filter((data) => data.category === filter);
    const radius = 20;
    const count = filteredData.length;
    return filteredData.map((data, index) => {
      const phi = Math.acos(-1 + (2 * index) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      return {
        ...data,
        position: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ],
      };
    });
  }, [filter]);

  return (
    <>
      {nodes.map((node) => (
        <Sphere
          key={node.id}
          args={[0.5, 16, 16]}
          position={node.position}
          onClick={() => alert(`Title: ${node.title}\nDifficulty: ${node.difficulty}`)}
        >
          <meshStandardMaterial color={node.completed ? 'green' : 'red'} />
        </Sphere>
      ))}
    </>
  );
};

export default Nodes;
