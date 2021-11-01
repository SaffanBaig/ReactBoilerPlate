import NotFound from 'components/Error/NotFound';
import DefaultLayout from 'layouts/DefaultLayout';
import { lazy } from 'react';
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isUserLoggedIn } from 'utils/authUtils';
import { DefaultRoute, Routes } from './routes';

const Router = () => {

    return (
            <AppRouter basename={process.env.REACT_APP_BASENAME}>
                <DefaultLayout>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={() => {
                                return isUserLoggedIn() ? <Redirect to={DefaultRoute} /> : <Redirect to='/login' />
                            }}
                        />
                        {Routes.map(route => {
                            return(
                                <Route path={route?.path} exact={route?.exact} component={route?.component} />
                            )
                            
                        })}
                        {/* <Route path="/nb" exact component={lazy(() => import('../components/Error/Test'))} /> */}
                        {/* {ResolveRoutes()} */}
                        <Route path='*' component={NotFound} />
                    </Switch>
                </DefaultLayout>
            </AppRouter>
        )
}

export default Router;