import video1 from './videos/video1.mp4';
import { forwardRef,useImperativeHandle,useRef} from 'react';
function Video(props,ref){
    const videoRef = useRef();
    useImperativeHandle(ref,()=>({
        play(){
            videoRef.current.play();
        },
        pause(){
            videoRef.current.pause();
        }
    }))
        return (
        <video src={video1}
            width={280}
            ref={videoRef}
        />
    )
}
export default forwardRef(Video)