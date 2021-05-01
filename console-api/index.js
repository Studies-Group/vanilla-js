// console.log("read only");
// console.group('teste 1')
// console.group('teste 2')
// console.group('teste 3')
// console.groupEnd();

// console.time("meu console");
// console.groupEnd();

// console.timeEnd('meu console');
// console.groupEnd();

// console.table([1, 2, 3, 4]);

// console.dir({
//   name: "faitão", obj: {
//     teste: "faitão 2"
//   }
// })

// console.log({
//   name: "faitão", obj: {
//     teste: "faitão 2"
//   }
// })

// console.log("%cMy stylish message", "color: red; font-style: italic");
// console.log("%cBoldzão", "color: green; font-weight: bold");

// console.exception(new Error('teste'))


const list = [...Array(1000000).keys()];

function binaryFunc(list, x) {
  console.time('binary')
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let guess = list[middle]
    console.count('guess')
    if (guess === x) {
      console.trace(middle)
      console.log('found at index: ', middle);
      console.timeEnd('binary')
      return;
    }

    if (x > guess) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
}

const binary = (list, x) => {
  console.time('binary')
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let guess = list[middle]
    console.count('guess')
    if (guess === x) {
      console.trace(middle)
      console.log('found at index: ', middle);
      console.timeEnd('binary')
      return;
    }

    if (x > guess) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
}

binary(list, 5000);
binaryFunc(list, 5000);
