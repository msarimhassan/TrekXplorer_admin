import React from 'react';
import { Layout, Avatar } from 'antd';
const { Header } = Layout;
export default function Navbar() {
    return (
        <>
            <Header
                className='site-layout-background'
                style={{
                    marginTop: 15,
                    marginLeft: 15,
                    marginRight: 15,
                    backgroundColor: '#fff',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <span style={{ fontSize: '30px' }}> Hey,Admin</span>
                    <Avatar size={50} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                        T
                    </Avatar>
                </div>
            </Header>
        </>
    );
}
