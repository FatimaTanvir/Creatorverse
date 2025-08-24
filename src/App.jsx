import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/creator/new" element={<AddCreator />} />
          <Route path="/creator/:id" element={<ViewCreator />} />
          <Route path="/creator/:id/edit" element={<EditCreator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
