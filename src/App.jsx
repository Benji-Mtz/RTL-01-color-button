import { useState } from 'react';
import Checkbox from './components/Checkbox';
import ColorButton from './components/ColorButton';

export function replaceCamelWithSpaces( colorName ) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [disabled, setdisabled] = useState(false);

  return (
    <>
      <ColorButton 
        disabled={disabled}
      />
      <Checkbox 
        id="enable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setdisabled(e.target.checked)}
      />
    </>
  );
}

export default App;
