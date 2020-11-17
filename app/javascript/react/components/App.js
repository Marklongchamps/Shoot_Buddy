import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScriptShow from "./ScriptShow"

import ScriptsIndexPage from "./ScriptsIndexPage"
import ScriptFormContainer from "./ScriptFormContainer"
import SingleShot from "./SingleShot"
import DestroyScript from "./DestroyScript"
import UpdateScript from "./UpdateScript"
import UpdateShot from "./UpdateShot"
import DestroyShot from "./DestroyShot"
import UpdateTake from "./UpdateTake"
import DestroyTake from "./DestroyTake"


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ScriptsIndexPage} />
        <Route exact path="/scripts" component={ScriptsIndexPage} />
        <Route exact path="/scripts/new" component={ScriptFormContainer} />
        <Route exact path="/scripts/:id" component={ScriptShow} />
        <Route exact path="/scripts/:id/shots/:id" component={SingleShot} />
        <Route exact path="/scripts/:id/destroy" component={DestroyScript} />
        <Route exact path="/scripts/:id/update" component={UpdateScript} />
        <Route exact path="/scripts/:id/shots/:id/update" component={UpdateShot} />
        <Route exact path="/scripts/:id/shots/:id/destroy" component={DestroyShot} />
        <Route exact path="/scripts/:id/shots/:id/takes/:id/update" component={UpdateTake} />
        <Route exact path="/scripts/:id/shots/:id/takes/:id/destroy" component={DestroyTake} />
        
        
        
       
      </Switch>
    </BrowserRouter>
  )
}

export default App