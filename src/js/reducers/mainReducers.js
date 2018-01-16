const mainDataset = {
  "type": "group",
  "content": {
    "title": "GWF2007",
    "image": "/image.jpg",
    "products" : []    
  }  
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