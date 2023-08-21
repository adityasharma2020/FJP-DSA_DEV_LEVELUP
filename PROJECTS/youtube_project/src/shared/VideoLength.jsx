import React from 'react'
import moment from 'moment'
const VideoLength = () => {
  const min = 3600
  const max = 4800

  const time = Math.floor(Math.random() * (max - min + 1)) + min
  const videoLengthInSeconds = moment()
    .startOf('day')
    .seconds(time)
    .format('H:mm:ss')
  return (
    <div className='absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md'>
      {videoLengthInSeconds}
    </div>
  )
}

export default VideoLength
