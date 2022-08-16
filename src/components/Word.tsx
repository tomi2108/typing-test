import "../styles/App.css";
import { Counter, LetterStatus } from "../types";
import Letter from "./Letter";


interface Props{
  word: string;
  currentLetter: Counter;
  focusedWord: boolean;
  key:number
}


const Word = ({ word,currentLetter,focusedWord }:Props) => {
  return (
    <div className="word">
      {word && word.split("").map((letter,index) => {
        let status = LetterStatus.PENDING;
        if(focusedWord && index === currentLetter.index){
          if(letter === currentLetter.value){
            status = LetterStatus.COMPLETED;
          }
        }

        return <Letter key={index} caracter={letter} status={status} />;
      }
      )}
    </div>
  );
};

export default Word;