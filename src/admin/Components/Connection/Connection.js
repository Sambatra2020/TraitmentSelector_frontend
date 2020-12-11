import React from 'react';
import axios from '../../../axios';
import { Formik, Form, Field } from 'formik';
import ErrorField from '../../../ErrorField';
import * as Yup from 'yup';
import Session from '../../Session';
import history from '../../../History'

class Connection extends React.Component {
	state = {
	};
	AdminRegistrationSchema = Yup.object().shape({
		name: Yup.string()
            .required('name not null'),
        password: Yup.string()
            .required('password not null')
	});
	

	render() {

		return (
			
					<div>
						<Formik
							initialValues={{
                                name: '',
                                password:'',
                            }}
                            validationSchema={this.AdminRegistrationSchema}
                            onSubmit={(values, { resetForm }) => {
                                axios.post('/admins',values).then(response=>{
									if(response.status === 200){
                                       Session.setStatus(true)
                                       console.log(Session.getStatus())
                                       history.push('/Admin/Treatments')
                                       //window.location.reload()
                                    }
								})
                            }}
						>
							{({errors,touched,handleSubmit}) =>
							(<Form>
                            <div className="my-10">
                                <div className="flex justify-center">
                                    <Field type="text" placeholder="name*" name="name"  className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                                </div>
								<div className="flex justify-center">
                                    <ErrorField  errors={errors} touched={touched} row="name"/>
                                </div>
                                <div className="flex justify-center mt-5">
                                    <Field type="password" placeholder="password*" name="password"  className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                                </div>
								<div className="flex justify-center">
                                    <ErrorField  errors={errors} touched={touched} row="password"/>
                                </div>
								<div className="flex justify-center my-5"><button className="text-center text-white rounded-full w-20 bg-purple-600 border-2 border-purple-900" type="submit" id="enter">Enter</button></div>
                            </div>
							</Form> )
							}
						</Formik>
					</div>
			
		)
	}
}


export default Connection;