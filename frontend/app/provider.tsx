'use client'
import { store } from '@/libs/features/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<typeof store>()
  if (!storeRef.current) {
    storeRef.current = store
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>
}
