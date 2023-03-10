import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 18%;
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
`

export const ListItemsContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`

export const ContactUsSection = styled.div`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 600;
  padding: 20px;
`

export const MediaLogoContainer = styled(ListItemsContainer)`
  display: flex;
  align-items: center;
  margin: 30px 0px;
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
`

export const MediaIconBg = styled.div`
  width: 29px;
  height: 29px;
  color: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
export const FacebookIconBg = styled(MediaIconBg)`
  background-color: #243f82;
`
export const TwitterIconBg = styled(MediaIconBg)`
  background-color: #199ae0;
`
export const LinkedinIconBg = styled(MediaIconBg)`
  background-color: #4495c7;
`

export const ContactUsSectionText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 400;
`
