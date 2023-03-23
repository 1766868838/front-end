//测试es6模块的导入端
import { myName, myAge, myfn, myClass } from "./module.js";
import b from "./xxx.js"; // 不需要加{}， 使用任意变量接收
console.log(myfn());// My name is Tom! I'm 20 years old.
console.log(myAge);// 20
console.log(myName);// Tom
console.log(myClass.a );// yeah!