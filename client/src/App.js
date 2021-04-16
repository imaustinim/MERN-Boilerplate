import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import API from "./pages/api/API"
import Auth from "./pages/auth/Auth"
import Projects from "./pages/projects/Projects"
import Users from "./pages/users/Users"
import Search from "./pages/search/Search"
import Notifications from "./pages/notifications/Notifications"
import Footer from "./components/footer/Footer"
// import { getUser } from "./utilities/Users";
import { getUser } from "./utilities/users-service";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2034B9"
      },
      secondary: {
        main: "#FFCD0B"
      }
    }
  });

export default class App extends Component {
    state = {
        user: getUser(),
    }

    setUser = (user) => {
        this.setState({ user });
    }

    componentDidMount() {
        console.log("mounted", this.state.user)
    }

    componentDidUpdate() {
        console.log("update", this.state.user)
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/api" component={API}/>
                        <Route path="/auth" component={Auth}/>
                        <Route path="/projects" component= {Projects}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/search" component={Search}/>
                        <Route path="/notifications" component={Notifications}/>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                    <Footer/>
                </Router>
            </ThemeProvider>
        )
    }
}

