import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import en from './en.jpg';
import fr from './fr.png';
import mg from './mg.svg'

class Header extends React.Component {

	changeLanguage = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem('languageNavigator', language);
	};

	render() {
		const { t } = this.props;
		return (
			<>
				<div className="flex items-center h-20 bg-purple-600 text-2xl font-serif text-white w-full">
					<div className="mx-5 w-1/2">
						<label ><Link to="/Patient">{t('Home')}</Link></label>
						<label className="ml-5 mr-5"><Link to="/Treatments">{t('Treatments')}</Link></label>
						<label><Link to="/Categories">{t('Categories')}</Link></label>
					</div>
					<div  className="flex mx-5 w-1/2 justify-end">
						<button onClick={() => this.changeLanguage("en")} className="ml-5 mr-5" >
							<img src={en} alt="EN" width="100"></img>
						</button>
						<button onClick={() => this.changeLanguage("mg")}>
							<img src={mg} alt="MG" width="100"></img>
						</button>
						<button onClick={() => this.changeLanguage("fr")} className="ml-5 mr-5">
							<img src={fr} alt="FR" width="100"></img>
						</button>
						
					</div>
				</div>
			</>
		)
	}
}


export default withTranslation()(Header);