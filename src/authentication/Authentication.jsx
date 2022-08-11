import React, { useEffect, useState } from "react";
import tmdbApi from "../api/tmdbApi";
import './authentication.scss';

const Authentication = () => {

    const [item, setItems] = useState([]);

    useEffect(() => {
        const getAuthenticationToken = async () => {
            let response = null;
            const params = {};
            response = await tmdbApi.getAuthenticationToken({params});
            setItems(response.request_token);
        }
        getAuthenticationToken();
    }, []);

    const link ="https://www.themoviedb.org/authenticate/" + item + "?redirect_to=http://localhost:3000/account";

    return (
        <>
        <div className="center delay">
            <a href={link}>
                <h2>Request token</h2>
            </a>
        </div>
        </>
    );
};

export default Authentication;