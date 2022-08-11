import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
    termsandconditions: 'terms-and-conditions',
    privacypolicy: 'privacy-policy',
    recentrelease: 'recent-release',
    aboutus: 'about-us',
    person: 'person',
    authentication: 'authentication',
    account: 'account',
    authentication_account: 'authentication-account'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    latest: 'latest',
    now_playing: 'now_playing'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

export const personType = {
    popular: 'popular',
    latest: 'latest'
}

const tmdbApi = {
    getAuthenticationToken: (params) => {
        const url = 'authentication/token/new';
        return axiosClient.get(url, params);
    },
    postAuthenticationToken: () => {
        const url = '/authentication/token/validate_with_login';
        return axiosClient.post(url, {
            username: 'AnHeLL07',
            password: 'Judokanus1.',
            request_token: '9f1616a210c25ae3f62229dbd44fc04360f6c9cb'
          });
    },
    getAccount: (params) => {
        const url = 'account';
        return axiosClient.get(url, params);
    },
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getCast: (type, params) => {
        const url = 'person/' + personType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    movieCredits: (cate, id) => {
        const url = category[cate] + '/' + id + '/movie_credits';
        return axiosClient.get(url, {params: {}});
    },
    tvCredits: (cate, id) => {
        const url = category[cate] + '/' + id + '/tv_credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    }
}

export default tmdbApi;