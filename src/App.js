import SideBar from './side-nav/sideBar';

function App() {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-md-3 p-0">
          <SideBar />
        </div>
        <div className="col-md-9">
          <main role="main" className="px-4">
            <h1>App component</h1>
          </main>
        </div>
      </div>
    </section>
  );
}

export default App;
