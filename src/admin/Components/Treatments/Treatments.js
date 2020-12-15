import React from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../../HeaderAdmin';
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import '../../admin.css'

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
    deleteTreatment(id){
        axios.delete(`/treatments/${id}`)
        window.location.reload()
    }
    
	render() {
        const { t } = this.props;
        return (
			<div id="back-admin">
                <HeaderAdmin/>
                {this.state.treatments?(
                    <>
                    <div >
                        <label className="flex justify-center mt-10 text-3xl text-white">{t('This is the list of all treatment')} </label>
                        <label className="flex justify-center my-10 text-white">
                             <Link to={'/AddTreatment'}>{t('Create new treatment')}</Link>
                       </label>
                       <div className="grid grid-cols-2 gap-4 ml-40">
                            {this.state.treatments.map(treatment =>(
                                <div className="flex justify-center rounded-full items-center w-8/12 h-10 my-10 text-white bg-purple-600" key={treatment.id}>
                                    <label className="flex break-all text-white text-base">
                                        {i18n.language==='en'?(treatment.title):(i18n.language==='fr' && treatment.traduction_french?(treatment.traduction_french):(i18n.language==='mg' && treatment.traduction_malagasy?(treatment.traduction_malagasy):(treatment.title)))}
                                    </label>
                                    <label className="text-blue-900 mx-10">
                                        <Link to={`/EditTreatment/${treatment.id}`}>{t('edit')}</Link>
                                    </label>
                                    <label className="text-red-500" onClick={e => this.deleteTreatment(treatment.id)}>
                                        {t('delete')}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    </>
                   
                ):(<h1>Loading...</h1>)}
            </div>
        )
		
	}
}


export default withTranslation()(AdminTreatments);