import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

	render() {

		return (
			<>
				<div className="flex items-center h-20 bg-yellow-200 text-2xl font-serif text-purple-700">
					<div className="mx-5">
						<label ><Link to="/">Home</Link></label>
						<label className="ml-5 mr-5"><Link to="/Treatments">Treatments</Link></label>
						<label><Link to="/Categories">Categories</Link></label>
					</div>
					<div className="">
						<label><Link to="/AdminPage">Admin</Link></label>
					</div>
				</div>
			</>
		)
	}
}


export default Header;