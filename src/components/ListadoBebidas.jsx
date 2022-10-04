import { Row} from 'react-bootstrap'
import useBebidas from "../hooks/useBebidas"
import Bebida from './Bebida'
import Spinner from './Spinner'
const ListadoBebidas = () => {

    const { bebidas, loading} = useBebidas()
       
    return (
        <>
            {loading ? <Spinner/> :
                <Row className='mt-5'>
                {bebidas.map(bebida => (
                    <Bebida
                        key={bebida.idDrink}
                        bebida={bebida}
                    />
                ))}
            </Row>}
        </>
        
    )
}

export default ListadoBebidas