import AvStudio from '../assets/auspicios/avstudio.webp';
import Delicias from '../assets/auspicios/delicias.webp';
import Palomo from '../assets/auspicios/palomo.webp';
import Pizzeria from '../assets/auspicios/pizzeria.webp';
import SaborPeruano from '../assets/auspicios/saborperuano.webp';
import Western from '../assets/auspicios/western.webp';

export const AUSPICIOS = [
  {
    id: 'avstudio',
    name: 'Barberia AV Studio',
    image: AvStudio,
  },
  {
    id: 'delicias',
    name: 'Delicias Sanguchería',
    image: Delicias,
  },
  {
    id: 'palomo',
    name: 'Pollería Don Palomo',
    image: Palomo,
  },
  {
    id: 'pizzeria',
    name: 'Pizzería Luyo',
    image: Pizzeria,
  },
  {
    id: 'saborperuano',
    name: 'Restaurante Sabor Peruano',
    image: SaborPeruano,
  },
  {
    id: 'western',
    name: 'Casa de Cambio KIKE',
    image: Western,
  }
] as const;