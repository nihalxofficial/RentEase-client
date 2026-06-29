import React from 'react';
import LoginClient from './LoginClient';
import { redirect } from 'next/navigation';
import { getUserSession } from '@/lib/core/session';

const LoginPage = async() => {
  const user = await getUserSession();
  if(user){
    redirect("/")
  }
  return (
    <div>
      <LoginClient/>
    </div>
  );
};

export default LoginPage;