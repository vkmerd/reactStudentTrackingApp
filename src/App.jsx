import { useState } from 'react'
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import { SupabaseProvider } from './supaClient';

function App() {
    return (
    <SupabaseProvider>
      <Header />
      <div className="containers">
        <div className="formAndRegister">
          <Register />
          <Login />
        </div>
      </div>
    </SupabaseProvider>
  )
}

export default App
