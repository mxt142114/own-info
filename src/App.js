import React, { useState } from 'react'
import { Layout } from 'antd'
import Routes from './router'
import { menuList } from './data'
import classnames from 'classnames'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import './style.scss'

const { Header, Footer, Content } = Layout

export default props => {
    const [selectKeys, setSelectKeys] = useState(0)

    return (
        <Layout className="pages-app">
            <Header className="header">
                <div className="menuList">
                    {
                        menuList.map((item, index) => {
                            return <a
                                key={index}
                                href={`#/${item.src}`}
                                onClick={() => setSelectKeys(index)}
                                className={classnames('item', { active: selectKeys == index })}
                            >{item.name}</a>
                        })
                    }
                </div>
                <a className="github" target="_Blank" href="https://github.com/mxt142114">
                    <span>github</span>
                    <span className="iconfont icon-fenxiang" />
                </a>
            </Header>
            <Content className="content">
                <Router>
                    <Switch>
                        {
                            Routes.map((item, index) =>
                                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
                            )
                        }
                    </Switch>
                </Router>
            </Content>
            <Footer className="footer">非学无以广志，非志无以成学</Footer>
        </Layout>
    )
}
