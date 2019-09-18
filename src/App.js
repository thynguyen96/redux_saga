import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './common/Route';
export default class App extends React.Component {
    showContentMenus = (routes) => {
        var result = null;
        if(routes.length > 0){
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path} 
                        exact={route.exact}
                        component={route.main}
                        render={route.render}
                    />
                )
            })
        }
        return result;
    }
    render(){
        return(
            <div>
                <Router>
                    <Header />
                    <Switch>
                        { this.showContentMenus(routes) }
                    </Switch>
                </Router>
            </div>
        )
    }
}