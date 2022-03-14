import React from 'react';
import { Header } from './components/Header';
import FileUploadPage from './FileUploadPage';
import { about } from './components/about';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 
export const App = () => {
	return (
		<div>
		<Router>
           <div className="App">
		<li>
                <Link to="/about">About Us</Link>
              </li> 
           <Routes>
                
                 <Route exact path='/about' element={< about />}></Route>
                
          </Routes>
          </div>
       </Router>
			<Header />
			<FileUploadPage />
		        
		</div>
	);
};
