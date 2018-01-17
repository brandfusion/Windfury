export default function counter(state = [], {type,payload}) {  
  console.log(payload); 
  switch (type) {
  case 'FETCH_TREE_FULFILLED':
    return payload
  case 'FETCH_TREE_REJECTED':
    return state 
  default:
    return state
  }
}