import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

const Profile = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return <h1 className="headerPage">Sign in to see your profile!</h1>
    }

    return (
        isAuthenticated && (
        <Grid className="profilePage" container justify="center">
            <Grid item component={Card}>
                <Card>
                    <CardContent>
                        <Typography>
                            <img className="dp" src={user.picture} alt={user.name}/>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        )
    )
}

export default Profile
