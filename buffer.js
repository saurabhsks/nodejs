var buffer1=Buffer.alloc(100);//allocated a space of 100 units
//we can store data inside this  buffer
//var buffer2=new Buffer('FYND');
//var buffer3=Buffer.from([1,2,3,4]);

//utilising a buffer space
// the write function  will have runtime data:username,password
buffer1.write("I am here");
// transforming the buffer content to string
var a=buffer1.toString('utf-8');
//printing the value
console.log(a);
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);
//can be used for the validation purpose of the objects

var bufferSrc=new Buffer('ABC');
var bufferDesination=Buffer.alloc(3);
bufferSrc.copy(bufferDest);
var Data=bufferDest.toString('utf-8');
console.log(Data);

//slice or filter the data
var bufferOld=new Buffer('India is Great');
var bufferNew=bufferOld.slice(0,4);
console.log(bufferNew.toString());

//concat 2 buffers
var bufferOne=new Buffer('INDIA');
var bufferTwo=new Buffer('Is Great');
var bufferConcat=Buffer.concat([bufferOne,bufferTwo]);
console.log(bufferConcat.toString());
