import React from 'react';
import './Detail.css';
import { List, Avatar } from 'antd';
const listData = [];
for (let i = 0; i < 1; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `Timmy Lopez`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Representante de la Camara Nacional del Metal',
        mail: 'admin@metales.com',
        tel: '7757609276',
    });
}


export const Cliente = () => (

    <div className="cliente">
        <List
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            footer={<div><b>Empresa:</b> El Metal no.1</div>}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    <p>Email: {item.mail}</p>
                    <p>Teléfono: {item.tel}</p>
                </List.Item>
            )}
        />
    </div>
);