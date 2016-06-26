import {Observable} from 'rxjs';
import {run} from '@cycle/rxjs-run';
import {makeDOMDriver} from '@cycle/dom';
import React from './h';

const App = () => ({
  DOM: Observable.of(
    <div className="app">
      <h1>Enter the lairs</h1>
    </div>
  )
});

// tslint:disable-next-line:no-expression-statement
run(App, {
  DOM: makeDOMDriver(document.getElementById('app'))
});