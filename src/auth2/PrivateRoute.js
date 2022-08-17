import {Route, Routes, useNavigate ,Outlet} from 'react-router-dom'
import {useAuthValue} from '../Authcontext/AuthContext'

export default function PrivateRoute({Outlet:Component, ...rest}) {
  const {currentUser} = useAuthValue()
let history = useNavigate()
  return (
    <Routes>
    <Route
      {...rest}
      render={props => {
        return currentUser?.emailVerified ? <Outlet {...props} /> :  history('/login')  
    }}>
    </Route>
    </Routes>
  )
}