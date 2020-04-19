// HASH TABLE

const hash = (key, size) => {
    let hashedKey = 0
    for (let i = 0; i < key.length; i++) {
      hashedKey += key.charCodeAt(i)
    }
    return hashedKey % size
  }
  
  class HashTable {
    constructor() {
      this.size = 20
      this.buckets = Array(this.size) 
  
      // populate each bucket with a Map()
      for (let i = 0; this.buckets.length; i++) {
        this.buckets[i] = new Map()
      }
    }
  
    insert(key, value) {
      let idx = hash(key, this.size) 
      this.buckets[idx].set(key, value)
    }
  
    remove(key) {
      let idx = hash(key, this.size)
      let deleted = this.buckets[idx].get(key)
      this.buckets[idx].delete(key)
      return deleted 
    }
  
    search(key) {
      let idx = hash(key, this.size)
      return this.buckets[idx].get(key)
    }
  }
  
  const hashTable = new HashTable()
  
hashTable.insert("Liverpool", "LFC")
hashTable.insert("Kerala Blasters", "KBFC")
hashTable.insert("Barcelona", "FCB")

hashTable.remove('Kerala Blasters')

console.log(hashTable)
console.log(hashTable.search("Barcelona"))