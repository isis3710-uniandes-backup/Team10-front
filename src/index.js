import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import {addLocaleData} from 'react-intl';
import localeEsMessages from "./locales/es";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();
const possibleLocale = navigator.language.split('-')[0] || 'en';

addLocaleData(require(`react-intl/locale-data/${possibleLocale}`));

if (possibleLocale.localeCompare("es") === 0)
{
ReactDOM.render(
        <IntlProvider locale={possibleLocale} messages={localeEsMessages}>
            {routes}
        </IntlProvider>, document.getElementById("root")
        );
}
else{
    ReactDOM.render(
        <IntlProvider locale="en">
            {routes}
        </IntlProvider>, document.getElementById("root")
        );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
