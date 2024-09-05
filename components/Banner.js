import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <div className='small-title'>We are looking forward to start a new project</div> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <button className='button-74'>Request a call-back</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
