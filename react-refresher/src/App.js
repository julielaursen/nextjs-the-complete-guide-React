import Todo from './components/Todo'
import Modal from './components/Modal'
import Backdrop from './components/Backdrop'

function App() {
  return (
    <div>
      <hi>My Todos</hi>
      <Todo text="Learn react" />
      <Todo text="Master react" />
      <Todo text="Explore full react course" />
      <Modal />
      <Backdrop />
    </div>
  )
}

export default App
