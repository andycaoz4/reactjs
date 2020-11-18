import React from 'react';
import VideoListItem from './video_list_item';
import Stagger from 'react-css-stagger';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onUserSelected={props.onVideoSelect} 
                key={video.etag}
                video={video} />
        );
    });

    return (
        <Stagger transition="fadeIn" delay={200} className="col-12 col-md-4 zpx-0 zpl-md-24 list-group">
            {videoItems}
        </Stagger>
    );
}

export default VideoList;