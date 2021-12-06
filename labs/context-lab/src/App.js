import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { FoodContext } from './context/FoodContext';

function App() {
  const { foods, food, setFood, setFoods } = useContext(FoodContext)

  const handleChange = (event) => {
    setFood({
      ...food,
      [event.target.name]: event.target.value
    })
    console.log(food);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFoods([food, ...foods])
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Food Lab</h2>

      <form>

        <label>Food Name</label>
        <br />
        <input
          name="foodName"
          value={food.foodName}
          onChange={handleChange} 
          type="text" 
        />
        <br />
        
        <label>Food Type</label>
        <br />
        <input
          name="foodType"
          value={food.foodType}
          onChange={handleChange} 
          type="text" 
        />
        <br />
        
        <label>Protein</label>
        <br />
        <input
          name="protein"
          value={food.protein}
          onChange={handleChange} 
          type="text" 
        />
        <br />
        
        <label>Side Item</label>
        <br />
        <input
          type="checkbox"
          name="sideItem"
          checked={food.sideItem}
          value={food.sideItem}
          onChange={(event) => setFood({...food, sideItem: !event.target.value})} 
        />
        <br />
        
        <label>Dressing Item</label>
        <br />
        <input
          type="checkbox"
          name="dressingItem"
          checked={food.dressingItem}
          onChange={handleChange} 
        />
        <br />
        
        <label>Calories</label>
        <br />
        <input
          name="calories"
          value={food.calories}
          onChange={handleChange} 
          type="text" 
        />
        <br />
        
        <button onClick={handleSubmit}>Add Food</button>
      </form>

      {foods.map((food, i) => (
        <>
        <h2 key={i}>
          {food.foodName}
        </h2>
        <h4>{food.calories}</h4>
        <h4>{food.protein}</h4>
        <h4>{food.foodType}</h4>
        <h4>{food.sideItem}</h4>
        <h4>{food.dressingItem}</h4>
        </>
      ))}
    </div>
  );
}

export default App;
