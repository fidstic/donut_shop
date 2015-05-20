
var Shop = function (name, average, min, max) {
    this.name = name;
    this.average = average;
    this.min = min;
    this.max = max;
    this.customers = function (min, max){
      return Math.floor(Math.random() * (this.max - this.min +1 )) + this.min;
    }
  }
  Shop.prototype.donuts= function () {
    return Math.round(this.customers() * this.average);
    }

  Shop.prototype.total = function () {
    var total = 0;
    for (var i = 0; i < 12; i++) {
      total += this.donuts();
    }
      return total;
    }



  Shop.prototype.fillHead = function() {

    var table = document.getElementById("do");
    var row = document.createElement("tr");
    var doShop = document.createElement("td");

    doShop.textContent = this.name;
    row.appendChild(doShop);
    var total;

    for (var i = 0; i < 11; i++) {
      var hour = this.donuts();
      var cell = document.createElement("td");
      cell.textContent = hour;
      row.appendChild(cell);
      //total += hour;
    }

    var cell = document.createElement("td");
    perDay = document.createTextNode(this.total());
    cell.appendChild(perDay);
    row.appendChild(cell);
    table.appendChild(row);

  }


  //var addStore = function () {
    //}

  var dTown = new Shop("Downtown", 4.5, 8, 43);
  var cHill = new Shop("Capitol Hill", 2, 4, 37);
  var sLakeUnion = new Shop ("South Lake Union", 6.33, 9, 23);
  var wWood = new Shop ("Wedgewood", 1.25, 2, 28);
  var ballard = new Shop ("Ballard", 3.75, 8, 58);

dTown.fillHead();
cHill.fillHead();
sLakeUnion.fillHead();
wWood.fillHead();
ballard.fillHead();

console.log(dTown.donuts());
console.log(cHill.total());
console.log(sLakeUnion.total());
console.log(wWood.total());
console.log(ballard.total());






