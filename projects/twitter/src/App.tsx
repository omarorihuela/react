import { FollowCard } from "./components/FollowCard/FollowCard";

const App = () => {
  return(
    <>
      <FollowCard userName='Ironman' email='ironman' isFollow={false}/>
      <FollowCard userName='Thor' email='thor' isFollow={false}/>
      <FollowCard userName='Black Widow' email='blackwidow' isFollow={false}/>
    </>
  )
}

export { App };