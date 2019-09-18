import React from 'react'
import Menu from '../components/Header/Menu'

export default class MenuContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: [
                {name: "Client", to: "/client", exact: false},
                {name: "History", to: "/history", exact: true},
                {name: "Favorites", to: "/favorite", exact: false},
                {name: "Samples", to: "/sample", exact: false},
            ]
        }
    }
    render() {
        return (
            <Menu menus={this.state.menus}/>
        )
    }
}