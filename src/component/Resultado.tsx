import { useParams } from 'react-router-dom'

export const Resultado = ({match}: any) => {
  const { searchQuery } = useParams();
  return (
    <div>
          <h2 className='text-ligh'>Resultados de la búsqueda para {searchQuery}</h2>
          Resultados para: {searchQuery}
     
    </div>
  )
}
