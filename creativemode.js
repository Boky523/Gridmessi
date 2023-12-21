// let a = [ 1,2,3,4,5]
// let b = [6,7,8,9,0]
//  a = [...a, ...b]


// a.map((item)=>{
//     console.log( item+1);
// })



// const call = (back)=>{

//     setTimeout(() => {
//         back()
//     }, 2000);
   
// }

// const back = ()=>{
//     console.log('bbb');
// }


// call(back)

// let alerta
// let num = Math.round(Math.random())
// console.log(num);

// async function simulacion() {
//   const resultado = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num === 0) {
//         alerta = 'exito en los datos';
//         resolve(alerta + 'hola');
//       } else {
//         alerta = 'fallo en los datos';
//         reject(alerta);
//       }
//     }, 2000);
//   });

//   try {
//     console.log(resultado + 'holaaa');
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Llamada a la función simulacion()
// simulacion();

// let respo
// function suma (...a){
//   a.forEach(element => {
//   respo = element += element
//   });
//   console.log(respo);

// }
// suma(1,2,3,345)

// const a  = [
//   ['a', 'b'],
//   ['c', 'd'],
//   ['e', 'f'],
//   ['g', 'h']
// ]

// const si =()=>{
//   for(const posicion of a  ){
//     const [primero , segundo] = posicion
//     console.log(primero , segundo);
//   }
// }

// si()



    // const a = {}

    // const b = {...a}

    // b.x = 'a'

    // console.log(a);


    // const aray = ['a' , 'b', 'c']


    // aray.map((pos, index , array)=>{
    //     console.log(pos , index , array);
    // })


// let a = 'conejo'

// a !='pato' ? a= 'otro' : a = 'si es pato'

// console.log(a);

const walk = ['a', 's', 'w' , 's' , 's', 'w' , 's', 's', 's', 's']


function isValidWalk(walk) {
    if(walk.length == 10 && walk.reverse() == walk){
        console.log(walk);
      return true
    }else{
    return false}
  }


console.log(isValidWalk(walk));