import React from 'react'
import Header from './Header'
import SocialCard from './SocialCard'
import ActivationCard from './ActivationCard'

function Main() {
  return (
    <>
    <div className='page'>
      <main className="min-w-screen min-h-screen bg-vdblue dark:bg-white">
          <Header />

          <div className="md:-mt-32 pt-5 md:pt-0 container mx-auto">
            <SocialCard />
          </div>

          <ActivationCard />

      </main>
    </div>
    </>
  )
}

export default Main