import React from 'react';
import { useParams } from 'react-router';
import PageHeader from '../components/page-header/PageHeader';
import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';
import TermsAndConditions from '../components/terms-and-conditions/TermsAndConditions';
import PrivacyPolicy from '../components/privacy-policy/PrivacyPolicy';
import RecentRelease from '../components/recent-release/RecentRelease';
import AboutUs from '../components/about-us/AboutUs';
import Account from '../components/account/Account';
import Authentication from '../authentication/Authentication';

const Catalog = () => {

    const { category } = useParams();

    return (
        <>
            <PageHeader>
                {(() => {
                    // eslint-disable-next-line default-case
                    switch(category) {
                        case cate.movie:
                            return 'Movies';
                        case cate.tv:
                            return 'TV Series';
                        case cate.recentrelease:
                            return 'Recent Release';
                        case cate.person:
                            return 'Actors';
                        case cate.authentication:
                            return 'Authentication';
                        case cate.account:
                            return 'Account';       
                        default:
                            return null;
                    } 
                })()}

            </PageHeader>

            <div className="container">
                <div className="section mb-3">
                    {(() => {
                        // eslint-disable-next-line default-case
                        switch(category) {
                            case cate.termsandconditions:
                                return <TermsAndConditions category={category}/>
                            case cate.privacypolicy:
                                return <PrivacyPolicy category={category}/>
                            case cate.recentrelease:
                                return <RecentRelease category={category}/>
                            case cate.aboutus:
                                return <AboutUs category={category}/>
                            case cate.authentication:
                                return <Authentication category={category}/>
                            case cate.account:
                                return <Account category={category}/>
                            default:
                                return <MovieGrid category={category}/>;
                        } 
                    })()}
                </div>
            </div>
        </>
    );
}

export default Catalog;
