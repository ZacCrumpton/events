console.log("HelloWorld!")

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};

const pies = [
    {
        name: "Dutch Apple Pie",
        price: 1000,
        isWarm: false,
        isOrganic: true,
        crust: "extra flakey",
        iceCream: "Vanilla Bean",
        isAvailable: true,
        imageUrl: "https://images-gmi-pmc.edge-generalmills.com/5b481045-507b-4e3f-908e-749f5ca06e7e.jpg",
        drinkPairing: "whiskey",
        instructor: "Zoe"
    },
    {
        name: "Regular Apple Pie",
        price: 5000,
        isWarm: true,
        isOrganic: true,
        crust: "under baked",
        iceCream: "Vegan Chocolate",
        isAvailable: false,
        imageUrl: "https://images-gmi-pmc.edge-generalmills.com/75593ed5-420b-4782-8eae-56bdfbc2586b.jpg",
        drinkPairing: "Any Wine",
        instructor: "Mary"
    },
    {
        name: "Pizza Pie",
        price: 2.5,
        isWarm: true,
        isOrganic: false,
        crust: "yeah!",
        iceCream: "nope",
        isAvailable: true,
        imageUrl: "https://hips.hearstapps.com/hmg-prod/images/delish-pizza-pot-pie-horizontal-1536183948.jpg",
        drinkPairing: "High Life",
        instructor: "Luke"
    },
    {
        name: "Berry Pie",
        price: 1,
        isWarm: false,
        isOrganic: false,
        crust: "Oreo",
        iceCream: "Peanut Butter",
        isAvailable: true,
        imageUrl: "https://www.tasteofhome.com/wp-content/uploads/2019/06/DIYD_051519_170770_MixedBerryPie_WPThumb.jpg",
        drinkPairing: "Water",
        instructor: "Zoe"
    },
    {
        name: "Chocolate Pie",
        price: 1,
        isWarm: false,
        isOrganic: true,
        crust: "graham cracker",
        iceCream: "Mint",
        isAvailable: true,
        imageUrl: "https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2017/09/Chocolate-Pie-Recipe-1-of-1-9-500x443.jpg",
        drinkPairing: "Gin",
        instructor: "Mary"
    },
    {
        name: "Pi",
        price: 3.14,
        isWarm: false,
        isOrganic: true,
        crust: "crumb",
        iceCream: "Moose Tracks",
        isAvailable: true,
        imageUrl: "https://cdn.mos.cms.futurecdn.net/YctSHrw8bPz94HrLyfyruB-320-80.jpg",
        drinkPairing: "Milk",
        instructor: "Luke"
    },
    {
        name: "Strawberry Pie",
        price: 5,
        isWarm: true,
        isOrganic: true,
        crust: "Normal",
        iceCream: "Cookies and Cream",
        isAvailable: true,
        imageUrl: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Easy-Fresh-Strawberry-Pie_EXPS_TMBBP19_34179_B06_20_3b.jpg",
        drinkPairing: "Seagrams 7",
        instructor: "Zac"
    },
    {
        name: "Blue Berry Pie",
        price: 7000,
        isWarm: true,
        isOrganic: true,
        crust: "extra flakey",
        iceCream: "Strawberry",
        isAvailable: true,
        imageUrl: "https://natashaskitchen.com/wp-content/uploads/2018/08/Blueberry-Pie-6.jpg",
        drinkPairing: "Milk",
        instructor: "Zac"
    }
]
console.log('pies', pies)
//3 cards to a row (4th on the last line)
//nice big images
//display all information in the pie objects

const pieBuilder = (monkeyButtArray) => {
    let domString = '';
    for(let i = 0; i < monkeyButtArray.length; i++){
        domString += `<article id="pieFlex">`
            domString += `<section id="pieSection">`
                domString += `<h2>${monkeyButtArray[i].name}</h2>`;
                domString += `<img src="${monkeyButtArray[i].imageUrl}">`;
                domString += `<p>YOUR PRICE: $${monkeyButtArray[i].price}</p>`;
                domString += `<p>HOW'S THE TEMP?!`
            if (monkeyButtArray[i].isWarm === true) {
                domString += `<p id="hot">Wow thats HoT</p>`;
            } else {
                domString += `<p id="cold">Burrrr to cold for me</p>`;
            };

            domString += `<p>IS THIS PIE ORGANIC??`

            if (monkeyButtArray[i].isOrganic === true) {
                domString += `<p id="organic">You betcha, what a fesh taste!</p>`
            } else {
                domString += `<p id="notOrganic">Nope, this is artificial</p>`
            };   
                domString += `<p>WHAT KIND OF CRUST?: ${monkeyButtArray[i].crust}</p>`;
                domString += `<p>POPULAR ICECREAM FOR THIS PIE: ${monkeyButtArray[i].iceCream}</p>`;
                domString += `<p>${monkeyButtArray[i].isAvailable}</p>`;
                domString += `<p>TRY THIS DRINK WITH YOUR PIE: ${monkeyButtArray[i].drinkPairing}</p>`;
                domString += `<p>RECOMMENDED BY: ${monkeyButtArray[i].instructor}</p>`
            domString += `</section>`
        domString += `</article>`
    }
    printToDom('piePage', domString)
};

const zoesPies = () => {
    console.log("GIMME A PIE");
    const myPies = [] 
    for(let i = 0; i < pies.length; i++) {
    if(pies[i].instructor === 'Zoe') {
        myPies.push(pies[i]);
    }
    pieBuilder(myPies);
}
}

const marysPies = () => {
    console.log("Gimme a pie");
    const myPies = []
    for(let i = 0; i < pies.length; i++) {
    if(pies[i].instructor === 'Mary'){
        myPies.push(pies[i])
    }
    pieBuilder(myPies);
    }
    
}

const findMyPies = (e) => {
    console.log(e.target.id)
    const buttonId = e.target.id;
    const myPies = []
    for(let i = 0; i < pies.length; i++) {
    if(pies[i].instructor === buttonId){
        myPies.push(pies[i])
    }
    pieBuilder(myPies);
    }
};

pieBuilder(pies);
document.getElementById('Zoe').addEventListener('click', findMyPies);
document.getElementById('Mary').addEventListener('click', findMyPies);
document.getElementById('Luke').addEventListener('click', findMyPies);
document.getElementById('Zac').addEventListener('click', findMyPies);