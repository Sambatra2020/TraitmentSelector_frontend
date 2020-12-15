import React from 'react';
import axios from '../../../axios';
import { Formik, Form, Field } from 'formik';
import ErrorField from '../../../ErrorField';
import * as Yup from 'yup';
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';


class Registration extends React.Component {
	state = {
	};
	PatientRegistrationSchema = Yup.object().shape({
		name: Yup.string()
			.required(`${this.props.t('nameSchema')}`),
	});
	
	changeLanguage = (language) => {
		i18n.changeLanguage(language);
	  };
	render() {
		const { t } = this.props;
		return (

					<div >
						<Formik
							initialValues={{
                                name: '',
                            }}
                            validationSchema={this.PatientRegistrationSchema}
                            onSubmit={(values, { resetForm }) => {
                                axios.post('/patients',values).then(response=>{
									if(response.status === 201){
                                        this.props.changerEtape(response.data.id,response.data.name,2);
									}else{
									}
								})
                            }}
						>
							{({errors,touched,handleSubmit}) =>
							(<Form>
                            <div className="my-10">
								<label className="flex justify-center text-purple-600">{t('Please Enter your name')}</label>
                                <div className="flex justify-center">
                                    <Field type="text" placeholder={t('name*')} name="name"  className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                                </div>
								<div className="flex justify-center">
                                    <ErrorField  errors={errors} touched={touched} row="name"/>
                                </div>
								<div className="flex justify-center my-5"><button className="text-center text-white rounded-full w-20 bg-purple-600 border-2 border-purple-900" type="submit" id="enter">{t('Enter')}</button></div>
                            </div>
							</Form> )
							}
						</Formik>
					</div>
			
		)
	}
}


export default withTranslation()(Registration);