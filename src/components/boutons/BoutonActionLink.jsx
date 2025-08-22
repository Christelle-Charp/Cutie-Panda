// Composant pour la creation d'un bouton avec le texte modulatble, la fonction à choisir et le lien


import { useNavigate } from 'react-router-dom';

export default function BoutonActionLink({ children, lien, onClick, ...props }) {
  
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) onClick();

    setTimeout(() => {
      navigate(lien);
    }, 1000);
  };

  return (
    <>
      <button {...props} className="primary-btn" onClick={handleClick}>
        {children}
      </button>
    </>
  );
}
{/* 
  export default function BoutonActionLink({ children, lien, onClick, ...props }) {
  const linkRef = useRef();
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) onClick();

    //Comme je ne peux pas mettre de timer directement sur ma NavLink,
    //Je sors la NavLink de mon bouton, je lui mets un display none pour que l'utilisateur
    // ne la voye pas et je crée un click fictif sur la navLink 1 seconde après
    //que l'utilisateur ait clické sur le bouton pour permettre à la fonction reset d'agir
    //Le click fictif se fait sur la NavLink car c'est elle qui a le props linkRef
    setTimeout(() => {
      linkRef.current?.click(); // ✅ simule le clic sur NavLink
    }, 1000);
  };

  return (
    <>
      <button {...props} className="primary-btn" onClick={handleClick}>
        {children}
      </button>
      <NavLink to={lien} ref={linkRef} style={{ display: 'none' }} />
    </>
  );
}
  */}
