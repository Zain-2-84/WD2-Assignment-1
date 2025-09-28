// Here we are writing 'themeProvider' in {} because in themeLogic.jsx we are also exporting a global state named 'themeContext'. So we need to be specific here.
import { themeProvider } from "./themeLogic";
import themeSwitcher from "./components/themeSwitcher";

function App() {

  return (
    <>
      <themeProvider>
        {/* Here 'themeSwitcher' is only used to add color and text. No real logic. */}
        <themeSwitcher />
      </themeProvider>
    </>
  )
}

export default App