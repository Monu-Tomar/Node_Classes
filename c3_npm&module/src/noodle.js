globalThis.name= "Monu Tomar";
globalThis.city= "Noida";
pin= 201321;
globalThis.country= "India";

// const village = "Bhatola";
// const state = "Uttar Pradesh";
// const pin = 2013015;


//  exports is used to export the module and require is used to import the module.

// module.exports = {
//     name: name,
//     city: city,
//     pin: globalThis.pin,
//     country224: globalThis.country,
//     village: village,
//     state: state,
//     pin: pin
// };

// cjs (Comman JS)

// exports.city = globalThis.city; // {This will give the city from the module.js file.}
// exports.pin = globalThis.pin; // {This will give the pin from the module.js file.}


//  module(Object basis module)
// module.exports = { name, city, pin, country }; // {This will give the name from the module.js file.}


// property based module
// exports.cityName=city; // {This will give the city from the module.js file.}  
// exports.pinCode=pin; // {This will give the pin from the module.js file.}

// console.log(module.exports); // {This will give the module.exports.}
// console.log(module); // {This will give the module.}


// Ejs moule (ES6 , ecma script)
// export {village, pin, state }; // {This will give the name from the module.js file.}




// ye alag cheej hai jo baad me samjhaenge ki ye kya hai.

// globalThis.module = {
//     exports: {},
//     id: "module.js",
//     filename: "module.js",
//     loaded: false,
//     children: [],
//     paths: [],
//     parent: null,
//     require: function (path) {
//         return require(path);
//     },
//     _load: function (request, parent, isMain) { 
//         return require(request, parent, isMain);
//     }
// };