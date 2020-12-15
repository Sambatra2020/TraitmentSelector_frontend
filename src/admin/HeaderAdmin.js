import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18n from '../i18n';
import { adminLogoutAttempt } from '../redux/Auth/auth.action';
import { connect } from 'react-redux';
import en from './en.jpg';
import fr from './fr.png';
import mg from './mg.svg'


class HeaderAdmin extends React.Component {
	changeLanguage = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem('languageNavigator', language);
	};
	  logout = () => {
		console.log(this.props);
		this.props.adminLogoutAttempt()
		window.location.reload()
	  }

	render() {
		const { t } = this.props;

		return (
			<>
				<div className="flex items-center h-20 bg-purple-600 text-2xl font-serif text-white">
					<div className="mx-5 w-1/2">
						<label ><Link to="/AdminPage">{t('Home')}</Link></label>
						<label className="ml-5 mr-5"><Link to="/Admin/Treatments">{t('Treatments')}</Link></label>
						<label><Link to="/Admin/Categories">{t('Categories')}</Link></label>
						<label className="ml-5 mr-5"><Link to="/Admin/List">{t('List Treatments')}</Link></label>
					</div>
					<div className="flex mx-5 w-1/2 justify-end">
						<button onClick={() => this.changeLanguage("en")} className="ml-5 mr-5" >
							<img src={en} alt="EN" width="100"></img>
						</button>
						<button onClick={() => this.changeLanguage("mg")} className="mr-10">
							<img src={mg} alt="MG" width="100"></img>
						</button>
						<button onClick={() => this.changeLanguage("fr")} className="ml-5 mr-5">
							<img src={fr} alt="FR" width="100"></img>
						</button>
						
						<button onClick={() => this.logout()} className="ml-10">{t('Deconnecter')}</button>
					</div>	
				</div>
			</>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        adminLogoutAttempt: () => dispatch(adminLogoutAttempt())
    }
}

export default connect(null, mapDispatchToProps) (withTranslation()(HeaderAdmin));