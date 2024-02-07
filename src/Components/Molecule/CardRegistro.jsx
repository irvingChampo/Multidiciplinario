import Button from '../Atomo/Button';
import Input from '../Atomo/Input';
import '../Molecule/CardRegistro.css';
import TresR from '../img/Simbolo3r.png';

function Registro() {
    return ( 
        <div className="card">
        <div className='image'>
        <img className='TresR' src={TresR} alt="Imagen de la tarjeta" />
        </div>
        <div className='CardInput'>
        <Input type="text" placeholder="Nombre:" size="40" />
        <Input type="email" placeholder="correo:" size="40" />
        <Input type="text" placeholder="Usuario:" size="40" />
        <Input type="text" placeholder="Apellido(s)" size="40" />
        <Input type="number" placeholder="Telefono:" size="40" />
        <Input type="password" placeholder="Contraseña:" size="40" />
        </div>
        <Button size="40">Registrarme</Button>
      </div>
     );
}

export default Registro;