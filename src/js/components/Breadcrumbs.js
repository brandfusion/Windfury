import React, {Component} from 'react';

import store from "../store";
import { fetchTree , markNode, openGroup } from "../actions/treeActions";
import { openProduct } from "../actions/mainActions";


export default class Breadcrumbs extends Component {


    handleBreadcrumb(val, index) {
        store.dispatch({type: "UPDATE_BREADCRUMBS", payload: store.getState().tree.breadcrumbs.filter((o,i) => (o.id === val || i <= index))}); 
        let obj = store.getState().tree.breadcrumbs.filter((o,i) => (o.id === val))[0];
        console.log("OBJECT",obj);
        if (obj.type === "group") {
            //dispatch group            
            store.dispatch(openGroup(obj.id));

        } else if (obj.type === "product") {
            //dispatch product
            store.dispatch(openProduct());
            
        }
    }

    // componentWillMount() {
    //     console.log(this.props)
    // }


    render() {
       
        return <ul className="breadcrumbs d-flex">
            {                
                this.props.data.map((o,i) => {                   
                    if (i == this.props.data.length-1) {
                        return <li key={i}><strong>{o.title}</strong></li>
                    }
                    return <li key={i}><button type="button" onClick={() => this.handleBreadcrumb(o.id,i)}>{o.title} <i className="ml-2 fa fa-angle-right"></i></button></li>
                })
            }
        </ul>
    }
}