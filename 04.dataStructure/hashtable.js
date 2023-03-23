class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < this.size; i++) {
      this.table.push([]);
    }
  }

  // parse string to integer
  parse(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i); // MDN
    }
    return result % this.size;
  }

  // division method
  hash1(key) {
    return key % this.size;
  }

  // multiplication method
  hash2(key) {
    let parsedKey = 0;
    if (typeof key !== "number") {
      parsedKey = this.parse(key);
    } else {
      parsedKey = key;
    }
    let A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((parsedKey * A) % 1));
  }

  set(key, value) {
    let index = this.hash2(key);
    this.table[index].push({ key, value });
  }

  get(key) {
    let index = this.hash2(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key == key) {
        return this.table[index][i];
      }
    }
    return null;
  }

  printAll() {
    console.log(this.table);
  }
}

let myHashTable = new HashTable(6);
// CSS
myHashTable.set("white", "#FFFFFF");
myHashTable.set("magenta", "#FF00FF");
myHashTable.set("red", "#FF0000");

// console.log(myHashTable.get("white").value);
myHashTable.printAll();


// objects and arrays are hashed in Javascript
// let Harry = {
//   fullname: "Harry Potter",
//   age: "15",
//   school: "Hogwarts",
// };

// console.log(Harry["school"]);


/********************************************************************************
*

          優點 : search : O(1)
          缺點 : 需要事先知道要放多少資料，才能制做 hash table  ex : load factor n/m
          
*
*********************************************************************************/
