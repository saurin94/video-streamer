import React from 'react';

const VideoDetails = ({video}) => {

    if (!video) {
        return <div>Loading......</div>
    }
    const vId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${vId}`;

    return (
            <div className="row">
                <div className="video-detail float-center">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src={url} frameborder="0" className="embed-responsive-item">
                        </iframe>
                    </div>

                    <div className="details">
                        <div className="text-left">{video.snippet.title}</div>
                        <div className="text-left">{video.snippet.description}</div>
                    </div>
                </div>
            </div>
    )
};

export default VideoDetails;