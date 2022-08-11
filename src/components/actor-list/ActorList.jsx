import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './actor-list.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import tmdbApi, { category } from '../../api/tmdbApi';
import ActorCard from '../actor-card/ActorCard';

const ActorList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};
            if (props.type !== 'movieCredits' && props.type !== 'tvCredits') {
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    case category.person:
                        response = await tmdbApi.getCast(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            } else if (props.type === 'movieCredits') {
                response = await tmdbApi.movieCredits(props.category, props.id);
            } else {
                response = await tmdbApi.tvCredits(props.category, props.id);
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
                        
                        items[0] ? items?.map((item, i) => (
                            <SwiperSlide key={i}>
                                <ActorCard item={item} category={props.category}/>
                            </SwiperSlide>
                        )) : <h3>Doesn't exist</h3>
                        
                    }
                </Swiper>
            </div>
        </>
    );
}

ActorList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default ActorList;
