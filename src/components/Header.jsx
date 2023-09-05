import React from 'react'

function Header() {

    const [darkMode, setDarkMode] = React.useState(true)

      const themeToggler = e => {
        let myPage = document.querySelector(".page")
        e.currentTarget.classList.toggle("justify-end")
        e.currentTarget.classList.toggle("bg-light-theme")
        setDarkMode(!darkMode)
        darkMode? myPage.classList.add("dark") : myPage.classList.remove("dark")
    }

  return (
    <>
    <header className="md:bg-vdblue-2 rounded-b-3xl md:min-h-[40vh] p-5 dark:bg-vpblue">

        <div className="container mx-auto md:flex justify-between items-center">
            
            <div className='border-b border-dblue pt-4 pb-9 md:p-0 md:border-0'>
                <h1 className='text-white mb-2 font-bold text-4xl dark:text-vdblue'>
                    Social Media Dashboard
                </h1>
                <h2 className='text-dblue font-bold text-base md:text-xl dark:text-dgblue'>Total followers: 23,004</h2>
            </div>

            <div className='flex justify-between items-center md:justify-normal md:gap-2 font-bold text-base py-5 md:p-0'>
                <p className='text-dblue dark:text-dgblue'>Dark Mode</p>
                <button onClick={themeToggler} className="w-[4rem] h-[2rem] rounded-full p-1 flex items-center bg-gradient-to-tr from-gradiant-from to-gradiant-to dark:bg-dgblue">
                    <span className='toggler inline-block w-[1.6rem] h-[1.6rem] bg-vdblue rounded-full'></span>
                </button>
            </div>

        </div>

    </header>
    </>
  )
}

export default Header