import React,{useEffect,useState} from 'react'
import { BodyWrapper } from '../../components'
import Cards from './Cards'
import {collection,getDocs} from 'firebase/firestore'
import {db} from '../../config';
import axios from 'axios';





export default function HomePage() {
  const[loading,setLoading]=useState(true);
  const[tourcount,settourcount]=useState();
  const [companyCount, setcompanycount] = useState();
  const [userCount, setusercount] = useState();
  useEffect(() => {
      getAllStuff();
  }, []);
  
  const getAllStuff=async()=>{
        setLoading(true);
        Promise.all([
            axios.get('http://localhost:5000/users/get-count'),
            axios.get('http://localhost:5000/users/get-company-count'),
            axios.get('http://localhost:5000/users/get-user-count'),
        ]).then(res=>{
              settourcount(res[0].data.tourcount);
              setcompanycount(res[1].data.companyCount);
              setusercount(res[2].data.UserCount);
        }).catch(err=>{
          console.log(err);
        });
        setLoading(false);
  }
  return (
    <BodyWrapper>
      <>
      {loading?<div>Loading</div> : <Cards tourCount={tourcount} companyCount={companyCount} userCount={userCount} />}
      </>
     

</BodyWrapper>
  )
}
