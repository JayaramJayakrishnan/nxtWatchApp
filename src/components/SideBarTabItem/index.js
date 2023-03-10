import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'

import {ListItem, Button, TabLabel} from './StyledComponents'

const SideBarTabItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {tabDetails, isActive, changeActiveTab} = props
      const {id, tabName, path} = tabDetails

      const onClickTab = () => {
        changeActiveTab(id)
      }

      const renderIcons = () => {
        switch (id) {
          case 'HOME':
            return <AiFillHome />
          case 'TRENDING':
            return <HiFire />
          case 'GAMING':
            return <SiYoutubegaming />
          case 'SAVED VIDEOS':
            return <BiListPlus />
          default:
            return null
        }
      }

      return (
        <Link to={path} className="link-styling">
          <ListItem isActive={isActive} darkTheme={darkTheme}>
            <Button
              darkTheme={darkTheme}
              isActive={isActive}
              onClick={onClickTab}
            >
              {renderIcons()}
              <TabLabel darkTheme={darkTheme}>{tabName}</TabLabel>
            </Button>
          </ListItem>
        </Link>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideBarTabItem
