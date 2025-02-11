import { createAction, createActionGroup, emptyProps } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { props } from "@ngrx/store";


export const groceryAction=createActionGroup({
  source:'Grocery Api',
  events:{
    'Load groceries':emptyProps(),
    'Load groceries success':props<{payload:Grocery[]}>(),
    'Load groceries failure':emptyProps()
  }
})
