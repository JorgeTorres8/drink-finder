import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const BebidasContext = createContext()

const BebidasProvider = ({children}) => { 
    const [bebidas, setBebidas] = useState([]) 
    const [modal, setModal] = useState(false)

    const [bebidaId, setBebidaId ] = useState(null) 
    const [receta, setReceta] = useState({})

    const [cargando, setCargando] = useState(false) 
    const [loading, setLoading] = useState(false);
    const [mostrar, setMostrar] = useState([]);

    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {  
        setCargando(true)
        const obtenerReceta = async () => {
            if(!bebidaId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const { data } = await axios(url)
                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false)
            }
        }
        obtenerReceta()
    }, [bebidaId])


    const consultarBebida = async (nombre) => {
        setLoading(true);
        //setBebidas('');
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`
            const { data } = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const consultarBebidaCategoria = async (categoria) => {
        setLoading(true);
        setBebidas('');
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`
            const { data } = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const handleModalClick = () => { 
        setModal(!modal)
    }

    const handleBebidaIdClick = id => {
        setBebidaId(id)
    }

    const handleNombre = (nombre) => {
        setNombre(nombre);
    }

    const handleCategoria = (categoria) => {
        setCategoria(categoria);
    }

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                handleModalClick,
                modal,
                handleBebidaIdClick,
                receta,
                cargando,
                mostrar,
                loading,
                consultarBebidaCategoria,
                nombre,
                handleNombre,
                handleCategoria,
                categoria,
                setCategoria,
                setNombre,
                error
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext