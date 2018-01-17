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