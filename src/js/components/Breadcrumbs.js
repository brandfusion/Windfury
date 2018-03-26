import React, {Component} from 'react';

import store from "../store";
import { fetchTree , markNode, openGroup } from "../actions/treeActions";


export default class Breadcrumbs extends Component {


    handleBreadcrumb(val) {
        console.log(val);
    }

    componentWillMount() {
        console.log(this.props)
    }


    render() {
        console.log("props.data",this.props.data)
        let test = [];
        return <ul className="breadcrumbs d-flex">
            {
                this.props.data.map((o,i) => {return <li key={i} onClick={() => this.handleBreadcrumb(o.title)}>{o.title} > </li>})
            }
        </ul>
    }
}