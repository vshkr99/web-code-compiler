import PubSub from './pubsub';

export default class Store{
    constructor(params){
        this.state={};
        this.mutations={};
        this.actions={};

        this.status="resting";
        this.events=new PubSub();
        if(params.hasOwnProperty('mutation')){
            this.mutations=params.mutations;
        }
        if(params.hasOwnProperty('actions')){
            this.actions=params.actions;
        }
        
        this.state = new Proxy((params.state || {}),{
            set:function(state,key,value){
                state[key]=value;
                console.log(`State change => ${key} : ${value}`);
                this.events.publish('stateChange',this.state);

                if(this.status!="mutation"){
                    console.warn(`Use a mutation to set ${key}`)
                }

                this.status='resting';
                return true;
            }
        })
    }
    
    dispatch(actionKey,payload){
        if(typeof this.actions[actionKey] !== "function"){
            console.error(`Actionkey ${actionKey} does not exist`);
            return false;
        }

        console.groupCollapsed(`ACTION: ${actionKey}`);
        this.status="action";
        this.actions[actionKey](this,payload);
        console.groupEnd();
        return true;
    }

    commit(mutationKey,payload){
        if(typeof this.mutations[mutationKey] !== "function"){
            console.error(`Mutationkey ${mutationKey} does not exist`);
            return false;
        }

        this.status="mutation";
        let newstate = this.mutations[mutationKey](this.state,payload);
        this.state=Object.assign({},newstate);
        return true;
    }

    
}