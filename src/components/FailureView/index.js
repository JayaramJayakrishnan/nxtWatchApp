import {
  ViewContainer,
  ViewImage,
  ViewHeading,
  ViewText,
  RetryButton,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const FailureView = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {onClickRetry} = props

      const imageUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      return (
        <ViewContainer>
          <ViewImage alt="failureView" src={imageUrl} />
          <ViewHeading darkTheme={darkTheme}>
            Oops! Something Went Wrong
          </ViewHeading>
          <ViewText>
            We are having some trouble to complete your request.
            <br />
            Please try again.
          </ViewText>
          <RetryButton onClick={onClickRetry}>Retry</RetryButton>
        </ViewContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default FailureView
