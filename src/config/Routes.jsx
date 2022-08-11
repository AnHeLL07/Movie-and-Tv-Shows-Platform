import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import TermsAndConditions from '../components/terms-and-conditions/TermsAndConditions';
import PrivacyPolicy from '../components/privacy-policy/PrivacyPolicy';
import RecentRelease from '../components/recent-release/RecentRelease';
import AboutUs from '../components/about-us/AboutUs';
import Account from '../components/account/Account';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/terms-and-conditions'
                component={TermsAndConditions}
            />
            <Route
                path='/privacy-policy'
                component={PrivacyPolicy}
            />
            <Route
                path='/recent-release'
                component={RecentRelease}
            />
            <Route
                path='/about-us'
                component={AboutUs}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;
