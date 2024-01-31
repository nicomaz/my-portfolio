import Clock from "./components/Clock";
import ThemeSwitcher from "./components/ThemeSwitcher";
import HomePage from "./pages/HomePage";
import StartUp from "./pages/StartUpPage";
import { ThemeProvider } from "./providers/themeProvider";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import wallpaper from "./assets/wallpaper.jpg";

function App() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={1000}>
        <div
          style={{
            backgroundImage: `url(${wallpaper})`,
            height: "100vh",
            width: "100vw",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >

          <Clock />
          <ThemeSwitcher />
          <div className="glass">
            <ThemeProvider>
              <Routes>
                <Route path="/" element={<StartUp />} />
                <Route path="/home" element={<HomePage />} />
              </Routes>
            </ThemeProvider>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
