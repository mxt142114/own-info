import React from 'react'
import { Tabs } from 'antd'
import './style.scss'

const { TabPane } = Tabs

import TypeScript from './typeScript'

export default () => {

    return (
        <div className="pages-skill">
            <Tabs
                tabPosition="left"
                defaultActiveKey="1"
            >
                <TabPane tab="React Hooks技术文档" key="1">

                </TabPane>
                <TabPane tab="React Router技术文档" key="2">
                    Tab 2
                </TabPane>
                <TabPane tab="TypeScript技术文档" key="3">
                    <TypeScript />
                </TabPane>
                <TabPane tab="未完待续~" key="4">
                    未完待续~
                </TabPane>
            </Tabs>
        </div>
    )
}


