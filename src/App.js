import React from 'react';
import { Header } from './components/Header';
import FileUploadPage from './FileUploadPage';
import { about } from './components/about';

export const App = () => {
	return (
		<div>
			<Header />
			<FileUploadPage />
		        <about/>
		</div>
	);
};
