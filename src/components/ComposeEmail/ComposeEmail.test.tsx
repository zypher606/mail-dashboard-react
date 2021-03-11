import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { isTSAnyKeyword } from '@babel/types';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import { v4 as uuidv4 } from 'uuid';
import { ComposeEmail } from '..';

afterEach(() => {
  // cleanup on exiting
  cleanup();
});

describe("ComposeEmail component tests", () => {
  it("rendered successful", () => {
    const div = document.createElement("div");
    render(
      <ComposeEmail 
        open={true}
        from="ashim@gmail.com"
        to="xyz@gmail.com"
        cc="newemail@gmail.com"
        subject="My subject"
        isReply={true}
        handleClose={() => {}}
      />
    );
  });
  
  it('renders with props correctly', () => {
    
    const { getByTestId } = render(
      <ComposeEmail 
        open={true}
        from="ashim@gmail.com"
        to="xyz@gmail.com"
        cc="newemail@gmail.com"
        subject="My subject"
        isReply={true}
        handleClose={() => {}}
      />
    );
    expect(getByTestId("email-isReply")).toHaveTextContent("Reply");
    // expect(getByTestId("email-to")).toHaveTextContent("xyz@gmail.com");
    // expect(getByTestId("email-subject")).toHaveTextContent("My subject");
  });
  
});