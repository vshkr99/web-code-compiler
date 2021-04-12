
// const pr=new Proxy({
// 	name:"Name"
// },{
// 	set:(state,key,value)=>{
// 		if(key==="name"){
// 			console.log("Name being set");
// 		}
// 		state[key]=value;
// 	},
// 	get:(state,key)=>{
// 		return state[key];
// 	}
// })

const pr={
	name:"Name",
	set(state,key,value){
		if(key==="name"){
			console.log("Name being set");
		}
		state[key]=value;
	},
	get(state,key){
		return state[key];
	}
}

pr.name="rejcke";
console.log(pr.name);