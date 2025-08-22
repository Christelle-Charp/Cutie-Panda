/**
 * Page qui annonce le motif du Game Over et permet de relancer une partie
 */

import React from 'react'
import BoutonAction from '../components/boutons/BoutonAction'
import { usePanda } from '../contexts/PandaContext'
import BoutonLink from '../components/boutons/BoutonLink';
import BoutonActionLink from '../components/boutons/BoutonActionLink';


export default function GameOver() {
  const{messageGO, reset} = usePanda();
  return (
    <section className='game-over'>
            <div className='contenair'>
                <img src="/images/game_over.png" alt="Dessin d'un panda avec une auréole et le texte Game Over" />
                {messageGO}
                <BoutonActionLink onClick={reset} lien={"/game-play"} >Rejouer</BoutonActionLink>
            </div>
        </section>
  )
}
