import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Layout from "./components/Layout";
import store from "./store";


import treeDatasource from '../resources/treeDataset.json';
import mainDatasource from '../resources/mainDataset.json';



const app = document.getElementById("app");
ReactDOM.render(<Provider store={store}><Layout /></Provider>, app);

// let test = {
//   "value": null,
//   "open": null,
//   "children": [
//       {
//         "value": 1,
//         "open":false,
//         "children": [
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           },
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 55,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           },
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "value": 2,
//         "open":false,
//         "children": [
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           },
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           },
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "value": 3,
//         "open":false,
//         "children": [
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           },
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           },
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "value": 4,
//         "open":false,
//         "children": [
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           },
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           },
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "value": 5,
//         "open":false,
//         "children": [
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           },
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           },
//           {
//             "value": 2,
//             "open": false,
//             children: [
//               {
//                 "value": 3,
//                 "open": false,
//                 children: []
//               },
//               {
//                 "value": 31,
//                 "open": false,
//                 "children": []
//               },
//               {
//                 "value": 32,
//                 "open": false,
//                 "children": []
//               }
//             ]
//           }
//         ]
//       }
//   ]
// }

// const markOpen = (obj) => {   
//   if (obj.value === 231) {
//     obj.open = true;
//   }    
//   if(obj.children.length > 0) {
//     if(obj.children.filter(o => {return o.open === true}).length > 0) {
//       obj.open = true;
//     } else {
//       obj.children =  obj.children.map(o => {return markOpen(o)});
//     }    
//   } 
//   return obj;
// }

// console.log("ORIGINAL TEST", test);
// while (test.open !== true ) {
//   test = markOpen(test);
// };
// // var newerState = markState(newState);
// console.log("RESULT TEST", test);

