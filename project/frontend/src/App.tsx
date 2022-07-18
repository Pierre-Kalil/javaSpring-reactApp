import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./styles/global.scss"

import { Header } from "./components/header"
import { Dashboard } from "./pages/dashboard"

function App() {

  return (
    <div >
      <ToastContainer />
      <Header/>
      <Dashboard />
    </div>
  )
}

export default App
