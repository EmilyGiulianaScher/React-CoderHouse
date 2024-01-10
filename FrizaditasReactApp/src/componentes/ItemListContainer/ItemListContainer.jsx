import { useEffect, useState } from 'react';
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from 'react-router-dom'
import arrayProductos from '../json/arrayProductos.json'
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () => {

  const [item, setItem] = useState([])
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos)
          },);
        });
        setItem(data);

      } catch (error) {
        console.log('Error: ', error);
      }
    };
    fetchData();

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
