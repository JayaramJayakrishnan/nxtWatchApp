import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

import './App.css'

class App extends Component {
  state = {darkTheme: false}

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  render() {
    const {darkTheme} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
