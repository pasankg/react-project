import { useEffect, useState, useCallback, useMemo } from 'react'
import { map } from 'lodash'
import { Table } from 'antd'
import { ENDPOINT } from '../constants'

const ArticleWidget = () => {
    const [rows, setRows] = useState([])

    // const columnDef = useMemo(() => [
    //     {
    //         title: 'Id',
    //         dataIndex: 'key',
    //         width: 50
    //     },
    //     {
    //         title: 'Title',
    //         dataIndex: 'title',
    //         sorter: {
    //             compare: (a, b) => a.title - b.title,
    //             multiple: 3,
    //           },
    //     },
    //     {
    //         title: 'Url',
    //         dataIndex: 'url',
    //     },
    //     {
    //         title: 'News Site',
    //         dataIndex: 'newsSite',
    //     },
    // ], [])

    const columnDef = [
        {
            title: 'Id',
            dataIndex: 'key',
            width: 50,
            sorter: {
                compare: (a, b) => a.key - b.key,
                // multiple: 3,
              },
        },
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: {
                compare: (a, b) => a.title.length - b.title.length,
                // multiple: 3,
              },
        },
        {
            title: 'Url',
            dataIndex: 'url',
        },
        {
            title: 'News Site',
            dataIndex: 'newsSite',
        },
    ]

    const renderRows = (rows) => {
        return map(rows, ({ id, title, url, newsSite }) => ({
            key: id,
            title,
            url,
            newsSite
        }))
    }

    useEffect(() => {
        fetch(`${ENDPOINT}/v3/articles`)
            .then(res => res.json())
            .then(fetchData => setRows(renderRows(fetchData)))
    }, [])

    return (
        <Table
            columns={columnDef}
            dataSource={rows}
            onChange={(d) => console.log(`Table change `,d)}
        />
    )

}

export default ArticleWidget