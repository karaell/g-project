import {UI} from './view.js';

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
  
  let isNameEntered = UI.INPUT.value !== '';
  if (!isNameEntered) {
    alert ("Enter your name...");
    return;
  }

	fetch(URL.GENDER).then(result => result.json()).then(res => alert (`${firstName} is ${res.gender}`))
	
  fetch(URL.COUNTRY).then(result => result.json())
  	.then (res => {
    	let userCountry = res.country[0].country_id;
      alert (`${firstName} from ${userCountry}`)
    })

    UI.INPUT.value = '';
}) 