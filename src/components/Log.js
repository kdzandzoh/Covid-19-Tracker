import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@material-ui/core'

const Log = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    
    const handleLogOut = () => {
        logout();
    }

    const handleLogIn = () => {
        loginWithRedirect();
    }

    if (isAuthenticated) {
        return (
            <div>
                <Button variant="contained" color="secondary"><span onClick={handleLogOut}>Log out</span></Button>
            </div>
        )
    }
    else {
        return (
            <div>
                <Button variant="contained" color="secondary"><span onClick={handleLogIn}>Login</span></Button>
            </div>
        )
    }

}

export default Log;

