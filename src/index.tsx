import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NoPage from "./NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <div className="max-w-screen px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <Routes>
            <Route path="/me" >
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
