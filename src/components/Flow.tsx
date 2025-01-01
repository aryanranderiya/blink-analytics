import React from 'react';
import { motion } from 'framer-motion';

const stages = [
  { id: 'input', title: 'Input Layer', description: 'User provides input data like text or image.' },
  { id: 'preprocessing', title: 'Preprocessing', description: 'Transforms input into tokens or embeddings.' },
  { id: 'model', title: 'Model Processing', description: 'Generative model processes the input.' },
  { id: 'output', title: 'Output Layer', description: 'Generates output like text, image, or content.' },
];

function FlowStage({ id, title, description, position }) {
    return (
      <motion.div
        className="absolute flex flex-col items-center bg-[#1d4ed8] p-4 rounded-lg shadow-lg"
        style={{ left: position.x, top: position.y }}
        whileHover={{ scale: 1.1, backgroundColor: '#9333ea' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm mt-2">{description}</p>
      </motion.div>
    );
  }

  function AnimatedPath({ from, to }) {
    const paths = {
      input: { x: 0, y: 0 },
      preprocessing: { x: 200, y: 150 },
      model: { x: 400, y: 0 },
      output: { x: 600, y: 150 },
    };
  
    const start = paths[from];
    const end = paths[to];
  
    return (
      <motion.svg
        className="absolute"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{ top: 0, left: 0 }}
      >
        <motion.line
          x1={start.x + 100} // Offset for stage width
          y1={start.y + 50}  // Offset for stage height
          x2={end.x}
          y2={end.y + 50}
          stroke="#f59e0b"
          strokeWidth="2"
        />
      </motion.svg>
    );
  }
  

function Flow() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mt-8">Generative AI Flow Diagram</h1>
      <div className="relative mt-12">
        {stages.map((stage, index) => (
          <FlowStage
            key={stage.id}
            id={stage.id}
            title={stage.title}
            description={stage.description}
            position={{ x: index * 200, y: index % 2 === 0 ? 0 : 150 }}
          />
        ))}
        <AnimatedPath from="input" to="preprocessing" />
        <AnimatedPath from="preprocessing" to="model" />
        <AnimatedPath from="model" to="output" />
      </div>
    </div>
  );
}

export default Flow;
