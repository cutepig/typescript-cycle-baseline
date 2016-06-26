import {h} from '@cycle/dom';

export default {
  createElement (tag, attrs, ...children: any[]) {
    attrs = attrs || {};
    return h(tag, attrs, children);
  }
};