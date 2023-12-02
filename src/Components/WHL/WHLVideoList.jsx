import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'
import { Link } from 'react-router-dom'
import '../../Pages/Library/Library.css';
import '../../Pages/Library/library2.css';

function WHLVideoList({page,videoList}) {
 return (
    <>
     {videoList.map(m=>{
        return(
<>
     <Link to={`/videopage/${m?._id}`}>
        <video
        src={`${m?.video_src}`}
        className='video_ShowVideo'
        />
        </Link>
        <div className='video_description'>
          <div className="Chanel_logo_App">
            <div className='fstChar_logo_App'>
<>{m?.Uploder?.charAt(0).toUpperCase()}</>
            </div>
          </div>
          <div className='video_details'>
            <p className='title_vid_ShowVideo'>title</p>
            <pre className='vid_view_UploadTime'>1-1-2001</pre>
            <pre className='vid_view_UploadTime'>
              5 views <div className="dot"> </div> video uploaded 1 year ago
            </pre>
          </div>
          </div> 


</>
        )
     })
     }
    </>
  )
}

export default WHLVideoList
