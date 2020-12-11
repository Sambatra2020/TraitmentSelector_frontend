import React from 'react';

import { Formik, Form, Field } from 'formik';
import ErrorField from '../../../ErrorField';
import * as Yup from 'yup';
import history from '../../../History';
import axios from '../../../axios';

class FormEditTreatment extends React.Component {
    state={
        treatment:{},
        initValue:null
    }

    EditTreatmentSchema = Yup.object().shape({
		title: Yup.string()
            .required('title not null'),
    });
    componentDidMount(){
        axios.get(`/treatments/${this.props.id}`).then(response =>{
            if(response.status===200){
                this.setState({
                    treatment:response.data,
                    initValue:{...this.state.initValue,
                        title:response.data.title,
                        traduction_french:response.data.traduction_french,
                        traduction_malagasy:response.data.traduction_malagasy
                    }
                })
            }
        })
    }
	render() {
		return (

			<>
            {this.state.initValue !== null?(
                <Formik
                    initialValues={this.state.initValue}
                    validationSchema={this.EditTreatmentSchema}
                    onSubmit={(values, { resetForm }) => {
                        axios.patch(`/treatments/${this.state.treatment.id}`,values).then(response =>{
                            if(response.status===200){
                                history.push('/Admin/Treatments')
                                window.location.reload()
                            }
                        })
                    }}
                >
                            {({errors,touched,handleSubmit}) =>
                            (<Form>
                            <div className="my-10">
                                <label className="flex justify-center text-purple-600">Treatment title : {this.state.treatment.title}</label>
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
            ):(<h3>Loading...</h3>)}
             
			</>
		)
	}
}


export default FormEditTreatment;