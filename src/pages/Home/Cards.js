import React from 'react'
import useTourContext from '../../hooks/useTourContext';


import { Row,Col,Card,Typography} from 'antd'
import { ShopOutlined, UserOutlined,RiseOutlined } from '@ant-design/icons';




const {Title,Text}=Typography
const Container=({icon,value,text})=>{
  return (
      <Col span={8}>
          <Card title={icon} bordered={false}>
              <Text disabled>{text}</Text>
              <Title level={3}>{value}</Title>
          </Card>
      </Col>
  );
}


export default function Cards({tourCount,companyCount,userCount}) {
    
    const CardArray = [
        {
            text: 'Company Count',
            icon: <ShopOutlined style={{ fontSize: 40 }} />,
            value: companyCount,
        },
        {
            text: 'User Count',
            icon: <UserOutlined style={{ fontSize: 40 }} />,
            value: userCount,
        },
        {
            text: 'Tour Count',
            icon: <RiseOutlined style={{ fontSize: 40 }} />,
            value: tourCount,
        },
    ];
  return (
      //   <Row gutter={16}>
      //    
      <div className='site-card-wrapper'>
          <Row gutter={16}>
             
               {CardArray.map((data,index)=>{
            return <Container key={index} icon={data.icon} value={data.value} text={data.text}/>
          })}
      </Row>
          
      </div>
  );
}
