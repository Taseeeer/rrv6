import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useRoutes } from 'react-router-dom';
import { css } from '@emotion/css';

import Admin from './Admin/Admin';
import Products from './Products/Products';
import Nav from './Common/Nav';
import ScrollToTop from './Common/ScrollToTop';

const AppStyles = css`
margin: 50px auto;
width: 380px;
.Container {
  background: #1d1e26;
  border: 4px solid #9580ff;
  border-radius: 6px;
  padding: 25px;
}

.Not-Found {
  text-align: center;
}
`;

const AppRoutes = () => {
  const isAuthenticated = true;
  const routes = useRoutes([
    {
      path: '/*',
      element: <Products />
    },
    {
      path: '/admin*',
      element: isAuthenticated ? <Admin /> : <Navigate to='/' />
      // this ternary will work as a protected route
    },
    {
      path: '*',
      element: <Navigate to='/' />
    }
  ]);

  return routes;
    // <Routes>
    //   <Route path="/*" element={<Products />} />  
    //   <ProtectedRoute authenticated={true} path="/admin*" element={<Admin />} />
    //   <Route path="*" element={<Navigate to="/" />} />
    // </Routes>

}

const App = () => {
  return(
  <div className={AppStyles}>
    <Router>
      <ScrollToTop />
      <div className="Container">
        <Nav />
        <AppRoutes /> 
        <footer><p style={{textAlign: 'center'}}>All rights reserved, 2022</p></footer>
      </div>
    </Router>
  </div>
  )
};

export default App;