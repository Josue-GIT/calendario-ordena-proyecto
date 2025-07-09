import { Calendario } from '../component/calendario/calendario';
import { Home } from '../component/home/home';

export const routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'calendario', component: Calendario },
];