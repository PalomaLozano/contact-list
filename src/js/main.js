'use strict';

const nombre = document.querySelector('.nombre');
const telefono = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
const listadoTarea = document.querySelector('.listado-tareas');

const db = window.localStorage;

const guardarContacto = (db, contacto) => {
  db.setItem(contacto.id, JSON.stringify(contacto));
  //esto refresca la pag cada vez que se pulse el botón, para que no se queden los datos
  window.location.href = '/';
};

btnAgregarTarea.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    numero: telefono.value,
    direccion: direccion.value,
  };
  guardarContacto(db, contacto);
};

//recoger contactos y mostrarlos
