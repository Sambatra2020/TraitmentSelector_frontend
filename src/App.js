import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './client/Homepage'
import Header from './client/Components/Header/Header';
import Footer from './client/Components/Footer/Footer';
import Treatments from './client/Components/Treatments/Treatments';
import Categories from './client/Components/Categories/Categories'
import FinishTreatment from './client/Components/Treatments/FinishTreatment';
import AdminPageHome from './admin/AdminPageHome';
import AdminTreatments from './admin/Components/Treatments/Treatments';
import EditTreatment from './admin/Components/Treatments/EditTreatment';
import AddTreatment from './admin/Components/Treatments/AddTreatment';
import AdminCategory from './admin/Components/Category/Category';
import EditCategory from './admin/Components/Category/EditCategory';
import AddCategory from './admin/Components/Category/AddCategory';
import HomepageAll from './HomepageAll';
import { connect } from 'react-redux';
import Signin from './admin/Components/Connection/Connection'
import ListeTreatment from './admin/Components/ListTreatment/ListeTreatment';

class App extends Component {
  state = [
    
  ];

  componentDidMount = () => {
   
  };
  
  render() {
    const { isAuthenticated} = this.props;
    return (
      <BrowserRouter>
          <Switch>
          
          {isAuthenticated?(
            <>
            <Route exact path='/AdminPage' component={AdminPageHome}/>
            <Route exact path='/Admin/Treatments' component={AdminTreatments}/>
            <Route exact path='/EditTreatment/:id' component={EditTreatment}/>
            <Route exact path='/AddTreatment' component={AddTreatment}/>
            <Route exact path='/Admin/Categories' component={AdminCategory}/>
            <Route exact path='/EditCategory/:id' component={EditCategory}/>
            <Route exact path='/AddCategory' component={AddCategory}/>
            <Route exact path='/Admin/List' component={ListeTreatment}/>
            </>
          ):(
            <>
            <Route exact path='/' component={HomepageAll} />
            <Route exact path='/Patient' component={Homepage}/>
            <Route exact path='/Header' component={Header}/>
            <Route exact path='/Treatments' component={Treatments} />
            <Route exact path='/Categories' component={Categories} />
            <Route exact path='/Treatments/Finish' component={FinishTreatment}/>
            <Route exact path='/Signin' component={Signin}/>
            </>
          )}
           
          </Switch>
          <Footer /> 
      </BrowserRouter>
    )
  }
}
const mapStateToprops =(state) => {
  return {
    ...state.auth
  }
}

export default connect(mapStateToprops)(App);
