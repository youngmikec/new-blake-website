import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
// import { FormspreeProvider } from '@formspree/react';
// import { SnackbarProvider } from 'notistack';

import { authRoutes } from './routes';
import { RouteType } from './routes/auth-routes';
import NotProtectedRoute from './routes/protected-routes';


// import './styles/globals.css';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {

  const getRoutes = (routes: RouteType[]) => routes.map((route: RouteType, index: number) => {
    const Component = route.component;
    return <Route key={index} path={route.path} element={ 
      <NotProtectedRoute>
            <div>
              <NavBar/>
                <div className='bg-white'>
                  {Component}
                  <a className='p-6 bg-[#25D366] text-white rounded-full fixed bottom-10 right-4 z-10' href='https://wa.me/+2348107389617' target='_blank'>
                    <BsWhatsapp />
                  </a>
                </div>
              <Footer />
            </div>
        {/* <FormspreeProvider project="2001526770330762755">
          <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          </SnackbarProvider>
        </FormspreeProvider> */}
      </NotProtectedRoute>
    } />
  })


  return (
    
    <Router>
      <Routes>
        {getRoutes(authRoutes)}  
      </Routes>
    </Router>
      
  );
}

export default App;
