import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ListItem,
  Thumbnail,
  VideoDetailsContainer,
  VideoDetails,
  VideoTitle,
  ChannelName,
  ViewsDateContainer,
  ViewCount,
  PublishedTime,
} from './StyledComponents'

const TrendingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value

      const {videoDetails} = props
      const {
        channel,
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = videoDetails
      const {name} = channel

      return (
        <ListItem>
          <Link to={`/videos/${id}`} className="link-styling">
            <VideoDetailsContainer>
              <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
              <VideoDetails>
                <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
                <ChannelName darkTheme={darkTheme}>{name}</ChannelName>
                <ViewsDateContainer>
                  <ViewCount>{`${viewCount} views`}</ViewCount>
                  <PublishedTime>
                    {`${formatDistanceToNowStrict(new Date(publishedAt))} ago`}
                  </PublishedTime>
                </ViewsDateContainer>
              </VideoDetails>
            </VideoDetailsContainer>
          </Link>
        </ListItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default TrendingVideoItem
