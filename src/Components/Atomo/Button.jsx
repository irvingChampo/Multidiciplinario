import '../Atomo/Button.css';

const button = ({ children, size = "20" }) => (
  <button 
    className='button' 
    style={{ width: `${size}%` }} 
  >
    {children}
  </button>
);

export default button;
