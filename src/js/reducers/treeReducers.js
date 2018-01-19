let initialState = {
  tree : {},
  main: {}  
}


export default function counter(state = initialState, {type,payload}) {   
  switch (type) { 
  case "MARK_TREE" :
    return {...state, tree:payload};
  case 'FETCH_TREE_FULFILLED':
    return {...state, tree:payload};
  case 'FETCH_TREE_REJECTED':
    console.log("Loading tree failed:");
    throw new Error(payload);
    return state 
  case 'OPEN_DETAIL_FULFILLED':
    return {...state, main: payload};
  case 'OPEN_DETAIL_REJECTED':
    console.log("Loading detail failed:");
    throw new Error(payload);  
  default:
    return state
  }
}