const mainDataset = {
  "type": "",
  "content": {}  
}

export default function counter(state = mainDataset, {type,pyload}) {
  switch (type) {
  case 'LOAD_PRODUCT':
    return state;
  case 'LOAD_GROUP':
    return state;
  default:
    return state
  }
}