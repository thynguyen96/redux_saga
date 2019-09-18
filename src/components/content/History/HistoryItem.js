import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { deleteHistory } from '../../../redux/actions/history'
class HistoryItem extends React.Component{

    deleteHistory = (id) => {
        this.props.deleteHistory(id)
    }
    
    render() {
        return (
            <tr className="align-middle">
                <td className="request-type">
                    <span>{this.props.requestType.charAt(0)}</span>
                </td>
                <td>{this.props.time}</td>
                <td className="request-content">
                    <textarea className="form-control" id="" value={this.props.netconfMsg} rows="2" disabled>
                    </textarea>
                </td>
                <td className={this.props.error ? 'failure-request' : 'success-request'}>
                    <span>{this.props.error ? 'ERROR' : 'OK'}</span>
                </td>
                <td>
                    <Link to="/client">
                        <FontAwesomeIcon icon={faUndo}/>
                    </Link>
                </td>
                <td>
                    <button onClick={() => this.deleteHistory(this.props.id)}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = {
    deleteHistory
}


export default connect(null, mapDispatchToProps)(HistoryItem)


