import { Routes, Route } from 'react-router-dom';
import SideBar from './side-nav/sideBar';
import AddClass from './pages/AddClass';
import Test from './pages/test';
import Home from './pages/Home';

function App() {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-md-3 p-0 " style={{ width: '15vw' }}>
          <SideBar />
        </div>
        <div className="col-md-9" style={{ width: '85vw' }}>
          <div className="container">
            <Routes>
              <Route path="add" element={<AddClass />} />
              <Route path="test" element={<Test />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <main role="main" className="px-4" />
        </div>
      </div>
    </section>
  );
}

export default App;
