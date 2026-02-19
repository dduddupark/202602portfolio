
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto min-h-screen bg-background relative overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
