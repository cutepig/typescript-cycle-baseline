import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {makeDOMDriver, h} from '@cycle/dom';

const App = () => ({
  DOM: xs.of(
    h('div.app', [
      h('h1', 'Enter the lairs'),
      h('p', 'Lorem ipsum')
    ])
  )
});

// tslint:disable-next-line:no-expression-statement
run(App, {
  DOM: makeDOMDriver(document.getElementById('app'))
});
