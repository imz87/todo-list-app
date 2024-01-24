import React from "react"
import "./App.css"
import "./assets/styles/output.css"
import "react-tabs/style/react-tabs.css"
import Modal from "react-modal"
import { Home } from "./pages/Home"
import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "./components/ErrorFallback"

Modal.setAppElement("#root")

function App() {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => console.log("error happened!")}>
            <Home />
        </ErrorBoundary>
    )
}

export default App
