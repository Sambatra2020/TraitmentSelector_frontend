import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { adminLoginAttempt } from '../../../redux/Auth/auth.action';
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import '../../admin.css'

const LoginSchema = Yup.object().shape({
    adminname: Yup.string()
        .required('error'),
    password: Yup.string()
        .required('error')
});

class Signin extends React.Component{
    render(){
      const { error } = this.props
      const { t } = this.props
      return(
        <div id="back-admin">
          {/* <div className="flex items-center justify-center h-20 bg-purple-600 text-2xl font-serif text-white">
            <button onClick={() => this.changeLanguage("en")} className="ml-5 mr-5" >EN</button>
            <button onClick={() => this.changeLanguage("fr")} className="ml-5 mr-5">FR</button>
            <button onClick={() => this.changeLanguage("mg")}>MG</button>
				  </div> */}
          <Formik
            initialValues={{
                  adminname: '',
                  password: ''
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                this.props.adminLoginAttempt(values);

              }}
          >
            {({ errors, touched }) => (
            
                <div className="flex justify-center">
                  <div className="  w-2/6 py-10 ">
                    <div className=" w-11/12 bg-gray-100 border rounded mt-20">
                        <Form className="  px-10" >
                          <h1 className="block tracking-wide text-purple-900 text-xl font-bold mb-2 my-5 text-center">{t('Sign In')}</h1>
                          
                            <label className="block tracking-wide text-purple-900 text-base font-bold mb-2 my-8" for="grid-city">
                                {t('name')}
                            </label>
                            <Field name="adminname" className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                            px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder={t('name')} 
                            />
                            { errors.adminname && touched.adminname ? ( <div className="text-red-600 text-sm font-bold">{t('errors')}</div>) : null }                       
                            <label className="block tracking-wide text-purple-900 text-base font-bold mb-2 my-8" for="grid-city">
                                {t('password')} 
                            </label>
                            <Field name="password" type="password" className="w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3
                            px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder={t('password')} />
                            { errors.password && touched.password ? (<div className="text-red-600 text-sm font-bold">{t('errors')}</div>) : null }
                            <label className="text-red-600 text-sm ">
                            {error?(<>{t('error')}</>):null}
                            </label>
                            <button className="w-full appearance-none block  bg-purple-500 text-white rounded py-3
                            px-4 my-10 leading-tight focus:outline-none hover:font-bold"  type="submit">{t('Sign in')}</button> 
                        </Form>
                      </div>
                  </div>
                </div> 
                  
          )}
         </Formik>
        </div> 
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
        ...state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        adminLoginAttempt: (values) => {dispatch(adminLoginAttempt(values))}
    }
}
  export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Signin));
  