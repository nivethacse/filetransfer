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

                                <li className="nav-item navLis">
                                <a className="nav-link " href="src/components/about.js" >About</a>
                                </li>
			</nav>
		</div>
	);
};
