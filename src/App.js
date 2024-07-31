import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  // const dispatch = useDispatch();
  // const product = {
  //   name: 'Iphone',
  //   category: 'mobile',
  //   price: 100000,
  //   color: 'red'
  // };
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
