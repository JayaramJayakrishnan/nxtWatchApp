import styled from 'styled-components'

export const ListItem = styled.li`
  width: 30%;
  margin-bottom: 60px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Thumbnail = styled.img`
  width: 100%;
  margin-right: 20px;
`

export const VideoDetails = styled.div`
  flex-grow: 1;
  margin-top: 20px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  margin-bottom: 10px;
  margin-top: 0px;
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #64748b;
  list-style-type: none;
`
