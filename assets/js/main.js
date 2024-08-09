const currencies = `https://api.frankfurter.app/currencies`;

const selectEl1 = document.querySelectorAll("#currency")[0];
const selectEl2 = document.querySelectorAll("#currency")[1];
const convertBtn = document.getElementById("convertBtn");
const inputAmt = document.getElementById("inputvalue");
const convertingAmount = document.getElementById("convertingAmount");
const convertedAmount = document.getElementById("convertedAmount");
const convertingCurrency = document.getElementById("convertingCurrency");
const convertedCurrency = document.getElementById("convertedCurrency");
const conversionResult = document.getElementById("conversionResult");
const convertForm = document.getElementById("convertForm");

const iterate = async (selectEl) => {
  const nameData = await fetch(currencies);
  const jsonData = await nameData.json();
  const arrayForm = Object.entries(jsonData);
  arrayForm.map((value) => {
    const optionEl = document.createElement("option");
    optionEl.innerText = value[0];
    selectEl.append(optionEl);
  });
};

iterate(selectEl1);
iterate(selectEl2);

convertBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const select1 = selectEl1.value;
  const select2 = selectEl2.value;
  const inputAmtValue = parseInt(inputAmt.value);
  const conversionURL = `https://api.frankfurter.app/latest?amount=${inputAmtValue}&from=${select1}&to=${select2}`;

  if (isNaN(inputAmtValue)) {
    alert("Enter correct Value");
  } else {
    if (select1 === select2) {
      alert("Same conversion not accepted");
    } else {
      const fetchingConversionURL = await fetch(conversionURL);
      const jsonConvertData = await fetchingConversionURL.json();
      const arrayConvertData = Object.entries(jsonConvertData);
      const gotRates = arrayConvertData[3][1][select2];
      console.log(gotRates);

      convertedAmount.innerText = gotRates;
      convertingAmount.innerText = inputAmtValue;
      convertingCurrency.innerText = select1;
      convertedCurrency.innerText = select2;

      conversionResult.classList.remove("hidden");
    }
  }
  convertForm.reset();
});
