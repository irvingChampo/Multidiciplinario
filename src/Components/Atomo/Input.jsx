import '../Atomo/Input.css';

const input = ({ placeholder, type = "text", size = "20" }) => (
  <input 
    type={type} 
    placeholder={placeholder} 
    style={{ width: `${size}%` }} 
  />
);

export default input;
