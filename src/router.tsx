import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import { Historic } from './modules/Historic'
import { plateAtom } from '../src/modules/Leave/state'
import { useAtomValue } from 'jotai'

export const Router = (): JSX.Element => {
  const plate = useAtomValue(plateAtom)
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/historic" element={<Historic plate={plate} />} />
      </Routes>
    </HashRouter>
  )
}
