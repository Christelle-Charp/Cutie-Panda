//Composant pour afficher le statut du panda

import React from 'react'
import { usePanda } from '../../contexts/PandaContext'

export default function DisplayPanda() {

    const{statut} = usePanda()

    const images = {
        joie: "joie.png",
        colere: "colere.png",
        faim: "faim.png",
        neutre: "neutre.png",
        pauvre: "pauvre.png",
        sommeil: "sommeil.png",
    }

  return <img src={`/images/${images[statut]}`} alt={`Panda ${statut}`} />
}
