import {Component} from 'react'

import {BgContainer, ContentsContainer} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'

class Home extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <BgContainer darkTheme={darkTheme}>
              <Header />
              <ContentsContainer>
                <SideBar />
              </ContentsContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
