//Composant pour gérer les boutons qui sont des liens

import { NavLink } from "react-router";

export default function BoutonLink({texte, lien, onClick}){
    return(
        
            <NavLink
                to={lien}
                className="primary-btn"
                onClick={onClick}
            >
                {texte}
            </NavLink>

        
    )
}