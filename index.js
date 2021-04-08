"use script"


import 'regenerator-runtime/runtime';
import { attachEventListeners } from './js/events';
import initialize from './js/initializers';
import state from './js/state';
import codeInstance from './js/codemirror';



function main(){
    initialize();
    attachEventListeners();
}



main();