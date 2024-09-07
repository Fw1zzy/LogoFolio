import { Navbar, Home, About, Process, Services, Faqs, Footer, Cursor, Headline} from "./components"


function App() {

  return (
    <main className='w-full bg-[#001EFF] select-none'>
        <Cursor/>
        <Navbar/>
        <Home/>
        <About/>
        <Headline/>
        <Process/>
        <Services/>
        <Faqs/>
        <Footer/>
    </main>
  )
}

export default App
