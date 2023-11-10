import React from 'react'
import { FirebaseAuthProvider } from '@/contexts/firebaseAuthContext'
import { ToastProvider } from '../contexts/ToastContext'
import { ImageProvider } from '@/contexts/Imagecontext/imageContext'

export const metadata = {
  title: 'Main root of the Project',
  description: 'Main root description of the Project',
}

export default function AppLayout({ children }) {
  return (
    <html lang="en" className={`bg-white`}>
      <body className="flex flex-col">
        <FirebaseAuthProvider>
          {' '}
          <ImageProvider>
            <ToastProvider>{children}</ToastProvider>
          </ImageProvider>
        </FirebaseAuthProvider>
      </body>
    </html>
  )
}
