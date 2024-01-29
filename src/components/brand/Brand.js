import React from 'react'
import { client1, client2, client3, client4 } from './import'
import './brand.css'
const Brand = () => {
  return (
    <div className="remote__brand-images">
        <div>
            <img src={client1} alt="" />
        </div>

        <div>
            <img src={client2} alt="" />
        </div>

        <div>
            <img src={client3} alt="" />
        </div>

        <div>
            <img src={client4} alt="" />
        </div>
    </div>
    
  )
}

export default Brand