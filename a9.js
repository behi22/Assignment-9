// seriously if you understand this code, you are a LEGEND!
// constructor
function con(){
    this.num = 0;
    this.main = "";
    this.sides = "";
    this.rice = false;
    this.naan = false;
    this.cost = 0;
}
// object
let meal = new con();
let objarray = [];
let array = [] ;
let subarray = [];
let totalsubarray = [];
let side, list;

// total
let total_of_meals = 0;
let h3_div = document.getElementById("total");

// sides
let adder = document.getElementById("add");
adder.onclick = add;
function add(){
    side = document.getElementById("side");
    if(array.indexOf(side.value) == -1){
        array.push(side.value);
    }
    meal.sides = array.slice();
    list = document.getElementById("TheHardOne");
    list.innerHTML = ""
    for(let i=0; i < array.length; i++){
        list.innerHTML += "<li>" + array[i].toString() + "</li>";
    }
}

let remover = document.getElementById("remove");
remover.onclick = remove;
function remove(){
    list = document.getElementById("TheHardOne");
    list.innerHTML = "";
    array.length = 0;
    meal.sides = "";
}
// sides

// cost
function calculateCost(mealObject){
    let money=0;
    if(mealObject.main == "Lamb Vindaloo"){
        money = 15;
        if(mealObject.rice == true){
            money += 3; 
        }
        if(mealObject.naan == true){
            money += 2;
        }
        if(mealObject.sides.length > 0){
            for(let i1=0; i1 < mealObject.sides.length; i1++){
                if(mealObject.sides[i1] == "Papadums"){
                    money += 2;
                }
                if(mealObject.sides[i1] == "Samosas"){
                    money += 5;
                }
                if(mealObject.sides[i1] == "Pakoras"){
                    money += 6;
                }
                if(mealObject.sides[i1] == "Kheer"){
                    money += 5;
                }
            }
        }
    } else {
        if(mealObject.main == "Butter Chicken"){
            money = 13;
            if(mealObject.rice == true){
                money += 3; 
            }
            if(mealObject.naan == true){
                money += 2;
            }
            if(mealObject.sides.length > 0){
                for(let i2=0; i2 < mealObject.sides.length; i2++){
                    if(mealObject.sides[i2] == "Papadums"){
                        money += 2;
                    }
                    if(mealObject.sides[i2] == "Samosas"){
                        money += 5;
                    }
                    if(mealObject.sides[i2] == "Pakoras"){
                        money += 6;
                    }
                    if(mealObject.sides[i2] == "Kheer"){
                        money += 5;
                    }
                }
            }
        } else {
            if(mealObject.main == "Prawn Masala") {
                money = 17;
                if(mealObject.rice == true){
                    money += 3; 
                }
                if(mealObject.naan == true){
                    money += 2;
                }
                if(mealObject.sides.length > 0){
                    for(let i1=0; i1 < mealObject.sides.length; i1++){
                        if(mealObject.sides[i1] == "Papadums"){
                            money += 2;
                        }
                        if(mealObject.sides[i1] == "Samosas"){
                            money += 5;
                        }
                        if(mealObject.sides[i1] == "Pakoras"){
                            money += 6;
                        }
                        if(mealObject.sides[i1] == "Kheer"){
                            money += 5;
                        }
                    }
                }  
            }
        }
    }
    return money
}
// cost

// table adder
let str="";
let counter=0;
let table_div = document.getElementById("table");
let t_adder = document.getElementById("add_t");
t_adder.onclick = add_t;
function add_t(){
    counter++;
    // main & rice & naan
    let main, Rice, Naan;
    main = document.getElementById("main");
    if(main.value == "Lamb Vindaloo"){
        meal.main = "Lamb Vindaloo";
        Rice = document.getElementById("Rice");
        Naan = document.getElementById("Naan");
        if(Rice.checked == true){
          meal.rice = true;
        } else {
          meal.rice = false;
        }
        if(Naan.checked == true){
          meal.naan = true;
        } else {
          meal.naan = false;
        }
    } else {
        if(main.value == "Butter Chicken"){
            meal.main = "Butter Chicken";
            Rice = document.getElementById("Rice");
            Naan = document.getElementById("Naan");
            if(Rice.checked == true){
              meal.rice = true;
            } else {
              meal.rice = false;
            }
            if(Naan.checked == true){
              meal.naan = true;
            } else {
              meal.naan = false;
            }
        } else {
            if(main.value == "Prawn Masala") {
                meal.main = "Prawn Masala";
                Rice = document.getElementById("Rice");
                Naan = document.getElementById("Naan");
                if(Rice.checked == true){
                  meal.rice = true;
                } else {
                  meal.rice = false;
                }
                if(Naan.checked == true){
                  meal.naan = true;
                }  else {
                  meal.naan = false;
                }
            }
        }
    }
    // main & rice & naan
    
    // object stuff
    meal.cost = calculateCost(meal);
    meal.num = counter;
    objarray.push(meal);
    
    // table
    let item;
    while(objarray.length > 0){
        item = objarray.pop();
        table_div.innerHTML += "<tr><td>" + item.num.toString() + "</td><td>" + item.main + "</td><td>" + item.sides.toString() + "</td><td>" + item.rice.toString() + "</td><td>" + item.naan.toString() + "</td><td>" + item.cost.toString() + "</td></tr>";
        str = "<tr><td>" + item.num.toString() + "</td><td>" + item.main + "</td><td>" + item.sides.toString() + "</td><td>" + item.rice.toString() + "</td><td>" + item.naan.toString() + "</td><td>" + item.cost.toString() + "</td></tr>";
        subarray.push(str.length);
        totalsubarray.push(item.cost);
        total_of_meals += item.cost;
    }
    
    //total 
    h3_div.innerHTML = "Total: $" + total_of_meals.toString();
}

// table reset
let t_reset = document.getElementById("reset_t");
t_reset.onclick = reset_t;
function reset_t(){
    counter = 0;
    total_of_meals = 0;
    h3_div.innerHTML = "Total: $0"
    objarray.length = 0;
    subarray.length = 0;
    table_div.innerHTML = "<tr><td><strong>#</strong></td><td><strong>Main</strong></td><td><strong>Sides</strong></td><td><strong>Rice</strong></td><td><strong>Naan</strong></td><td><strong>Cost</strong></td></tr>";
}

// table remove
let t_remove = document.getElementById("remove_t");
t_remove.onclick = remove_t;
function remove_t(){
    if(counter > 0){
        counter--;
        table_div.innerHTML = table_div.innerHTML.substring(0, table_div.innerHTML.length - parseInt(subarray.pop())-1);
        total_of_meals -= totalsubarray.pop();
        h3_div.innerHTML = "Total: $" + total_of_meals.toString();
    }
}