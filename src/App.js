import React, {Component} from 'react'
import Relax from './views/relax'
import classnames from 'classnames'
import {menuList} from './data'
import {Layout, Divider} from 'antd'
import {Route, Switch} from "react-router"

import Technology from './views/technology/index'
import './style.scss'

const {Header, Footer, Content} = Layout

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectKeys: 3
        }
    }

    render() {
        return (
            <Layout className="pages-app">
                <Header className="header">
                    {
                        menuList.map((item, index) => {
                            return <a
                                key={index}
                                href={`#/${item.src}`}
                                onClick={() => this.setState({selectKeys: index})}
                                className={classnames('item', {active: this.state.selectKeys === index})}
                            >{item.name}</a>
                        })
                    }
                </Header>
                <Content className="content">
                    {/*<Switch>*/}
                    {/*    <Route path="/" component={Technology} />*/}
                    {/*</Switch>*/}
                    <Technology />
                </Content>
                <Footer className="footer">非学无以广志，非志无以成学</Footer>
            </Layout>
        )
    }
}

export default App