import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

import AuthTwitter from './pages/AuthTwitter'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing';
import Thankyou from './pages/Thankyou';
import Dev from './pages/Dev'

import Loading from './components/Loading'
import Drawer from './components/Drawer'

import { USER } from './apollo/queries'
import { LOGOUT } from './apollo/mutations'



function PrivateRoute({ children, ...rest }: any) {
  const { loading, error, data } = useQuery(USER)
  console.log({ data })
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (loading) return (
          <Loading />
        )
        return data?.currentUser ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
      }
    />
  );
}

function PublicRoute({ children, ...rest }: any) {
  const { loading, error, data } = useQuery(USER, {})
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (loading) return <Loading />
        return data?.currentUser ? (
          <Redirect
            to={{
              pathname: "/app",
            }}
          />
        ) : (
            children
          )
      }
      }
    />
  );
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="flex h-screen">
      <Drawer isOpen={isOpen} toggleDrawer={() => setIsOpen(!isOpen)} />
      <div className="flex-1 py-4 md:py-8 sm:px-6 bg-gray-700 overflow-auto">
        <Route exact path="/app">
          <Home toggleDrawer={() => setIsOpen(!isOpen)} />
        </Route>
      </div>
    </div>


  )
}

const BasicExample = () => {

  return (
    <Router>
      <Switch>
        <Route path="/dev">
          <Dev />
        </Route>

        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/thankyou">
          <Thankyou />
        </Route>
        {/* <PublicRoute path="/login">
          <Login />
        </PublicRoute> */}
        <PublicRoute path="/auth/twitter/redirect">
          <AuthTwitter />
        </PublicRoute>
        <PublicRoute path="/signup">
          <Signup />
        </PublicRoute>

        <PrivateRoute>
          <App />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}





export default BasicExample