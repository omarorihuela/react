import { useState } from 'react';
import './FollowButton.css';

interface ButtonProps {
  isFollow: boolean
}


const Button = ( { isFollow }: ButtonProps ) => {

  const [isFollowing, setFollowingState] = useState(isFollow);
  const [label, setLabel] = useState(isFollow ? 'Siguiendo' : 'Seguir');

  const handleClick = () => {
    setLabel(isFollowing ? 'Seguir' : 'Siguiendo');
    setFollowingState(!isFollowing);
  }

  const mouseEnter = () => {
    if (!isFollowing) return;
    return setLabel('Dejar de seguir');
  }

  const mouseLeve = () => {
    if (!isFollowing) return;
    return setLabel('Siguiendo');
  }


  return (
    <button onClick={handleClick} onMouseEnter={mouseEnter} onMouseLeave={mouseLeve}>{label}</button>
  )
}

export { Button };