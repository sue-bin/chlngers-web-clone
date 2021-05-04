import { Provider } from "react-redux";

import store from "store";

const ChlngersWeb = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default ChlngersWeb;
