import React, { useState, useEffect } from 'react';
import Option from './Components/Options';
import Output from './Components/Output';
import './App.css';

const App = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState('p');
  const [inputValue, setInputValue] = useState(1);
  const [includeHTML, setIncludeHTML] = useState("Yes");

  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;
    fetch(url).then(res => res.json()).then((data) => setParagraphs(data));
  }, [inputValue]);

  return (
    <div className="App">F
      <div className='container'>
        <div className='title'>
          <h1>Lorem Ipsum Text Generator</h1>
        </div>
        <Option
          paragraphs={paragraphs}
          includeHTML={includeHTML}
          inputValue={inputValue}
          tag={tag}
          setIncludeHTML={setIncludeHTML}
          setInputValue={setInputValue}
          setTag={setTag}
        />
        <Output 
          paragraphs={paragraphs}
          tag={tag}
          includeHTML={includeHTML}
        />
      </div>
    </div>
  )
}

export default App;