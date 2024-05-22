import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-container">
      <h2>Melvin Piolo's Calculator</h2>
      <form name="calculate">
        <table align="center">
          <thead>
            <tr>
              <th colSpan="4">
                <h1>Calculator</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">
                <input
                  type="text"
                  name="result"
                  value={input}
                  placeholder="0"
                  maxLength="10"
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td><button type="button" onClick={() => handleClick('C')}>C</button></td>
              <td><button type="button" onClick={() => handleClick('DEL')}>DEL</button></td>
              <td><button type="button" onClick={() => handleClick('%')}>%</button></td>
              <td><button type="button" onClick={() => handleClick('/')}>/</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={() => handleClick('7')}>7</button></td>
              <td><button type="button" onClick={() => handleClick('8')}>8</button></td>
              <td><button type="button" onClick={() => handleClick('9')}>9</button></td>
              <td><button type="button" onClick={() => handleClick('+')}>+</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={() => handleClick('4')}>4</button></td>
              <td><button type="button" onClick={() => handleClick('5')}>5</button></td>
              <td><button type="button" onClick={() => handleClick('6')}>6</button></td>
              <td><button type="button" onClick={() => handleClick('-')}>-</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={() => handleClick('1')}>1</button></td>
              <td><button type="button" onClick={() => handleClick('2')}>2</button></td>
              <td><button type="button" onClick={() => handleClick('3')}>3</button></td>
              <td><button type="button" onClick={() => handleClick('*')}>*</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={() => handleClick('.')}>.</button></td>
              <td><button type="button" onClick={() => handleClick('0')}>0</button></td>
              <td colSpan="2"><button type="button" onClick={() => handleClick('=')}>=</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;