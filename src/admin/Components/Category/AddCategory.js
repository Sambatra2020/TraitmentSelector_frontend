import React from 'react';

import { Formik, Form, Field } from 'formik';
import ErrorField from '../../../ErrorField';
import * as Yup from 'yup';
import history from '../../../History';
import axios from '../../../axios';
import HeaderAdmin from '../../HeaderAdmin';
import { withTranslation } from 'react-i18next';
import '../../admin.css'

class AddCategory extends React.Component {
    state={
        category:{},
    }

    EditCategorySchema = Yup.object().shape({
		labelle_categorie: Yup.string()
            .required('this label not null'),
    });
    
	render() {
        const { t } = this.props;
		return (

			<>
            <div id="back-admin">
                <HeaderAdmin/>
            
                <Formik
                    initialValues={{
                        labelle_categorie:""
                    }
                    }
                    validationSchema={this.EditTreatmentSchema}
                    onSubmit={(values, { resetForm }) => {
                        axios.post('/categories',values).then(response =>{
                            console.log(response)
                            history.push('/Admin/Categories')
                            window.location.reload()
                        })
                    }}
                >
                {({errors,touched,handleSubmit}) =>
                    (<Form>
                        <div className="my-10">
                            <label className="flex justify-center text-purple-600">{t('label Category')}</label>
                            <div className="flex justify-center mt-5">
                                <Field type="text" name="labelle_categorie"  className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                            </div>
                            <div className="flex justify-center text-red">
                                <ErrorField  errors={errors} touched={touched} row="labelle_categorie"/>
                            </div>
                            <label className="flex justify-center text-purple-600">{t('French traduction')}</label>
                            <div className="flex justify-center mt-5">
                                <Field type="text" name="categorie_french"  className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                            </div>
                            <div className="flex justify-center">
                                <ErrorField  errors={errors} touched={touched} row="categorie_french"/>
                            </div>
                            <label className="flex justify-center text-purple-600">{t('Malagasy traduction')}</label>
                            <div className="flex justify-center mt-5">
                                <Field type="text" name="categorie_malagasy"  className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                            </div>
                            <div className="flex justify-center">
                                <ErrorField  errors={errors} touched={touched} row="categorie_malagasy"/>
                            </div>
                            <div className="flex justify-center my-5"><button className="text-center text-white rounded-full w-20 bg-purple-600 border-2 border-purple-900" type="submit" id="enter">{t('Enter')}</button></div>
                        </div>
                    </Form> )
                }
                </Formik>
            </div>
			</>
		)
	}
}


export default withTranslation()(AddCategory);