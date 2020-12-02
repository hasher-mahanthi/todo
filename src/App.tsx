import { type } from 'os';
import React from 'react';
import './App.css';
import ListItems from './ListItems'

interface AppCurrentItem{
  text:string;
  key:any;
}
type AppProps={

}
type AppState = {
  items:any,
  currentItem:{
    text:string,
  key:any,
  }
}
class App extends React.Component<AppProps,AppState> {

  constructor(props:any){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e:any){
    e.preventDefault();
    console.log(typeof e);
    let keyPresent=true;
    //let newItems=[];
    const newItem = this.state.currentItem;
    const items=this.state.items;
    console.log(newItem,"new item");
    items.map((item:any)=>{  
      console.log(item,"item");    
      if(item.key===newItem.key){
        //console.log(item.key +"    "+newItem.key)
        item.text= newItem.text;
        keyPresent=false;
      }
    })
    // this.setState({
    //   items: items,
    // })
    if(newItem.text !=="" && keyPresent){
      const items = [...this.state.items, newItem];
    //   console.log(Date.now())
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e:any){
    console.log(e);
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key:number){
    console.log(typeof key)
    const filteredItems= this.state.items.filter((item:any) =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text:string,key:number){
    console.log(typeof text);
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map((item:any)=>{  
      console.log(item,"item");    
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items,
      currentItem:{
        text: text,
        key: key,
      }
    })
    
   
  }
 render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
      </header>
    </div>
  );
 }
}


export default App;