import React, { useState } from 'react'
import { Layout } from 'antd'
import { menuList } from './data'
import classnames from 'classnames'
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import './style.scss'

import Relax from './views/relax'
import Resume from './views/resume/index'
import Synopsis from './views/synopsis/index'
import Technology from './views/technology/index'

const { Header, Footer, Content } = Layout

export default () => {
    const [selectKeys, setSelectKeys] = useState(0)

    return (
        <Layout className="pages-app">
            <Header className="header">
                {
                    menuList.map((item, index) => {
                        return <a
                            key={index}
                            href={`#/${item.src}`}
                            onClick={() => setSelectKeys(index)}
                            className={classnames('item', { active: selectKeys === index })}
                        >{item.name}</a>
                    })
                }
            </Header>
            <Content className="content">
                <Router>
                    <Switch>
                        <Route path="/relax" component={Relax} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/synosis" component={Synopsis} />
                        <Route path="/technology" component={Technology} />
                        <Route path="/" component={Synopsis} />
                    </Switch>
                </Router>
            </Content>
            <Footer className="footer">非学无以广志，非志无以成学</Footer>
        </Layout>
    )
}