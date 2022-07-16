import './App.css';
import NotFound from './components/NotFound';
import React, { Suspense } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from './components/Header';
import HomePage from './features/Photo/pages/HomePage';
import AddEdit from './features/Photo/pages/AddEdit';


// Lazy load
const Photo = React.lazy(() => import('./features/Photo'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loadding ...</div>}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/photos" element={<HomePage />} />
            <Route exact path="/photos/add" element={<AddEdit />}/>
            <Route element={<NotFound />} />
          </Routes>

        </Router>
      </Suspense>
    </div>
  );
}

export default App;
