import { Route, Switch } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path="/favorites">
          <Favorites></Favorites>
        </Route>
      </Switch>
    </div>
  )
}

export default App
