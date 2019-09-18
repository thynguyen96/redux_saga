import React from 'react'
import MenuLink from './MenuLink'

export default class Menu extends React.Component {

    showMenu = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index}
                        label={menu.name} 
                        to={menu.to} 
                        activeOnlyWhenExact={menu.exact} 
                    />
                )
            })
        }
        return result;
    }

    render() {
        return (
            <ul className="navbar-nav mr-auto">
                {this.showMenu(this.props.menus)}
            </ul>
        )
    }
}