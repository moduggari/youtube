import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import FakeYoutube from '../api/fakeYoutube';

const Videos = () => {
    const {keyword} = useParams();
    const {isLoading, error, data:videos} = useQuery(['videos', keyword], () => {
        const youtube = new FakeYoutube();
        return youtube.search(keyword);
    });

    return (
        <>
            <div>Videos {keyword ? `${keyword}` : `Hot`}</div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong</p>}
            {videos && <ul>
                {videos.map((video) => <VideoCard  key={video.id} video={video} />)}    
            </ul>}
        </>  
    );
}

export default Videos