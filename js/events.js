
import { resize_column, resize_row } from './resize';
import { runCode } from './actions';
import languages from '../assets/data/languages.json';
import themes from '../assets/data/themes.json';
import state from '../js/state';


const 
    leftRowResizeSelector = document.querySelector(".editor .editor__components.left .resize.row"),
    rightRowResizeSelector = document.querySelector(".editor .editor__components.right .resize.row"),
    colResizeSelector = document.querySelector(".editor .resize.col"),
    codeComponent = document.querySelector(".editor .editor__code"),
    actionComponent = document.querySelector(".editor .editor__action"),
    inputComponent = document.querySelector(".editor .editor__input"),
    outputComponent = document.querySelector(".editor .editor__output"),
    leftEditorComponent = document.querySelector(".editor__components.left"),
    rightEditorComponent = document.querySelector(".editor__components.right"),
    languageSelect = document.querySelector(".language_select-drop"),
    themeSelect = document.querySelector(".theme_select-drop"),
    executeBtn = document.querySelector(".editor__component.editor__action .execute");
    

export const attachEventListeners = () => {
    
    let hold=false;

    leftRowResizeSelector.addEventListener("mousedown",e=>{
        hold=true;
    });
    leftRowResizeSelector.addEventListener("mousemove",e=>{
        if(hold) resize_row(codeComponent,actionComponent,e)
    });
    leftRowResizeSelector.addEventListener("mouseup",e=>hold=false);
    leftRowResizeSelector.addEventListener("mouseout",e=>hold=false);

    rightRowResizeSelector.addEventListener("mousedown",e=>(hold=true));
    rightRowResizeSelector.addEventListener("mousemove",e=>(
        hold && resize_row(inputComponent,outputComponent,e)
    ));
    rightRowResizeSelector.addEventListener("mouseup",e=>hold=false);
    rightRowResizeSelector.addEventListener("mouseout",e=>hold=false);

    colResizeSelector.addEventListener("mousedown",e=>(hold=true));
    colResizeSelector.addEventListener("mousemove",e=>(
        hold && resize_column(leftEditorComponent,rightEditorComponent,e)
    ));
    colResizeSelector.addEventListener("mouseup",e=>hold=false);
    colResizeSelector.addEventListener("mouseout",e=>hold=false);


    languageSelect.addEventListener("change",e=>{
        state.language=languages.filter(({editor_key})=>editor_key==e.target.value)[0];
    })
    
    themeSelect.addEventListener("change",e=>{
        state.theme=themes.filter(({key})=>key==e.target.value)[0];
    });

    inputComponent.addEventListener("keydown",e=>{
        state.input=e.target.innerText;
    })

    executeBtn.addEventListener("click",()=>{
        runCode();
    });

    // window.addEventListener('online',()=>{
    //     window.alert("You're connected")
    // })

    // window.addEventListener('offline',()=>{
    //     window.alert("You're disconnected")
    // })

}   
