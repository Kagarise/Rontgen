import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import NotFound from "../pages/NotFound";


const router = (
    <Router>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/show/:id" component={Show}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export default router;