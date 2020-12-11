import React from 'react';

import { Formik, Form, Field } from 'formik';
import ErrorField from '../../../ErrorField';
import * as Yup from 'yup';
import axios from '../../../axios';

class AddTreatment extends React.Component {
    state ={
        categories:null
    }
   
    EditTreatmentSchema = Yup.object().shape({
		title: Yup.string()
            .required('title not null'),
    });
    componentDidMount(){
        axios.get('/categories').then(response =>{
            if(response.status === 200){
                this.setState({
                    categories:response.data.categories,
                })
            }
            console.log(response.data.categories)
        })
    }
    
	render() {
		return (

			<>
            {this.state.categories?(
                <Formik
                    initialValues={{
                        title:'',
                        traduction_french:'',
                        traduction_malagasy:'',
                        categorie_id:''
                    }}
                    validationSchema={this.EditTreatmentSchema}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values)
                    }}
                >
                            {({errors,touched,handleSubmit}) =>
                            (<Form>
                            <div className="my-10">
                                <div className="flex justify-center text-purple-600 mb-20">
                                    <select name="categorie_id" >
                                        {this.state.categories.map(categorie =>(
                                            <option value={categorie.id}>{categorie.labelle_categorie}</option>
                                        ))}
                                    </select>
                                </div>
                               
                                <label className="flex justify-center text-purple-600">Treatment title</label>
                                <div className="flex justify-center">
                                    <Field type="text" name="title" className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                                </div>
                                <div className="flex justify-center">
                                    <ErrorField  errors={errors} touched={touched} row="title"/>
                                </div>
                                <label className="flex justify-center text-purple-600">French traduction</label>
                                <div className="flex justify-center mt-5">
                                    <Field type="text" name="traduction_french"  className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                                </div>
                                <div className="flex justify-center">
                                    <ErrorField  errors={errors} touched={touched} row="traduction_french"/>
                                </div>
                                <label className="flex justify-center text-purple-600">Malagasy traduction</label>
                                <div className="flex justify-center mt-5">
                                    <Field type="text" name="traduction_malagasy"  className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                                </div>
                                <div className="flex justify-center">
                                    <ErrorField  errors={errors} touched={touched} row="traduction_malagasy"/>
                                </div>
                                <div className="flex justify-center my-5"><button className="text-center text-white rounded-full w-20 bg-purple-600 border-2 border-purple-900" type="submit" id="enter">Enter</button></div>
                            </div>
                            </Form> )
                            }
                        </Formik>
            ):null}
               
			</>
		)
	}
}


export default AddTreatment;