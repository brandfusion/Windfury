export default function counter(state = {
  tree: {},
  openedId: ""
}, {type,payload}) {   
  switch (type) { 
  case "MARK_TREE" :
    return {...state, tree:payload};
  case 'FETCH_TREE_FULFILLED':
    return {...state, tree:payload};
  case 'FETCH_TREE_REJECTED':
    console.log("Loading tree failed:");
    throw new Error(payload);
    return state 
  default:
    return state
  }
}