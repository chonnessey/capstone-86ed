import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'

function App() {
  const user = null
  return (
    <div className="app">
      {!user ? (
      <h1>Login</h1>
  ) : (
      <>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>
  )}
    </div>
  );
}

export default App;

