import React from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import HeaderAdmin from '../../HeaderAdmin';
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import '../../admin.css'

class AdminCategory extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            categories:null,
        }
    }
    
    componentDidMount(){
        axios.get('/categories').then(response => {
            if(response.status === 200){
                this.setState({
                    categories:response.data.categories,
                })
            }
        })
     }
    editCategory(id){
        console.log(id)

    }
    deleteCategory(id){
        axios.delete(`/categories/${id}`)
        window.location.reload()
    }
    
	render() {
        const { t } = this.props;
        return (
			<div id="back-admin">
                {this.state.categories?(
                    <>
                    <HeaderAdmin/>
                    <div >
                        <label className="flex justify-center mt-10 text-3xl text-white">{t('This is the list of all Categories')}</label>
                        <label className="flex justify-center my-10 text-white ">
                             <Link to={'/AddCategory'}>{t('Create new category')}</Link>
                       </label>
                       <div class="grid grid-cols-2 gap-4 ml-40">
                            {this.state.categories.map(category =>(
                                <div className="flex justify-center rounded-full items-center w-8/12 h-10 my-10 text-white bg-purple-600" key={category.id}>
                                    <label className="flex break-all text-white text-base">
                                        {i18n.language==='en'?(category.labelle_categorie):(i18n.language==='fr' && category.categorie_french!==null?(category.categorie_french):(i18n.language==='mg' && category.categorie_malagasy!==null?(category.categorie_malagasy):(category.labelle_categorie)))}
                                    </label>
                                    <label className="text-blue-500 mx-10">
                                        <Link to={`/EditCategory/${category.id}`}>{t('edit')}</Link>
                                    </label>
                                    <label className="text-red-500" onClick={e => this.deleteCategory(category.id)}>
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


export default withTranslation()(AdminCategory);