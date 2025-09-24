import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import { CakeIcon, BeakerIcon, FireIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  const features = [
    {
      icon: <FireIcon className="h-8 w-8 text-orange-500" />,
      title: 'Share Your Creations',
      description: 'Easily upload and share your favorite comfort food recipes with a community of food lovers.'
    },
    {
      icon: <CakeIcon className="h-8 w-8 text-pink-500" />,
      title: 'Discover New Favorites',
      description: 'Explore a growing collection of delicious, home-cooked meals, from hearty stews to decadent desserts.'
    },
    {
      icon: <BeakerIcon className="h-8 w-8 text-blue-500" />,
      title: 'Perfect Your Craft',
      description: 'Find detailed instructions and tips to help you master classic comfort food dishes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero
          title="Share the Warmth of Home Cooking"
          subtitle="BrownFood is a community for sharing and discovering the comforting, delicious recipes that feel like home. Join us and find your next favorite meal."
          primaryAction={{ text: 'Get Started Free', href: '/register' }}
          secondaryAction={{ text: 'Browse Recipes', href: '/dashboard' }}
        />

        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Everything You Need to Cook with Confidence
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Our platform is designed to make sharing and finding recipes simple and enjoyable.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600">
          <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to start cooking?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100">
              Create an account today and join our community of passionate home cooks.
            </p>
            <a
              href="/register"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
            >
              Sign up for free
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
