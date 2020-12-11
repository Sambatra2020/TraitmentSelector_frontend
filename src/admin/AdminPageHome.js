import React from 'react';
import Treatments from './Components/Treatments/Treatments';

class AdminPageHome extends React.Component {
	

	render() {

		return (
			<div>
				<h1 className="flex justify-center mt-10 text-purple-500">WELCOME HOME TO THE ADMIN PAGE</h1>
				<Treatments/>
				
			</div>
			
		)
	}
}


export default AdminPageHome;