import {BiListPlus} from 'react-icons/bi'

import {
  BgContainer,
  ContentsContainer,
  VideoItemsContainer,
  NoSavedVideosViewContainer,
  ViewImage,
  ViewHeading,
  ViewText,
  SavedVideosBanner,
  SavedVideosIconContainer,
  SavedVideosHeading,
  UnorderedList,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideoItem from '../SavedVideoItem'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme, savedVideos} = value
      console.log(savedVideos)

      const renderSavedVideos = () => {
        if (savedVideos.length === 0) {
          return (
            <NoSavedVideosViewContainer>
              <ViewImage
                alt="no saved videos"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              />
              <ViewHeading darkTheme={darkTheme}>
                No Saved Videos Found
              </ViewHeading>
              <ViewText darkTheme={darkTheme}>
                You can save your videos while watching them
              </ViewText>
            </NoSavedVideosViewContainer>
          )
        }
        return (
          <>
            <SavedVideosBanner darkTheme={darkTheme} data-testid="banner">
              <SavedVideosIconContainer darkTheme={darkTheme}>
                <BiListPlus />
              </SavedVideosIconContainer>
              <SavedVideosHeading darkTheme={darkTheme}>
                Saved Videos
              </SavedVideosHeading>
            </SavedVideosBanner>
            <UnorderedList>
              {savedVideos.map(item => (
                <SavedVideoItem videoDetails={item} key={item.id} />
              ))}
            </UnorderedList>
          </>
        )
      }

      return (
        <BgContainer darkTheme={darkTheme} data-testid="savedVideos">
          <Header />
          <ContentsContainer>
            <SideBar activeTabId="SAVED VIDEOS" />
            <VideoItemsContainer>{renderSavedVideos()}</VideoItemsContainer>
          </ContentsContainer>
        </BgContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
