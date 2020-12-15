import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n'

class Header extends React.Component {

	changeLanguage = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem('languageNavigator', language);
	};

	render() {
		const { t } = this.props;
		return (
			<>
				<div className="flex items-center h-20 bg-purple-600 text-2xl font-serif text-white">
					<div className="mx-5">
						<label ><Link to="/Patient">{t('Home')}</Link></label>
						<label className="ml-5 mr-5"><Link to="/Treatments">{t('Treatments')}</Link></label>
						<label><Link to="/Categories">{t('Categories')}</Link></label>
					</div>
					
					<button onClick={() => this.changeLanguage("en")} className="ml-5 mr-5" >EN</button>
					<button onClick={() => this.changeLanguage("fr")} className="ml-5 mr-5">FR</button>
					<button onClick={() => this.changeLanguage("mg")}>MG</button>
				</div>
			</>
		)
	}
}


export default withTranslation()(Header);