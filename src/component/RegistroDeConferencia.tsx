
import { useForm, useFieldArray, Controller,  useWatch } from "react-hook-form"

type FormData = {
  categoria: string[];
  articulo: string[];
  name: string
  nuevaCategoria?: string
};


export const RegistroDeConferencia = ({ }: FormData) => {
  const { control, handleSubmit, formState: { errors }, watch, register } = useForm<FormData, any>();

  const {fields, append} = useFieldArray<FormData>({
    control,
    name: "articulo",
  });
  const categorias = ["Frutas", "Verduras", "Bebidas"];
  const articulosPorCategoria: Record<string, string[]> = {
    Habitacion: ["Cama doble", "con vista", "Aire"],
    Verduras: ["Lechuga", "Tomate", "Zanahoria"],
    Bebidas: ["Agua", "Refresco", "Jugo"],
  };
  console.log(articulosPorCategoria)
  const onSubmit = handleSubmit((data) => {
    console.log(data)

  })

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <label>Empresa</label>
        <Controller name="categoria"
          control={control}
          render={({ field }) => (
            <select {...field}>
              {categorias.map((categoria: any) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          )} />
        <br></br>
        <label>Artículo</label>
        <Controller
          name="articulo"
          control={control}
          render={({ field }) => (
            <select {...field}>
              {Object.keys(articulosPorCategoria).map((categoria) => (
                <>
                  <option key={categoria} value={categoria}>
                    <p>{categoria}</p>
                    <ul>
                      {articulosPorCategoria[categoria].map((articulo) => (
                        // <li key={articulo}>{articulo}</li>
                        <p>{articulo}</p>

                      ))}
                    </ul>

                  </option>

                </>
              )
              )}
            </select>
          )}
        />
      
      </form>
      hola
    </div>


  )
}












