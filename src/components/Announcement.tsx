import React, {useEffect, useState} from 'react'
import {Modal} from 'antd'

export default function Announcement() {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalText, setModalText] = useState('')

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/announcement`)
            .then(async r => {
                const data = await r.text()
                setModalText(data)
                setModalVisible(!!data)
            })
    }, [])

    return (
        <Modal
            title="公告"
            centered
            visible={modalVisible}
            maskClosable={false}
            destroyOnClose
            footer={false}
            onCancel={() => setModalVisible(false)}
        >
            {modalText}
        </Modal>
    )
}

