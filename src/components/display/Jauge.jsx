//Composant qui gere l'affichage du remplissage de la jauge

import { motion } from 'framer-motion';
import React from 'react'

export default function Jauge({valeur}) {
    const isCritique = valeur <= 10;
    //Je crée une constante pour gérer la couleur des jauges
    const getColor = (valeur)=>{
        if (valeur <= 10) return '#e75a5a';
        if (valeur <= 30) return '#e7a05a';
        return '#758478';
    }
  return (
    <motion.div className='remplissage'
    style={{
        width: `${valeur}%`,
        backgroundColor: getColor(valeur),
    }}
    animate={isCritique ? { opacity: [1, 0.3, 1] } : {}}
    transition={isCritique ? { duration: 0.6, repeat: Infinity } : {}}
    />

  )
}
