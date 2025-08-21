/**
 * Context pour gérer les interactions avec le panda
 */

import { createContext, useContext, useEffect, useState } from "react";

const PandaContext = createContext()

//Je crée la fonction provider

import React from 'react'

export default function PandaProvider({children}) {

    //Je crée mes états
    const[energie, setEnergie] = useState(100)
    const[humeur, setHumeur] = useState(100)
    const[argent, setArgent] = useState(50)
    const[statut, setStatut] = useState("joie")

    //Fonction pour obtenir le statut de mon panda:
    function getStatut({energie, humeur, argent}){
        //Role: Obtenir le statut de mon panda en fonction de son energie, son humeur et son argent en partant du status de base qui est joie
        //Parametre: energie, humeur, argent
        //Retour: le statuts

        if(energie <= 10) return "sommeil";
        if(energie <= 30) return "faim";
        if(humeur <=10) return "colere";
        if(humeur <=30) return "neutre";
        if(argent <= 20) return "pauvre";
        return "joie";
    }

    //Je crée le useEffect qui va gérer les fluctuations de mon statut
    useEffect(()=>{
        const nouveauStatut = getStatut({energie, humeur, argent});
        setStatut(nouveauStatut);
    },[energie, humeur,argent])

  return (
    <PandaContext.Provider value={{energie, humeur, argent, statut}}>
        {children}
    </PandaContext.Provider>
  )
}

//Je crée le hook personnalisé
export function usePanda(){
    return useContext(PandaContext)
}
