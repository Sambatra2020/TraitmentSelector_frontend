import React from 'react';
import axios from '../../../axios';
import Registration from '../Registration/Registration';
import { Formik, Form, Field } from 'formik';
import history from '../../../History'
import Header from '../Header/Header';
import {withTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import '../../client.css'


class Treatments extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            etape:1,
            treatments:null,
            patient_id:null,
            name:null
        }
    }
    changerEtape =(id,newname,newetape)=>{
        this.setState(prevState =>({
            etape:newetape,
            patient_id:id,
            name:newname
        }))
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

    changeLanguage = (language) => {
		i18n.changeLanguage(language);
    };
   
    
	render() {
        const { t } = this.props;
        console.log(i18n.language);
        return (
			<div id="background">
            <Header/>
                {this.state.etape===1?(<Registration changerEtape={this.changerEtape}/>):null}
                {this.state.etape===2 && this.state.treatments ?(
                    <>
                    <div>
                        <label className="flex justify-center mt-10 text-3xl text-blue-500">{t('Welcome')} {this.state.name}</label>
                        <label className="flex justify-center text-2xl text-purple-500">{t('Please select one treatment')}</label>
                        <Formik
                            initialValues={{
                                treatment_id:null
                            }}
                            onSubmit={(values, { resetForm }) => {
                               if(values.treatment_id!=null){
                                   axios.post('/list_treatments',{treatment_id:parseInt(values.treatment_id),patient_id:this.state.patient_id}).then(response =>{
                                       if(response.status===201){
                                           history.push('/Treatments/Finish')
                                           window.location.reload()
                                       }
                                   })
                               }
                               console.log(values)
                            }}
                        >
                        {({handleSubmit})=>(
                            <Form>
                                {this.state.treatments.map(treatment =>(
                                    <div className="flex justify-end w-7/12 my-10 text-purple-900">
                                    <label className="w-1/3" key={treatment.id}>
                                       
                                        <Field type="radio"  value={treatment.id.toString()} name="treatment_id" />
                                        {i18n.language==='en'?(treatment.title):(i18n.language==='fr' && treatment.traduction_french?(treatment.traduction_french):(i18n.language==='mg' && treatment.traduction_malagasy?(treatment.traduction_malagasy):(treatment.title)))}
                                        
                                    </label>
                                    </div>
                                   
                                ))}
                                <div className="flex justify-center my-5"><button className="text-center text-white rounded-full w-20 bg-purple-600 border-2 border-purple-900" type="submit" id="enter">{t('Valider')}</button></div>
                            </Form>
                        )}
                        </Formik>

                    </div>
                    
                    </>
                   
                ):null}
            </div>
        )
		
	}
}


export default withTranslation()(Treatments);