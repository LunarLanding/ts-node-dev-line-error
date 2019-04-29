process.on('unhandledRejection', err => {
  throw err;
});

async function foo0(){
  await foo1()
}

async function foo1() {
    await foo2();
    return 42;
  }
  
async function foo2() {
    await Promise.resolve();
    throw new Error('BEEP BEEP');
}
  
foo0()







// throw new Error()

// async function delay(ms: number)
// {
//   await new Promise(resolve => setTimeout(resolve, ms));
// }

// async function test0(){
//     await delay(1)
//     throw new Error()
//     return 'never'
// }


// async function test1(){
//     let r = await test0()
// }

// async function test2(){
//     let r = await test1()
// }

// test2()

// throw new Error()