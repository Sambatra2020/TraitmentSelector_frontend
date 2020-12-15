import React from 'react';
import Header from '../Header/Header';
import {withTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import '../../client.css'


class FinishTreatment extends React.Component {
	changeLanguage = (language) => {
		i18n.changeLanguage(language);
    };
    
	render() {
        const { t } = this.props;
		return (
			<div id="back-treatment">
			<Header/>
				<div className="flex items-center justify-center text-3xl h-72 text-white">
					{t('YOU FINISH TO TAKE YOUR TREATMENTS')}
				</div>
			</div>
			
		)
	}
}


export default withTranslation()(FinishTreatment);