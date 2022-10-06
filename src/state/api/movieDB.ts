import axios from 'axios';
import {baseURL} from '../../common/constants';

const data = axios.create({
  baseURL: baseURL,
  params: {
    api_key: '60f4e8225b109e5131a88c96f3fecfc0',
    language: 'es-ES',
    // page: 1,
  },
});

export default data;
