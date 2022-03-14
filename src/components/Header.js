import React from 'react';

export const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-light  container">
				<a
					className="navbar-brand "
					href="/"
					style={{ marginLeft: '15px', fontWeight: 'bolder', fontSize: '22px' }}
				>
					Share.io
				</a>

                             
			</nav>
                        <nav className="navbar navbar-light  container">
				<a
					className="navbar-brand "
					href="src/components/about.js"
					style={{ marginLeft: '15px', fontWeight: 'bolder', fontSize: '22px' }}
				>
					about
				</a>

                             
			</nav>
		</div>
	);
};
