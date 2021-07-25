var workers = [
  { name: 'John', salary: '500' },
  { name: 'Mike', salary: '1300' },
  { name: 'Linda', salary: '1500' }
];

var getWorthyWorkers = (array) => {
  const worthyWorkers = [];
  for (let i = 0; i < array.length; i++) {
    const currentWorker = array[i];

    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name);
    }
  }

  return worthyWorkers;
}

console.log(getWorthyWorkers(workers));





