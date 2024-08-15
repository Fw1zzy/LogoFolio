import { Navbar, Home, About, Process, Services, Team, Faqs, Footer, Cursor} from "./components"


function App() {

  return (
    <main className='w-full bg-[#001EFF] select-none'>
        <Cursor/>
        <Navbar/>
        <Home/>
        <About/>
        <Process/>
        <Services/>
        <Team/>
        <Faqs/>
        <Footer/>
    </main>
  )
}

export default App
