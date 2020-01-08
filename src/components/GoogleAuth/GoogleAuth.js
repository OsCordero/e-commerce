import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, createCart } from '../../actions';

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '143242901863-2cc0huqseas9nv1kfeclud0j88gh3du9.apps.googleusercontent.com',
          scope: 'email ',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      this.props.createCart();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className='google-button btn google' onClick={this.onSignOutClick}>
          <i className='fab fa-google'></i> Sign Out
        </button>
      );
    } else {
      return (
        <button className='google-button btn google' onClick={this.onSignInClick}>
          <i className='fab fa-google'></i> Sign in with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderAuthButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut, createCart })(GoogleAuth);
