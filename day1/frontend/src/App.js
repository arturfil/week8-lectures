import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components
import SideNav from './components/SideNav';

// import views
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div style={{marginLeft: 0, paddingLeft: 0}} className="col-3">
            <SideNav/>
          </div>
          <div className="col-9">
            <Routes>
              <Route path="/" element={<HomeView/>} />
              <Route path="/login" element={<LoginView/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
