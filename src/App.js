// import './App.css';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar'
// import Feed from './components/Feed'
// import Widgets from './components/Widgets'
import Login from './components/Login'
import Signup from './components/Signup'
import { AuthProvider } from '../src/contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashBoard from './components/DashBoard'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/' component={DashBoard} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

