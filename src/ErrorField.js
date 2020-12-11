import React, { Component } from 'react'

export default class ErrorField extends Component {
    render() {
        const { errors, touched, row } = this.props;
        return (
            <div className="text-red-600">
                { errors[row] && touched[row] ? (
                    <h7>{errors[row]}</h7>
                ) : null }
            </div>
        )
    }
}