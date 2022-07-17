import './App.css';
import NotFound from './components/NotFound';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from './features/Photo/pages/HomePage';
import React, { Suspense } from "react";

// Lazy load
const Photo = React.lazy(() => import('./features/Photo'));
// test

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loadding ...</div>}>
        <Router>
          <Header />
          <HomePage />
          <Routes>
            {/* <Route path="/" element={<Header />}></Route>
            <Route path='*' component={<NotFound />}></Route> */}
            {/* <Route path='/' element={<Photo />}>

            </Route> */}
          </Routes>

        </Router>
      </Suspense>
    </div>
  );
}

export default App;
