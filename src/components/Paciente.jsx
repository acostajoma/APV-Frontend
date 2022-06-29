import usePacientes from "../hooks/usePacientes";


const Paciente = ({paciente}) => {

    const { setEdicion, eliminarPaciente } = usePacientes();

    const { email, fecha, nombre, propietario, sintomas, _id} = paciente;

    const formatearFecha = fecha => {
        const nuevaFecha = new Date(fecha);
        return new Intl.DateTimeFormat('es-MX', {dateStyle: "long"}).format(nuevaFecha);
    } 

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-indigo-800 my-2">Nombre: {' '}
                <span className="font-normal normal-case text-black">{nombre}</span>
            </p>
            <p className="font-bold uppercase text-indigo-800 my-2">Propietario: {' '}
                <span className="font-normal normal-case text-black">{propietario}</span>
            </p>
            <p className="font-bold uppercase text-indigo-800 my-2">Email de Contacto: {' '}
                <span className="font-normal normal-case text-black">{email}</span>
            </p>
            <p className="font-bold uppercase text-indigo-800 my-2">Fecha de alta: {' '}
                <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
            </p>
            <p className="font-bold uppercase text-indigo-800 my-2">Sintomas: {' '}
                <span className="font-normal normal-case text-black">{sintomas}</span>
            </p>

            <div className="flex my-5">
                <button
                    type="button"
                    className="bg-indigo-600 rounded-xl hover:bg-indigo-800 cursor-pointer transition-colors py-2 px-10 text-white uppercase font-bold mr-2"
                    onClick={( ) => setEdicion(paciente)}
                >Editar</button>

                <button
                    type="button"
                    className="bg-red-600 rounded-xl hover:bg-red-800 cursor-pointer transition-colors py-2 px-10 text-white uppercase font-bold"
                    onClick={() => eliminarPaciente(_id)}
                >Eliminar</button>
            </div>
        </div>    
    )
}

export default Paciente