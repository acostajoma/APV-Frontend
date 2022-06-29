import { useState } from "react";
import Formulario from "../components/Formulario";
import ListadoPacientes from "../components/ListadoPacientes";

const AdministrarPacientes = () => {

  const [mostrarForm, setForm] = useState(false);

    return (
      <div className="flex flex-col md:flex-row">
        <button
          type="button"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-xl hover:bg-indigo-800 cursor-pointer transition-colors mb-10 md:hidden"
          onClick={ () => setForm(!mostrarForm)}
        >{mostrarForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}</button>
        <div className={`${mostrarForm ? "block" : "hidden" } md:block md:w-1/2 lg:w-2/5`}>
          <Formulario />
        </div>

        <div className="md:w-1/2 lg:w-3/5">
          <ListadoPacientes />
        </div>
      </div>
    )
}

export default AdministrarPacientes;