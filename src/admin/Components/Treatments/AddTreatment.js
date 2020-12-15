import React from 'react';

import { Formik, Form, Field } from 'formik';
import ErrorField from '../../../ErrorField';
import * as Yup from 'yup';
import axios from '../../../axios';
import HeaderAdmin from '../../HeaderAdmin';
import history from '../../../History';
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import '../../admin.css'


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
        })
    }
    
	render() {
        const { t } = this.props;
		return (

			<>
            <div id="back-admin">
            <HeaderAdmin/>
            {this.state.categories?(
                <Formik
                    initialValues={{
                        title:'',
                        traduction_french:'',
                        traduction_malagasy:'',
                        category_id:''
                    }}
                    validationSchema={this.EditTreatmentSchema}
                    onSubmit={(values, { resetForm }) => {
                        axios.post('/treatments',values).then(response =>{
                            console.log(response)
                            history.push('/Admin/Treatments')
                            window.location.reload()
                        })
                    }}
                >
                            {({errors,touched,handleSubmit,values}) =>
                            (<Form>
                            <div className="my-10">
                                <div className="flex justify-center text-purple-600 mb-20">
                                    <Field as="select" name="category_id">
                                            <option value="default" >{t('Select category')}</option>
                                        {this.state.categories.map(categorie =>(
                                            <option value={categorie.id}>
                                                {i18n.language==='en'?(categorie.labelle_categorie):(i18n.language==='fr' && categorie.categorie_french?(categorie.categorie_french):(i18n.language==='mg' && categorie.categorie_malagasy?(categorie.categorie_malagasy):(categorie.labelle_categorie)))}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                               
                                <label className="flex justify-center text-purple-600">{t('Treatment title')}</label>
                                <div className="flex justify-center">
                                    <Field type="text" name="title" className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                                </div>
                                <div className="flex justify-center">
                                    <ErrorField  errors={errors} touched={touched} row="title"/>
                                </div>
                                <label className="flex justify-center text-purple-600">{t('French traduction')}</label>
                                <div className="flex justify-center mt-5">
                                    <Field type="text" name="traduction_french"  className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                                </div>
                                <div className="flex justify-center">
                                    <ErrorField  errors={errors} touched={touched} row="traduction_french"/>
                                </div>
                                <label className="flex justify-center text-purple-600">{t('Malagasy traduction')}</label>
                                <div className="flex justify-center mt-5">
                                    <Field type="text" name="traduction_malagasy"  className="w-96 rounded-full py-3 px-6 border-2 border-purple-900"/>
                                </div>
                                <div className="flex justify-center">
                                    <ErrorField  errors={errors} touched={touched} row="traduction_malagasy"/>
                                </div>
                                <div className="flex justify-center my-5"><button className="text-center text-white rounded-full w-20 bg-purple-600 border-2 border-purple-900" type="submit" id="enter">{t('Enter')}</button></div>
                            </div>
                            </Form> )
                            }
                        </Formik>
            ):null}
            </div>
			</>
		)
	}
}


export default withTranslation()(AddTreatment);