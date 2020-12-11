import React from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

class AdminTreatments extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            treatments:null,
        }
    }
    
    componentDidMount(){
        axios.get('/treatments').then(response => {
            if(response.status === 200){
                this.setState({
                    treatments:response.data,
                })
            }
        })
     }
    editTreatment(id){
        console.log(id)

    }
    
	render() {
        return (
			<div>
                {this.state.treatments?(
                    <>
                    <div >
                        <label className="flex justify-center mt-10 text-3xl text-blue-500">This is the list of all treatment </label>
                        <label className="flex justify-center my-10">
                             <Link to={'/AddTreatment'}>Create new treatment</Link>
                       </label>
                       <label className="flex justify-center text-2xl text-purple-500">Please select one to editv</label>
                            {this.state.treatments.map(treatment =>(
                                 <label className="flex justify-center my-10" key={treatment.id}>
                                    <Link to={`/EditTreatment/${treatment.id}`}>{treatment.title}</Link>
                                 </label>
                            ))}
                    </div>
                    
                    </>
                   
                ):null}
            </div>
        )
		
	}
}


export default AdminTreatments;