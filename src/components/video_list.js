import React from 'react';
import ListItem from './list_item';

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return (
            <ListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}/>
        );
    });

    return (

            <div className="row">
                <ul className="list-group-flush col-12">
                    {videoItems}
                </ul>
            </div>
    );
}


export default VideoList;