// PollyFill for promiseAll
function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    let promiseCount = promises.length;
    let resolveData = [];
    let resolveCount = 0;
    
    function checkStatus(data) {
      resolveData.push(data);
      resolveCount++;
      if (resolveCount == promiseCount) {
        resolve(resolveData);
      }
    }
    
    promises.forEach(function(promise, i) {
      promise.then(
        function(data) {
          checkStatus(data);
        }           
      ).catch((error) => {
        reject(error);
      });
    });
  });
}
