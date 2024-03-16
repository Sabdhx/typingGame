import React, { useState } from 'react';
import { data } from './array';

function Accordion() {
  const [first, setFirst] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  function handleOneClick(parameter) {
    console.log(parameter);
    setFirst(parameter === first ? null : parameter);
  }

  function multiSelectionEnabler(parameter) {
    let cpyMultiple = [...multiSelection];
    const findIndexofCurrentId = cpyMultiple.indexOf(parameter);
    if (findIndexofCurrentId === -1) {
      cpyMultiple.push(parameter);
    } else {
      cpyMultiple.splice(findIndexofCurrentId, 1);
    }
    setMultiSelection(cpyMultiple);
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden">
      {data.map((word) => (
        <div className="border-b border-gray-200" key={word.id}>
          <div className="px-4 py-3 flex justify-between items-center">
            <h1
              className="text-lg font-semibold cursor-pointer"
              onClick={
                enableMultiSelection
                  ? () => handleOneClick(word.id)
                  : () => multiSelectionEnabler(word.id)
              }
            >
              {word.question}
            </h1>
            <span className="px-3 py-1 bg-gray-200 rounded-md cursor-pointer">
              +
            </span>
          </div>
          {(enableMultiSelection
            ? multiSelection.includes(word.id)
            : first === word.id) && (
            <div className="px-4 py-3 bg-gray-50">{word.answers}</div>
          )}
        </div>
      ))}
      <button
        className="block w-full bg-gray-300 text-white py-2 rounded-b-md hover:bg-gray-400 focus:outline-none"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection ? 'Disable Multi-Selection' : 'Enable Multi-Selection'}
      </button>
    </div>
  );
}

export default Accordion;
