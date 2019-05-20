import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

const Public = () => <h2>Hello Public!</h2>
const Protected = () => <h2>hello Privated</h2>
const Login = () => <h2>First Login</h2>

// authCheck 
const authCheck = {
    isAuthenticated : false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

// const PrivateRoute = ({path,component}) => (
    
// )

export default function AuthExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/public'>Public Page</Link>
                    </li>
                    <li>
                        <Link to='/protected'>Private Page</Link>
                    </li>
                </ul>
                {/* handling Route */}
                <Route path='/public' component={Public}/>
                <Route path ='/login' component={Login}/>
                {/* <PrivateRoute path='/protected' component={Protected}/> */}
            </div>
        </Router>
    )
}