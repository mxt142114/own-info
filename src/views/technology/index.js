import React, {Component} from 'react'
import {Tabs} from 'antd'
import {technologyList} from '../../data'
import './style.scss'

const {TabPane} = Tabs

class Technology extends Component {

    render() {
        return (
            <div className="pages-views-technology">
                <Tabs tabPosition="left">
                    {
                        technologyList.map((item, index) =>
                            <TabPane tab={item.title} key={index}>
                                <iframe src={item.url} width="100%" height="700px" scrolling="yes" frameborder="1"/>
                            </TabPane>
                        )
                    }
                </Tabs>
            </div>
        )
    }
}

export default Technology