import { PersonIdProvider } from "../context/IdContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PersonIdProvider>
      <Component {...pageProps} />
    </PersonIdProvider>
  );
}

export default MyApp;
