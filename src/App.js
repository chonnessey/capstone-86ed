import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const user = 'null'
  return (
    <div className="app">
      {!user ? (
      <Login />
  ) : (
      <>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
          <Signup />
        </div>
      </>
  )}
    </div>
  );
}

export default App;

