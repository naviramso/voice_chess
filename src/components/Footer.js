import { useState,useEffect} from "react";
import { BsMic } from "react-icons/bs";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./styles.css";

const Footer = () => {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [mic, setMic] = useState(false);
  const [texto,setTexto]=useState("");
  useEffect(()=>{
      console.log(transcript)
      console.log(transcript=="")
    },[transcript])

  useEffect(()=>{
    if(mic){
        SpeechRecognition.startListening({ continuous: true, language: 'es-ES' })
    }
    else{
        SpeechRecognition.stopListening()
    }
    },[mic])

  return (
    <div className="footer-container">
      <div className="footer">
        <button
          type="button"
          className="button-mic"
          onClick={() => {
            setMic(!mic);
          }}
        >
          <BsMic />
        </button>
      </div>
    </div>
  );
};

export default Footer;
