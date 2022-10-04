import { Modal, Image, Button} from 'react-bootstrap'
import { useState } from 'react';
import useBebidas from '../hooks/useBebidas'
import Spinner from './Spinner';
import './../index.css'
const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando, bebida} = useBebidas()


    const mostrarIngredientes = () => {
        let ingredientes = []

        for(let i = 1; i < 16; i++) {
            if( receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    return (
        <>
            
            {!cargando && <Modal show={modal} onHide={handleModalClick}>
                <Image 
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta ${receta.strDrink}`}
                />
                <Modal.Header className="flex">
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2 className='text-center'>Instructions</h2>
                        {receta.strInstructions}
                        <h2 className='text-center'>Ingredients and quantity</h2>
                        {mostrarIngredientes()}
                    </div>

                </Modal.Body>
            </Modal>}
        </>

    )
}

export default ModalBebida