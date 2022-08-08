import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

function fetch<%= itemNamePascalCase %>(): Promise<<%= returnType %>> {
  return axios.get(`${apiUrl}/<%= itemNameKebabCase %>`).then((response) => response.data);
}

export function <%= hookName %>() {
  return useQuery(['<%= itemNameCamelCase %>'], fetch<%= itemNamePascalCase %>);
}
