import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import Home from "./pages/home/home.page";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/signin/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  unsubscribefromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          console.log(snapShot);
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  async componentWillUnmount() {
    await this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <div className="site-wrapper">
            <Route
              exact
              path="/"
              component={() => <Home currentUser={this.props.currentUser} />}
            />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
