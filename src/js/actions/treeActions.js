import axios from 'axios';

export function fetchTree() {
  return (dispatch) => {
   axios.get("resources/treeDataset.json").then(r => {
      dispatch({type: "FETCH_TREE_FULFILLED", payload: r.data}); 
    }).catch((error) => {
      dispatch({type: "FETCH_TREE_REJECTED", payload: error});
    })
  }

}

export function markNodeOpen(payload , id) {

  let newState = Object.assign({}, payload);
  const markOpen = (obj) => {   
    if (obj.value === id) {
      obj.open = true;
    }    
    if(obj.children.length > 0) {
      if(obj.children.filter(o => {return o.open === true}).length > 0) {
        obj.open = true;
      } else {
        obj.children =  obj.children.map(o => {return markOpen(o)});
      }    
    } 
    return obj;
  }
  
  while (newState.open !== true ) {
    newState = markOpen(newState);
    console.log(newState);
  };
  console.log("RESULT TEST", newState);
  
  return () => {
    dispatch({type: "MARK_TREE", payload: newState}); 
  }
}