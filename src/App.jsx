import {useState,useEffect, useRef}from 'react';

import './index.css';

import { MessageTypes } from './utils/presets.js';
import Header from './components/Header.jsx';
import Homepage from './components/Homepage.jsx';
import Displayaudio from './components/Displayaudio.jsx';
import Information from './components/Information.jsx';
import TranSribing from './components/TranSribing.jsx';
import { set } from 'mongoose';
function App() {

  const [file,setfile]=useState(null);
  const[audio,setaudio]=useState(null)
  
  const [loading,setloading]=useState(false)
  const isaudiofile =file||audio
const [finished,setfinished]=useState(false)
const[downloading,setdownloading]=useState(false)
 
const[ output,setoutput]=useState(false)
  const worker=useRef(null)
  function reset(){
    setfile(null)
    setaudio(null);
  }

  async function handlesubmission(){
  
if(!file && !audio) return ;
let audiofile=await readAudioFrom(file?file:audio)
const model='openai/whisper-tiny.en';
worker.current.postMessage({
  type: MessageTypes.INFERENCE_REQUEST,
  audiofile,
  model
})


  }
  async function readAudioFrom(file){
    const sampling_rate=1600;
    const AudioContext=new AudioContext({samplerate:rate})
    const response=await file.arrayBuffer()
    const decoded=await AudioContext.decodedAudioData(response)
    const audiorecorded=decoded.getChannelData(0);
    return audiorecorded;
  }

   useEffect(()=>{
    if(!worker.current){
      worker.current=new Worker(new URL('./utils/wishper.worker.js',import.meta.url),{
        type:'module'
      })
    }
    const onMessageRecieved=   async(e)=>{
      switch(e.data.type){
        case 'DOWNLOADING':
          setdownloading(true)
          console.log("donwloading")
          break;
          case 'LOADING':
            setloading(true)
            console.log("donwloading")
            break;
          case 'RESULT':
             setoutput(e.data.results)
              console.log("donwloading")
              break;
          case 'INFERENCE_DONE':
               setfinished(true)
                console.log("donwloading")
                break;
      }
    }
    worker.current.addEventListener('message',onMessageRecieved)
    return ()=>{
      worker.current.removeEventListener('message',onMessageRecieved)
    }
   },[])
 
  return (


    <div className='flex flex-col '>
      <section className="min-h-screen flex flex-col max-w-[1000px] mx-auto w-full ">
        <Header></Header>
        { output? <Information></Information>:loading?<TranSribing></TranSribing>:isaudiofile? (<Displayaudio  reset={reset} file={file} audio={audio}/>):(<Homepage setfile={setfile} setaudio={setaudio}/>)}
       

        
      
      </section>
      <h1 className="text-green-400">
        hello 
      </h1>
<footer>

</footer>
    </div>
  );
}

export default App;
