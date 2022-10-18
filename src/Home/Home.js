import './Home.scss';
import React, { useState, useEffect } from 'react';
import Photo from '../Photo/Photo';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = ({ query }) => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        getPhotos(1, true);
    }, [query])

    const getPhotos = (page, newSearch) => {
        console.log(query, 'query');
        fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=DwNmIS2gLAqsacMm7jmfQdLqgLQEy3tTOBy_wu0gBUI`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(newSearch) {
                setPhotos([...data.results]);
            } else {
                setPhotos([...photos, ...data.results]);
            }
        })   
    }
    return (
        <div className="photos-container">
            <InfiniteScroll
                dataLength={photos.length}
                next={()=>{
                    console.log('get next');
                    getPhotos(page + 1, false);
                    setPage((page) => page + 1);
                }}
                hasMore
            >
                {
                    photos.map(photo => {
                        return (
                            <Photo key={photo.id} url={photo.urls.thumb} />
                        )
                    })
                }
            </InfiniteScroll>
            
        </div>
    )
}

export default Home;