import logo from "./Logo.png";

function LogoIcon({ color }) {
  return (
    <>
      <img 
        className="w-[260px] h-[75px] object-contain" 
        src={logo} 
        alt="Logo" 
      />
    </>
  );   
}

export default LogoIcon;
