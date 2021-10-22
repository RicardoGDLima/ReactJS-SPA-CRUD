import { Switch, Route, Redirect } from "react-router-dom"
import { Home } from "../components/Home"
import { UsersList } from "../components/pages/UsersLists"

export function Routes() {
    return (
        
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/users' component={UsersList}></Route> 
                <Redirect from='*' to='/' />
            </Switch>
        
    )
}

