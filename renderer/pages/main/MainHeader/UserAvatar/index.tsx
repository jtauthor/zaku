import React from 'react'
import { Icon, Menu, Dropdown } from 'antd'
import './index.less'

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/limichange/zaku'>
        关于
      </a>
    </Menu.Item>
    <Menu.Item>退出</Menu.Item>
  </Menu>
)

export default class UserAvatar extends React.Component {
  render() {
    return (
      <Dropdown overlay={menu}>
        <a className='ant-dropdown-link UserAvatar' href='#'>
          <img src='https://avatars1.githubusercontent.com/u/1947344?s=460&v=4' />
          <Icon type='caret-down' />
        </a>
      </Dropdown>
    )
  }
}
