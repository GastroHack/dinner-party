import { firestore } from '../utils/firebase';
import { tableConverter } from '../data-contracts/Table';

// ------------------------------------
// Constants
// ------------------------------------

const CREATE_TABLE = 'CREATE_TABLE';
const FETCH_TABLE = 'FETCH_TABLE';
const FETCH_TABLES = 'FETCH_TABLES';
const UPDATE_TABLE = 'UPDATE_TABLE';

const initialState = {
  users: [],
};

const tableRef = firestore.collection('tables');

// ------------------------------------
// Actions
// ------------------------------------
const refreshUsers = () => {
  const users = [];
  tableRef.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      // @ts-ignore
      users.push(doc.data());
    });
  });
  return users;
};

export const createTable = table => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      tableRef
        .doc(table.id)
        .withConverter(tableConverter)
        .set(table)
        .then(() => {
          resolve(table);
          dispatch({
            type: CREATE_TABLE,
            table,
          });
        });
    } catch (err) {
      reject(err);
    }
  });

export const fetchTable = table => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      tableRef.doc(table).onSnapshot(doc => {
        if (doc.exists) {
          dispatch({
            type: FETCH_TABLE,
            payload: doc.data(),
          });
          resolve(doc.data());
        } else {
          reject(new Error('No such document exists'));
        }
      });
    } catch (err) {
      reject(err);
    }
  });

export const fetchTables = () => dispatch => {
  const tables = [];
  tableRef.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      // @ts-ignore
      tables.push(doc.data());
    });

    dispatch({
      type: FETCH_TABLES,
      payload: tables,
    });
  });
};

export const updateTable = table => dispatch => {
  const docRef = tableRef.doc(table.id);

  return new Promise<void>(async (resolve, reject) => {
    try {
      docRef.update({ ...table }).then(() => {
        const tables = refreshUsers();
        resolve();
        dispatch({
          type: UPDATE_TABLE,
          tables,
        });
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const actions = {
  createTable,
  fetchTable,
  fetchTables,
  updateTable,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_TABLE]: (state, { table }) => ({
    ...state,
    table,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
