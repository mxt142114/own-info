import React from 'react'
import { Card, Carousel } from 'antd'
import './style.scss'

const { Meta } = Card

export default () => {

    const CardList = [{
        imgUrl: require('@/images/head.png'),
        title: 'Europe Street beat'
    }, {
        imgUrl: require('@/images/head.png'),
        title: 'Europe Street beat'
    }, {
        imgUrl: require('@/images/head.png'),
        title: 'Europe Street beat'
    }, {
        imgUrl: require('@/images/head.png'),
        title: 'Europe Street beat'
    }, {
        imgUrl: require('@/images/head.png'),
        title: 'Europe Street beat'
    }]

    return (
        <div className="pages-views-synopsis">
            <Carousel autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
            <div className="content_list">
                {
                    CardList.map((item, index) => {
                        return <Card
                            hoverable
                            key={index}
                            style={{ width: "15%" }}
                            cover={<img alt="example" src={item.imgUrl} />}
                        >
                            <Meta title={item.title} />
                        </Card>
                    })
                }
            </div>
        </div>
    )
}
