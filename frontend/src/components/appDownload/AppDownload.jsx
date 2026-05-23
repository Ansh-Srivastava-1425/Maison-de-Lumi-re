import React from 'react'
import './appDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <section className='app-download'>
      <div className='app-download-content'>
        <p className='app-download-tag'>Mobile experience</p>
        <h2>For better experience download the app</h2>
        <p className='app-download-text'>
          Order your favorite meals faster, track your delivery, and enjoy special deals from your phone.
        </p>

        <div className='app-download-buttons'>
          <a href='#' aria-label='Download on the App Store' className='store-link'>
            <img src={assets.app_store} alt='Download on the App Store' />
          </a>
          <a href='#' aria-label='Get it on Google Play' className='store-link'>
            <img src={assets.play_store} alt='Get it on Google Play' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default AppDownload
