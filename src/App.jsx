import './App.css'
import { Provider } from 'react-redux'
import store from './store.js'
import CounterContainer from './counter/counterContainer.jsx'

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  )
}

export default App
