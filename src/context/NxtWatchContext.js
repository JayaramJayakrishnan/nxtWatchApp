import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  displayBanner: true,
  savedVideos: [],
  saveVideo: () => {},
  removeSavedVideo: () => {},
  changeTheme: () => {},
  toggleBannerVisibility: () => {},
})

export default NxtWatchContext
