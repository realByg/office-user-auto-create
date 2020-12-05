import React from 'react'
import {Layout} from 'antd'
import 'antd/dist/antd.css'
import './style.css'

import NavBar from './components/NavBar'
import Content from './components/Content'


export default function App() {
    return (
        <Layout>
            <Layout.Header
                className="background-white"
                style={{padding: 0}}
            >
                <NavBar/>
            </Layout.Header>

            <Layout.Content>
                <Content/>
            </Layout.Content>
        </Layout>
    )
}

