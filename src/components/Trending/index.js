import {Component} from 'react'

import Cookie from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import {
  BgContainer,
  ContentsContainer,
  TrendingBanner,
  TrendingIconContainer,
  TrendingHeading,
  VideoItemsContainer,
  UnorderedList,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

const apiCallStatusList = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
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
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        channel: {
          name: item.channel.name,
          profileImageUrl: item.channel.profile_image_url,
        },
        id: item.id,
        publishedAt: item.published_at,
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
            <TrendingBanner darkTheme={darkTheme} data-testid="banner">
              <TrendingIconContainer darkTheme={darkTheme}>
                <HiFire />
              </TrendingIconContainer>
              <TrendingHeading darkTheme={darkTheme}>Trending</TrendingHeading>
            </TrendingBanner>
            <UnorderedList>
              {videosList.map(item => (
                <TrendingVideoItem videoDetails={item} key={item.id} />
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
            <BgContainer darkTheme={darkTheme} data-testid="trending">
              <Header />
              <ContentsContainer>
                <SideBar activeTabId="TRENDING" />
                <VideoItemsContainer>{this.switchViews()}</VideoItemsContainer>
              </ContentsContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
