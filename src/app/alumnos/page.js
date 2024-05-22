'use client';
import Link from 'next/link';
//import RUTAS_ALUMNOS from '/Users/fabia/Documents/proyecto-nextjs-2024/cooperadora-backend/src/routes/alumnos';
import React, { useEffect, useState, Suspense} from 'react';

export default function AlumnoPage(){

    const [users, setUsers] = useState([]);    // creamos el estado 'users'
    const [usersInit, setUsersInit] = useState([])
    useEffect( ()=> {
        fetch('')
        .then((respuesta) => respuesta.json()) //devuelve promesa y retornamos .json()
        .then( () => {                   // devuelve promesa y actualizamos users
         
        })
        .catch(err => console.error(err))

    }, []);

    const searchStudents = (event) => {
        const filtro = (event.target.value);
        console.log("- searchStudents - Filtro:", filtro);
        const usuariosFiltrados =  usersInit.filter( (user) => user.firstName.toLowerCase().includes(filtro.toLowerCase()) );
        setUsers(usuariosFiltrados);
    }
            // en el panel crear alumno armar con html y css el form para dar de alta alumnos en el instituto, los datos a necesitar considerarlos en base a los que necesita el inst para cooperadora
    return (
        <div>
            <form>
                <input onKeyUp={searchStudents} type="text" placeholder="Buscar alumno"></input>
            </form>
            <Link href={"/alumnos/crear"}><button className="nuevoAlumno">Nuevo Alumno</button></Link>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>EDAD</th>
                        <th>EMAIL</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{`${user.firstName} ${user.lastName}`}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td className="center"><button className="button">Editar</button></td>
                                <td className="center"><button>Cargar Cobro</button></td>   
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}


// hacer una tabla que tenga id, nombre, apellido, edad, direccion en una misma fila, y en las ultimas dos celdas no va a haber nada en el titulo, pero en los datos iterables va a tener dos botones, uno que sea editar y el otro ver.