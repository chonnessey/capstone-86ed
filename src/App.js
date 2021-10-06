import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
// import Login from './components/Login'
import Signup from './components/Signup'
import { AuthProvider } from '../src/contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
            <Signup />
          </div>
      </div>
    </AuthProvider>
  );
}

export default App;

