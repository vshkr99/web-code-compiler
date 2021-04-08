import languages from '../assets/data/languages.json';
import themes from '../assets/data/themes.json';
import { themeChange, languageChange, displayResult } from './actions';

const state=new Proxy({
    language:languages[0],
    theme:themes[0],
    input:"",
    code:"",
    running:false,
    result:{}
},{
    get(state,key){
        return state[key];
    },
    set(state,key,value){
        switch(key){
            case 'theme':
                themeChange(value);
                break;
            case "language":
                languageChange(value);
                break;
            // case "running":
            case 'result':
                console.log(value);
                displayResult(value);
                break;

        }

        return state[key]=value;
    }
});


export default state;