import './Home.scss';
import React, { useState, useEffect } from 'react';
import Photo from '../Photo/Photo';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = ({ query }) => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [params, setParams] = useState({});

    useEffect(() => {
        getPhotos(1, true);
    }, [query, params.color, params.orientation])

    const getPhotos = (page, newSearch) => {
        const colorParam = params.color ? `&color=${params.color}` : ''
        const orientationParam = params.orientation ? `&orientation=${params.orientation}` : ''
        fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${query}${colorParam}${orientationParam}&client_id=DwNmIS2gLAqsacMm7jmfQdLqgLQEy3tTOBy_wu0gBUI`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (!newSearch) {
                    setPhotos([...photos, ...data.results]);
                } else {
                    setPhotos([...data.results]);
                }
            })
    }

    return (
        <div className="home-container">
            <div className="select-container">
                <select
                    type="radio"
                    value={params.color}
                    onChange={(e) => setParams({ ...params, color: e.target.value })}
                    className="select"
                    defaultValue
                >
                    <option disabled value>- color -</option>
                    <option value="black">black</option>
                    <option value="white">white</option>
                </select>
                <select
                    type="radio"
                    value={params.orientation}
                    onChange={(e) => setParams({ ...params, orientation: e.target.value })}
                    className="select"
                    defaultValue
                >
                    <option disabled value>- orientation -</option>
                    <option value="landscape">landscape</option>
                    <option value="portrait">portrait</option>
                    <option value="squarish">squarish</option>
                </select>
            </div>
            <InfiniteScroll
                dataLength={photos.length}
                next={() => {
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