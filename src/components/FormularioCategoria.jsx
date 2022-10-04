import { useState } from 'react'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas' 
import '../index.css'

const FormularioCategoria = () => {
    
    const [alerta, setAlerta] = useState('')
    const { categorias } = useCategorias()

    const {consultarBebidaCategoria, handleCategoria, categoria, nombre, setNombre, setCategoria } = useBebidas()

    const handleSubmit = e => {
        e.preventDefault()
        if (nombre !== '') {
            setAlerta('You can only do one search at a time.')
            setNombre('')
            setCategoria('')
            setTimeout(() => {
                setAlerta('')
            }, 3000);
            return
        }
        if (categoria === '') {
            setAlerta('The category is required')
            setTimeout(() => {
                setAlerta('')
            }, 2000);
            return
        }

        setAlerta('')
        consultarBebidaCategoria(categoria) 

    }

    return (
        <Form
            onSubmit={handleSubmit}
        >

            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
                <Col className='contenido'>
                    <Col md={30}>
                        <Form.Group className="mb-3">
                                <Form.Label htmlFor='categoria'>Search drink by category</Form.Label>
                                <div className='campo'>
                                    <Form.Select
                                        id="categoria"
                                        name="categoria"
                                        value={categoria}
                                        onChange={e => handleCategoria(e.target.value)}
                                    >
                                        <option value="">- Select Category -</option>
                                        {categorias.map(categoria => (
                                            <option
                                                key={categoria.strCategory}
                                                value={categoria.strCategory}
                                            >{categoria.strCategory}
                                            </option>
                                        ))}
                                    </Form.Select>

                                    <Row className="boton">
                                            <Col md={20}>
                                                <Button
                                                    variant='danger'
                                                    className='text-uppercase w-100'
                                                    type="submit"
                                                >
                                                    Seacrh
                                                </Button>
                                            </Col>
                                    </Row>
                                </div>
                                
                        </Form.Group>
                    </Col>
                </Col>
                
        </Form>
    )
}

export default FormularioCategoria