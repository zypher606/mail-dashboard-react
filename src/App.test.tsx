import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

it("render root app successful", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <App />
    ,
    div
  );
  
});