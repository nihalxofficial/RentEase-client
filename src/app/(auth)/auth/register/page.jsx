import React from 'react';
import RegisterClient from './RegisterClient';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';

const RegisterPage = async() => {
  const user = await getUserSession();
    if(user){
      redirect("/")
    }
  return (
    <div>
      <RegisterClient/>
    </div>
  );
};

export default RegisterPage;