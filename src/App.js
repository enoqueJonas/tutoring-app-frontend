import React from 'react';
import SideBar from './components/side-nav/sideBar';

function App() {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-md-3 p-0 " style={{ width: '15vw' }}>
          <SideBar />
        </div>
        <div className="col-md-9" style={{ width: '85vw' }}>
          <div className="container" />
          <main role="main" className="px-4" />
        </div>
      </div>
    </section>
  );
}

export default App;
