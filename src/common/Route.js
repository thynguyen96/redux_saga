import React from 'react';
import Favorite from '../components/content/Favorite';
import Sample from '../components/content/Sample';
import { Redirect } from 'react-router-dom';
import ClientContainer from '../containers/ClientContainer';
import HistoryContainer from '../containers/HistoryContainer';

const routes = [
    {path: '/client', exact: false, main: () => <ClientContainer />},
    {path: '/history', exact: true, main: () => <HistoryContainer />},
    {path: '/favorite', exact: false, main: () => <Favorite />},
    {path: '/sample', exact: false, main: () => <Sample />},
    {path: '', exact: false, render: () => (<Redirect to="/history" />)},
]

export default routes;
