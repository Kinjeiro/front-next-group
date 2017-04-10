import { FILTER_TABLE, SORT_TABLE } from '../actions/types/App';
import fakeData from '../fakeData';

const initialState = {
  rows: fakeData,
  sortBy: 'name',
  sortDir: 'ASC',
  filters: {
    name: '',
    age: '',
    nickname: '',
    employee: '',
  },
};

function handleFilterTable(state, action) {
  const { key, value } = action.filter;
  const filters = state.filters;
  filters[key] = value.toString().toLowerCase();
  const rows = state.rows.map((item) => {
    const newItem = item;
    let visible = true;
    for (const filter in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, filter)) {
        visible = visible && (filters[filter] === '' || item[filter].toString().toLowerCase().indexOf(filters[filter]) !== -1);
      }
    }
    newItem.visible = visible;
    return newItem;
  },
  );

  return { ...state, rows, filters };
}

function handleSortTable(state, action) {
  let sortDir = state.sortDir;
  const sortBy = action.sortBy.key;
  if (sortBy === state.sortBy) {
    sortDir = state.sortDir === 'ASC' ? 'DESC' : 'ASC';
  } else {
    sortDir = 'DESC';
  }
  const rows = state.rows.slice();
  rows.sort((a, b) => {
    let sortVal = 0;
    if (a[sortBy] > b[sortBy]) {
      sortVal = 1;
    }
    if (a[sortBy] < b[sortBy]) {
      sortVal = -1;
    }

    if (sortDir === 'DESC') {
      sortVal *= -1;
    }
    return sortVal;
  });

  return { ...state, sortDir, sortBy, rows };
}

export default function tablePageReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_TABLE: return handleFilterTable(state, action);
    case SORT_TABLE: return handleSortTable(state, action);
    default: return state;
  }
}
