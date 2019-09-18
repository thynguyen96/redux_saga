import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

class Client extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            request: this.props.request,
        }
    }

    handleChange = (editor, data, value) => {
        this.setState({
            request: value
        })
    }

    sendRequest = (event) => {
        event.preventDefault();
        this.props.sendRequest(this.state.request);
    }

    render() {
        return (
            <div className="client mt-3">
                <div className="card">
                    <div className="card-header">Request</div>
                        <CodeMirror
                            value={this.state.request}
                            options={{
                                mode: 'xml',
                                lineNumbers: true
                            }}
                            onChange={this.handleChange}
                        />
                </div>
                <div className="text-right">
                    <button type="button" className="btn primary-bg mt-3 mb-3 nc-button" onClick={this.sendRequest}>Send</button>
                </div>
                <div className="card mb-3">
                    <div className="card-header">Result</div>
                        <CodeMirror
                            value={this.props.response}
                            options={{
                                mode: 'xml',
                                lineNumbers: true
                            }}
                        />
                </div>
            </div>
        )
    }
}

export default Client;