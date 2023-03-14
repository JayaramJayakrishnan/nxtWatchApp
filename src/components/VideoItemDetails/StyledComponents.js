import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`

export const ContentsContainer = styled.div`
  flex-grow: 1;
  display: flex;
`

export const VideoItemsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  margin-top: 30;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ViewsDateContainer = styled.ul`
  display: flex;
  padding: 0px;
  margin: 20px 0px;
`

export const ViewCount = styled.li`
  font-family: 'Roboto';
  font-size: 15px;
  color: #64748b;
  list-style-type: none;
  margin-right: 12px;
`

export const PublishedTime = styled.li`
  font-family: 'Roboto';
  font-size: 15px;
  color: #64748b;
  margin-left: 10px;
`
export const ReactionContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  margin: 20px 0px;
`

export const ReactionButton = styled.button`
  background-color: transparent;
  border-style: none;
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin-left: 15px;
  cursor: pointer;
`

export const ReactionLabel = styled.p`
  font-size: 15px;
  margin: 0px;
  margin-left: 5px;
`

export const HorizontalLine = styled.hr`
  width: 100%;
  border: ${props =>
    props.darkTheme ? '1px #475569 solid' : '1px #d7dfe9 solid'};
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  margin-top: 15px;
`
export const ChannelLogo = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin-top: 15px;
`

export const ChannelDetails = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`

export const ChannelName = styled(VideoTitle)`
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  margin: 10px 0px;
`

export const SubscriberCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#313131')};
`
