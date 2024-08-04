import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className="auth-page  bg-slate-900">
      <SignUp />
    </div>
  )
}

export default SignUpPage;