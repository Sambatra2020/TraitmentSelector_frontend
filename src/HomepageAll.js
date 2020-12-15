import React from 'react';
import { withTranslation } from 'react-i18next';
import i18n from './i18n';
import { Link } from 'react-router-dom';
import patient from './patient.ico';
import admin from './admin.ico';
import './App.css'


class HomepageAll extends React.Component {

	changeLanguage = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem('languageNavigator', language);
	  };


	render() {
		const { t } = this.props;
		return (
			<div>
                <div className="flex items-center justify-center h-20 bg-purple-600 text-2xl font-serif text-white">
					<button onClick={() => this.changeLanguage("en")} className="ml-5 mr-5" >EN</button>
					<button onClick={() => this.changeLanguage("fr")} className="ml-5 mr-5">FR</button>
					<button onClick={() => this.changeLanguage("mg")}>MG</button>
				</div>
				<div id="bg-home">
					<div className="flex items-center justify-center text-2xl h-36 text-purple-900">
						{t('introduction')}
					</div>
					<div className="flex items-center justify-center text-2xl h-36 text-purple-900">
						{t('choix')}
					</div>
					
					<div className="flex items-center justify-center text-3xl text-purple-600 ml-10">
						<label >
							<Link to={'/Patient'}>
								<img src={patient} alt="patient"></img>
								{t('PATIENT')}
							</Link>
						</label>
						<label className="mx-20">
							<Link to={'/Signin'}>
							<img src={admin} alt="admin"></img>
								{t('ADMIN')}
							</Link>
						</label>
					</div>
				</div>
                
			</div>
			
		)
	}
}
export default withTranslation()(HomepageAll);