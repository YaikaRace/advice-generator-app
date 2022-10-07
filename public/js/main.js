const API = "https://api.adviceslip.com/advice";
const BUTTON = document.querySelector('[data-id="dice-button"]');
const ADVICE_CONTAINER = document.querySelector('[data-id="advice-container"]');
const ADVICE_NUMBER = document.querySelector('[data-id="advice-number"]');

async function getAdvice() {
  try {
    let response = await fetch(API, { cache: "no-cache" });
    let data = await response.json();
    let advice = data.slip;
    ADVICE_CONTAINER.textContent = advice.advice;
    ADVICE_NUMBER.textContent = "ADVICE #" + advice.id;
    return data.slip;
  } catch (e) {
    console.log(e);
  }
}

BUTTON.addEventListener("click", () => getAdvice());

getAdvice();
