import React, { useState, useEffect } from 'react';
import Word from './word';

function Typing() {
  const data = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet nam animi provident voluptatibus porro accusamus similique doloribus obcaecati architecto corporis odio sapiente, ipsam quae, cumque tempora deleniti mollitia molestiae.".split(" ");
  const [text, setText] = useState(data);

  const [timeRemaining, setTimeRemaining] = useState(null);

  const [lettersTyped, setLettersTyped] = useState(0);

  const [input, setInput] = useState('');
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const [correctWordsArray, setCorrectWords] = useState([]);




  const handleInputFocus = () => {
    if (timeRemaining === null) {
      setTimeRemaining(6); // Start the timer with 60 seconds when input is focused
    }
  };

  useEffect(() => {
   let timer;
    if (timeRemaining !== null && timeRemaining > 0) {
     timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else {
      // Timer has reached 0
      // You can perform any actions needed when time ends
      return () => clearTimeout(timer);
    }

    
  }, [timeRemaining]);
  const handleInput = (e) => {
    const value = e.target.value;
    setLettersTyped(prev => prev + 1); // Increment the count of letters typed

    if (value.endsWith(" ")) {
      const word = value.trim();

      if (input === text[currentTextIndex]) {
        setCorrectWords(prev => [...prev, true]);
      } else {
        setCorrectWords(prev => [...prev, false]);
      }

      setCurrentTextIndex(prev => prev + 1);
      setInput("");
    } else {
      setInput(value);
    }
  };

  return (
    <div>
      <div className='bg-gray-500 text-black max-w-5xl m-auto rounded-lg px-4 text-center py-5'>
        {text.map((word, index) => {
          return <Word key={index} word={word} active={index === currentTextIndex} correct={correctWordsArray[index]} />;
        })}<br/><br/><br/>
         <div className='text-center bg-gray-600 py-3'>
         <div className=''>
         {timeRemaining !== null ? `${timeRemaining} seconds` : "Start typing to begin the timer"}
        </div>
        <div  >Letters typed in one minute: {lettersTyped}</div>
        </div>

        <input
          value={input}
          onChange={(e) => handleInput(e)}
          onFocus={handleInputFocus}
          disabled={timeRemaining === 0} // Disable input when time ends
          className='max-w-lg mt-20 px-16 py-4 text-black m-auto block rounded-lg'
          type="text"
          name=""
          id=""
        />
        
      </div>
    </div>
  );
}

export default Typing;
