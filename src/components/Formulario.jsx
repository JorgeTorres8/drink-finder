import { useState } from 'react'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas' 
import '../index.css'
import FormularioCategoria from './FormularioCategoria'

const Formulario = () => {
    
    const [alerta, setAlerta] = useState('')

    const { consultarBebida, handleNombre, nombre, setNombre, categoria, setCategoria} = useBebidas()

    const handleSubmit = e => {
        e.preventDefault()
        if (categoria !== '') {
            setAlerta('You can only do one search at a time.')
            setNombre('')
            setCategoria('')
            setTimeout(() => {
                setAlerta('')
            }, 3000);
            return
        }
        if (nombre === '') {
            setAlerta('Name is required')
            setTimeout(() => {
                setAlerta('')
            }, 2000);
            return
        }
        setAlerta('')
        consultarBebida(nombre) 

    }

    return (
        <>
            <Form
                onSubmit={handleSubmit}
            >

                {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}

                <Col className='contenido'>
                    <Col md={6} lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor='nombre'>Search drink by ingredient</Form.Label>
                            <div className='campo'>
                                <Form.Control 
                                    id="nombre"
                                    type="text"
                                    placeholder="Ex: Tequila, Vodka, etc."
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => handleNombre(e.target.value)}
                                />

                                <Row className="boton">
                                    <Col md={20}>
                                        <Button
                                            variant='danger'
                                            className='text-uppercase w-100'
                                            type="submit"
                                        >
                                            Search
                                        </Button>
                                    </Col>
                                </Row>

                            </div>
                        
                        </Form.Group>
                    </Col>
                
                    
                </Col>
            </Form>

            <FormularioCategoria/>
        </>
        
    )
}

export default Formulario