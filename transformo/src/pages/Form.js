import React from 'react'
import { useLocation } from 'react-router-dom'

const Form = () => {
    const location = useLocation();
    const { image } = location.state || {};
    return (
        <section className=" min-h-screen relative w-full flex-bet">
            <div className="h-screen w-[45%] relative borderSide">
                <img
                    src={image}
                    alt="Event pic"
                    className='w-full h-full relative'
                />
            </div>
            <div className="borders h-screen w-[55%] px-10 py-10">

            </div>
        </section>
    )
}

export default Form