import "../styles/globals.scss";
import { Provider } from "react-redux";
import store from "../components/store";
import type { AppProps } from "next/app";
import LoginContextProvider from "../context/login-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LoginContextProvider>
        <Component {...pageProps} />{" "}
      </LoginContextProvider>
    </Provider>
  );
}

export default MyApp;
