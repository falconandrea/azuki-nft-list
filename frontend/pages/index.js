import { Inter } from 'next/font/google'

import { Header } from '@/components/Header'
import { Grid } from '@/components/Grid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <div className={`flex min-h-screen flex-col items-center justify-between py-8 ${inter.className}`}>
        <Grid />
      </div>
    </main>
  )
}
