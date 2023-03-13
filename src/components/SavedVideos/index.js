import {Component} from 'react'

import {
  BgContainer,
  ContentsContainer,
  VideoItemsContainer,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import Banner from '../Banner'

class SavedVideos extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <BgContainer darkTheme={darkTheme}>
              <Header />
              <ContentsContainer>
                <SideBar activeTabId="SAVED VIDEOS" />
                <VideoItemsContainer>
                  <Banner />
                </VideoItemsContainer>
              </ContentsContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
