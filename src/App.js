import React, { useContext } from 'react';
import SideBar from './components/side-nav/sideBar';
import { UserContext } from './UserContext';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-md-3 p-0 " style={{ width: '15vw' }}>
          <SideBar />
        </div>
        <div className="col-md-9" style={{ width: '85vw' }}>
          <div className="container" />
          <main role="main" className="px-4">
            {isLoggedIn ? <Home /> : <Login />}
          </main>
        </div>
      </div>
    </section>
  );
}

export default App;
