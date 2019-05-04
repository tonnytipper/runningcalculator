import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            full_name: '',
            email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)     

		this.setState({
            full_name: decoded.full_name,
            email: decoded.email
        })
    }

    render () {
        return (
            <div className="container">
                <h2 className="text-center">PROFILE</h2>
                <table className="100%">
                    <tbody>
                        <tr>
                            <td>Full Name</td>
                            <td>{this.state.full_name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Profile