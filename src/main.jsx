import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import {
  QueryClientProvider,
} from '@tanstack/react-query'

import { router } from './Routes/Routes.jsx';
import AuthProvider from './Pages/providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider>
      <HelmetProvider>
            <div  className="max-w-6xl mx-auto font-roboto">
              <AuthProvider>
                <RouterProvider router={router} /> 
              </AuthProvider>
            </div>
        </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
