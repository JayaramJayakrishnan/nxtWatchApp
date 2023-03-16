import {Component} from 'react'

import {
  BgContainer,
  ContentsContainer,
  VideoItemsContainer,
  NotFoundViewContainer,
  ViewImage,
  ViewHeading,
  ViewText,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'

class NotFound extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          const renderView = () => {
            const imageUrl = darkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

            return (
              <NotFoundViewContainer>
                <ViewImage alt="not found" src={imageUrl} />
                <ViewHeading darkTheme={darkTheme}>Page Not Found</ViewHeading>
                <ViewText>
                  We are sorry, the page you requested could not be found
                </ViewText>
              </NotFoundViewContainer>
            )
          }

          return (
            <BgContainer darkTheme={darkTheme}>
              <Header />
              <ContentsContainer>
                <SideBar />
                <VideoItemsContainer>{renderView()}</VideoItemsContainer>
              </ContentsContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default NotFound
