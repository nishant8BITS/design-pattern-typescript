/**
 *  Main Idea => Make any object usable in for...of loop 
 */

/**
 *  Built In Iterable 
 */


 /**
  *  Make custom Iterable 
  */

  let range = {
      from: 1,
      to:5
  }

  range[Symbol.iterator] = function(){
      let current = 0;
      return {
          next(){
                if(current < 5){
                    return {
                        done: false,
                        value: current++
                    }
                }else {
                    return {
                        done: true,
                        value: current
                    }
                }
          }
      }
  }

  range[Symbol.iterator] = function(){
    let current = 0;
    return {
        next(){
              if(current < 5){
                  return {
                      done: false,
                      value: current++
                  }
              }else {
                  return {
                      done: true,
                      value: current
                  }
              }
        }
    }
}


  for (let num of range) {
      console.log(num);
  }

  for (let num of range) {
    console.log(num);
}

let str = '𝒳😂';
for (let char of str) {
    console.log( char ); // 𝒳, and then 😂
}


let str2 = "Nishant";
let iterator = str2[Symbol.iterator]();

while(true){
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value);
}

let employee = {
    name: "nishant",
    department: "machine",
    [Symbol.iterator] : function(){
        return this;
    },
    count:0,

    next(){
        if(this.count === 0){
            this.count++;
            return {
                done: false,
                value: this.name
            }
        }else if(this.count === 1) {
            this.count++;
            return {
                done: false,
                value: this.department
            }
        }else{
            return {
                done: true,
                value: this.department
            }
        }
    }
}

async function getUsers(){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve([{userName: "nishant"}, {userName: "richa"}])) 
    });
}

const Users = {
    [Symbol.iterator] : function * (){
        yield 1;
        yield 2;
        yield 3;
    }
}

for(user of Users){
    console.log(user);
}