const fetch = require("node-fetch");

var repositories = {
    async *[Symbol.asyncIterator]() {
        const result = await fetch('https://api.github.com/repositories?since=364', { 
            headers: {'User-Agent': 'Our script'}
        }).then(res => res.json())

        for(let i = 0; i < result.length; i++){
            yield result[i];
        }
    }
  };
  
  (async function() {
     for await (let repo of repositories) {
       console.log(repo.name);
     }
  })();

 