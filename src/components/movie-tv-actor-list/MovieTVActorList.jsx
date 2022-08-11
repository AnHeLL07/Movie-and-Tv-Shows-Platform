import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide, Swiper } from 'swiper/react';
import tmdbApi from '../../api/tmdbApi';
import MovieTvActorCard from '../movie-tv-actor-card/MovieTvActorCard';

const MovieTVActorList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};
            if (props.type !== 'popular') {
                response = await tmdbApi.getCast(props.type, {params});
            } else {
                response = await tmdbApi.credits(props.category, props.id);
            }
            setItems(response.cast);
        }
        getList();
    }, []);

    return (
        <>
            <div className="movie-list">
                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                >
                    {
                        items?.map((item, i) => (
                            <SwiperSlide key={i}>
                                <MovieTvActorCard item={item} category={props.category}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
}

MovieTVActorList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieTVActorList;
