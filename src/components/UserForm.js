import React, { Component } from 'react'
import { connect } from "react-redux"
import { Control, Form } from 'react-redux-form'

import { addUser } from "../actions";

import ShowUsers from './ShowUsers'

class UserForm extends Component {

    componentDidMount() {
    }

    handleSubmit = (user, e) => {
        e.preventDefault()
        this.props.addUser(user.firstName, user.lastName);
    }

    render() {
        return (
            <div>
                <Form
                    model="user"
                    onSubmit={(user, e) => this.handleSubmit(user, e)} >
                    <label htmlFor="user.firstName">First name:</label>
                    <Control.text model="user.firstName" id="user.firstName" />

                    <label htmlFor="user.lastName">Last name:</label>
                    <Control.text model="user.lastName" id="user.lastName" />

                    <button type="submit">
                        Finish registration!
                    </button>
                </Form>
                <ShowUsers/>
            </div>
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

