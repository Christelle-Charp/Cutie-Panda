/**
 * Page qui annonce le motif du Game Over et permet de relancer une partie
 */

import React from 'react'
import BoutonAction from '../components/boutons/BoutonAction'

export default function GameOver() {
  return (
    <section className='game-over'>
            <div className='contenair'>
                <img src="./public/images/game_over.png" alt="Dessin d'un panda avec une auréole et le texte Game Over" />
                <p>La colère à emporté Cutie Panda, il est au paradis des bambous</p>
                <BoutonAction>Rejouer</BoutonAction>
            </div>
        </section>
  )
}
