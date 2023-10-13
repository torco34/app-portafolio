import React from "react";
import { useForm, Controller, useFieldArray, SubmitHandler } from "react-hook-form";

type FormData = {
  categoria: string;
  articulo: string;
};

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "articulos",
  });

  const categorias = ["Frutas", "Verduras", "Bebidas"];
  const articulosPorCategoria: Record<string, string[]> = {
    Frutas: ["Manzana", "Plátano", "Naranja"],
    Verduras: ["Lechuga", "Tomate", "Zanahoria"],
    Bebidas: ["Agua", "Refresco", "Jugo"],
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Selección de Categoría y Artículo</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Categoría</label>
          <Controller
            name="categoria"
            control={control}
            render={({ field }) => (
              <select {...field}>
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        <br />
        <div>
          <label>Artículo</label>
          <Controller
            name="articulo"
            control={control}
            render={({ field }) => (
              <select {...field}>
                {articulosPorCategoria[control.getValues("categoria")]?.map(
                  (articulo) => (
                    <option key={articulo} value={articulo}>
                      {articulo}
                    </option>
                  )
                )}
              </select>
            )}
          />
        </div>
        <br />
        <button
          type="button"
          onClick={() => {
            const articulo = control.getValues("articulo");
            append({ articulo });
          }}
        >
          Agregar Artículo
        </button>
        <ul>
          {fields.map((field, index) => (
            <li key={field.id}>
              {field.articulo}{" "}
              <button type="button" onClick={() => remove(index)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;



{Object.keys(articulosPorCategoria).map((categoria) => (
  <div key={categoria}>
    <h3>{categoria}</h3>
    <ul>
      {articulosPorCategoria[categoria].map((articulo) => (
        <li key={articulo}>{articulo}</li>
      ))}
    </ul>
  </div>
))}



// <select {...field}>
//   {Object.keys(articulosPorCategoria).map((categoria) => (
//     <option key={categoria} value={categoria}>
//       {categoria}
//       <ul>
//         {articulosPorCategoria[categoria].map((articulo) => (
//           <li key={articulo}>
//             {articulo}
//           </li>
//         ))}
//       </ul>
//     </option>
//   ))}
// </select>

<div>

<input type="text" name="nuevaCategoria" ref={register} />
<button type="button" onClick={() => {
    const nuevaCategoria = watch("nuevaCategoria"); // Obtén el valor del campo de entrada
    append({ categoria: nuevaCategoria }); // Agrega la nueva categoría al formulario
  }}
>
  Agregar Categoría
</button>






<label>Artículo</label>
<label>Artículo</label>
<Controller
  name="articulo"
  control={control}
  render={({ field }) => (
    <div>
      <select {...field}>
        {Object.keys(articulosPorCategoria).map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        )}
      </select>
      <button
        type="button"
        onClick={() => {
          const categoriaSeleccionada = field.value;
          const nuevoArticulo = prompt("Introduce un nuevo artículo:");
          if (nuevoArticulo) {
            // Agregar el nuevo artículo a la categoría seleccionada
            articulosPorCategoria[categoriaSeleccionada].push(nuevoArticulo);
          }
        }}
      >
        Agregar Artículo
      </button>
    </div>
  )}
/>
}
/>

</div>