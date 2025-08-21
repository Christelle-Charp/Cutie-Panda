/**
 * Page dans laquelle on réalise les actions pour interagir avec le panda
 */

import React from 'react'
import DisplayPanda from '../components/display/DisplayPanda'

export default function GamePlay() {
  return (
    <section className='game-play'>
        <div className='contenair'>
            <div className='contenair-statut'>
                <DisplayPanda/>
            </div>
        </div>
    </section>
  )
}
