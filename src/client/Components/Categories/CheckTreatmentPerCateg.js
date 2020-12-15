import { Formik, Form, Field } from 'formik';
import React from 'react';
import axios from '../../../axios';
import history from '../../../History';
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n'


class FinishTreatment extends React.Component {
    state = {
        showTreatments:0
    }
	showTreatments (id) {
        this.setState({
            showTreatments:id
        })
    }
    changeLanguage = (language) => {
		i18n.changeLanguage(language);
	  };


	render() {
		const { t } = this.props;

		return (
            <div >
                <label className="flex justify-center mt-10 text-3xl text-blue-500">{t('Welcome')} {this.props.name}</label>
                <label className="flex justify-center text-2xl text-purple-500">{t('Please click a category')}</label>
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
                        <div className="flex justify-end w-7/12 my-10">
                            <label onClick={e => this.showTreatments(categorie.id) } className="w-1/3" key={categorie.id}>
                                {i18n.language==='en'?(categorie.labelle_categorie):(i18n.language==='fr' && categorie.categorie_french?(categorie.categorie_french):(i18n.language==='mg' && categorie.categorie_malagasy?(categorie.categorie_malagasy):(categorie.labelle_categorie)))}

                            </label>
                        </div>
                       
                        {this.state.showTreatments === categorie.id? (
                            <>
                            {this.props.treatments_per_categorie[categorie.id].map(treatment =>(
                                <div className="flex justify-end w-7/12 my-10">
                                    <label className="w-1/3" key={treatment.id}>
                                        <Field type="radio"  value={treatment.id.toString()} name="treatment_id" />
                                        {i18n.language==='en'?(treatment.title):(i18n.language==='fr' && treatment.traduction_french?(treatment.traduction_french):(i18n.language==='mg' && treatment.traduction_malagasy?(treatment.traduction_malagasy):(treatment.title)))}
                                    </label>
                                </div>
                                
                                ))}
                            </>
                        ):null}
                        </>
                    ))}
                    <div className="flex justify-center my-5"><button className="text-center text-white rounded-full w-20 bg-purple-600 border-2 border-purple-900" type="submit" id="enter">{t('Valider')}</button></div>
                </Form>
                )}
                </Formik>
            </div>
		)
	}
}


export default withTranslation()(FinishTreatment);