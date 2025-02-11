import { createFeatureSelector } from "@ngrx/store"
import { Grocery } from "../../../models/grocery.model"
import { createSelector } from "@ngrx/store"

//export const selectGroceries=(state:{groceries:Grocery[]})=>state.groceries;
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceryByType = (type: string) => createSelector(
  selectGroceries,
  (state) => state.filter(item => item.type === type)
);


