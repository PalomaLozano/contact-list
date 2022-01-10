'use strict';

const guardarContact = (db, contacto) => {
  db.setItem(JSON.stringify(contacto));
};
