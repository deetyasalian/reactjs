import Video from './Video';
import PlayButtonn from './PlayButtonn';

function VideoList({videos}){
    return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
            >
              <PlayButtonn
                onPlay={() => console.log("playying..",video.title)}
                onPause={() => console.log("paused..",video.title)}
              >
                {video.title}
              </PlayButtonn>
            </Video>
          ))}
          </>
    )
}

export default VideoList;