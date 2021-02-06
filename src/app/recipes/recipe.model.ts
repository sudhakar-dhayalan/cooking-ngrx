export class Recipe {
    name: String;
    description: String;
    imagePath: String;

    constructor(name: String, descrip: String, imagePath: String) {
        this.name = name;
        this.description = descrip;
        this.imagePath = imagePath;
    }
}