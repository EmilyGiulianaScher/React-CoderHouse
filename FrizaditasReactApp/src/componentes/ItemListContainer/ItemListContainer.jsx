import { useEffect, useState } from 'react';
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore';


const ItemListContainer = () => {

  const [item, setItem] = useState([])
  const { id } = useParams();


  useEffect(() => {
    const queryDb = getFirestore();
    const querycollection = collection(queryDb, 'products');
    if (id) {
      const queryFilter = query(querycollection, where('category', '==', id));
      getDocs(queryFilter).then((res)=>
      setItem(res.docs.map((p)=> ({id: p.id, ...p.data()})))
      );
    } else{
      getDocs(querycollection).then((res)=>
      setItem(res.docs.map((p)=> ({id: p.id, ...p.data()})))
      );
    }

  }, [id])



  return (
    <div className='container'>
      <div className='row '>

        <ItemList item = {item}/>

      </div>
    </div>
  );
};

export default ItemListContainer;
