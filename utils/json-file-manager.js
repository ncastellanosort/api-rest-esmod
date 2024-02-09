// LA MEJOR FORMA DE ABRIR JSON EN ESMODULES

import { readFileSync } from 'fs';

export const readJSON = (path) => {
  const data = readFileSync(path, 'utf8');
  return JSON.parse(data);
};

