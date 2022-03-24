import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, sub } from './actions/index';

function App() {
  const myState = useSelector((state) => state.changeNum);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(sub())}>-</button>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(add())}>+</button>
    </div>
  );
}

export default App;
