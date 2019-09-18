import React from 'react'
import { connect } from 'react-redux'
import History from '../components/content/History'
import { getHistories } from '../redux/actions/history';
import { constants } from 'os';

class HistoryContainer extends React.Component{

    componentDidMount(){
        this.props.getHistories();
    }

    render (){

        return (
            <History 
                history={this.props.history} 
            />    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history.history
    }
}

const mapDispatchToProps = {
    getHistories,
}


export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
