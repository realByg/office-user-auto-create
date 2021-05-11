import React from 'react'
import {Layout} from 'antd'

import NavBar from './components/NavBar'
import Hero from './components/Hero'

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
                <Hero/>
            </Layout.Content>
        </Layout>
    )
}

