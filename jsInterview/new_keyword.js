class Product {
  name
  price
  desc
  constructor(n, p, d) {
    this.name = n
    this.price = p
    this.description = d
    return {
        x : this.description
    }
  }
}

const p = new Product('bag', 100, 'cool bag')
console.log(p)
