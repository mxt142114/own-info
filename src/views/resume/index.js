import React from 'react'
import { Avatar, Descriptions, Divider } from 'antd'

export default () => {

    return (
        <div className="pages-views-resume">
            <Descriptions title="基本信息" column={2}>
                <Descriptions.Item label="姓名">马啸天</Descriptions.Item>
                <Descriptions.Item label="头像">
                    <Avatar
                        size={64}
                        shape="square"
                        src={require('@/images/head.png')}
                    />
                </Descriptions.Item>
                <Descriptions.Item label="性别">男</Descriptions.Item>
                <Descriptions.Item label="出生日期">1994-10-13</Descriptions.Item>
                <Descriptions.Item label="参加工作时间">2016-07</Descriptions.Item>
                <Descriptions.Item label="现居住城市">北京市</Descriptions.Item>
                <Descriptions.Item label="户口所在地">山西省临汾市</Descriptions.Item>
                <Descriptions.Item label="联系方式">17744492232</Descriptions.Item>
                <Descriptions.Item label="电子邮箱">mxt142114@163.com</Descriptions.Item>
            </Descriptions>
            <Descriptions title="教育经历" column={2}>
                <Descriptions.Item label="毕业院校">太原科技大学</Descriptions.Item>
                <Descriptions.Item label="学历">本科</Descriptions.Item>
                <Descriptions.Item label="所学专业">计算机科学与技术</Descriptions.Item>
                <Descriptions.Item label="毕业时间">2016-06</Descriptions.Item>
            </Descriptions>
            <Descriptions title="求职意向" column={2}>
                <Descriptions.Item label="职位类别">web前端工程师</Descriptions.Item>
                <Descriptions.Item label="期望薪资">面议</Descriptions.Item>
                <Descriptions.Item label="工作性质">全职</Descriptions.Item>
                <Descriptions.Item label="工作状态">随时到岗</Descriptions.Item>
                <Descriptions.Item label="工作地点">北京</Descriptions.Item>
            </Descriptions>
            <Descriptions title="工作/实习经历" column={2}>
                <Descriptions.Item label="公司名称">北京嘉润云众健康科技有限公司</Descriptions.Item>
                <Descriptions.Item label="职位名称">web前端开发工程师</Descriptions.Item>
                <Descriptions.Item label="职位类别">web前端</Descriptions.Item>
                <Descriptions.Item label="在职时间">2018-08至今</Descriptions.Item>
                <Descriptions.Item label="所属行业">互联网</Descriptions.Item>
                <Descriptions.Item label="月薪">15000元/月</Descriptions.Item>
                <Descriptions.Item label="工作描述">
                    <p>01：根据公司项目需求，利用Vue、React前端框架高效完成前端页面的开发</p>
                    <p>02：负责产品线上产品的跟新迭代及维护</p>
                    <p>03：与后端工程师配合确保代码有效的对接，优化前端页面的性能</p>
                    <p>04：与后端工程师、项目经理、产品经理等部门研究产品的需求及开发方案</p>
                </Descriptions.Item>
            </Descriptions>
            <Divider />
            <Descriptions column={2}>
                <Descriptions.Item label="公司名称">浙江众媒科技有限公司</Descriptions.Item>
                <Descriptions.Item label="职位名称">web前端开发工程师</Descriptions.Item>
                <Descriptions.Item label="职位类别">web前端</Descriptions.Item>
                <Descriptions.Item label="在职时间">2016-09至2018-07</Descriptions.Item>
                <Descriptions.Item label="所属行业">互联网</Descriptions.Item>
                <Descriptions.Item label="月薪">12000元/月</Descriptions.Item>
                <Descriptions.Item label="工作描述">
                    <p>01：根据公司项目需求，利用Vue、React前端框架高效完成前端页面的开发</p>
                    <p>02：负责产品线上产品的跟新迭代及维护</p>
                    <p>03：与后端工程师配合确保代码有效的对接，优化前端页面的性能</p>
                    <p>04：与后端工程师、项目经理、产品经理等部门研究产品的需求及开发方案</p>
                </Descriptions.Item>
            </Descriptions>
            <Descriptions title="项目经历" column={2}>
                <Descriptions.Item label="项目名称">熊猫儿科运营管理平台（React）</Descriptions.Item>
                <Descriptions.Item label="项目周期">2018-08至今</Descriptions.Item>
                <Descriptions.Item label="项目描述">
                    <p>01：根据公司项目需求，利用Vue、React前端框架高效完成前端页面的开发</p>
                    <p>02：负责产品线上产品的跟新迭代及维护</p>
                    <p>03：与后端工程师配合确保代码有效的对接，优化前端页面的性能</p>
                    <p>04：与后端工程师、项目经理、产品经理等部门研究产品的需求及开发方案</p>
                </Descriptions.Item>
            </Descriptions>
            <Divider />
            <Descriptions column={2}>
                <Descriptions.Item label="项目名称">新世纪医疗运营管理平台（React）</Descriptions.Item>
                <Descriptions.Item label="项目周期">2018-08至今</Descriptions.Item>
                <Descriptions.Item label="项目描述">
                    <p>01：根据公司项目需求，利用Vue、React前端框架高效完成前端页面的开发</p>
                    <p>02：负责产品线上产品的跟新迭代及维护</p>
                    <p>03：与后端工程师配合确保代码有效的对接，优化前端页面的性能</p>
                    <p>04：与后端工程师、项目经理、产品经理等部门研究产品的需求及开发方案</p>
                </Descriptions.Item>
            </Descriptions>
            <Divider />
            <Descriptions column={2}>
                <Descriptions.Item label="项目名称">熊猫妇儿健康公众号（React）</Descriptions.Item>
                <Descriptions.Item label="项目周期">2018-08至今</Descriptions.Item>
                <Descriptions.Item label="项目描述">
                    <p>01：根据公司项目需求，利用Vue、React前端框架高效完成前端页面的开发</p>
                    <p>02：负责产品线上产品的跟新迭代及维护</p>
                    <p>03：与后端工程师配合确保代码有效的对接，优化前端页面的性能</p>
                    <p>04：与后端工程师、项目经理、产品经理等部门研究产品的需求及开发方案</p>
                </Descriptions.Item>
            </Descriptions>
            <Descriptions title="自我评价" column={1}>
                <Descriptions.Item>01：有很强的时间意识，能够及时的完成自己的任务！</Descriptions.Item>
                <Descriptions.Item>02：热爱编程，喜欢钻研一些新技术，来丰满自己的技术！</Descriptions.Item>
                <Descriptions.Item>03：有很强的团队协作意识，保证团队的项目进度！</Descriptions.Item>
                <Descriptions.Item>04：性格很好，和同事能愉快的相处并能很快适应新环境！</Descriptions.Item>
            </Descriptions>
        </div>
    )
}
