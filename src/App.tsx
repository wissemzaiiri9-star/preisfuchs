import { useState, useCallback } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Home from '@/pages/Home'
import Tests from '@/pages/Tests'
import Article from '@/pages/Article'
import { Impressum, Datenschutz } from '@/pages/Legal'
import type { Page } from '@/types'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const go = useCallback((next: Page) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header current={page} go={go} />
      {page === 'home' && <Home go={go} />}
      {page === 'tests' && <Tests go={go} />}
      {page === 'article' && <Article go={go} />}
      {page === 'impressum' && <Impressum />}
      {page === 'datenschutz' && <Datenschutz />}
      <Footer go={go} />
    </div>
  )
}
