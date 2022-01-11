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

const crearContacto = (parentNode, contacto, db) => {
  let divContacto = document.createElement('ul');
  let nombreContacto = document.createElement('li');
  let numeroContacto = document.createElement('li');
  let direccionContacto = document.createElement('li');
  let icon = document.createElement('span');

  nombreContacto.innerHTML = contacto.nombre;
  numeroContacto.innerHTML = contacto.numero;
  direccionContacto.innerHTML = contacto.direccion;
  icon.innerHTML = 'delete';

  divContacto.classList.add('contact', 'list', 'tarea');
  nombreContacto.classList.add('liName');
  numeroContacto.classList.add('li');
  direccionContacto.classList.add('li');
  icon.classList.add('material-icons', 'icon');

  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(numeroContacto);
  divContacto.appendChild(direccionContacto);
  divContacto.appendChild(icon);

  parentNode.appendChild(divContacto);

  icon.onclick = () => {
    db.removeItem(contacto.id);
    window.location.href = '/';
  };
};

const cargarContactos = (db, parentNode) => {
  let claves = Object.keys(db);
  for (let clave of claves) {
    let contacto = JSON.parse(db.getItem(clave));
    crearContacto(parentNode, contacto, db);
  }
};
cargarContactos(db, listadoTarea);
