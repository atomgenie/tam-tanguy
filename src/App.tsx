import React from "react"
import "./App.scss"
import Hello from "./sections/hello/Hello"
import Me from "./sections/me/Me"
import Projects from "./sections/projects/Projects"
import Footer from "./sections/footer/Footer"

import "bulma"

export default () => {
    return (
        <>
            <Hello />
            <Me />
            <Projects />
            <Footer />
        </>
    )
}
