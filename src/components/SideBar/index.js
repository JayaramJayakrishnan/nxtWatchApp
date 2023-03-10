import {Component} from 'react'

import {FaTwitter, FaLinkedinIn, FaFacebookF} from 'react-icons/fa'

import NxtWatchContext from '../../context/NxtWatchContext'
import SideBarTabItem from '../SideBarTabItem'
import {
  SideBarContainer,
  ListItemsContainer,
  ContactUsSection,
  MediaLogoContainer,
  ListItem,
  FacebookIconBg,
  TwitterIconBg,
  LinkedinIconBg,
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

class SideBar extends Component {
  state = {activeTabId: TabsList[0].id}

  changeActiveTab = id => {
    this.setState({activeTabId: id})
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          const {activeTabId} = this.state

          return (
            <SideBarContainer darkTheme={darkTheme}>
              <ListItemsContainer>
                {TabsList.map(item => (
                  <SideBarTabItem
                    tabDetails={item}
                    key={item.id}
                    isActive={activeTabId === item.id}
                    changeActiveTab={this.changeActiveTab}
                  />
                ))}
              </ListItemsContainer>
              <ContactUsSection darkTheme={darkTheme}>
                <p>CONTACT US</p>
                <MediaLogoContainer>
                  <ListItem>
                    <FacebookIconBg>
                      <FaFacebookF />
                    </FacebookIconBg>
                  </ListItem>
                  <ListItem>
                    <TwitterIconBg>
                      <FaTwitter />
                    </TwitterIconBg>
                  </ListItem>
                  <ListItem>
                    <LinkedinIconBg>
                      <FaLinkedinIn />
                    </LinkedinIconBg>
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
  }
}

export default SideBar
