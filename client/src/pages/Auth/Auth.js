import React, { useState } from 'react';
import './Auth.scss';
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    const navigate = useNavigate();

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [valid, setValid] = useState(false)

    const loginUser = async (e) => {
        e.preventDefault()
        if (username === '' || password === '') {
            alert('Enter data')
        } else {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password,
                })
            })
            const data = await response.json()

            if (data.status === 'ok') {
                navigate('/home')
                setValid(true)
            } else {
                alert('Please enter correct data')
                setValid(false)
            }
        }
    }

    return (
        <form className='container'>
            <h2>Login</h2>
            <div className='content'>
                <p>Username</p>
                <input
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='Enter your email...' />
            </div>
            <div className='content'>
                <p>Password</p>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password...' />
            </div>
            <button onClick={loginUser} disabled={valid} type='submit'>Login</button>
        </form>
    )
}

export default Auth