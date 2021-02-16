import * as ActionTypes from '../constants/actionTypes';

import configureStore from './configureStore';

describe('Store', () => {
  const files = {
    list: [
      { url: 'a.com', files: null, loading: false },
      { url: 'b.com', files: null, loading: false },
      { url: 'c.com', files: null, loading: false },
      { url: 'd.com', files: null, loading: false }
    ]
  };

  beforeAll(() => {});
  afterAll(() => {});

  it('should display results when necessary data is provided', () => {
    const store = configureStore({files});

    const actions = [
      { type: ActionTypes.GET_FILES_SUCCESS, file: files.list[0], res: {name: '1', url: 'test'} },
      { type: ActionTypes.GET_FILES_SUCCESS, file: files.list[0], res: {name: '2', url: 'test'} },
      { type: ActionTypes.GET_FILES_SUCCESS, file: files.list[0], res: {name: '3', url: 'test'} },
      { type: ActionTypes.GET_FILES_SUCCESS, file: files.list[0], res: {name: '4', url: 'test'} },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      list: [
        { url: 'a.com', name: '1', loading: true },
        { url: 'b.com', name: '2', loading: true },
        { url: 'c.com', name: '3', loading: true },
        { url: 'd.com', name: null, loading: false }
      ]
    };

    expect(actual.nodes).toEqual(expected);
  });
});
