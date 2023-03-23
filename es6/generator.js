function* func(){
    console.log("one");
    yield '1';
    console.log("two");
    
    console.log("three");
    return '2';
}
var f = func();
f.next(); //one
f.next() //two ,three
console.log(f.next()); //{ value: '2', done: true }


var g = function* () {
    try {
      yield;
    } catch (e) {
      console.log('catch inner', e);
    }
  };
   
  var i = g();
  i.next();
   
  try {
    i.throw('a');
    i.throw('b');
  } catch (e) {
    console.log('catch outside', e);
  }