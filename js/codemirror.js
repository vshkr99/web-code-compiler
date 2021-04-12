import state from './state';
import languages from '../assets/data/languages.json';
import themes from '../assets/data/themes.json';

const codeMirror=CodeMirror(document.getElementById("editor"),{
    mode:languages[0].editor_key,
    theme:themes[0].key,
    lineNumbers:true
});   

// initialize initial theme
!function(){
    document.querySelector("body").classList.add(themes[0].css_class);
}()

export const changeLanguage = (mode) =>{
    codeMirror.setOption("mode",mode);
}

export const changeTheme = (theme) =>{
    codeMirror.setOption("theme",theme);
}

codeMirror.on("change",()=>{
    state.code=codeMirror.getValue();
})

export default codeMirror;