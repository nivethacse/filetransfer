import React from 'react';
import { Header } from './components/Header';
import FileUploadPage from './FileUploadPage';
import AboutMe from "./components/aboutMe";

export const App = () => {
	return (
		<div>
			<Header />
			<FileUploadPage />
		        <about/>
		</div>
	);
};
