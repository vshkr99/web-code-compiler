import languages from '../assets/data/languages.json';
import themes from '../assets/data/themes.json';

export default function initialize(){
    populate_lang_dropdown();
    populate_theme_dropdown();
}

const populate_lang_dropdown=()=>{
    const $=document.querySelector(".language_select-drop");
    const createOption=(key,value)=>(
        `<option value="${key}">${value}</option>`
    )

    $.innerHTML=languages.map(({editor_key:key,value})=>createOption(key,value)).join("");
}


const populate_theme_dropdown=()=>{
    const $=document.querySelector(".theme_select-drop");
    const createOption=(key,value)=>(
        `<option value="${key}">${value}</option>`
    )

    $.innerHTML=themes.map(({key,title:value})=>createOption(key,value)).join("");
}
