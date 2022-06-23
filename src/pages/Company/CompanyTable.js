import React, { useEffect, useState } from 'react';
import { Space, Table,Button } from 'antd';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config';

export default function CompanyTable() {
    const [companies, setCompanies] = useState();
    useEffect(() => {
         getCompanies().then((data)=>{
          setCompanies(data);
         }).catch(err=>{
            console.log(err);
         })
    }, []);

    const getCompanies = async () => {
        const promise= new Promise(async(resolve, reject) => {
            let temp = [];
            try {
                const q = query(collection(db, 'users'), where('isOrg', '==', 'Yes'));
                const response = await getDocs(q);
                response.forEach((doc) => {
                    temp.push(doc.data());
                });
                resolve(temp);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
        return promise;
    };

    const deleteCompany=(email)=>{
        console.log(email)
    }
    const columns = [
        {
            title: 'Company Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Dts no',
            dataIndex: 'DtsNo',
            key: 'DtsNo',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
            {
                title: 'Action',
                key: 'action',
                render: (_, companies) => (
                    <Space size='middle'>
                        <Button type='danger' onClick={()=>deleteCompany(companies.email)}>Delete</Button>
                    </Space>
                ),
            },
    ];
  

    return (
        <>
            <Table columns={columns} dataSource={companies} pagination={false} />
        </>
    );
}
