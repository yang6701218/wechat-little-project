//定义公共的方法的地方，使用 module.exports 暴露出去
function sayHello(name) {
  console.log('Hello ' + name + '!')
}
module.exports = {
  sayHello: sayHello
}