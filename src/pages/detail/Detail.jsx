import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import "./detail.scss";
import VideoList from "./VideoList";
import MovieList from "../../components/movie-list/MovieList";
import moment from "moment";
import banner from "../../assets/cast.jpg";
import ActorList from "../../components/actor-list/ActorList";
import MovieTVActorList from "../../components/movie-tv-actor-list/MovieTVActorList";

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      <div className="delay">
        {item && (
          <>
            {!item.biography && !item.known_for_department ? (
              <>
                <div
                  className="banner"
                  style={{
                    backgroundImage: `url(${apiConfig.originalImage(
                      item.backdrop_path || item.poster_path
                    )})`,
                  }}
                ></div>
                <div className="mb-3 movie-content container">
                  <div className="movie-content__poster">
                    <div
                      className="movie-content__poster__img"
                      style={{
                        backgroundImage: `url(${apiConfig.originalImage(
                          item.poster_path || item.backdrop_path
                        )})`,
                      }}
                    ></div>
                  </div>
                  <div className="movie-content__info">
                    <h1 className="title">{item.title || item.name}</h1>
                    <div>
                      <div className="genres">
                        {item.genres &&
                          item.genres.slice(0, 4).map((genre, i) => (
                            <span key={i} className="genres__item">
                              {genre.name}
                            </span>
                          ))}
                      </div>
                      <div className="table">
                        <h3>
                          Raiting:{" "}
                          {item.vote_average !== 0
                            ? item.vote_average.toFixed(1) + " / 10 "
                            : "Unknown"}
                        </h3>
                        <h3>
                          Release Date:{" "}
                          {item.release_date !== ""
                            ? moment(item?.release_date).format("D MMMM YYYY")
                            : " Unknown"}
                        </h3>
                        <h3>{"Status: " + item.status}</h3>
                      </div>
                      <div className="table">
                        <h3>
                          Original Language:{" "}
                          {item.spoken_languages[0]?.english_name
                            ? item.spoken_languages[0]?.english_name
                            : " Unknown"}
                        </h3>
                        <h3>
                          Budget:{" "}
                          {item?.budget
                            ? item.budget.toLocaleString("en-US") + " $"
                            : "Unknown"}
                        </h3>
                        <h3>
                          Revenue:{" "}
                          {item?.revenue
                            ? item.revenue.toLocaleString("en-US") + " $"
                            : "Unknown"}
                        </h3>
                      </div>
                      <div>
                        <h3>
                          Time
                          {item?.runtime
                            ? ": " +
                              Math.floor(item.runtime / 60) +
                              "h " +
                              (item.runtime % 60) +
                              "m"
                            : item?.episode_run_time
                            ? " episode: " + item?.episode_run_time + "m"
                            : ": Unknown"}
                        </h3>
                      </div>
                    </div>
                    <div className="subtitle">
                      <h3>Overview</h3>
                      {item.overview}
                    </div>
                    <div className="section__header">
                      <h3>Productions Companies</h3>
                    </div>
                    <div className="genres">
                      {item.production_companies.length !== 0 ? (
                        item.production_companies &&
                        item.production_companies
                          .slice(0, 4)
                          .map((production, i) => (
                            <span key={i} className="genres__item">
                              {production.name}
                            </span>
                          ))
                      ) : (
                        <h3>Unknown</h3>
                      )}
                    </div>
                    <div className="cast">
                      <div className="section__header">
                        <h3>Actors</h3>
                      </div>
                      <MovieTVActorList
                        category={category}
                        type="popular"
                        id={item.id}
                      />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="section mb-3">
                    <div className="section__header mb-2">
                      <h3>Media</h3>
                    </div>
                    <div className="table">
                      <VideoList id={item.id} />
                    </div>
                  </div>
                  <div className="section mb-3">
                    <div className="section__header mb-2">
                      <h3>Similar</h3>
                    </div>
                    <MovieList
                      category={category}
                      type="similar"
                      id={item.id}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="banner"
                  style={{ backgroundImage: `url(${banner})` }}
                ></div>
                <div className="mb-3 movie-content container">
                  <div className="movie-content__poster">
                    <div
                      className="movie-content__poster__img"
                      style={{
                        backgroundImage: `url(${apiConfig.originalImage(
                          item.profile_path
                        )})`,
                      }}
                    ></div>
                  </div>
                  <div className="movie-content__info">
                    <h1 className="title">{item.title || item.name}</h1>
                    <div className="subtitle">
                      <h3>Gender: {item.gender === 1 ? 'Female' : 'Male'}</h3>
                      <h3>Birthplace: {item.place_of_birth}</h3>
                      <h3>
                        Birthday: {moment(item.birthday).format("D MMMM YYYY")}
                      </h3>
                      <h3>Known for: {item.known_for_department}</h3>
                    </div>
                    <div className="subtitle">
                      <h3>Biography</h3>
                      {item?.biography ? item?.biography : 'We dont have a biography for ' + item.name}
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="section mb-3">
                    <div className="section__header mb-2">
                      <h3>Known for movies</h3>
                    </div>
                    <ActorList
                      category={category}
                      type="movieCredits"
                      id={item.id}
                    />
                  </div>
                  <div className="section mb-3">
                    <div className="section__header mb-2">
                      <h3>Known for tv</h3>
                    </div>
                    <ActorList
                      category={category}
                      type="tvCredits"
                      id={item.id}
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Detail;
