import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SingleGroup from './components/groups/SingleGroup.js'
import SingleActivity from './components/activities/SingleActivity'
import ActivitiesIndex from './components/activities/ActivitiesIndex'
import GroupsIndex from './components/groups/GroupsIndex'
import UserRegister from './components/Auth/UserRegister.js'
import UserLogin from './components/Auth/UserLogin.js'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path ='/groups/:id'>
          <SingleGroup />
        </Route>
        <Route path ='/groups'>
          <GroupsIndex />
        </Route>
        <Route path ='/activities/:id'>
          <SingleActivity />
        </Route>
        <Route path ="/activities">
          <ActivitiesIndex />
        </Route>
        <Route path="/login">
          <UserLogin />
        </Route>
        <Route path="/register">
          <UserRegister />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App