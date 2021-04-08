export default class PubSub{
    constructor(){
        this.events={};
    }

    subscribe(event,cb){
        if(!this.events.hasOwnProperty(event)){
            this.events[event]=[];
        }
        return this.events.event.push(cb);
    }

    publish(event,data){
        if(!this.events.hasOwnProperty(event)){
            this.events[event]=[];
        }
        return this.events.map(cb=>cb(data));
    }
}