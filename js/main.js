const UI = {
    INPUT: document.querySelector(".input"),
    BTN: document.querySelector(".btn"),
}

UI.BTN.addEventListener('click', function () {
	const firstName = UI.INPUT.value;
	
    const SERVER_URL = {
  	    GENDER: 'https://api.genderize.io',
        COUNTRY: 'https://api.nationalize.io',
    }
  
    const URL = {
  	    GENDER: `${SERVER_URL.GENDER}?name=${firstName}`,
        COUNTRY: `${SERVER_URL.COUNTRY}?name=${firstName}`,
    } 
  
  
    fetch(URL.GENDER).then(result => result.json()).then(res => alert(`${firstName} is ${res.gender}`));
	
    /* fetch(URL.COUNTRY).then(result => result.json())
  	.then (res => {console.log(`${firstName} is ${res.country.country_id}`) 
    	res.country.filter ( function (item) {
      	let probability = +item.probability
        console.log (Math.max(probability))
      })
    }
    ) */
})
