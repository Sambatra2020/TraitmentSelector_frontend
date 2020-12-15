import React from 'react';
import Header from './Components/Header/Header';
import { withTranslation } from 'react-i18next';
import i18n from '../i18n';
import './client.css'


class Homepage extends React.Component {

	changeLanguage = (language) => {
		i18n.changeLanguage(language);
	  };


	render() {
		const { t } = this.props;
		return (
			<div id="background">
				<Header/>
				<div className="flex items-center justify-center text-3xl h-72 text-green-900">
				</div>
				<div className="flex items-center justify-center text-5xl text-purple-600">
					{t('MTOMADY')}
				</div>
			</div>
			
		)
	}
}


export default withTranslation()(Homepage);