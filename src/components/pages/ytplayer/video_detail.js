import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;

    if(!video) {
        return <div>loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;

    return (
        <div className="video-detail col-12 col-md-8 zp-14 zpx-24">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="ytiframe" className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details zpy-20">
                <h4 className="detail-title">{video.snippet.title}</h4>
                <div className="detail-desc">{video.snippet.description}</div>
            </div>
        </div>
    );

}

export default VideoDetail;