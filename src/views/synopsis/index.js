import React from 'react'
import { Card, Carousel } from 'antd'
import './style.scss'

const { Meta } = Card

export default () => {

    const bannerList = [
        'https://pic.90sjimg.com/back_origin_pic/05/62/44/2b8fb86482af15adba2dc791d0f1ed1a.jpg',
        'https://pic.90sjimg.com/back_origin_pic/05/61/02/373d925d32d3ae01a4ec9c4db96fcf64.jpg',
        'https://pic.90sjimg.com/back_origin_pic/05/67/24/02ff81729931d01a054e1e30d1e65f2f.jpg',
        'https://pic.90sjimg.com/back_origin_pic/05/74/07/6c1e1ddcac9faf180b4a8c8769a7c6ec.jpg'
    ]

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
                {
                    bannerList.map((item, index) => {
                        return <img key={index} src={item} alt="" />
                    })
                }
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
