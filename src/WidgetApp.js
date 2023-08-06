import { useState, useRef } from "react";
import { Layout, Space } from 'antd'
// import ArticleWidget from "./ArticleWidget";
import { ArticleWidget, NewsWidget } from './components'

export default function WidgetApp() {

    // const [data, getData] = useState({});

    return (
        <Space direction="vertical" style={{ width: '80%' }} size={[0, 48]}>
            <Layout>
                <h1>Widget App</h1>
                <ArticleWidget />
                <NewsWidget />
            </Layout></Space>
    );
}