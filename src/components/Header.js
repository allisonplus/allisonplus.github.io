import React from 'react';
import { profile } from '../details';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header--profile-pic">
					<img src={ profile.image } alt={ profile.name } />
				</div>
				<div className="header--name">
					<h1>{ profile.name }</h1>
				</div>
				<div className="header--pronouns">
					<p>{ profile.pronouns }</p>
				</div>
				<div className="header--bio">
					<p>{ profile.bio }</p>
				</div>
			</header>
		)
	}
}

export default Header;
