import { FILTER_TABLE, SORT_TABLE } from './types/App';

export function filterTable(filter) {
  return {
    type: FILTER_TABLE,
    filter,
  };
}

export function sortTable(sortBy) {
  return {
    type: SORT_TABLE,
    sortBy,
  };
}
