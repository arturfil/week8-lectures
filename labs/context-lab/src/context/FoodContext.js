import { createContext, useContext, useState } from "react";
import foodDb from '../food.json'

export const FoodContext = createContext({});

const FoodProvider = ({children}) => {
  const [foods, setFoods] = useState(foodDb.foodItems)
  const [ food, setFood] = useState({
    foodName: "",
    foodType: "",
    protein: "",
    sideItem: false,
    dressingItem: false,
    calories: 0
  })

  return (
    <FoodContext.Provider
      value={{
        foods,
        food,
        setFood,
        setFoods
      }}
    >
      {children}
    </FoodContext.Provider>
  )
}

export default FoodProvider;