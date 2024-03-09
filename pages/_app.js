import "../styles/globals.css";
import "../styles/searchLight.css"; // Import custom page-specific CSS

import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
