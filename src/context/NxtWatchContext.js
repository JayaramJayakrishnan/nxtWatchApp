import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
})

export default NxtWatchContext
