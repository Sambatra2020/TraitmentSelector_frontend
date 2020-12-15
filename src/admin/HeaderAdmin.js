import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18n from '../i18n';
import { adminLogoutAttempt } from '../redux/Auth/auth.action';
import { connect } from 'react-redux';


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
					<div className="mx-5">
						<label ><Link to="/AdminPage">{t('Home')}</Link></label>
						<label className="ml-5 mr-5"><Link to="/Admin/Treatments">{t('Treatments')}</Link></label>
						<label><Link to="/Admin/Categories">{t('Categories')}</Link></label>
						<label className="ml-5 mr-5"><Link to="/Admin/List">{t('List Treatments')}</Link></label>
						<button onClick={() => this.changeLanguage("en")} className="ml-5 mr-5" >EN</button>
						<button onClick={() => this.changeLanguage("fr")} className="ml-5 mr-5">FR</button>
						<button onClick={() => this.changeLanguage("mg")} className="mr-10">MG</button>

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