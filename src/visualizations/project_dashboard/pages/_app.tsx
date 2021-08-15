import "toastify-js/src/toastify.css";
import "../styles/animations.scss";
import "../styles/sidebar.scss";
import "../styles/markers.scss";
import "../styles/globals.scss";
import "mapbox-gl/dist/mapbox-gl.css";

// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}


export default MyApp;
