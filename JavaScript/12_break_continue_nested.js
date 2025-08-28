// break example
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("i =", i);
}


//continue example (skip 3 and continue print)

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log("i =", i);
}

//nested loop (a loop inside another loop for print table, pattern etc)

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
