import React,{useState} from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TourContext } from './context/TourContext';


import { NavRoutes } from './common';
import HomePage from './pages/Home';
import UserPage from './pages/Users';
import CompanyPage from './pages/Company';
import { SideNav, Navbar, BottomBar } from './components';
const App = () => {
    const[tourCount, setTourCount]=useState(0);
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <SideNav />
                <Layout className='site-layout'>
                    <Navbar />
                    <TourContext.Provider value={{tourCount,setTourCount}}>
                        <Routes>
                            <Route path={NavRoutes.dashboard} element={<HomePage />} />
                            <Route path={NavRoutes.users} element={<UserPage />} />
                            <Route path={NavRoutes.companies} element={<CompanyPage />} />
                        </Routes>
                    </TourContext.Provider>
                    <BottomBar />
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
