// components/AuthModal.tsx
import React from 'react';

interface AuthModalProps {
  isAuthModalOpen: boolean;
  closeAuthModal: () => void;
  isSignUp: boolean;
  toggleAuthMode: () => void;
  isDarkMode: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isAuthModalOpen,
  closeAuthModal,
  isSignUp,
  toggleAuthMode,
  isDarkMode,
}) => {
  if (!isAuthModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay">
      <div
        className={`p-6 rounded-lg shadow-xl w-96 ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
          <button onClick={closeAuthModal} className="text-2xl">
            &times;
          </button>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {isSignUp && (
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full p-2 border rounded ${
                  isDarkMode
                    ? 'bg-gray-700 text-white border-gray-600'
                    : 'bg-white text-gray-900 border-gray-300'
                }`}
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full p-2 border rounded ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-gray-900 border-gray-300'
              }`}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full p-2 border rounded ${
                isDarkMode
                  ? 'bg-gray-700 text-white border-gray-600'
                  : 'bg-white text-gray-900 border-gray-300'
              }`}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={toggleAuthMode}
            className={`${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            } hover:underline`}
          >
            {isSignUp
              ? 'Already have an account? Sign In'
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

   {/*   {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay">
          <div
            className={`p-6 rounded-lg shadow-xl w-96 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {isSignUp ? "Sign Up" : "Sign In"}
              </h2>
              <button onClick={closeAuthModal} className="text-2xl">
                &times;
              </button>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {isSignUp && (
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full p-2 border rounded ${
                      isDarkMode
                        ? "bg-gray-700 text-white border-gray-600"
                        : "bg-white text-gray-900 border-gray-300"
                    }`}
                    required
                  />
                </div>
              )}
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-2 border rounded ${
                    isDarkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`w-full p-2 border rounded ${
                    isDarkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                onClick={toggleAuthMode}
                className={`${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                } hover:underline`}
              >
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </div>
      )} */}