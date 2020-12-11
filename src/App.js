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

export default class App extends Component {
  state = [
    
  ];

  componentDidMount = () => {
   
  };
  
  render() {
    return (
      <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Treatments' component={Treatments} />
            <Route exact path='/Categories' component={Categories} />
            <Route exact path='/Treatments/Finish' component={FinishTreatment}/>
            <Route exact path='/AdminPage' component={AdminPageHome}/>
            <Route exact path='/Admin/Treatments' component={AdminTreatments}/>
            <Route exact path='/EditTreatment/:id' component={EditTreatment}/>
            <Route exact path='/AddTreatment' component={AddTreatment}/>
          </Switch>
          <Footer /> 
      </BrowserRouter>
    )
  }
}
