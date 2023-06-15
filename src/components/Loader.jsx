import React from 'react'
import "../styles/components/loader.scss"

export default function Loader() {
  return (
    <div className='loader-content'>
        <p>Loading</p>
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}
