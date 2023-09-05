import React from 'react'
import data from "../data.json"

function ActivationCard() {

    const socialActivities = data.trackingActivation.map(card => {
        return (
            <div key={card.number} className="mx-auto">
                <div className='rounded-lg hover:bg-dgblue cursor-pointer bg-ddblue p-8 w-[300px] dark:bg-lgblue'>

                    <div className='flex justify-between items-center mb-5'>
                        <div>
                            <p className='text-dblue font-bold dark:text-dgblue'>{card.title}</p>
                        </div>
                        <div>
                            <img src={require(`../assets/images/${card.image}`)} alt="social" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <h2 className='text-white font-bold text-4xl dark:text-vdblue'>{card.number}</h2>
                        <div className={`flex flex-row items-center text-${card.color} font-bold`}>
                            <span className='inline-block mr-1'><img src={require(`../assets/images/${card.arrow}`)} alt="up-icon" /></span>
                            <span>{card.precent}</span>
                            <span>%</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    })

  return (
    <>
    <div className='container mx-auto'>

        <h2 className='text-white text-center lg:text-left pt-8 mb-4 font-bold text-4xl dark:text-dgblue'>Overview - today</h2>

        <div className='flex flex-row flex-wrap gap-5 items-center py-5'>

            {socialActivities}

        </div>

    </div>
    </>
  )
}

export default ActivationCard