import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import './recent-release.scss';
import MovieCard from '../movie-card/MovieCard';
import Button, { OutlineButton } from '../button/Button';
import Input from '../input/Input'

const RecentRelease = props => {
    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search('movie', {params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, ['movie', keyword]);

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search('movie', {params});
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className="section mb-3 delay">
                <MovieSearch category={'movie'} keyword={keyword}/>
            </div>
            <div className="movie-grid delay">
                {
                    items.map((item, i) => <MovieCard category={'movie'} item={item} key={i}/>)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    );
}

const MovieSearch = props => {

    const history = useHistory();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history.push(`/${category['movie']}/search/${keyword}`);
            }
        },
        [keyword, 'movie', history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="movie-search delay">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={goToSearch}>Search</Button>
        </div>
    )
};

export default RecentRelease;