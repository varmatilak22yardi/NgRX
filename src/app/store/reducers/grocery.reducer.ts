import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { on } from "@ngrx/store";
import { groceryAction } from "../actions/grocery.action";


const initialState:Grocery[]=[

  {id:1,name:'Angular','type':'Dev'},
  {id:2,name:'C#','type':'Dev'},
  {id:3,name:'SQL','type':'csd'},
  {id:4,name:'CRM','type':'csd'}

]

/*
const initialState:Grocery[]=[]
*/


export const groceryReducer=createReducer(
  initialState
);

/*
export const groceryReducer=createReducer(
  initialState,
  on(
    groceryAction.loadGroceriesSuccess,(state,action)=>{
      return action.payload
    }
  ),
  on(
    groceryAction.loadGroceriesFailure,(state,action)=>{
      return []
    }
  )
);
*/
