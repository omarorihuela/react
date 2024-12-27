import './FollowCard.css';
import { Button } from "components/FollowButton/FollowButton";

interface FollowCardProps {
  userName: string;
  email: string;
  isFollow: boolean;
}
const FollowCard = ({ userName, email, isFollow = false }: FollowCardProps) => {
  return (
    <div className="card-wrapper">
      <div className='image-wrapper'>
        <img className='profile-image' src={`https://unavatar.io/${userName}`} alt="" />
      </div>

      <div className='user-data-wrapper'>
        <p className='user-name' >{userName}</p>
        <p className='email' >{`@${email}`}</p>
      </div>      

      <div className='follow-button-wrapper'>
        <Button isFollow={isFollow}/>
      </div>

    </ div>

  )

}

export { FollowCard };