import React, { useState } from 'react';
import { Layout, Menu, Image} from 'antd';
import { Logo } from '../assets';
import { NavData } from '../common';
 import { Link } from 'react-router-dom';





const { Sider } = Layout;

export default function SideNav() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className='logo' style={{ padding: 20 }}>
                    <Image src={Logo} />
                </div>
                <Menu theme='dark' mode='inline'>
                    {NavData.map((item, index) => {
                        return (
                            <Menu.Item>
                                <Link to={item.link}>
                                    {item.icon}
                                    <span className='nav-text' style={{ fontSize: 18 }}>
                                        {item.title}
                                    </span>
                                </Link>
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Sider>
        </>
    );
}
