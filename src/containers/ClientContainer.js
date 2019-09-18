import React from 'react'
import { connect } from 'react-redux'
import Client from '../components/content/Client'


class ClientContainer extends React.Component{

    render (){
        return (
            <Client />    
        )
    }
}

const mapStateToProps = (state) => ({
    request: state.client
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer)