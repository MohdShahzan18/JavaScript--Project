document.getElementById('doConversion').addEventListener('submit' , (e) => {
  e.preventDefault()
  Convert();

})

const Convert = () => {
    const num = document.querySelector("#nums").value;
  
    const output = document.querySelector("#result");
  
    const selectedVal = document.getElementById("select");
    const selectedCon = document.getElementById("selects");
  
    const selectedVals = selectedVal.options[selectedVal.selectedIndex].value;
    const selectedCons = selectedCon.options[selectedCon.selectedIndex].value;
  
    //?Kilometer Formulas
    const kmToMeter = (num) => num * 1000;
    const kmToCentimeter = (num) => num * 100000;
    const kmToMilimeter = (num) => num * 1000000;
    const kmToMiles = (num) => num * 0.621371;
    const kmToYards = (num) => num * 1093.61;
    const kmToFeets = (num) => num * 3280.84;
    const kmToInches = (num) => num * 39370.1;
  
    //? Centimeter Formulas
    const cmToKm = (num) => num / 100000;
    const cmToMeter = (num) => num / 100;
    const cmToFeet = (num) => num * 0.0328084;
    const cmToMilimeter = (num) => num * 10;
    const cmToInches = (num) => num * 0.393701;
    const cmToYards = (num) => num * 0.0109361;
    const cmToMiles = (num) => num * 0.0000062137;
  
    //? Meter Formulas
    const meterToKm = (num) => num / 1000;
    const meterToCm = (num) => num * 100;
    const meterToMm = (num) => num * 1000;
    const meterToMiles = (num) => (num * 0.000621371).toFixed(14);
    const meterToYards = (num) => num * 1.09361;
    const meterToFeet = (num) => num * 3.28084;
    const meterToInches = (num) => num * 39.3701;
  
    //? Milimeter Formulas
    const MilimeterToMeter = (num) => num / 1000;
    const MilimeterToCentimeter = (num) => num / 10;
    const MilimeterToFeet = (num) => num * 0.00328084;
    const MilimeterToInches = (num) => num * 0.0393701;
    const MilimeterToKm = (num) => num * 0.000001;
    const MilimeterToYards = (num) => (num * 0.00109361).toFixed(4);
    const MilimeterToMiles = (num) => num * 0.000000621371;
  
    //? Miles Formulas
    const MilesToKm = (num) => num * 1.60934;
    const MilesToMeter = (num) => num * 1609.34;
    const MilesToCm = (num) => num * 160934;
    const MilesToMilimeter = (num) => num * 1609344;
    const MilesToYards = (num) => num * 1760;
    const MilesToFeets = (num) => num * 5280;
    const MilesToInches = (num) => num * 63360;
  
    //? Feet Formulas
    const FeetToYards = (num) => num / 3;
    const FeetToInches = (num) => num * 12;
  
    //? Yards Formulas
    const YardToFeet = (num) => num * 3;
    const YardToInches = (num) => num * 36;
  
    //? Inches Formulas
    const InchesToYards = (num) => num / 36;
    const InchesToFeet = (num) => num / 12;
  
    let result;
    if (selectedVals == "met" && selectedCons == "Kilo" ) {
      result = meterToKm(num);
      output.innerHTML = `${result} Kilometer`;
    } else if (selectedVals == "met" && selectedCons == "Cen") {
      result = meterToCm(num);
      output.innerHTML = `${result} Centimeter`;
    } else if (selectedVals == "met" && selectedCons == "Mm") {
      result = meterToMm(num);
      output.innerHTML = `${result} Milimeter`;
    } else if (selectedVals == "met" && selectedCons == "Mil") {
      result = meterToMiles(num);
      output.innerHTML = `${result} Miles`;
    } else if (selectedVals == "met" && selectedCons == "Yd") {
      result = meterToYards(num);
      output.innerHTML = `${result} Yards`;
    } else if (selectedVals == "met" && selectedCons == "Ft") {
      result = meterToFeet(num);
      output.innerHTML = `${result} Feet`;
    } else if (selectedVals == "met" && selectedCons == "In") {
      result = meterToInches(num);
      output.innerHTML = `${result} Inches`;
    } else if (selectedVals == "cen" && selectedCons == "Met") {
      result = cmToMeter(num);
      output.innerHTML = `${result} Meter`;
    } else if (selectedVals == "cen" && selectedCons == "Ft") {
      result = cmToFeet(num);
      output.innerHTML = `${result} Milimeter`;
    } else if (selectedVals == "cen" && selectedCons == "In") {
      result = cmToInches(num);
      output.innerHTML = `${result} Inches`;
    } else if (selectedVals == "cen" && selectedCons == "Mm") {
      result = cmToMilimeter(num);
      output.innerHTML = `${result} Milimeter`;
    } else if (selectedVals == "cen" && selectedCons == "Mil") {
      result = cmToMiles(num);
      output.innerHTML = `${result} Miles`;
    } else if (selectedVals == "cen" && selectedCons == "Kilo") {
      result = cmToKm(num);
      output.innerHTML = `${result} Kilometer`;
    }  else if (selectedVals == "cen" && selectedCons == "Yd") {
      result = cmToYards(num);
      output.innerHTML = `${result} Yards`;
    } else if (selectedVals == "mm" && selectedCons == "Met") {
      result = MilimeterToMeter(num);
      output.innerHTML = `${result} Meter`;
    } else if (selectedVals == "mm" && selectedCons == "Mil") {
      result = MilimeterToMiles(num);
      output.innerHTML = `${result} Miles`;
    } else if (selectedVals == "mm" && selectedCons == "In") {
      result = MilimeterToInches(num);
      output.innerHTML = `${result} Inches`;
    } else if (selectedVals == "mm" && selectedCons == "Ft") {
      result = MilimeterToFeet(num);
      output.innerHTML = `${result} Feet`;
    } else if (selectedVals == "mm" && selectedCons == "Cen") {
      result = MilimeterToCentimeter(num);
      output.innerHTML = `${result} Miles`;
    } else if (selectedVals == "mm" && selectedCons == "Yd") {
      result = MilimeterToYards(num);
      output.innerHTML = `${result} Yards`;
    } else if (selectedVals == "mm" && selectedCons == "Kilo") {
      result = MilimeterToKm(num);
      output.innerHTML = `${result} Kilometer`;
    } else if (selectedVals == "kilo" && selectedCons == "Met") {
      result = kmToMeter(num);
      output.innerHTML = `${result} Meter`;
    } else if (selectedVals == "kilo" && selectedCons == "Cen") {
      result = kmToCentimeter(num);
      output.innerHTML = `${result} Centimeter`;
    } else if (selectedVals == "kilo" && selectedCons == "Mm") {
      result = kmToMilimeter(num);
      output.innerHTML = `${result} Milimeter`;
    } else if (selectedVals == "kilo" && selectedCons == "Mil") {
      result = kmToMiles(num);
      output.innerHTML = `${result} Miles`;
    } else if (selectedVals == "kilo" && selectedCons == "Yd") {
      result = kmToYards(num);
      output.innerHTML = `${result} Yards`;
    } else if (selectedVals == "kilo" && selectedCons == "Ft") {
      result = kmToFeets(num);
      output.innerHTML = `${result} Feet`;
    } else if (selectedVals == "kilo" && selectedCons == "In") {
      result = kmToInches(num);
      output.innerHTML = `${result} Inches`;
    } else if (selectedVals == "mil" && selectedCons == "Met") {
      result = MilesToMeter(num);
      output.innerHTML = `${result} Meter`;
    } else if (selectedVals == "mil" && selectedCons == "Cen") {
      result = MilesToCm(num);
      output.innerHTML = `${result} Centimeter`;
    } else if (selectedVals == "mil" && selectedCons == "Mm") {
      result = MilesToMilimeter(num);
      output.innerHTML = `${result} Milimeter`;
    } else if (selectedVals == "mil" && selectedCons == "Kilo") {
      result = MilesToKm(num);
      output.innerHTML = `${result} Miles`;
    } else if (selectedVals == "mil" && selectedCons == "Yd") {
      result = MilesToYards(num);
      output.innerHTML = `${result} Yards`;
    } else if (selectedVals == "mil" && selectedCons == "Ft") {
      result = MilesToFeets(num);
      output.innerHTML = `${result} Feet`;
    } else if (selectedVals == "mil" && selectedCons == "In") {
      result = MilesToInches(num);
      output.innerHTML = `${result} Inches`;
    } else if (selectedVals == "ft" && selectedCons == "Yd") {
      result = FeetToYards(num);
      output.innerHTML = `${result} Yards`;
    } else if (selectedVals == "ft" && selectedCons == "In") {
      result = FeetToInches(num);
      output.innerHTML = `${result} Inches`;
    } else if (selectedVals == "yd" && selectedCons == "Ft") {
      result = YardToFeet(num);
      output.innerHTML = `${result} Feet`;
    } else if (selectedVals == "yd" && selectedCons == "In") {
      result = YardToInches(num);
      output.innerHTML = `${result} Inches`;
    } else if (selectedVals == "in" && selectedCons == "Ft") {
      result = InchesToFeet(num);
      output.innerHTML = `${result} Feet`;
    } else if (selectedVals == "in" && selectedCons == "Yd") {
      result = InchesToYards(num);
      output.innerHTML = `${result} Yards`;
    } else if (selectedVals == "kilo" && selectedCons == "Kilo") {
      output.innerHTML = "Same type of conversion and value";
    } else if (selectedVals == "met" && selectedCons == "Met") {
      output.innerHTML = "Same type of conversion and value";
    } else if (selectedVals == "cen" && selectedCons == "Cen") {
      output.innerHTML = "Same type of conversion and value";
    } else if (selectedVals == "mm" && selectedCons == "Mm") {
      output.innerHTML = "Same type of conversion and value";
    } else if (selectedVals == "mil" && selectedCons == "Mil") {
      output.innerHTML = "Same type of conversion and value";
    } else if (selectedVals == "yd" && selectedCons == "Yd") {
      output.innerHTML = "Same type of conversion and value";
    } else if (selectedVals == "ft" && selectedCons == "Ft") {
      output.innerHTML = "Same type of conversion and value";
    } else if (selectedVals == "in" && selectedCons == "In") {
      output.innerHTML = "Same type of conversion and value";
    } else {
      output.innerHTML = "No conversion available";
    }
  };

