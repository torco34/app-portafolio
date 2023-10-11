
import "../assets/css/registro.css"
// import { useForm } from "react-hook-form"
import { FieldType } from "./interfaces"
import { useForm } from "react-hook-form";

export const Registro = ({ }) => {

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FieldType>()
  const onSubmit = handleSubmit((data) => {
    console.log(data)

  })
  return (
    <>
      <h2 className="text-center">Formulario de Registro de Conferencia:</h2>

      <div className="container-form">


        <form onSubmit={onSubmit}>
          <h5 className="text-center">Información Personal</h5>
          <div>
            <label>Nombre completo</label>
            <input type="text" {...register("name", {
              required: { value: true, message: "Nombre es requerido" }, minLength: {
                value: 2,
                message: "Nombre debe tener al menos 2 caracteres"
              }, maxLength: { value: 20, message: "Nombre debe tener máximo 20 caracteres" }
            })} />
            {errors.name && <span className="text-danger">{errors.name.message}</span>}
          </div>

          <div>
            <label>Password</label>
            <input type="password" className="form-control" {...register("password", { required: { value: true, message: "Direccion es requerida" } })} />
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </div>


          <div>
            <label>Confirm password</label>
            <input type="password" className="form-control"
              {...register("confirmPassword",
                {
                  required: { value: true, message: "confirmar password " },

                  validate: value => value === watch("password") || "Los passwords no coinciden"

                })} /><br></br>
            {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}
          </div>


          <div>
            <label>Número de teléfono</label>
            <input type="tel" className="form-control" {...register("telefono", {
              required: "Campo obligatorio", pattern: {
                value: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
                message: "Ingresa un número de teléfono válido",
              }
            })} />
            {errors.telefono && <span className="text-danger">{errors.telefono.message}</span>}
          </div>


          <div>
            <label>Correo electrónico</label>
            <input type="text" className="form-control" {...register("email", { required: { value: true, message: "Correo es requerido" }, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Correo no valido" } })} />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </div>

          <div>
            <input
              type="date" className="form-control"
              {...register("FechaNacimiento", {
                required: { value: true, message: "Fecha de nacimiento es necesario" },
                validate: (value: any) => {
                  const fechaNacimiento = new Date(value);
                  const fechaActual = new Date();
                  const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                  return edad > 18 || "Debes ser mayor de edad para la conferencia";
                },
              })}
            />
            <br></br>{errors.FechaNacimiento && (
              <span className="text-danger">{errors.FechaNacimiento.message}</span>
            )}
          </div>

          <div>
            <label>Empresa u organización</label>
            <select  {...register("empresa", { required: { value: true, message: "Debes seleccionar una empresa u organización" } })} >
              <option value="">Ninguno</option>
              <option value="mi">Microsoft Corporation</option>
              <option value="go">Ford Motor Company</option>
              <option value="te">Uber Technologies, Inc.</option>
            </select>
            {errors.empresa && <span className="text-danger">{errors.empresa.message}</span>}
          </div>


          <div>
            <label>Cargo  </label>
            <select {...register("cargo", { required: { value: true, message: "Debes seleccionar un cargo " } })}>
              <option value="">Ninguno</option>
              <option value="ge">Gerente</option>
              <option value="an">Analista</option>
              <option value="co">Consultor</option>
              <option value="otr">Otro</option>
            </select>
            {watch("cargo") === "otr" && (<><input type="text" placeholder="escribir" {...register("otroCargo", { required: { value: true, message: "este campo" } })} />{errors.otroCargo && <span className="text-danger">{errors.otroCargo.message}</span>}</>)}

          </div>
          <h5 className="p-3 text-center">Detalles de la Conferencia</h5>
          <hr></hr>
          <br></br>
          <div>
            <label>Tipo de boletos: </label>
            <select  {...register("boleto", { required: { value: true, message: "Debes seleccionar un boleto " } })}>
              <option value="">Ninguno</option>
              <option value="con">Conferencia Completa</option>
              <option value="pas">Pase Diario</option>
              <option value="tal">Talleres</option>
              <option value="vip">VIP</option>
            </select>
            {errors.boleto && <span className="text-danger">{errors.boleto.message}</span>}
          </div>
          <div>
            <label>Tipo de taller: </label>
            <select  {...register("taller", { required: { value: true, message: "Debes seleccionar un taller" } })}  >
              <option value="">Ninguno</option>
              <option value="tal">Estrategias de Marketing Digital</option>
              <option value="li">Liderazgo Efectivo</option>
              <option value="se">Innovación en Tecnología</option>
            </select>
            {errors.taller && <span className="text-danger">{errors.taller.message}</span>}
          </div>
          <div>
            <label>Elección de comidas especiales o restricciones dietéticas </label>
            <select  {...register("comida", { required: { value: true, message: "Debes seleccionar un comida " } })}  >
              <option value=""> Ninguno</option>
              <option value="ve">Vegetariano</option>
              <option value="veg">Vegano</option>
              <option value="si">Sin gluten</option>
              <option value="ot">Otros</option>
            </select>
            {errors.comida && <span className="text-danger">{errors.comida.message}</span>}
            {watch("comida") === "ot" && (<><input type="text" placeholder="Escribe" {...register("otraComida", { required: { value: true, message: "Este campo es obligatorio" } })} />
              {errors.otraComida && <span className="text-danger">{errors.otraComida.message}</span>}</>)}
          </div>
          <h5 className="p-4 text-center">Alojamiento</h5>
          <div>
            <label>Preferencias de habitación </label>
            <select  {...register("habitacion", { required: { value: true, message: "Debes seleccionar una habitacion " } })}  >
              <option value="">Ninguno</option>
              <option value="hab">Habitación para no fumadores
              </option>
              <option value="ha">Habitación con vista</option>
              <option value="ac">Accesibilidad para personas con movilidad reducida</option>
              <option value="ot"> Otros</option>
            </select>
            {errors.habitacion && <span className="text-danger">{errors.habitacion.message}</span>}
            {watch("habitacion") === "ot" && (<><input type="text" placeholder="Escribe" {...register("otraHabita", { required: { value: true, message: "Este campo es obligatorio" } })} />
              <br></br> {errors.otraHabita && <span className="text-danger">{errors.otraHabita.message}</span>}</>)}
          </div>

          <div>
            <label> Fecha de salida:</label>
            <input type="date" {...register("salida", { required: 'Debes seleccionar una fecha de salida' })} />
            <br></br> {errors.salida && <span className="text-danger">{errors.salida.message}</span>}
          </div>

          <div className="t-3">
            <label>Fecha de yeguada:</label>
            <input type="date" {...register("yeguada", { required: 'Debes seleccionar una fecha de yeguada' })} />
            <br></br>{errors.yeguada && <span className="text-danger">{errors.yeguada.message}</span>}
          </div>

          <div>

            <label>Pais </label>
            <select  {...register("pais", { required: true })}>
              <option value="">Ninguno</option>
              <option value="me">Mexico</option>
              <option value="ch">Chile</option>
              <option value="ar">Argentina</option>
              <option value="ot"> Otros</option>
            </select>
            {watch("pais") === "ot" && (

              <><input type="text" placeholder="Escribe pais" {...register("provincia", { required: { value: true, message: "Provincia es requerida" } })} />
                {errors.provincia && <span className="text-danger">{errors.provincia.message}</span>}</>)}
          </div>

          <div>
            <label >Información Adicional:</label>
            <textarea   {...register("adicional", { required: { value: true, message: "Este campo es necesario" } })}></textarea>
          </div>


          <div>
            <label>Aceptar términos y condiciones </label>
            <input type="checkbox"  {...register("checkbox", { required: { value: true, message: "Este campo es obligatorio " } })} />
            {errors.checkbox && <span className="text-danger"><br></br>
              {errors.checkbox.message}</span>}
          </div>
          <button type="submit" className="btn btn-info">
            Submit
          </button>

        </form>
      </div>

    </>

  )
}
