import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ListItem,
  StyledLink,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedVideosIcon,
} from './StyledComponents'

const SideBarTabItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {tabDetails, isActive} = props
      const {id, tabName, path} = tabDetails

      const renderIcons = () => {
        switch (id) {
          case 'HOME':
            return <HomeIcon darkTheme={darkTheme} isActive={isActive} />
          case 'TRENDING':
            return <TrendingIcon darkTheme={darkTheme} isActive={isActive} />
          case 'GAMING':
            return <GamingIcon darkTheme={darkTheme} isActive={isActive} />
          case 'SAVED VIDEOS':
            return <SavedVideosIcon darkTheme={darkTheme} isActive={isActive} />
          default:
            return null
        }
      }

      return (
        <ListItem isActive={isActive} darkTheme={darkTheme}>
          <StyledLink to={path} darkTheme={darkTheme} isActive={isActive}>
            {renderIcons()}
            {tabName}
          </StyledLink>
        </ListItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideBarTabItem
