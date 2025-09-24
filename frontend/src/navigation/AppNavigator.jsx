import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import DashboardPage from '../screens/DashboardPage';
import PrivateRoute from '../components/PrivateRoute';

// Lazy load other pages for better performance
const MyRecipesPage = React.lazy(() => import('../screens/MyRecipesPage'));
const RecipeDetailPage = React.lazy(() => import('../screens/RecipeDetailPage'));
const CreateRecipePage = React.lazy(() => import('../screens/CreateRecipePage'));

const AppNavigator = () => {
  return (
    <React.Suspense fallback={<div className='min-h-screen flex items-center justify-center'>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        
        <Route element={<PrivateRoute />}>
          <Route path="/my-recipes" element={<MyRecipesPage />} />
          <Route path="/recipes/new" element={<CreateRecipePage />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default AppNavigator;