import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  savedVideos: [],
  saveVideo: () => {},
  removeSavedVideo: () => {},
  changeTheme: () => {},
})

export default NxtWatchContext
