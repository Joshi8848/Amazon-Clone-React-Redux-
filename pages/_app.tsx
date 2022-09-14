import "../styles/globals.scss";
import type { AppProps } from "next/app";
import LoginContextProvider from "../context/login-context";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginContextProvider>
      <Component {...pageProps} />{" "}
    </LoginContextProvider>
  );
}

export default MyApp;
