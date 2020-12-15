import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import { withTranslation } from 'react-i18next';
import i18n from '../i18n';
import './admin.css'

class AdminPageHome extends React.Component {
	changeLanguage = (language) => {
		i18n.changeLanguage(language);
	  };


	render() {
		const { t } = this.props;
		return (
			<div id="back-admin">
				<HeaderAdmin/>
				<div className="flex items-center justify-center text-3xl h-72 text-white">
					{t('WELCOME HOME TO THE ADMIN PAGE')}
				</div>
				<div className="flex items-center justify-center text-5xl text-white">
					{t('MTOMADY')}
				</div>
			</div>
			
		)
	}
}


export default withTranslation()(AdminPageHome);