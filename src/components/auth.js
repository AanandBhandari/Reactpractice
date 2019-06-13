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
// const Login = () => <h2>First Login</h2>

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

class Login extends React.Component {
    state = {
        redirectToReferrer : false
    }
    login = () => {
        authCheck.authenticate(() => {
            this.setState(() => ({
                redirectToReferrer: true
            }))
        })
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }
        return(
            <div>
                <p>You must log in to view the page</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        authCheck.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

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
                <PrivateRoute path='/protected' component={Protected}/>
            </div>
        </Router>
    )
}