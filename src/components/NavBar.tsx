import React from 'react'
import {Row, Col, Space, Button} from 'antd'
import {QuestionOutlined} from '@ant-design/icons'

export default function NavBar() {
    const officeFont = {
        fontWeight: 500,
        fontSize: 24
    }

    return (
        <Row style={{height: '100%'}}>
            <Col
                lg={{span: 14, offset: 5}}
                xs={{span: 22, offset: 1}}
            >
                <div className="display-flex align-center justify-between">
                    <Space align="center">
                        <img
                            style={{height: 28}}
                            src="https://i.loli.net/2020/04/21/ST9ru5mwVqUXnKO.png"
                            alt=""
                        />
                        <div style={officeFont}>|</div>
                        <div style={officeFont}>Office</div>
                    </Space>

                    <Button
                        shape="circle"
                        type="primary"
                        icon={<QuestionOutlined/>}
                        onClick={() => window.open('https://github.com/zayabighead/Office-User-Auto-Create')}
                    />
                </div>
            </Col>
        </Row>
    )
}
