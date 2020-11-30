const { v4: uuidV4 } = require('uuid');

class People {
    constructor(people) {
        this.obj_id = uuidV4();
        this.nombre = people.name;
        this.altura = people.height;
        this.masa = people.mass;
        this.color_pelo = people.hair_color;
        this.color_piel = people.skin_color;
        this.color_ojo = people.eye_color;
        this.nacimiento = people.birth_year;
        this.genero = people.gender;
        this.planeta_natal = people.homeworld;
        this.pelicula = people.films;
        this.especie = people.species;
        this.vehiculo = people.vehicles;
        this.nave_estelar = people.starships;
        this.creado = people.created;
        this.editado = people.edited;
        this.url = people.url;
    }
}

module.exports = People;