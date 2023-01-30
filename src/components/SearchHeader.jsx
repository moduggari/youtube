import React, {useState, useEffect} from 'react';
import {BsYoutube, BsSearch} from 'react-icons/bs';
import {useNavigate, Link, useParams} from 'react-router-dom';

const SearchHeader = () => {
    const {keyword} = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    }
    useEffect(()=>setText(keyword || ''), [keyword])
    return (
        <header className='w-full flex p-4 text-2xl border-b border-zinc-600'>
            <Link to='/'>
                <BsYoutube />
                <h1>Youtube</h1>
            </Link>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search...' value={text} onChange={(e)=>setText(e.target.value)} />
                <button>
                    <BsSearch />
                </button>
            </form>
        </header>
    );
}

export default SearchHeader