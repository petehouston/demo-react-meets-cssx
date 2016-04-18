import React from 'react'
import CSSX from 'react-cssx'

export default class Hello extends React.Component {

    render() {
        return (
            <CSSX styles={this.css()}>
                <h1>When React meets CSSX</h1>
            </CSSX>
        )
    }

    css() {
        return (
            <style>
                h1 {
                    color: {{ this.props.color }};
                }
            </style>
        )
    }
}