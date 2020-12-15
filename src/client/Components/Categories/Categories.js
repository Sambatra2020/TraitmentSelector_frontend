import React from 'react';
import axios from '../../../axios';
import Header from '../Header/Header';
import Registration from '../Registration/Registration';
import FinishTreatment from './CheckTreatmentPerCateg';
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import '../../client.css'

class Categories extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            etape:1,
            categories:null,
            treatments_per_categorie:null,
            patient_id:null,
            name:null,
        }
    }
    changerEtape =(id,newname,newetape)=>{
        this.setState(prevState =>({
            etape:newetape,
            patient_id:id,
            name:newname
        }))
    }
    showTreatments (id) {
        this.setState({
            showTreatments:id
        })
    }
    componentDidMount(){
        axios.get('/categories').then(response => {
            if(response.status === 200){
                this.setState({
                    categories:response.data.categories,
                    treatments_per_categorie:response.data.treatments_per_categorie,
                })
            }
            console.log(response)
        })
     }
     changeLanguage = (language) => {
		i18n.changeLanguage(language);
	  };


	render() {
        
        return (
			<div id="background">
                <Header/>
                <div >
                    {this.state.etape===1?(<Registration changerEtape={this.changerEtape}/>):null}
                    {this.state.etape===2 && this.state.categories ?(<FinishTreatment name={this.state.name} patient_id={this.state.patient_id} categories={this.state.categories} treatments_per_categorie={this.state.treatments_per_categorie}/>):null}
                </div>
            </div>
        )
		
	}
}


export default withTranslation()(Categories);