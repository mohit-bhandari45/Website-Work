import Navbar from './components/Navbar'
import Body from './components/Body'
import Login from './components/Login'
import Signup from './components/Signup'
import { DetailsContext } from './context/context'
import { useState } from 'react'

function App() {
  const [details, setdetails] = useState({
    name: "",
    email: ""
  })

  return (
    <>
      <DetailsContext.Provider value={{details,setdetails}}>
        {/* <Navbar/> */}
        {/* <Login/> */}
        <Signup />
        {/* <Body/> */}
      </DetailsContext.Provider>
    </>
  )
}

export default App
