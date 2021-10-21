import { Switch, Route, Redirect } from "react-router"
import { Home } from "../components/Home"

export function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Redirect from='*' to='/' />
            <Route path='/users' />
        </Switch>
    )
}

