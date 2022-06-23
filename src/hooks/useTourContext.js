import {TourContext} from '../context/TourContext';

import { useContext } from 'react';

const useTourContext=()=>{
    const{tourCount,setTourCount}=useContext(TourContext);
}

export default useTourContext;