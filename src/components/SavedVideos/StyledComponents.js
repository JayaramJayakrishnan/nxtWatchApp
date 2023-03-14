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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const NoSavedVideosViewContainer = styled.div`
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
  font-size: 26px;
  font-weight: 600;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  margin-top: 40px;
  margin-bottom: 0px;
`
export const ViewText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#616e7c')};
  text-align: center;
  margin-top: 30px;
  margin-bottom: 0px;
`

export const SavedVideosBanner = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f1f1f1')};
  display: flex;
  align-items: center;
  padding: 40px 60px;
`

export const SavedVideosIconContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#e2e8f0')};
  font-size: 30px;
  color: #ff0000;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const SavedVideosHeading = styled.h1`
    font-family: 'Roboto'
    font-size: 28px;
    font-weight: 500;
    color: ${props => (props.darkTheme ? '#f8fafc' : '#1e293b')};
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 30px;
`
