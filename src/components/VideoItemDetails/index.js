import {Component} from 'react'
import Cookie from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import {
  BgContainer,
  ContentsContainer,
  VideoItemsContainer,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelDetails,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  ViewCount,
  PublishedTime,
  HorizontalLine,
  FlexContainer,
  ReactionContainer,
  ReactionButton,
  ReactionLabel,
  SubscriberCount,
  Description,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

const apiCallStatusList = {
  initial: 'INITIAL',
  inProgress: 'IN PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiCallStatus: apiCallStatusList.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiCallStatus: apiCallStatusList.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookie.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const videoDetails = data.video_details
      const updatedData = {
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        videoUrl: videoDetails.video_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
      }
      this.setState({
        apiCallStatus: apiCallStatusList.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiCallStatus: apiCallStatusList.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }))
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  renderVideoDetails = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme, savedVideos, saveVideo, removeSavedVideo} = value
        const {videoDetails} = this.state
        const {
          channel,
          id,
          publishedAt,
          videoUrl,
          description,
          title,
          viewCount,
        } = videoDetails
        const {name, profileImageUrl, subscriberCount} = channel
        const {isLiked, isDisliked} = this.state
        const isSaved = savedVideos.find(item => item.id === id) !== undefined
        const onClickSave = () => {
          if (isSaved) {
            removeSavedVideo(id)
          } else {
            saveVideo(videoDetails)
          }
        }

        const SaveButtonText = isSaved ? 'Saved' : 'Save'

        return (
          <>
            <ReactPlayer url={videoUrl} width="100%" height="540px" />
            <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
            <FlexContainer>
              <ViewsDateContainer>
                <ViewCount>{`${viewCount} views`}</ViewCount>
                <PublishedTime>
                  {`${formatDistanceToNowStrict(new Date(publishedAt))} ago`}
                </PublishedTime>
              </ViewsDateContainer>
              <ReactionContainer>
                <li>
                  <ReactionButton
                    type="button"
                    isActive={isLiked}
                    onClick={this.onClickLike}
                  >
                    <BiLike />
                    <ReactionLabel>Like</ReactionLabel>
                  </ReactionButton>
                </li>
                <li>
                  <ReactionButton
                    type="button"
                    isActive={isDisliked}
                    onClick={this.onClickDislike}
                  >
                    <BiDislike />
                    <ReactionLabel>Dislike</ReactionLabel>
                  </ReactionButton>
                </li>
                <li>
                  <ReactionButton
                    type="button"
                    isActive={isSaved}
                    onClick={onClickSave}
                  >
                    <BiListPlus />
                    <ReactionLabel>{SaveButtonText}</ReactionLabel>
                  </ReactionButton>
                </li>
              </ReactionContainer>
            </FlexContainer>
            <HorizontalLine darkTheme={darkTheme} />
            <ChannelDetailsContainer>
              <ChannelLogo alt="channel logo" src={profileImageUrl} />
              <ChannelDetails>
                <ChannelName darkTheme={darkTheme}>{name}</ChannelName>
                <SubscriberCount>{subscriberCount} Subscribers</SubscriberCount>
                <Description darkTheme={darkTheme}>{description} </Description>
              </ChannelDetails>
            </ChannelDetailsContainer>
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
        return this.renderVideoDetails()
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
            <BgContainer darkTheme={darkTheme} data-testid="videoItemDetails">
              <Header />
              <ContentsContainer>
                <SideBar />
                <VideoItemsContainer>{this.switchViews()}</VideoItemsContainer>
              </ContentsContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
