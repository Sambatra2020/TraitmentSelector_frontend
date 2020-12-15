import React from 'react';
import axios from '../../../axios';
import HeaderAdmin from '../../HeaderAdmin';
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import '../../admin.css'

class ListTreatments extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            lists:null,
        }
    }
    
    componentDidMount(){
        axios.get('/list_treatments').then(response => {
            if(response.status === 200){
               this.setState({
                   lists:response.data
               })
            }
        })
     }
	render() {
        console.log(this.state.lists)
        const { t } = this.props;
        return (
			<div id="back-admin">
            <HeaderAdmin/>
                {this.state.lists?(
                    <>
                    <div >
                       
                       <div>
                            <div className="flex justify-end w-7/12  my-10 text-purple-600">
                                 <label className="flex w-2/12 break-all ">
                                    {t('PATIENT NAME')}
                                 </label>
                                 <label className="flex w-2/12 break-all">
                                    {t('TREATMENT')}
                                 </label>
                            </div>
                            {this.state.lists.map(list =>(
                                <div className="flex justify-end w-7/12  my-10 text-blue-500" key={list.id}>
                                 <label className="flex w-2/12 break-all">
                                 {list.patient.name}
                                 </label>
                                 <label className="flex w-2/12 break-all">
                                 {i18n.language==='en'?(list.treatment.title):(i18n.language==='fr' && list.treatment.traduction_french?(list.treatment.traduction_french):(i18n.language==='mg' && list.treatment.traduction_malagasy?(list.treatment.traduction_malagasy):(list.treatment.title)))}
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


export default withTranslation()(ListTreatments);