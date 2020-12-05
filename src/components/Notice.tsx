import React, {useEffect, useState} from 'react'
import {Modal} from 'antd'


export default function App() {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalText, setModalText] = useState('')

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_API_BASE_URL}getNotice`
        )
            .then(r => {
                r.text()
                    .then(text => {
                        if (!!text) {
                            setModalText(text)
                            setModalVisible(true)
                        }
                    })
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

