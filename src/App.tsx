import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const cityForm = document.querySelector('form') as HTMLFormElement;
  

cityForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const cityInput = cityForm.elements.namedItem('city') as HTMLInputElement;
  const city = cityInput.value.trim();
  cityForm.reset();
});


  return (
    <div className='container my-5 mx-auto'>
      <h1 className='text-muted text-center my-4'>Yo! Window!</h1>

      <form className="change-location my-4 text-center text-muted">
        <label htmlFor="city">Enter the location</label>
        <input type="text" name="city" className="form-control p-4" />
      </form>

      <div className="card shadow-lg rounded d-none">
        <img src="https://via.placeholder.com/400x300" className="time card-img-top" alt="time" />
        <div className="icon bg-light mx-auto text-center">
          <img src="" alt="" />
        </div>
        </div>

        <div className="text-muted text-uppercase text-center details">
          <h5 className="my3">City name</h5>
          <div className="my-3">Weather Condition</div>
          <div className="display-4 my-4">
            <span>temp</span>
            <span>&deg;c</span>
          </div>
        </div>
      </div>
  );
}

export default App
