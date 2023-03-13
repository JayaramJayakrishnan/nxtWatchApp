import {Link} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ListItem,
  Thumbnail,
  VideoDetailsContainer,
  VideoDetails,
  VideoTitle,
  ViewCount,
} from './StyledComponents'

const GamingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value

      const {videoDetails} = props
      const {id, thumbnailUrl, title, viewCount} = videoDetails

      return (
        <ListItem>
          <Link to={`/videos/${id}`} className="link-styling">
            <VideoDetailsContainer>
              <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
              <VideoDetails>
                <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
                <ViewCount>{`${viewCount} Watching Worldwide`}</ViewCount>
              </VideoDetails>
            </VideoDetailsContainer>
          </Link>
        </ListItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingVideoItem
