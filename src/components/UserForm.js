import React, { Component } from 'react'
import { connect } from "react-redux"
import { Control, Form } from 'react-redux-form'

import { addUser } from "../actions";

class UserForm extends Component {

    componentDidMount() {
    }

    handleSubmit = (user) => {
        this.props.addUser(user.firstName, user.lastName);
        console.log(this.props)
    }

    render() {
        return (
            <Form
                model="user"
                onSubmit={(user) => this.handleSubmit(user)} >
                <label htmlFor="user.firstName">First name:</label>
                <Control.text model="user.firstName" id="user.firstName" />

                <label htmlFor="user.lastName">Last name:</label>
                <Control.text model="user.lastName" id="user.lastName" />

                <button type="submit">
                    Finish registration!
                </button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        list: state.list
    }
}

export default connect(mapStateToProps,{addUser})(UserForm)

