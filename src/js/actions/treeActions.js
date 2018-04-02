import axios from 'axios';
import store from "../store";
export function fetchTree() {
  return (dispatch) => {
   axios.get("resources/treeDataset.json").then(r => {
    //  console.log("FETCHEDINFO", r.data);
      dispatch({type: "FETCH_TREE_FULFILLED", payload: r.data}); 
    }).catch((error) => {
      dispatch({type: "FETCH_TREE_REJECTED", payload: error});
    })
  }

}

export function markNode(id,open) { 
  return (dispatch) => {
    let dataset = {...store.getState().tree.tree};
    // console.log("dataset",store.getState().tree.tree);
   

    const resetNode = (obj) => {
      obj.open = false;      
      if(obj.children.length > 0) {
        obj.children.map(x => { return resetNode(x) });
      }
      return obj;
    }
    let status = null;
    const markOpen = (obj) => {
      if(obj.id === id) {
        obj.open = true;       
      }
      if(obj.children.length > 0) {
        if(obj.children.filter(x => { return x.open === true }).length > 0) {
          obj.open = true;
        } else {
          obj.children = obj.children.map(x => { return markOpen(x) });
        }
      }
      return obj;
    } 
    const markOpenParent = (obj) => {
      if(obj.children.length > 0) {        
        if(obj.children.filter(x => { return x.id === id || x.open === true }).length > 0) {         
          obj.open = true;
        } else {
          obj.children = obj.children.map(x => { return markOpenParent(x) });
        }
      }
      return obj;
    }
    // hide all nodes 
    dataset = resetNode(dataset);

    let iteration = 0;
    if(open === false) {
      while(dataset.open !== true) {
        dataset = markOpen(dataset);
      }  
    } else {
      while(dataset.open !== true) {

        // iteration++;
        // if (iteration > 100) {
        //   alert("break");
        //   return dataset;
        // }
        dataset = markOpenParent(dataset);


      }  
    } 
    

    dispatch({type: "MARK_TREE", payload: dataset});
  
  }
  
}

export function openGroup(id) {
  return (dispatch) => {

    const resetActiveNodes = (obj) => {
      obj.active = false;      
      if(obj.children.length > 0) {
        obj.children.map(x => { return resetActiveNodes(x) });
      }
      return obj;
    }
    const activateNode = (obj) => {
      if (obj.id == id) {
        obj.active = true;
      } 
      if(obj.children.length > 0) {
        obj.children.map(x => { return activateNode(x) });
      }
      return obj;
    }
    
    //without dispatch directly chaning properties
    let treeStore = {...store.getState().tree.tree};   
    treeStore = resetActiveNodes(treeStore);
    treeStore = activateNode(treeStore);  
    
    let breadcrumbs = [];
    const addToBreadcrumbsArray = (obj) => {     
      if (obj.active === true) {  
        breadcrumbs.push(obj);
      }
      if(obj.children.length > 0) {
        if(obj.children.filter((o) => o.active === true || o.open === true).length > 0) {
          if(obj.active !== true) {
            breadcrumbs.push(obj);
          }
          
        }
        obj.children.map(x => { return addToBreadcrumbsArray(x) });
      }
      return obj;
    }

    let activeNodeArray = treeStore.children.filter(o=>{
      let nodeFound = false;
      const findActiveNode = (obj) => {
        if (obj.id == id || obj.open === true) {
          nodeFound = true;
          return;
        } 
        if(obj.children.length > 0) {
          obj.children.map(x => { return findActiveNode(x) });
        }
        return obj;
      }
      findActiveNode(o);  
      return nodeFound;    
    });
    console.log("activeNodeArray",activeNodeArray);
    console.log("breadcrumbs",breadcrumbs);
    let activeNode = activeNodeArray.length > 1 ? activeNodeArray.filter(o => o.id === id)[0] : activeNodeArray[0]; 
    
    
    console.log("activeNode",activeNode);

    addToBreadcrumbsArray(activeNode);
    console.log("breadcrumbs",breadcrumbs);
    // console.log("BRDCRUMBS: ", breadcrumbs);
    // console.log("TREE" , treeStore);
    // console.log("breadcrumbs",breadcrumbs);
    let newBreadcrumbs = breadcrumbs.reduce((r,o)=> {return [...r,{...o,"type":"group"}]},[]);
    // console.log(breadcrumbs, newBreadcrumbs);
    store.dispatch({type: "UPDATE_BREADCRUMBS", payload: newBreadcrumbs}); 

    

    axios.get("resources/mainDataset.json").then(r => {     
      if (id.toString().length === 1) {
        id = 1;
      }
      if (id.toString().length === 2) {
        id = 11;
      }
      if (id.toString().length === 3) {
        id = 111;
      }     
      let groupObject = r.data.filter(x=> {return x.id === id})[0];
      dispatch({type: "OPEN_DETAIL_FULFILLED", payload: groupObject}); 
    }).catch((error) => {
      dispatch({type: "OPEN_DETAIL_REJECTED", payload: error});
    })
  }

}