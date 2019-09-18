import React from 'react';
import HistoryItem from './HistoryItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { deleteAllHistory } from '../../../redux/actions/history'

class History extends React.Component {

    deleteAllHistory = (data) => {
        console.log("data", data)
        this.props.deleteAllHistory(data.map(({id}) => id))
    }

    showItemList = (content) => {
        var result = null;
        if(content.length > 0){
            result = content.map((item, index) => {
                return (
                    <HistoryItem 
                        id={item.id}
                        key={index}
                        requestType={item.requestType}
                        time={item.time}
                        netconfMsg={item.netconfMsg}
                        error={item.error}
                    />
                )
            })
        } 
        return result;
    }

    showRequestHistory = (requests) => {
        var result = null;
        if(requests.data.length > 0){
            result = requests.data.map((request, index) => {
                return (
                    <div className="card mb-3" key={index}>
                        <div className="card-header bg-header">
                            <span>{request.title}</span>
                            <button className="delete-icon text-right" onClick={() => this.deleteAllHistory(request.data)}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </div>
                        {request.data && request.data.length > 0 ?
                            <div> 
                                <div className="request-content">
                                    <table className="table mb-0">
                                        <tbody>
                                            { this.showItemList(request.data) }
                                        </tbody>
                                    </table>
                                </div> 
                                <div className="card-footer bg-header">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div> 
                            </div> : ''
                        }
                    </div>
                )
            })
        }
        return result;
    }

    render() {
        if (this.props.history.messageDelete) {
            alert(this.props.history.messageDelete)
        }
        return (
            <div className="history mt-4 text-center">
                {this.props.history && this.props.history.isRequesting &&
                    <div className="lds-dual-ring"></div>
                }
             { this.showRequestHistory(this.props.history, this.props) }
            </div>
        )
    }
}



const mapDispatchToProps = {
    deleteAllHistory
}


export default connect(null, mapDispatchToProps)(History)
