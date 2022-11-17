// TODO: check documentation: https://github.com/testing-library/jest-dom/

import { render, screen, fireEvent, logRoles } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

describe('Testing components on Component <App />', () => { 
  test('renders learn react link', () => {
    // throw new Error ('test fails');
    
    // render(<App />);
    // // Some unique text on the page
    // const linkElementText = screen.getByText(/learn react/i);
    // expect(linkElementText).toBeInTheDocument();
  
    // // tag <a>
    // const linkElement = screen.getByRole('link', { name: /learn react/i });
    // expect(linkElement).toBeInTheDocument();
    
  });

  test('button has correct initial color', () => { 
    // const { container } = render(<App />);
    // logRoles(container);

    render(<App />);

    // find an element with a role of button and text 'Change to blue'
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
    // screen.debug();
  });

  test('button turns blue when clicked', () => { 
    render(<App />);

    // expect the background color to be red
    const colorButton = screen.getByRole('button', { name: /change to blue/i });

    // click button
    fireEvent.click(colorButton)

    // expect the backgroundcolor to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

    // expect the button text to be 'Change to red'
    expect(colorButton).toHaveTextContent('Change to red');
  });

  test('initial conditions', () => { 
    render(<App />);

    // check that the button starts out enabled
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toBeEnabled();

    // check that the checkbox starts out unchecked
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).not.toBeChecked();
   });

   test('Checkbox disables button on first click and enables on second click', () => { 
    render(<App />);

    const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
    const colorButton = screen.getByRole('button', { name: 'Change to blue'});

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
    
    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
   });

   test('Disables button has gray background and reverts to red', () => { 
    render(<App />);

    const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
    const colorButton = screen.getByRole('button', { name: 'Change to blue'});

    // disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: gray');

    // re-enable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: red');
   });

   test('Clicked disabled button has gray background and reverts to blue', () => { 
    render(<App />);

    const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
    const colorButton = screen.getByRole('button', { name: 'Change to blue'});

    // change background button to blue
    fireEvent.click(colorButton);

    // disable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: gray');

    // re-enable button
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle('background-color: blue');
   });

});


describe('Spaces before camel-case capital letters', () => { 
  test('Works for no inner capital letters', () => { 
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => { 
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => { 
    expect(replaceCamelWithSpaces('RedGreenBlue')).toBe('Red Green Blue');
  });
 });