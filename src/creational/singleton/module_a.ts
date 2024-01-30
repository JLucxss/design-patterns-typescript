import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Luiz', age: 30})
myDatabaseClassic.add({ name: 'Monalisa', age: 50})
myDatabaseClassic.add({ name: 'Kaua', age: 25})

export { myDatabaseClassic }