import React from 'react';
import { Route, Link } from 'react-router-dom'

export default class MenuLink extends React.Component {
    render() {
        return (
            <Route 
                path={this.props.to} 
                exact={this.props.activeOnlyWhenExact} 
                children={( { match } ) => {
                    var active = match ? 'active' : '';
                    return (
                        <li className="nav-item">
                            <Link className={`nav-link ${active}`} to={ this.props.to }>{ this.props.label }</Link>
                        </li>
                    )
                }}
            />
        )
    }
}