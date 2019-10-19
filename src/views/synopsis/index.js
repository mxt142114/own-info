import React, { useState } from 'react'
import { Upload, Modal } from 'antd'
import './style.scss'

export default () => {
    const [vsible, setVisible] = useState(false)
    const [previewImage, setPreviewInamge] = useState()
    
    const fileList = [{
        uid: '-1',
        status: 'done',
        name: 'image.png',
        url: require('@/images/head.png')
    }]

    /**
     * 查看头像
     */
    const handlePreview = file => {
        setPreviewInamge(file.url)
        setVisible(true)
    }

    return (
        <div className="pages-views-synopsis">
            <Upload
                disabled
                fileList={fileList}
                listType="picture-card"
                onPreview={handlePreview}
            />
            <Modal
                footer={null}
                visible={vsible}
                onCancel={() => setVisible(false)}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
    )
}