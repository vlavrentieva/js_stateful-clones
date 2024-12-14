'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const array = [];
  const object = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(object, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        if (key in object) {
          delete object[key];
        }
      }
    }

    if (action.type === 'clear') {
      Object.keys(object).forEach((keys) => {
        delete object[keys];
      });
    }
    array.push({ ...object });
  }

  return array;
}

module.exports = transformStateWithClones;
