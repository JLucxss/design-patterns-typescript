import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a'

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Robert', age: 30})
myDatabaseClassic.add({ name: 'Janaina', age: 50})
myDatabaseClassic.add({ name: 'Luiza', age: 25})
myDatabaseClassic.show()

console.log(myDatabaseClassic === myDatabaseFromModuleA)