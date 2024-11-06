import './Video.css';

function Video({title,id,channel="Coder dost",views, time,verified,children}){
    console.log('render video')
return (
<>
<div className="container">
<div className="pic">
    <img src={`https://picsum.photos/id/${id}/160/90`} alt="xyz"/>
    </div>
   <div className="title">{title} tutorial-Components</div>
   {verified?<div className="channel">{channel}✅</div>:<div className="channel">{channel}</div>}
   <div className="views">
    {views} views <span>.</span>{time}
    </div>
    <div>
        {children}
    </div>
    </div>
</>
)
}


export  default Video;