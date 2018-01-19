import axios from 'axios';
import store from "../store";
export function fetchTree() {
  return (dispatch) => {
   axios.get("resources/treeDataset.json").then(r => {
    //  console.log("FETCHEDINFO", r.data);
      dispatch({type: "FETCH_TREE_FULFILLED", payload: r.data}); 
    }).catch((error) => {
      dispatch({type: "FETCH_TREE_REJECTED", payload: error});
    })
  }

}

export function markNodeOpen( id) {
  return (dispatch) => {
    let dataset = store.getState().tree.tree;
    // console.log(store.getState().tree);
    let passedId = id;  
    let mutable = dataset;


    const resetNode = (obj) => {
      obj.open = false;
      if(obj.children.length > 0) {
        obj.children.map(x => { return resetNode(x) });
      }
      return obj;
    }
    let status = null;
    const markOpen = (obj) => {
      if(obj.id === passedId) {obj.open = true}
      if(obj.children.length > 0) {
        if(obj.children.filter(x => { return x.open === true }).length > 0) {
          obj.open = true;
        } else {
          obj.children = obj.children.map(x => { return markOpen(x) });
        }
      }
      return obj;
    }
    const checkOpen = (obj) => {
      if(obj.id === passedId) { 
        status = obj.open;
      } else {
        if(obj.children.length > 0) {        
          obj.children = obj.children.map(x => { return checkOpen(x) });          
        }
      }      
      return obj;
    }

    // console.log("STATUS",status);
   
    // hide all nodes 
    mutable = resetNode(mutable);

    while(mutable.open !== true) {
      mutable = markOpen(mutable);
    }

    dispatch({type: "MARK_TREE", payload: mutable});
  
  }
  
}

export function openDetail(id) {
  return (dispatch) => {
   axios.get("resources/mainDataset.json").then(r => {     
      if (id.toString().length === 1) {
        id = 1;
      }
      if (id.toString().length === 2) {
        id = 11;
      }
      if (id.toString().length === 3) {
        id = 111;
      }

      dispatch({type: "OPEN_DETAIL_FULFILLED", payload: r.data.filter(x=> {return x.id === id})[0]}); 
    }).catch((error) => {
      dispatch({type: "OPEN_DETAIL_REJECTED", payload: error});
    })
  }

}