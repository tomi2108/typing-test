import React, { useEffect, useState } from "react";
import { Counter } from "types";
import Word from "./components/Word";
import "./styles/App.css";

const AppContext = React.createContext({});

const  App = () => {

  const [written,setWritten] = useState<string>("");
  const [words,setWords] = useState<string>("");
  const [currentLetter,setCurrentLetter] = useState<Counter>({ index:0,value:"" });
  const [currentWord,setCurrentWord] = useState<Counter>({ index:0,value:"" });
  const context = { written,words };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length === 0 ){
      setCurrentWord({ index:0,value:"" });
      setCurrentLetter({ index:0,value:"" });
    }
    const writtenArrayLetters = e.target.value.split("");
    const writtenArrayWords = e.target.value.split(" ");
    const numberOfWords = writtenArrayWords.length -1;
    const currentWord = writtenArrayWords[numberOfWords];
    const numberOfLetters = currentWord.length-1;
    const currentLetter = currentWord[numberOfLetters];

    if(writtenArrayLetters[writtenArrayLetters.length -1] === " ") setCurrentWord({ index : numberOfWords,value:currentWord });
    setCurrentLetter({ index: numberOfLetters, value: currentLetter });
    setWritten(e.target.value);
  };


  useEffect(() => {
    setWords("hola mundo react typescript javascript typescript algo algo mas lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua hola mundo react typescript javascript typescript algo algo mas lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua hola mundo react typescript javascript typescript algo algo mas lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua hola mundo react typescript javascript typescript algo algo mas lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");
  }, []);


  const handleBlur = (e : React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTimeout(() => e.target.focus());
  };

  return (
    <AppContext.Provider value={context}>
      <div className="App">
        {
          words.split(" ").map((word,index) => {
            let isFocused = false;

            if(index === currentWord.index){
              isFocused = true;
            }

            return <Word currentLetter={currentLetter} focusedWord={isFocused} key={index} word={word} />;
          })
        }
        <input id="input" autoFocus type="text" onChange={handleChange} onBlur={handleBlur} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
