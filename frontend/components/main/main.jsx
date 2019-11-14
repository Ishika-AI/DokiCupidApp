import LoginFormContainer from '../user_auth/login_form_container';
import SignupFormContainer from '../user_auth/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Home  from './home';
import Splash from '../splash';
import DemoLoginFormContainer from '../user_auth/demo_login_form_container.jsx';
import ProfileShowContainer from '../profiles/profile_show_container';
import CreateProfileFormContainer from '../profiles/create_profile_form_container';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  
    return (
      <div className="main-component">
        
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/demo-login" component={DemoLoginFormContainer} />

          <AuthRoute exact path="/" component={Splash} />
          <ProtectedRoute exact path="/home" component={Home} />

          <ProtectedRoute exact path="/profiles/:profileId" component={ProfileShowContainer} />
          <ProtectedRoute exact path={`/profiles/${this.props.currentUserId}/create`} component={CreateProfileFormContainer}/>

          {/* ANY INVALID PATH: */}
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
        
        
        <Route
          exact path="/"
          render={() => (this.props.currentUser ? <Redirect to="/home" /> : <Redirect to="/" />)}
        />
      </div>
    )
  }
}


export default Main;