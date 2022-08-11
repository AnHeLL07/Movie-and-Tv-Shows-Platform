import React, { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import Authentication from "../../authentication/Authentication";
import './account.scss';

const Account = () => {

    const [item, setItems] = useState([]);
    useEffect(() => {
        const getAccount = async () => {
            let response = null;
            response = await tmdbApi.postAuthenticationToken();
            setItems(response);
        }
        getAccount();
    }, []);

    return (
        <>
            <div className="delay">
                <Authentication/>
            </div>
        </>
    );
};

export default Account;