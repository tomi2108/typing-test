import { LetterStatus } from "types";
import "../styles/App.css";

interface Props {
  caracter: string;
  status: LetterStatus;
}


const Letter = ({ caracter,status } :Props ) => {

  return (
    <div className={`letter ${status}`}> {caracter} </div>
  );
};

export default Letter;