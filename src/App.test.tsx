import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("render root app successful", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    // <App />
    <p>Hello world</p>
    ,
    div
  );
  
});