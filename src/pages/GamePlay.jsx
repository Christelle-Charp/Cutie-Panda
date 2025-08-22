/**
 * Page dans laquelle on réalise les actions pour interagir avec le panda
 */

import React, { useEffect } from 'react'
import DisplayPanda from '../components/display/DisplayPanda'
import { HiOutlineEmojiHappy } from "react-icons/hi"
import { PiBatteryChargingVerticalLight } from "react-icons/pi"
import { PiMoneyFill } from "react-icons/pi"
import { usePanda } from '../contexts/PandaContext'
import BoutonAction from '../components/boutons/BoutonAction'
import { useNavigate } from 'react-router'
import MessageEphemere from '../components/display/MessageEphemere'
import Jauge from '../components/display/Jauge'

export default function GamePlay() {
    const{humeur, energie, argent, travailler, dormir, jouer, manger, messageGO, messageEA} = usePanda()

    

    //La navigation se fait dans le composant
    const navigate = useNavigate();

    useEffect(() => {
    if (messageGO) {
        navigate("/game-over");
    }
    }, [messageGO]);

  return (
    <section className='game-play'>
        <div className='contenair'>
            <div className='contenair-statut'>
                <DisplayPanda/>
            </div>
            <div className='contenair-jauges'>
                <div className='contenair-jauge'>
                    <HiOutlineEmojiHappy className="icone"/>
                    <div className='jauge'>
                        <Jauge valeur={humeur}/>
                    </div>
                </div>
                <div className='contenair-jauge'>
                    <PiBatteryChargingVerticalLight className="icone rotate"/>
                    <div className='jauge'>
                        <Jauge valeur={energie}/>
                    </div>
                </div>
                <div className='contenair-jauge'>
                    <PiMoneyFill className="icone underligne"/>
                    <div className='jauge'>
                        <Jauge valeur={argent}/>
                    </div>
                </div>
            </div>
            <div className='contenair-bouton'>
                <BoutonAction onClick={manger}>Manger</BoutonAction>
                <BoutonAction onClick={dormir}>Dormir</BoutonAction>
                <BoutonAction onClick={travailler}>Travailler</BoutonAction>
                <BoutonAction onClick={jouer}>Jouer</BoutonAction>
            </div>
            <div className='contenair-message'>
                <MessageEphemere>{messageEA}</MessageEphemere>
            </div>
        </div>
    </section>
  )
}
