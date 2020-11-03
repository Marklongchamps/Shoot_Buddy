import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScriptShow from "./ScriptShow"

import ScriptsIndexPage from "./ScriptsIndexPage"
import ScriptFormContainer from "./ScriptFormContainer"


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ScriptsIndexPage} />
        <Route exact path="/scripts" component={ScriptsIndexPage} />
        <Route exact path="/scripts/new" component={ScriptFormContainer} />
        <Route exact path="/scripts/:id" component={ScriptShow} />
        
       
      </Switch>
    </BrowserRouter>
  )
}

export default App