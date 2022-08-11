import React from 'react';
import './actor-card.scss';
import Button from '../button/Button';
import apiConfig from '../../api/apiConfig';

const ActorCard = props => {

    const item  = props.item;
    let link;
    if(item.origin_country) {
        link = '/tv/' + item.id;
    } else {
        link = '/movie/' + item.id;
    }

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path || item.profile_path);

    return (
        <a href = {link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </a>
    );
}

export default ActorCard;
