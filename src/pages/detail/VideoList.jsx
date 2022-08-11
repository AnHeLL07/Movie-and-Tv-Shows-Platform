import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import './detail.scss';

const VideoList = props => {

    const {category} = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results.slice(0, 4));
        }
        getVideos();
    }, []);

    return (
        <>
            {
                videos[0] ? videos.map((item, i) => (
                    <Video key={i} item={item}/>
                )) : <h3>Doesn't exist</h3>
            }
        </>
    );
}

const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 1 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="130%"
                title="video"
                allow="fullscreen"
            ></iframe>
        </div>
    )
}

export default VideoList;
