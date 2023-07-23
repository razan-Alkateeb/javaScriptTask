

class User {
    
     #p;

    constructor(id, username, password) {
      this.i = id;
      this.u = username;
      this.#p = password;
    }

    getPassword() {
      return parseInt(this.#p);
    }
  }
  
  let userOne = new User(1, "Razan", "1234567kjg");
  
  console.log(userOne.p);
  
  console.log(userOne.getPassword());






