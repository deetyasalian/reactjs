import './Playbutton.css'
import {useState} from 'react';
function PlayButtonn({children,message,onPause,onPlay}){
    console.log('render PlayButton')
 const [playing,setPlaying]=useState(false);
    function handleClick(e){

        e.stopPropagation();

        if(playing) onPause()
        else onPlay();
   
        setPlaying(!playing);
    }
    
return(
    <button onClick={handleClick}>{children}:{playing?'⏸️':'⏯️'}</button>
)
}

export default PlayButtonn;