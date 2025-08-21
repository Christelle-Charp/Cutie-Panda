/**
 * Page d'accueil permettant d'entrant sur le site
 */

import React from 'react'
import BoutonLink from '../components/boutons/BoutonLink'

export default function Accueil() {
  return (
    <section className='accueil'>
        <div className='contenair'>
            <img src="./public/images/joie.png" alt="Dessin d'un panda assis heureux" />
            <p>Aide <span>Cutie Panda</span> à s’épanouir dans la vie, nourris le , fais le travailler, dormir et jouer, en evitant les embûches, <span>prêt</span> ? </p>
            <BoutonLink lien={"/game-play"} texte={"Jouer"}/>
        </div>
    </section>
  )
}
