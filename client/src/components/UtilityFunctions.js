import axios from 'axios'

export const register = newUser => {
    return axios.post('users/register', {
            email: newUser.email,
            full_name: newUser.full_name,
            password: newUser.password,
        })
        .then(res => {
            console.log('User registered!')
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

