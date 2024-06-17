import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionsPage from './pages/CollectionsPage';
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'

const RootComponent: React.FC = () => {
    return (
        <Router>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
            <Route path={ROUTES.COLLECTIONS_ROUTE} element={<CollectionsPage />} />
          </Routes>
        </Router>
    )
}

export default RootComponent
