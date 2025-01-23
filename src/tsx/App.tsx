import { Provider } from 'react-redux'
import '../css/App.css'
import { MainMoviePage } from './toolkit/components/MainMoviePage'
import { store } from './toolkit/redux/store'



function App() {
  return (
    <Provider store={store}>
      <MainMoviePage />
    </Provider>
  )
}

export default App
