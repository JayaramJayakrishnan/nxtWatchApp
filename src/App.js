import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import videoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {darkTheme: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  saveVideo = videoDetails => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoDetails],
    }))
  }

  removeSavedVideo = id => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(item => item.id !== id),
    }))
  }

  render() {
    const {darkTheme, savedVideos} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          darkTheme,
          savedVideos,
          saveVideo: this.saveVideo,
          removeSavedVideo: this.removeSavedVideo,
          changeTheme: this.changeTheme,
          toggleBannerVisibility: this.toggleBannerVisibility,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={videoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
