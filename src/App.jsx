import { Container, ModalBody } from 'react-bootstrap'
import Formulario from './components/Formulario' 
import ListadoBebidas from './components/ListadoBebidas' 
import ModalBebida from './components/ModalBebida'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
          <header className="py-4">
            <h1>Drink Finder</h1>
          </header>

          <div>

          </div>

          <Container className='mt-5'>
              <Formulario />

              <ListadoBebidas />
              <ModalBebida />
          </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
