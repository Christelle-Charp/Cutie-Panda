/**
 * Composant d'un message éphémère. Il reste affiché 10 secondes puis disparait
 */

import React, { useEffect, useState } from 'react'

export default function MessageEphemere({children, duree = 10000}) {
    const [visible, setVisible] = useState(true)

    useEffect(()=>{
        setVisible(true);
        const timer = setTimeout(()=>{
            setVisible(false)
        }, duree)

        return ()=>clearTimeout(timer)
    }, [children, duree])

    if (!visible) return null;


  return (
    <p>{children}</p>
  )
}
