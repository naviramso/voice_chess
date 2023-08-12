import { useState,useEffect} from "react";
import { BsMic } from "react-icons/bs";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./styles.css";

const Footer = ({setMove}) => {
  const { resetTranscript,transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [mov2,setMov2]=useState({letra:"",Num:""});
  const [mov1,setMov1]=useState({letra:"",Num:""});

  const [comando2,setComando2]=useState(false)
  const [comando,setComando]=useState(false)
  const [mic, setMic] = useState(false);
  const [texto,setTexto]=useState("");
  
  const asignacionLetra=(comd)=>{
    let transcript1 = transcript.toLowerCase();
    if(transcript1.includes("a")){
      comd.letra="a"
    }
    if(transcript1.includes("b") || transcript.includes("v")){
      comd.letra="b"
    }
    if(transcript1.includes("c")){
      comd.letra="c"
    }
    if(transcript1.includes("d")){
      comd.letra="d"
    }
    else{
      if(transcript1.includes("e")){
        comd.letra="e"
      }
    }
    if(transcript1.includes("f")){
      comd.letra="f"
    }
    if(transcript1.includes("g")){
      comd.letra="g"
    }
    if(transcript1.includes("h")){
      comd.letra="h"
    }
  }

  const asignacionNum=(comd)=>{
    let transcript1 = transcript.toLowerCase();
    if(transcript1.includes("1")|| transcript1.includes("uno")){
      comd.Num="1"
    }
    if(transcript1.includes("2") || transcript1.includes("dos")){
      comd.Num="2"
    }
    if(transcript1.includes("3") || transcript1.includes("tres")){
      comd.Num="3"
    }
    if(transcript1.includes("4") || transcript1.includes("cuatro")){
      comd.Num="4"
    }
    if(transcript1.includes("5") || transcript1.includes("cinco")){
      comd.Num="5"
    }
    if(transcript1.includes("6") || transcript1.includes("seis")){
      comd.Num="6"
    }
    if(transcript1.includes("7") || transcript1.includes("siete")){
      comd.Num="7"
    }
    if(transcript1.includes("8") || transcript1.includes("ocho")){
      comd.Num="8"
    }
  }


  useEffect(()=>{
    if(comando){
      if(mov1.letra=="")
      asignacionLetra(mov1)
      asignacionNum(mov1)
      if(mov1.Num!="")
      {
      resetTranscript()
      setComando2(true)
      setComando(false)
      }   
    }

    if(comando2){
      if(mov2.letra=="")
        asignacionLetra(mov2)
        asignacionNum(mov2)
      if(mov2.Num!=""){
        resetTranscript()
        setComando2(false)
        let c1=mov1.letra+mov1.Num;
        let c2=mov2.letra+mov2.Num;
        setMove({from:c1, to:c2, promotion:"q"});
        mov1.Num=""
        mov2.Num=""
        mov1.letra=""
        mov2.letra=""
        console.log(c1+c2)
      }
    }

    if(transcript.includes("mover")){
      console.log("esto si funciona 1111111")
      resetTranscript();
      setComando(true)
    }

      console.log(transcript)
      console.log(mov2)
      console.log(mov1)

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
          className={mic ? "button-mic active" : "button-mic"}
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
