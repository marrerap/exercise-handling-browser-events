const madLibForm = document.getElementById("madLibForm")
madLibForm.addEventListener('submit', function (event) {
    event.preventDefault();    

    const animal = document.getElementsByClassName('animal');
    const animalInput = document.getElementById('animal')
    for (let count = 0; count < animal.length; count++) {
        animal[count].textContent = (animalInput.value)
      }
// vvvvvvvvvvvvvvvvvvvvvvvvv test code vvvvvvvvvvvvvvvvvvvvv

    // const animal = document.querySelectorAll('span.animal');   
    // animal.forEach(newFunction);
    // function newFunction() {
    //     const animalText = document.getElementById("animal").value
    //     const fill = document.createElement('p');
        

    //     fill.textContent = (animalText);
    //     let count = 0
    //     animal[count].appendChild(fill);
    //     count++
//    }

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^test code^^^^^^^^^^^^^^^^^^^^^

    const country = document.getElementsByClassName('country');
    const countryInput = document.getElementById('country')
    for (let count = 0; count < country.length; count++) {
        country[count].textContent = (countryInput.value)
    }
    
    const pluralNoun = document.getElementsByClassName('pluralNoun');
    const pluralNounInput = document.getElementById('pluralNoun')
    for (let count = 0; count < pluralNoun.length; count++) {
        pluralNoun[count].textContent = (pluralNounInput.value)
    
    }
    
    const food = document.getElementsByClassName('food');
    const foodInput = document.getElementById('food')
    for (let count = 0; count < food.length; count++) {
        food[count].textContent = (foodInput.value)
    
    }
    const device = document.getElementsByClassName('device');
    const deviceInput = document.getElementById('device')
    for (let count = 0; count < device.length; count++) {
        device[count].textContent = (deviceInput.value)
    
    }
    
    const noun = document.getElementsByClassName('noun');
    const nounInput = document.getElementById('noun')
    for (let count = 0; count < noun.length; count++) {
        noun[count].textContent = (nounInput.value)
    
    }

    const adjective = document.getElementsByClassName('adjective');
    const adjectiveInput = document.getElementById('adjective')
    for (let count = 0; count < adjective.length; count++) {
        adjective[count].textContent = (adjectiveInput.value)
    
    }    
    
    const visibleStory = document.getElementById('madLibStory').removeAttribute('style');    
    
})

    // const testCountry = document.getElementsByClassName('country');
    // const countryInput2 = document.getElementById('country')
    // for (let count = 0; count < testCountry.length; count++) {
    //     testCountry[count].appendChild(countryInput2.cloneNode(false))
    //   }
    // const pluralNoun = document.getElementsByClassName('pluralNoun');
    // const pluralNounInput = document.getElementById('pluralNoun')
    // for (let count = 0; count < pluralNoun.length; count++) {
    //     pluralNoun[count].appendChild(pluralNounInput.cloneNode(false))
    // }

    // const food = document.getElementsByClassName('food');
    // const foodInput = document.getElementById('food')
    // for (let count = 0; count < food.length; count++) {
    //     food[count].appendChild(foodInput.cloneNode(false))
    //     }

    // const device = document.getElementsByClassName('device');
    // const deviceInput = document.getElementById('device')
    // for (let count = 0; count < device.length; count++) {
    //     device[count].appendChild(deviceInput.cloneNode(false))
    // }

    // const noun = document.getElementsByClassName('noun');
    // const nounInput = document.getElementById('noun')
    // for (let count = 0; count < noun.length; count++) {
    //     noun[count].appendChild(nounInput.cloneNode(false))
    // }

    // const adjective = document.getElementsByClassName('adjective');
    // const adjectiveInput = document.getElementById('adjective')
    // for (let count = 0; count < adjective.length; count++) {
    //     adjective[count].appendChild(adjectiveInput.cloneNode(false))
    // }


// one set of code^^^^^^^^^^^^^^^^


    // const pluralNoun = document.getElementById('pluralNounText')
    // const pluralNounInput = document.getElementById('pluralNoun')
    // pluralNoun.appendChild(pluralNounInput)
    
    // const food = document.getElementById('foodText')
    // const foodInput = document.getElementById('food')
    // food.appendChild(foodInput)
    
    // const device = document.getElementById('deviceText')
    // const deviceInput = document.getElementById('device')
    // device.appendChild(deviceInput)
    
    // const noun = document.getElementById('nounText')
    // const nounInput = document.getElementById('noun')
    // noun.appendChild(nounInput)
    
    // const adjective = document.getElementById('adjectiveText')
    // const adjectiveInput = document.getElementById('adjective')
    // adjective.appendChild(adjectiveInput)

