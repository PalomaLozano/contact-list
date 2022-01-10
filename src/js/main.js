'use strict';

const nombre = document.querySelector('.nombre');
const telefono = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
const listadoTarea = document.querySelector('.listado-tareas');

const db = window.localStorage;

btnAgregarTarea.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    numero: telefono.value,
    direccion: direccion.value,
  };
};
