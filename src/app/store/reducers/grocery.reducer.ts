import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { on } from "@ngrx/store";
import { groceryAction } from "../actions/grocery.action";


const initialState:Grocery[]=[

  {id:1,name:'Banana','type':'fruit'},
  {id:2,name:'MIlk','type':'fruit'},
  {id:3,name:'Lays Chips','type':'snacks'},
  {id:4,name:'Doritos','type':'snacks'}

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
