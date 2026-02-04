function Logger(constructor: Function) {
  console.log("Class Loaded:", constructor.name);
}

@Logger
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let p = new Person("Rahul");
