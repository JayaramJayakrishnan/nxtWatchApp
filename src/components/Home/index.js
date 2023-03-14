import {Component} from 'react'
import Cookie from 'js-cookie'
import {BsSearch} from 'react-icons/bs'

import {
  BgContainer,
  ContentsContainer,
  VideoItemsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  UnorderedList,
  ViewContainer,
  ViewImage,
  ViewHeading,
  ViewText,
  RetryButton,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import Banner from '../Banner'
import VideoItem from '../VideoItem'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

const apiCallStatusList = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    apiCallStatus: apiCallStatusList.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiCallStatus: apiCallStatusList.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookie.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    this.getVideosList()
  }

  onClickRetry = () => {
    this.getVideosList()
  }

  renderVideosList = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return (
        <NxtWatchContext.Consumer>
          {value => {
            const {darkTheme} = value

            return (
              <ViewContainer>
                <ViewImage
                  alt="no videos"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                />
                <ViewHeading darkTheme={darkTheme}>
                  No Search results found
                </ViewHeading>
                <ViewText>
                  Try different key words or remove search filter
                </ViewText>
                <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
              </ViewContainer>
            )
          }}
        </NxtWatchContext.Consumer>
      )
    }

    return (
      <UnorderedList>
        {videosList.map(item => (
          <VideoItem videoDetails={item} key={item.id} />
        ))}
      </UnorderedList>
    )
  }

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
            <BgContainer darkTheme={darkTheme} data-testid="home">
              <Header />
              <ContentsContainer>
                <SideBar activeTabId="HOME" />
                <VideoItemsContainer>
                  <Banner />
                  <SearchContainer darkTheme={darkTheme}>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchButton
                      type="button"
                      darkTheme={darkTheme}
                      onClick={this.onClickSearchIcon}
                      data-testid="searchButton"
                    >
                      <BsSearch />
                    </SearchButton>
                  </SearchContainer>
                  {this.switchViews()}
                </VideoItemsContainer>
              </ContentsContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
