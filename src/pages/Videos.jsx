import React from 'react';
import {useParams} from 'react-router-dom';

const Videos = () => {
    const {keyword} = useParams();
    return (
        <div>
            Videos {keyword ? `${keyword}` : `Hot`}
        </div>
    );
}

export default Videos