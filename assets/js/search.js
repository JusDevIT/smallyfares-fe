let form = document.querySelector('#oneWayForm');
let oneWay = document.getElementById('oneway');
let buttonSearch = document.getElementById('buttonsearch');
let inputField = document.querySelectorAll('.search');

// lOAD AIRPORT JSON FILE
const jsonFilePath = 'data/airports.json';
fetch(jsonFilePath)
    .then(response => response.json())
    .then(jsonData => {
        const newArray = Object.values(jsonData).map(function (data){
            if (data.country == 'NG') data.country = "Nigeria";
            return { code: data.iata, location: `${data.name.toUpperCase()},${data.city.toUpperCase()},${data.state.toUpperCase()},${data.country.toUpperCase()}` };
        }).sort(function (a, b) {
            const nameA = a.location.toLowerCase;
            const nameB = b.location.toLowerCase;

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        // console.log(newArray);
        // Step 3: Use the JSON data
        // Perform operations on the jsonData here
        const searchResults = Object.values(newArray).filter(function (data){
            return data.location;
        })

        for (let i = 0; i < inputField.length; i++){
            //attach each datalist element to the input fields
            x = 'datalist' + [i];
            inputField[i].setAttribute('list', x);
            inputField[i].nextElementSibling.setAttribute('id', x);

            // Create and append option elements to the datalist
            searchResults.forEach(function (result){
                const option = document.createElement('option');
                option.textContent = result.location;
                option.value = result.code;
                inputField[i].nextElementSibling.appendChild(option);
            });
        }
        // console.log(jsonData);
    })
    .catch(error => {
        console.log('Error loading JSON file:', error);
    });


// oneWay.addEventListener('click', function (e) {
//     e.preventDefault();

//     // Get the form data
//     const formData = new FormData(form);
//     // Convert the form data to JSON
//     const jsonData = {};
//     formData.forEach((value, key) => {
//         switch (key) {
//             case 'adult_number':
//                 key = 'Adults';
//                 break;
//             case 'child_number':
//                 key = 'Children';
//                 break;
//             case 'infants_number':
//                 key = 'Infants';
//                 break;
//             case 'coach':
//                 key = 'FlightClass';
//                 break;
//             case 'daterange-single':
//                 key = 'DepartureDate1';
//                 break;
//             default:
//                 key = key;
//         }
//         jsonData[key] = value;

//         // console.log(key + ' = ' + value)
//     });
//     jsonData['OfficeId'] = '77KK';
//     console.log(JSON.stringify(jsonData));

//     fetch("http://127.0.0.1:8000/air/flights/oneway", {
//         method: 'POST',
//         // mode: 'no-cors',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': jsonData['_token']
//         },
//         body: JSON.stringify(jsonData)
//     }).then(response => response.json())
//         .then(data => {
//             console.log(data)
//             // Step 3: Use the JSON data
//             // Perform operations on the data here
//             location.assign(data.url);
//         })
//         .catch(error => {
//             console.log('Error loading JSON file:', error);
//         });
// });





// let roundWay = document.getElementById('roundway');
// let multiCity = document.getElementById('multicity');
// roundWay.addEventListener('click', function (e) {
//     e.preventDefault();

//     // Get the form data
//     const formData = new FormData(form);
//     // Convert the form data to JSON
//     const jsonData = {};
//     formData.forEach((value, key) => {
//         switch (key) {
//             case 'adult_number':
//                 key = 'Adults';
//                 break;
//             case 'child_number':
//                 key = 'Children';
//                 break;
//             case 'infants_number':
//                 key = 'Infants';
//                 break;
//             case 'coach':
//                 key = 'FlightClass';
//                 break;
//             case 'daterange-single':
//                 key = 'DepartureDate1';
//                 break;
//             default:
//                 key = key;
//         }
//         jsonData[key] = value;

//         // console.log(key + ' = ' + value)
//     });
//     // console.log(jsonData);

//     fetch("http://127.0.0.1:8000/air/flights/oneway", {
//         method: 'POST',
//         // mode: 'no-cors',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': jsonData['_token']
//         },
//         body: JSON.stringify(jsonData)
//     }).then(response => response.json())
//         .then(data => {
//             console.log(data)
//             // Step 3: Use the JSON data
//             // Perform operations on the data here
//             // window.location = data.url;
//             location.assign(data.url);
//         })
//         .catch(error => {
//             console.log('Error loading JSON file:', error);
//         });
// });

// multiCity.addEventListener('click', function (e) {
//     e.preventDefault();

//     // Get the form data
//     const formData = new FormData(form);
//     // Convert the form data to JSON
//     const jsonData = {};
//     formData.forEach((value, key) => {
//         switch (key) {
//             case 'adult_number':
//                 key = 'Adults';
//                 break;
//             case 'child_number':
//                 key = 'Children';
//                 break;
//             case 'infants_number':
//                 key = 'Infants';
//                 break;
//             case 'coach':
//                 key = 'FlightClass';
//                 break;
//             case 'daterange-single':
//                 key = 'DepartureDate1';
//                 break;
//             default:
//                 key = key;
//         }
//         jsonData[key] = value;

//         // console.log(key + ' = ' + value)
//     });
//     // console.log(jsonData);

//     fetch("http://127.0.0.1:8000/air/flights/oneway", {
//         method: 'POST',
//         // mode: 'no-cors',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRFToken': jsonData['_token']
//         },
//         body: JSON.stringify(jsonData)
//     }).then(response => response.json())
//         .then(data => {
//             console.log(data)
//             // Step 3: Use the JSON data
//             // Perform operations on the data here
//             // window.location = data.url;
//             location.assign(data.url);
//         })
//         .catch(error => {
//             console.log('Error loading JSON file:', error);
//         });
// });
