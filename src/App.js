import { Fragment } from "react"
import Header from "./components/Header"
import Characters from "./components/Characters"
import './main.sass'
import './components/Header.css'
const  App = () => {
    return (
        <Fragment>
            <Header title = "Rick and morty API"></Header>
            <Characters></Characters>
        </Fragment>
    )
}

export default App