export default function counter(state = {}, {type,payload}) {   
  switch (type) { 
  case "MARK_TREE" :
    return payload;
  case 'FETCH_TREE_FULFILLED':
    return payload;
  case 'FETCH_TREE_REJECTED':
    console.log("Loading tree failed:");
    throw new Error(payload);
    return state 
  default:
    return state
  }
}