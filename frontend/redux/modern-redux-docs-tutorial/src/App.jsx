import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

// Import all our actions
import {
  increment,
  decrement,
  reset,
  incrementByValue,
} from './features/counter/CounterSlice';
import { useFetchBreedsQuery } from './features/dogs/DogApiSlice';

export const App = () => {
  const [numDogs, setNumDogs] = useState(10);

  // Create a new dispatch function to enable dispatching actions to redux state
  const dispatch = useDispatch();

  // Default the data property given back to an empty array to handle undefined (clean code 101)
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  // Hook into and pull out counter state from the redux state
  const { value } = useSelector((state) => state.counter);

  return (
    <div className='App'>
      <h1>Basic React Redux Counter</h1>
      <div className='dogs'>
        <p>Number of dogs fetched: {data.length}</p>
        <div>
          <p>Dogs to Fetch</p>
          <select
            name='dog-select'
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => {
              return (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='card'>
        <h3>{value}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button
          onClick={() =>
            dispatch(incrementByValue(Math.floor(Math.random() * 100)))
          }
        >
          By Random
        </button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};
