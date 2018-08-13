import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class Antd extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <div>
                    <Input placeholder="Todo Item" style={{ width: '330px', marginRight: '10px' }} />
                    <Button type="primary">Submit</Button>
                </div>
                <List
                style={{ marginTop: '10px',width:'330px'}}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        );
    }
}
export default Antd;
