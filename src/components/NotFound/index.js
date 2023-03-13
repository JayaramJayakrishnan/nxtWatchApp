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

class NotFound extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <BgContainer darkTheme={darkTheme}>
              <Header />
              <ContentsContainer>
                <SideBar />
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

export default NotFound
