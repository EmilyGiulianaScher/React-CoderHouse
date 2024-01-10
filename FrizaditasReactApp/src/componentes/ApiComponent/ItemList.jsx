import React from "react";
import CardApi from "./CardApi";

const ItemList = ({ list }) => {

  //const ListMap = list.map((digimon) => {
  //  return <CardApi digimon={digimon} key={digimon.id}/>
  //})


  return (
    <div>
      {list.map((digimon) => <CardApi digimon={digimon} key={digimon.id}/> )}
    </div>
  )

};

export default ItemList;
