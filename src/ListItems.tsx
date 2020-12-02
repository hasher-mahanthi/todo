import './ListItems.css';
import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import FlipMove from 'react-flip-move';

function ListItems(props:any){
    const items = props.items;
    const listItems = items.map((item:any) =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
        <button className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }}  >Delete</button>
        <button className="faicons" onClick={() => {
            props.setUpdate(item.text,item.key)
        }}  >Edit</button>
        </span>
     </p>
     
    </div>})

    return <div>
        {listItems}
    
    </div>;
  }

  export default ListItems;