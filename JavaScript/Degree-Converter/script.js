const calculateTemp = () => {
  const values = document.getElementById("values").value;

  const selectedTemp = document.getElementById("selects");

  const selectedTemps = selectedTemp.options[selectedTemp.selectedIndex].value;

  const celtofah = (values) => {
    return Math.round(values * (9 / 5) + 32);
  };

  const fahtocel = (values) => {
    return Math.round((5 / 9) * (values - 32));
  }; 
  
  let result;
  if (selectedTemps == "cel") {
    result = celtofah(values);
    let outputs = document.getElementById("output");
    outputs.innerHTML =   `${result} Fahrenheit`;
  } else {
    result = fahtocel(values);
    outputs = document.getElementById("output");
    outputs.innerHTML = `${result} Celsius`;
  }
};
