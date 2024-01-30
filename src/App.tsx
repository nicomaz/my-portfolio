import ThemeSwitcher from "./components/ThemeSwitcher";
import StartUp from "./pages/StartUp";
import { ThemeProvider } from "./providers/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <StartUp />
    </ThemeProvider>
  );
}

export default App;
