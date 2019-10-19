import React, { Component } from 'react'
import { Descriptions } from 'antd'
import { relaxList } from '@/data'
import './style.scss'

class Relax extends Component {

    render() {
        return (
            <div className="pages-views-relax">
                {
                    relaxList.map((item, index) =>
                        <Descriptions title={item.title} key={index} className="item">
                            <Descriptions.Item className="desc">{item.desc}</Descriptions.Item>
                        </Descriptions>
                    )
                }
            </div>
        )
    }
}

export default Relax