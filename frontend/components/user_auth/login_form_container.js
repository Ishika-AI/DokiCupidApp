import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, dismissSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Log in"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (formUser) => (dispatch(login(formUser))),
  dismissSessionErrors: () => dispatch(dismissSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);