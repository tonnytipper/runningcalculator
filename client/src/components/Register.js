import React, { Component } from 'react'
import { register } from './UtilityFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            full_name: '',
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            full_name: this.state.full_name,
            password: this.state.password
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="form">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h2 className="">Please register</h2>
                        <div className="input-group">
                            <label htmlFor="full_name">Full Name</label>
                            <input type="text"
                                className="form-control"
                                name="full_name"
                                placeholder="Enter Full Name"
                                value={this.state.full_name}
                                onChange={this.onChange} />
                        </div>
                         <div className="input-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.onChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.onChange} />
                        </div>
                        <button type="submit" className="btn" > Register </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register