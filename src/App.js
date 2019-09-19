import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'

const { Header, Sider, Content } = Layout

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
			selectKeys: '1'
		}
	}

	render() {
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" selectedKeys={[this.state.selectKeys]} onClick={e => this.setState({selectKeys: e.key})}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>个人简历</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>轻松一刻</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>学习集锦</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={() => this.setState({ collapsed: !this.state.collapsed })}
						/>
					</Header>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							background: '#fff',
							minHeight: 800,
						}}
					></Content>
				</Layout>
			</Layout>
		)
	}
}

export default App