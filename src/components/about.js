import React from 'react';

export default function about() {
return (
	
	
	<div>
			<nav className="navbar navbar-light  container">
				<a
					className="navbar-brand "
					href="/src/components/about.js"
					style={{ marginLeft: '15px', fontWeight: 'bolder', fontSize: '22px' }}
				>
					about
				</a>

                             
			</nav>
		</div>
		<div className="container">
			<div className="file-icon">
				<i className="fa fa-5x fa-cloud-upload" aria-hidden="true"></i>
			</div>
			<p className="title-text">about</p>
			<div>
				<p className="text text-center">
					{' '}
					Super simple file sharing Convenient, anonymous and secure
				</p>
			</div>
);
}
