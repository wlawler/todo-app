export default class TodoModel {
    private static idCounter = 0;
    constructor (
        public what: string,
        public done: boolean,
        public id?: number,
    ){
        if (id) this.id = id;
        else this.id = ++TodoModel.idCounter;
        console.log(this.id);
    }
}