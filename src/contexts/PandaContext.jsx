/**
 * Context pour gérer les interactions avec le panda
 */

import { createContext, useContext, useEffect, useState } from "react";

const PandaContext = createContext()

//Je crée la fonction provider

import React from 'react'


export default function PandaProvider({children}) {

    //Je crée mes états
    const[energie, setEnergie] = useState((100))
    const[humeur, setHumeur] = useState(100)
    const[argent, setArgent] = useState(50)
    const[statut, setStatut] = useState("joie")
    const[messageGO, setMessageGO] = useState("")
    const[isGameOver, setIsGameOver] = useState(false)
    const[isEnCours, setIsEnCours] = useState(false)
    const[messageEA, setMessageEA] = useState("")

    const evenements = [
        {texte: "Vous trouvez un billet de 20€ par terre !", effet: 20, stat: "argent"},
        {texte: "Vous avez oublié de payer votre loyer…", effet: -30, stat: "argent"},
        {texte: "Un ami vous invite au cinéma gratuitement !", effet: 10, stat: "humeur"},
        {texte: "Vous tombez malade…", effet: -15, stat: "energie"}
    ]

    /*-----------Gestion du statut--------------- */
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



    /*-----------Gestion du GameOver--------------- */
    //Je crée le useEffect pour détecter le GameOver
    useEffect(()=>{
        if (isGameOver) return;

        if (energie <= 0) {
            setIsGameOver(true);
            setIsEnCours(false);
            setMessageGO(<p>La fatigue a emporté <span>Cutie Panda</span>, il est au paradis des bambous</p>);
            return;
        }

        if (humeur <= 0) {
            setIsGameOver(true);
            setIsEnCours(false);
            setMessageGO(<p>La colère a emporté <span>Cutie Panda</span>, il est au paradis des bambous</p>);
            return;
        }

        if (argent <= 0 && !peutTravailler()) {
            setIsGameOver(true);
            setIsEnCours(false);
            setMessageGO(<p><span>Cutie Panda</span> est ruiné</p>);
            return;
        }

    }, [energie, humeur, argent, isGameOver])


    //Fonctions pour le Game Over
    function gameOver(energie, humeur, argent){
        //Role: Retourner un message adapté si un état passe à 0
        //Parametre: energie, humeur, argent
        //Retour: le message adapté  
        if(energie <= 0) {
            setIsGameOver(true);
            setIsEnCours(false);
            return <p>La fatigue a emporté <span>Cutie Panda</span>, il est au paradis des bambous</p>
        }
        if(humeur <= 0) {
            setIsGameOver(true);
            setIsEnCours(false);
            return <p>La colère a emporté <span>Cutie Panda</span>, il est au paradis des bambous</p>
        }
        if(argent <= 0 && !peutTravailler) {
            setIsGameOver(true);
            setIsEnCours(false);
            return <p><span>Cutie Panda</span> est ruiné</p>
        }
        return null;
    }

    //Fonction pour vérifier si travailler est possible
    function peutTravailler(){
        //Role: Vérifier si Panda peut réaliser l'action travailler
        //Parametre:
        //  Neant
        //Retour; retourne true si peut travailler sinon false

        return energie >= 30 && humeur >= 10;

    }


    /*----------Gestion des actions automatiques------- */
    //Je crée le useEffect qui affecte les stat toutes les 10 secondes
    useEffect(()=>{
        const interval = setInterval(() => {
            //Je vérifie si le jeu est en cours
            if(!isGameOver && isEnCours){
                //Je crée un interval qui modifie la valeur actuelle de l'état avec prev 
                //Comme ça j'utilise la bonne valeur meme si l'utilisateur a fait une modification dans l'interval des 10 secondes
                setEnergie(prev => prev - 5);
                setHumeur(prev => prev - 5);
            }
        }, 10000); //  toutes les 10 secondes

        return () => clearInterval(interval); //  nettoyage à la fin

    }, [isGameOver, isEnCours])


    //Je crée le useEffect qui gère les évenements aléatoire
    useEffect(()=>{
        const interval = setInterval(()=>{
            //Je vérifie si le jeu est en cours
            if(!isGameOver && isEnCours){
                const evenement = eventAleatoire();
                effetAleatoire(evenement);
            }
        }, 30000)   //Toutes les 30 secondes

        return () => clearInterval(interval); //  nettoyage à la fin
        
    }, [isGameOver, isEnCours])

    //Je crée la function qui gère les évenement aléatoire
    function eventAleatoire(){
        //Role: choisir un évenement aléatoire
        //Parametre: Néant
        //Retour, l'index d'un évenement
        const index = Math.floor(Math.random()*evenements.length);
        const evenement = evenements[index]
        return evenement;
    }

    function effetAleatoire(evenement){
        //Role: appliquer l'evenement à la stat et modifier le message de l'evenement aléatoire
        //Parametre: l'évenement
        //Retour: Néant
        if (evenement.stat == "argent"){
            setArgent(prev => prev + evenement.effet);
        }
        if (evenement.stat == "humeur"){
            setHumeur(prev => prev + evenement.effet);
        }
        if (evenement.stat == "energie"){
            setEnergie(prev => prev + evenement.effet);
        }
        setMessageEA(evenement.texte);
    }



    /*----Fonctions pour gérer les interactions en faisant en sorte que les états ne dépasse pas 100
    Pour empecher de dépasser 100, utilisation de Math.min(100, valeur)----*/
    function travailler(){
        //Role: modifier les états energie, humeur et argent
        //Parametre: néant
        //Retour: néant

        const newEnergie = Math.min(100, energie - 30);
        const newHumeur = Math.min(100, humeur - 10);
        const newArgent = Math.min(100, argent + 40);

        setEnergie(newEnergie);
        setHumeur(newHumeur);
        setArgent(newArgent);

        //Je vérifie si un des état est égal à 0
        const message = gameOver(newEnergie, newHumeur, newArgent);
        if(message){
            //Si oui, je rempli la variable messageGO
            setMessageGO(message);
        }
    }

    function dormir(){
        //Role: modifier les états energie, humeur et argent
        //Parametre: néant
        //Retour: néant

        const newEnergie = Math.min(100, energie + 50);
        const newHumeur = Math.min(100, humeur - 5);

        setEnergie(newEnergie);
        setHumeur(newHumeur);

        //Je vérifie si un des état est égal à 0
        const message = gameOver(newEnergie, newHumeur);
        if(message){
            //Si oui, je rempli la variable messageGO
            setMessageGO(message);
        }
    }

    function jouer(){
        //Role: modifier les états energie, humeur et argent
        //Parametre: néant
        //Retour: néant

        const newEnergie = Math.min(100, energie - 10);
        const newHumeur = Math.min(100, humeur + 30);
        const newArgent = Math.min(100, argent - 20);

        setEnergie(newEnergie);
        setHumeur(newHumeur);
        setArgent(newArgent);

        //Je vérifie si un des état est égal à 0
        const message = gameOver(newEnergie, newHumeur, newArgent);
        if(message){
            //Si oui, je rempli la variable messageGO
            setMessageGO(message);
        }
    }

    function manger(){
        //Role: modifier les états energie, humeur et argent
        //Parametre: néant
        //Retour: néant

        const newEnergie = Math.min(100, energie + 20);
        const newHumeur = Math.min(100, humeur - 5);
        const newArgent = Math.min(100, argent - 10);

        setEnergie(newEnergie);
        setHumeur(newHumeur);
        setArgent(newArgent);

        //Je vérifie si un des état est égal à 0
        const message = gameOver(newEnergie, newHumeur, newArgent);
        if(message){
            //Si oui, je rempli la variable messageGO
            setMessageGO(message);
        }
    }

    /*---------Fonction pour démarrer le jeu---------*/
    function demarrer(){
        //Role: changer l'état de isEnCours. La passer à true
        //Parametre: Néant
        //Retour: Néant
        setIsEnCours(true); 
    }

    /*---------Fonction pour gérer le reset--------- */

    //Fonction reset
    function reset(){
        //Role: Remettre les états àleur état d'origine
        //Parametre: Néant
        //Retour: Néant
        setArgent(50);
        setEnergie(100);
        setHumeur(100);
        setStatut("joie");
        setIsGameOver(false);
        setIsEnCours(true);
        setMessageGO("");
        setMessageEA("");
    }


  return (
    <PandaContext.Provider value={{energie, humeur, argent, statut, messageGO, messageEA, isEnCours, travailler, dormir, jouer, manger, reset, demarrer}}>
        {children}
    </PandaContext.Provider>
  )
}

//Je crée le hook personnalisé
export function usePanda(){
    return useContext(PandaContext)
}
