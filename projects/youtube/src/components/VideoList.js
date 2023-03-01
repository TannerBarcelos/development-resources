import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return (
    <div
      className='ui relaxed divided list scrollOnlyDefault'
      style={{ height: '80vh' }}
    >
      {videoList}
    </div>
  );
};

export default VideoList;
