import React from 'react'
import data from "../data.json"

function SocialCard() {

    const plates = data.trackingFollowers.map(card => {
        return (
            
            <div key={card.border} className='mx-auto'>

                <div className={`rounded-lg bg-ddblue py-8 border-t-4 w-[300px] cursor-pointer hover:bg-dgblue border-${card.border} dark:bg-lgblue`}>
                    {/* start card header */}
                    <div className='flex items-center gap-3 justify-center mb-5'>
                        <span className="inline-block">
                            <img src={require(`../assets/images/${card.plate}`)} alt="face" />
                        </span>
                        <span className="inline-block text-dblue text-base font-bold dark:text-dgblue">{card.name}</span>
                    </div>
                    {/* end card header */}

                    {/* start num of followers */}
                    <div className='text-center mb-5'>
                        <h3 className='text-white font-bold text-[5rem] dark:text-vdblue'>{card.numOfFollowers}</h3>
                        <p className='uppercase text-dblue font-thin tracking-[8px] dark:text-dgblue'>{card.followers}</p>
                    </div>
                    {/* end num of followers */}

                    {/* start new followers */}
                    <div className='flex items-center gap-1 justify-center'>
                        <span className="inline-block">
                            <img src={require(`../assets/images/${card.arrow}`)} alt="face" />
                        </span>
                        <div className={`text-${card.color} font-bold`}>
                            <span className='inline-block mr-1'>{card.newFollowers}</span>
                            <span>today</span>
                        </div>
                    </div>
                    {/* end new followers */}

                </div>

            </div>
            
        )
    })

  return (
    <>
    <div className='flex flex-row flex-wrap items-center justify-between gap-5'>
        {plates}
    </div>
    </>
  )
}

export default SocialCard