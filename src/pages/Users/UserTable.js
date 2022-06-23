import React, { useEffect, useState } from 'react';
import { Space, Table,Button } from 'antd';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config';

export default function UserTable() {
    const [users, setUsers] = useState();

    useEffect(() => {
        getUsers()
            .then((data) => {
                setUsers(data);
                
            })
            .catch((err) => console.log(err));
    },[]);

    const getUsers = async () => {
        const promise = new Promise(async (resolve, reject) => {
            let temp = [];
            try {
                const q = query(collection(db, 'users'), where('isOrg', '==', 'No'));
                const response = await getDocs(q);
                response.forEach((doc) => {
                    temp.push(doc.data());
                });
                resolve(temp);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
        return promise;
    };
const deleteUser=(email)=>{
  console.log(email);
}
    const columns = [
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, users) => (
        //         <Space size='middle'>
        //             <Button type='danger' onClick={() => deleteUser(users.email)}>Delete</Button>
        //         </Space>
        //     ),
        // },
    ];

    return (
        <>
            <Table columns={columns} dataSource={users} pagination={false} />
        </>
    );
}
