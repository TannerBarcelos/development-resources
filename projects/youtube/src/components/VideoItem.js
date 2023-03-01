import React from 'react';
import '../static/styles/VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  const title = video.snippet.title;
  const thumbnail = video.snippet.thumbnails.medium.url;

  return (
    <div
      className='video-item item'
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img src={thumbnail} className='ui image' alt={title} />
      <div className='content'>
        <div className='header'>{title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
