import { useContext } from "react";
import { ThemeContext } from "../App";
import { LogoIcon, MoonIcon, SunIcon } from "./assets/icons";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <header className="header">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6389784149267865"
     crossorigin="anonymous"></script>
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
            <LogoIcon />
            <span>JS Snipets</span>
          </div>
          <button onClick={() => setIsDark(!isDark)} className="icon">{isDark ? <MoonIcon /> : <SunIcon />}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
