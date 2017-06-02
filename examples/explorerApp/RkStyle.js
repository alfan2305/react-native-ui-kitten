import {StyleSheet} from 'react-native';
import _ from 'lodash';
import {RkTheme} from 'react-native-ui-kitten';

let objects = [];
let patternStyles = [];
let id = 0;

class ThemedStyleSheet {

  _getStyle(style) {
    if (typeof style === 'function') {
      return style(RkTheme.current);
    }
    return style;
  }

  _invalidate() {
    patternStyles.forEach((patternObj) => {
      let styles = this._getStyle(patternObj.style);
      for (let key in styles) {
        let {id} = _.find(patternObj.computedIds, (o) => {
          return o.key === key
        });
        objects[id] = styles[key];
      }
    })
  }

  _wrapToObject(computedIds) {
    let obj = {};

    computedIds.forEach((item) => {
      Object.defineProperty(obj, item.key, {
        get: () => objects[item.id]
      })
    });
    return obj;
  }

  create(style) {
    let styles = this._getStyle(style);
    let computedIds = [];

    for (let key in styles) {
      id++;
      objects[id] = styles[key];
      computedIds.push({key, id});
    }
    patternStyles.push({style, computedIds});
    return this._wrapToObject(computedIds);
  }
}


export let RkStyleSheet = new ThemedStyleSheet();