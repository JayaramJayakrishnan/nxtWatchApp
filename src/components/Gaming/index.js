import {Component} from 'react'

import Cookie from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import {
  BgContainer,
  ContentsContainer,
  GamingBanner,
  GamingIconContainer,
  GamingHeading,
  VideoItemsContainer,
  UnorderedList,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideoItem from '../GamingVideoItem'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

const apiCallStatusList = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    videosList: [],
    apiCallStatus: apiCallStatusList.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiCallStatus: apiCallStatusList.inProgress})
    const jwtToken = Cookie.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(item => ({
        id: item.id,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      this.setState({
        apiCallStatus: apiCallStatusList.success,
        videosList: updatedData,
      })
    } else {
      this.setState({apiCallStatus: apiCallStatusList.failure})
    }
  }

  onClickRetry = () => {
    this.getVideosList()
  }

  renderVideosList = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        const {videosList} = this.state

        return (
          <>
            <GamingBanner darkTheme={darkTheme}>
              <GamingIconContainer darkTheme={darkTheme}>
                <SiYoutubegaming />
              </GamingIconContainer>
              <GamingHeading darkTheme={darkTheme}>Gaming</GamingHeading>
            </GamingBanner>
            <UnorderedList>
              {videosList.map(item => (
                <GamingVideoItem videoDetails={item} key={item.id} />
              ))}
            </UnorderedList>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  switchViews = () => {
    const {apiCallStatus} = this.state

    switch (apiCallStatus) {
      case apiCallStatusList.inProgress:
        return <LoadingView />
      case apiCallStatusList.success:
        return this.renderVideosList()
      case apiCallStatusList.failure:
        return <FailureView onClickRetry={this.onClickRetry} />
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <BgContainer darkTheme={darkTheme}>
              <Header />
              <ContentsContainer>
                <SideBar activeTabId="GAMING" />
                <VideoItemsContainer>{this.switchViews()}</VideoItemsContainer>
              </ContentsContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
