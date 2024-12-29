import { useState } from 'react';
import './FollowButton.css';
import clsx from 'clsx';

interface ButtonProps {
  isFollow: boolean
}


const Button = ( { isFollow }: ButtonProps ) => {

  const [isFollowing, setFollowingState] = useState(isFollow);
  const [label, setLabel] = useState(isFollow ? 'Siguiendo' : 'Seguir');
  const [leaveButton, setLeaveButton] = useState(false);

  const handleClick = () => {
    setLabel(isFollowing ? 'Seguir' : 'Siguiendo');
    setLeaveButton(false);
    setFollowingState(!isFollowing);
  }

  const mouseEnter = () => {
    if (!isFollowing) return;
    setLabel('Dejar de seguir');
  }

  const mouseLeve = () => {
    if (!isFollowing) return;
    setLeaveButton(true);
    setLabel('Siguiendo');
  }

  return (
    <button onClick={handleClick} onMouseEnter={mouseEnter} onMouseLeave={mouseLeve} 
      className={clsx({
        isFollowing: (isFollowing && leaveButton)
      })} >
        {label}
    </button>
  )
}

export { Button };