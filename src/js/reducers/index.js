import { combineReducers } from "redux"

import tree from "./treeReducers"
import main from "./mainReducers"

export default combineReducers({tree, main})