const People = require('./people');

class Peoples{

    constructor(){
        this.peoples = [];
    }

    addPeople(people = new People()){
        this.peoples.push(people);
    }

    getPeoples(){
        return this.peoples;
    }

    deletePeople(obj_id = ''){
        this.peoples = this.peoples.filter(people => people.obj_id !== obj_id);
        return this.peoples;
    }
}
module.exports = Peoples;