// src/mockData.js
export const mockData = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    title: `Problem ${index + 1}`,
    completed: Math.random() > 0.5,
    difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
    category: ['Array', 'String', 'Dynamic Programming'][Math.floor(Math.random() * 3)],
  }));
  