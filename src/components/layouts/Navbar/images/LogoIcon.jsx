import logo from "./Logo.png";

function LogoIcon({ color }) {
  return (
    <>
      <img 
        className="w-64 h-28" 
        src={logo} 
        alt="Logo" 
      />
    </>
  );   
}

export default LogoIcon;
