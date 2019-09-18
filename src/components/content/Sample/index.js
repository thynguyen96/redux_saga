import React from 'react';

export default class Sample extends React.Component {
    render() {
        return (
            <div className="sample mt-2">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="col-md-12">
                                    <span><i className="fal fa-filter"></i></span>
                                    <span>Clear all</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                <span>No result to show</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}