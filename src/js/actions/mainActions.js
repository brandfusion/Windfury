import axios from 'axios';

export function fetchMain() {
  return (dispatch) => {
   axios.get("resources/mainDataset.json").then(r => {
      dispatch({type: "FETCH_MAIN_FULFILLED", payload: r.data}); 
    }).catch((error) => {
      dispatch({type: "FETCH_MAIN_REJECTED", payload: error});
    })
  }

}