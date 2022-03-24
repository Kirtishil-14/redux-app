import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { add, sub, show } from './actions/index';

function App() {
  const myState = useSelector((state) => state.changeNum);
  const name = useSelector((state) => state.showName);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(sub())}>-</button>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(add())}>+</button>
      <div>
        {name}
        <button onClick={() => dispatch(show())}>Show</button>
      </div>
    </div>
  );
}

export default App;
