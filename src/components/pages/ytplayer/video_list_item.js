import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    console.log(video);    
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
    <div onClick={() => onUserSelected(video)} className="list-group-item playlist-item zpy-14">
        <div className="video-list media row">
            <div className="media-left zpx-14 col-12 col-lg-5 mx-auto">
                <img className="media-object vidthumb-img" src={imageUrl} alt={video.snippet.title} />
            </div>
            <div className="media-body zpx-14 zpx-lg-0 zpt-14 zpt-lg-0 col-12 col-lg-7">
                <div className="media-heading"><strong>{video.snippet.title}</strong></div>
            </div>
        </div>
    </div>
    );
};

export default VideoListItem;