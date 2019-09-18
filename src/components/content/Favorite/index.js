import React from 'react';

export default class Favorite extends React.Component {
    render() {
        return (
            <div className="history mt-4">
                <div className="card mb-3">
                    <div className="card-header bg-header">
                        <span>Favorites</span>
                        <span className="delete-icon"><i className="fas fa-trash"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}