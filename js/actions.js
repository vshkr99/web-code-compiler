import { changeLanguage, changeTheme } from './codemirror';
import state from './state';

export const languageChange = (arg) => {
    changeLanguage(arg.editor_key);
}

export const themeChange = (arg) => {
    changeTheme(arg.key);
    // body theme update
    document.querySelector("body").classList.remove(state.theme.css_class);
    document.querySelector("body").classList.add(arg.css_class);
}

export const displayResult = (arg) => {
    const 
        output = document.querySelector(".editor .editor__output .editor__output-output"),
        cpu = document.querySelector(".editor .editor__action .process-results .cpu-time"),
        memory = document.querySelector(".editor .editor__action .process-results .memory");
    
    output.textContent=arg.output;
    cpu.textContent="CPU Time : "+arg.cpuTime;
    memory.textContent="Memory : "+arg.memory;
}

export const runCode = () => {
    state.running=true;

    fetch('https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute',
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        mode:'cors',
        body:JSON.stringify({
            clientId:process.env.COMPILER_CLIENT_ID,
            clientSecret:process.env.COMPILER_CLIENT_SECRET,
            script:state.code,
            language:state.language.key,
            versionIndex:state.language.versionIndex,
            stdin:state.input
        })
    })
    .then(res=>res.json())
    .then(data=>{
        state.result=data;
        console.log(state.result);
        state.running=false;
    })
    .catch(e=>{
        console.log(e);
        state.running=false;
    })
    
}
