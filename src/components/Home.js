import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <div className="headerPage">
                <h1>COVID-19 Live Tracker<img className="homePic" src="home.png" alt="homePicture"/></h1>
                <h2>Hello {isAuthenticated ? `${user.name}` : 'guest'}!</h2>
            </div>
        </div>
    )
}

export default Home
