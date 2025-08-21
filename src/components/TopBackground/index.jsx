import LogoUsuarios from "../../assets/users.png";
import { Background } from "./styles";


function TopBackground() {
  return (
    <Background>
      <img src={LogoUsuarios} alt="logo" />
    </Background>
  )
}
export default TopBackground;