import register from "navi-scripts/register"
import { createBrowserNavigation } from "navi"
import React from "react"
import ReactDOM from "react-dom"
import { Router } from "react-navi"
import HelmetProvider from "react-navi-helmet-async"

import "./index.module.css"
import routes from "./routes"
import * as serviceWorker from "./serviceWorker"

register({
  routes,
  async main () {
    const navigation = createBrowserNavigation({ routes })
    await navigation.getRoute()
    const hasStaticContent = process.env.NODE_ENV === "production"
    const renderer = hasStaticContent ? ReactDOM.hydrate : ReactDOM.render
    renderer(
      <HelmetProvider>
        <Router navigation={navigation} />
      </HelmetProvider>,
      document.getElementById("root")
    )
    serviceWorker.unregister()
  }
})
