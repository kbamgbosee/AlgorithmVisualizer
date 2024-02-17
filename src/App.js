import React, { useState } from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  const visualizeDijkstra = () => {
    // Implement the visualization of Dijkstra's Algorithm
    console.log("Visualizing Dijkstra's Algorithm");
  };

  const resetGrid = () => {
    // Implement the reset grid functionality
    console.log("Resetting Grid");
  };

  return (
    <div className="App">
      <div className="top-dashboard">
        <div className="algorithm-header">
          <h1>Pathfinding Visualizer</h1>
        </div>
      </div>
      <div className="legend">
        <LegendItem text="Wall Node" color="#576574" />
        <LegendItem text="Visited Node" color="#d1d8e0" />
        <LegendItem text="Start Node" color="#69db7c" />
        <LegendItem text="End Node" color="#ff6b6b" />
        <LegendItem text="Shortest Path Node" color="#62c2f9" />
      </div>
      <div className="instruction">
        Click and drag with your mouse over the map to start building walls!
      </div>
      <PathfindingVisualizer
        mouseIsPressed={mouseIsPressed}
        setMouseIsPressed={setMouseIsPressed}
        visualizeDijkstra={visualizeDijkstra}
        resetGrid={resetGrid}
      />
    </div>
  );
}

const LegendItem = ({ text, color }) => (
  <div className="legend-item">
    <div className="legend-color" style={{ backgroundColor: color }} />
    <span>{text}</span>
  </div>
);

export default App;


