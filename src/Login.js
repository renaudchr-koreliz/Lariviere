import React from 'react';
import './Login.css';

function LoginPage() {
  return (
    
      <div className="min-h-full flex bg-gray-100">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className='text-center'>
              <img
                className="mx-auto h-12 w-auto"
                src="/./LariviereLogo.svg"
                alt="Lariviere"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Identifiez-vous</h2>
              <p className="mt-2 text-sm text-gray-600">
                ou{' '}
                <a href="#" className="font-medium text-blue-700 hover:text-blue-800">
                Inscrivrez vous
                </a>
              </p>
            </div>

            <div className="mt-8">
             <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div cl>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Adresse Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Mot de Passe
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Se souvenir de moi
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-blue-700 hover:text-blue-800">
                      Mot de passe oublié ?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      S’identifier
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/./still.jpg"
            alt=""
          />
        </div>
      </div>
    
  );
}

export default LoginPage;
