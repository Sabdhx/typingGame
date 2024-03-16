import React, { useState } from 'react';
import Word from './word';



function Typing() {
  const data = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet nam animi provident voluptatibus porro accusamus similique doloribus obcaecati architecto corporis odio sapiente, ipsam quae, cumque tempora deleniti mollitia molestiae.".split(" ");
  const [text, setText] = useState(data);

  const [input, setInput] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [correctWordsArray, setCorrectWords] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;

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
      <div className='bg-gray-500 text-black max-w-4xl m-auto'>
        {text.map((word, index) => {
          return <Word key={index} word={word} active={index === currentTextIndex} correct={correctWordsArray[index]} />;
        })}

        <input
          value={input}
          onChange={(e) => handleInput(e)}
          className='max-w-lg mt-20 px-16 py-4 text-black m-auto block'
          type="text"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default Typing;
