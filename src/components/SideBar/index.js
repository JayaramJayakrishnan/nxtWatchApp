import NxtWatchContext from '../../context/NxtWatchContext'
import SideBarTabItem from '../SideBarTabItem'
import {
  SideBarContainer,
  ListItemsContainer,
  ContactUsSection,
  MediaLogoContainer,
  ListItem,
  MediaIcon,
  ContactUsSectionText,
} from './StyledComponents'

import './index.css'

const TabsList = [
  {
    tabName: 'Home',
    id: 'HOME',
    path: '/',
  },
  {
    tabName: 'Trending',
    id: 'TRENDING',
    path: '/trending',
  },
  {
    tabName: 'Gaming',
    id: 'GAMING',
    path: '/gaming',
  },
  {
    tabName: 'Saved videos',
    id: 'SAVED VIDEOS',
    path: '/saved-videos',
  },
]

const SideBar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {activeTabId} = props
      return (
        <SideBarContainer darkTheme={darkTheme}>
          <ListItemsContainer>
            {TabsList.map(item => (
              <SideBarTabItem
                tabDetails={item}
                key={item.id}
                isActive={activeTabId === item.id}
              />
            ))}
          </ListItemsContainer>
          <ContactUsSection darkTheme={darkTheme}>
            <p>CONTACT US</p>
            <MediaLogoContainer>
              <ListItem>
                <MediaIcon
                  alt="facebook logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                />
              </ListItem>
              <ListItem>
                <MediaIcon
                  alt="twitter logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                />
              </ListItem>
              <ListItem>
                <MediaIcon
                  alt="linked in logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                />
              </ListItem>
            </MediaLogoContainer>
            <ContactUsSectionText darkTheme={darkTheme}>
              Enjoy! now to see your channels and recommendations!
            </ContactUsSectionText>
          </ContactUsSection>
        </SideBarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideBar
