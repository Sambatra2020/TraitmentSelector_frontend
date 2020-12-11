import { Formik, Form, Field } from 'formik';
import React from 'react';
import axios from '../../../axios';
import history from '../../../History'

class FinishTreatment extends React.Component {
    state = {
        showTreatments:0
    }
	showTreatments (id) {
        this.setState({
            showTreatments:id
        })
    }

	render() {

		return (
            <div >
                <label className="flex justify-center mt-10 text-3xl text-blue-500">Welcome {this.props.name}</label>
                <label className="flex justify-center text-2xl text-purple-500">Please click a category</label>
                <Formik
                    initialValues={{
                        treatment_id:null
                    }}
                    onSubmit={(values, { resetForm }) => {
                        if(values.treatment_id!=null){
                            axios.post('/list_treatments',{treatment_id:parseInt(values.treatment_id),patient_id:this.props.patient_id}).then(response =>{
                                if(response.status===201){
                                    history.push('/Treatments/Finish')
                                     window.location.reload()
                                }
                            })
                        }
                    }}
                >{({handleSubmit})=>(
                <Form>
                    {this.props.categories.map(categorie =>(
                        <>
                        <label onClick={e => this.showTreatments(categorie.id) } className="flex justify-center my-10" key={categorie.id}>
                            {categorie.labelle_categorie}
                        </label>
                        {this.state.showTreatments === categorie.id? (
                            <>
                            {this.props.treatments_per_categorie[categorie.id].map(treatment =>(
                                <label className="flex justify-center my-10" key={treatment.id}>
                                    <Field type="radio"  value={treatment.id.toString()} name="treatment_id" />
                                    {treatment.title}
                                </label>
                                ))}
                            </>
                        ):null}
                        </>
                    ))}
                    <div className="flex justify-center my-5"><button className="text-center text-white rounded-full w-20 bg-purple-600 border-2 border-purple-900" type="submit" id="enter">Valider</button></div>
                </Form>
                )}
                </Formik>
            </div>
		)
	}
}


export default FinishTreatment;