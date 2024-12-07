'use client'
import Login from './auth/login'
import Register from './auth/register';

export default function Home() {
  return <div>
    <Login/>
    <Register/>
  </div>;
}
