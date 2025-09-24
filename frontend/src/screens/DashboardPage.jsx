import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import recipeService from '../services/recipeService';
import { PlusIcon } from '@heroicons/react/24/solid';

const DashboardPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setError('');
        setLoading(true);
        const data = await recipeService.getAll();
        setRecipes(data || []);
      } catch (err) {
        setError('Failed to fetch recipes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between pb-8 border-b border-gray-200">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Community Recipes</h1>
              <p className="mt-1 text-lg text-gray-500">Discover delicious comfort food from our community.</p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <Link
                to="/recipes/new"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                New Recipe
              </Link>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <Spinner />
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-600 bg-red-50 p-4 rounded-md">{error}</div>
          ) : recipes.length > 0 ? (
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {recipes.map((recipe) => (
                <Card key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-800">No recipes yet!</h3>
              <p className="text-gray-500 mt-2">Be the first to share a recipe with the community.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
