import React, { Component } from 'react'
import { connect } from "react-redux";

class ShowUsers extends Component {

    render() {

        const { list } = this.props
        const name = list.map((name, index) => {
            return (
                <div key={index}>
                    <li>{name.firstName} {name.lastName}</li>
                    <span>+++++++++++++++++++++++++++++</span>
                </div>
            )
        })


        return (
            <ul>
                {name}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps)(ShowUsers)
