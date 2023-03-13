import Loader from 'react-loader-spinner'

import ViewContainer from './StyledComponents'

const LoadingView = () => (
  <ViewContainer>
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  </ViewContainer>
)

export default LoadingView
