import React from 'react';
import { Link } from 'react-router-dom';
import MenuContainer from '../../containers/MenuContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faTh } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <nav className=" navbar navbar-expand-lg nc-background pt-3 pb-3">
                    <Link className="navbar-brand logo pt-0" to="/">
                        <img src="./assets/images/NOKIA_LOGO.png" alt=""/>
                    </Link>
                    <div><span className="title mr-5 white-icon">NC Client</span></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
                        <MenuContainer />
                        <form className="form-inline my-2 my-lg-0">
                            <button><span className="mr-2 white-icon">adminuser</span></button>
                            <button>
                                <FontAwesomeIcon icon={faUserCircle} className="mr-2 ml-2 nc-icon white-icon fa-2x" />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faTh} className="ml-4 white-icon" />
                            </button>
                        </form>
                    </div>
                </nav>

                <div className="header-bottom">
                    <span>Client</span>
                </div>
            </div>
        )
    }
}

export default Header