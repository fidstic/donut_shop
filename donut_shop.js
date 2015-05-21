
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

    var locations = [];
    //locations.push(dTown, cHill, sLakeUnion, wWood, ballard);
    locations.push(new Shop("Downtown", 4.5, 8, 43));
    locations.push(new Shop("Capitol Hill", 2, 4, 37));
    locations.push(new Shop("South Lake Union", 6.33, 9, 23));
    locations.push(new Shop("Wedgewood", 1.25, 2, 28));
    locations.push(new Shop("Ballard", 3.75, 8, 58));

    for (var k = 0; k < locations.length; k++) {
      locations[k].fillHead();
  }


  var NewLocation = function () {
    var newShop = document.getElementById("location").value;
    console.log(newShop);
    console.log(document.getElementById("location").value);
    var maxHour = document.getElementById("maxCust").value;
    console.log(maxHour.type);
    console.log(maxHour);
    console.log(maxHour + 1);
    console.log(maxHour = parseInt(maxHour));
    console.log(maxHour + 1);
    var minHour = document.getElementById("minCust").value;
    var ave = document.getElementById("aveCust").value;

    var newDoShop = new Shop(newShop, maxHour, minHour, ave)
    locations.push(newDoShop)
    newDoShop.fillHead();
}

  document.getElementById("inputButton").addEventListener('click', NewLocation, false);





