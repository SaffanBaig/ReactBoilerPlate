import { lazy } from 'react'

// First page route when user is logged in
const DefaultRoute = '/'

// Routes of your application
const Routes = [
    // Sample object with required attributes
   /*
    {
        path: '/path',
        component: lazy(() => import('path of your view')),
        exact: Boolean true or false,
        protected: Boolean true or false,
    }
    */
    {
        path: '/nb',
        component: lazy(() => import('../../components/Error/Test')),
        exact: true,
        protected: false
    },
    {
        path: '/mb',
        component: lazy(() => import('../../components/Error/Test')),
        exact: false,
        protected: false
    }
]

export {DefaultRoute, Routes}