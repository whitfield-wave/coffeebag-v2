import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCoffee } from '../features/coffees/coffeeSlice'


function CoffeeForm() {
  const [name, setName] = useState('');
  const [roaster, setRoaster] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    dispatch(createCoffee({ name, roaster }));
    setName('');
    setRoaster('');
  }


  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Coffee Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="roaster">Roaster</label>
          <input
            type="text"
            name="roaster"
            id="roaster"
            value={roaster}
            onChange={(e) => setRoaster(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">Save Coffee</button>
        </div>
      </form>
    </section>
  )
}

export default CoffeeForm