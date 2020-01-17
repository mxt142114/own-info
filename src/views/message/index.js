import React, { useState } from 'react'
import moment from 'moment'
import { Button, List, Input, Comment, message } from 'antd'
import './style.scss'

const { TextArea } = Input

export default () => {
    const [list, setList] = useState([])
    const [messageInfo, setMessageInfo] = useState('')
    const [loading, setLoading] = useState(false)

    const addMessage = () => {
        if (messageInfo.length) {
            setLoading(true)
            setTimeout(() => {
                setList([
                    {
                        author: '一位友好的陌生人',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: (
                            <p>{messageInfo}</p>
                        ),
                        datetime: (
                            <span>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>
                        )
                    },
                    ...list
                ])
                setMessageInfo('')
                setLoading(false)
            }, 1000)
        } else {
            message.warning('请输入您想要留下的内容')
        }
    }

    return (
        <div className="pages-views-message">
            <div className="input">
                <TextArea
                    rows={4}
                    value={messageInfo}
                    placeholder="请输入您想要留下的内容"
                    onChange={e => setMessageInfo(e.target.value)}
                />
                <Button
                    type="primary"
                    loading={loading}
                    onClick={addMessage}
                >添加留言</Button>
            </div>
            {
                list.length ?
                    <List
                        dataSource={list}
                        itemLayout="horizontal"
                        header={`${list.length} replies`}
                        renderItem={item => (
                            <li>
                                <Comment
                                    author={item.author}
                                    avatar={item.avatar}
                                    content={item.content}
                                    datetime={item.datetime}
                                />
                            </li>
                        )}
                    /> :
                    <div className="noMessage">
                        暂无人留言哦~
                    </div>
            }
        </div>
    )
}
