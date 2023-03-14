import styled from 'styled-components'

export const ListItem = styled.li`
  width: 32%;
  margin-bottom: 30px;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
`
export const ChannelLogo = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin-top: 15px;
`

export const VideoDetails = styled.div`
  flex-grow: 1;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  margin-bottom: 10px;
`

export const ChannelName = styled(VideoTitle)`
  color: #64748b;
  margin: 10px 0px;
`

export const ViewsDateContainer = styled.ul`
  display: flex;
  padding: 0px;
  margin-top: 10px;
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
