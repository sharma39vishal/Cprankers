import './App.css';
import { Route, Routes,useLocation, useNavigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Groups from './Pages/Groups/Groups';
import Contest from './Pages/Contest/Contest';
import Header from './components/Header';
import Footer from './components/Footer';
import MailSender from './Pages/MailSender/MailSender';
import MainGroup from './Pages/Groups/MainGroup';
import { useEffect } from 'react';

function App() {  

    const history = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [history]);
  
  return (
    <div className="App">
      <Header/>
      <div className='complete-website'>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/group/:groupId" element={<Groups/>}/>
        <Route exact path="/group/" element={<MainGroup/>}/>
        <Route exact path="/contest" element={<Contest/>}/>
        <Route exact path="/mailsender" element={<MailSender/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
