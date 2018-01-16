const treeDataset = [
  {"title": "1",
  "id": 0,
   "status": "closed",
   "children": [
     {"title": "1",
     "id": 12,
     "children": [],
     "status": "closed",
      },
     {"title": "1",
     "id": 13,
     "children": [],
     "status": "closed",
    },
     {"title": "1",
     "id": 14,
     "children": [],
     "status": "closed",
    }
   ]
  },
  {"title": "2",
    "id": 1,
    "children": [],
    "status": "closed",
  },
  {"title": "3",
  "id": 2,
  "children": [],
  "status": "closed",
  }
]
export default function counter(state = treeDataset, {type,id}) {  
  const openTree = (data,id) => {
    let output = data.reduce((result, value, key) => {
      if (value.id === id) {
        value.status = "open";
      }
      result =  [...result,value];
      return result;
    },[]);
    return output;
  }
  const closeTree = (data,id) => {
    let output = data.reduce((result, value, key) => {
      if (value.id === id) {
        value.status = "closed";
      }
      result =  [...result,value];
      return result;
    },[]);
    return output;
  }
  switch (type) {
  case 'OPEN':
    return openTree(state,id);
  case 'CLOSE':
    return closeTree(state,id);
  default:
    return state
  }
}