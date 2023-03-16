import styled from 'styled-components'

export const ListItem = styled.li`
  width: 100%;
  margin-bottom: 50px;
`

export const Thumbnail = styled.img`
  width: 40%;
  margin-right: 20px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
`
export const VideoDetails = styled.div`
  flex-grow: 1;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  margin-bottom: 10px;
  margin-top: 0px;
`

export const ChannelName = styled(VideoTitle)`
  color: #64748b;
  font-size: 15px;
  font-weight: normal;
  margin: 10px 0px;
`

export const ViewsDateContainer = styled.ul`
  display: flex;
  align-items: center;
  padding: 0px;
  margin-top: 10px;
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #64748b;
  list-style-type: none;
  margin-right: 10px;
`
export const Bullet = styled.div`
  background-color: #64748b;
  height: 5px;
  width: 5px;
  border-radius: 3px;
`

export const PublishedTime = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #64748b;
  margin-left: 10px;
`
