import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
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
`

export const NotFoundViewContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
export const ViewImage = styled.img`
  width: 40%;
`
export const ViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  margin-top: 40px;
  margin-bottom: 0px;
`
export const ViewText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #616e7c;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 0px;
`
