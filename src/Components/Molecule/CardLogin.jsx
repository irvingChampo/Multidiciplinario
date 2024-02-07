import Button from '../Atomo/Button';
import Input from '../Atomo/Input';
import '../Molecule/CardLogin.css';
import TresR from '../img/Simbolo3r.png';

const card = () => (
  <div className="card">
    <img className='TresR' src={TresR} alt="Imagen de la tarjeta" />
    <div className='CardInput'>
    <Input type="text" placeholder="Usuario:" />
    <Input type="password" placeholder="Contraseña:" />
    </div>
    <Button>Login</Button>
    <p>Aun no tienes cuenta? Has Clic <a className='a' href="#">!Aqui¡</a></p>
  </div>
);

export default card;
