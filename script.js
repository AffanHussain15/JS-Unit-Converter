const conversionrates = {
  kilometer: 1,
  meter: 0.001,
  miles: 0.000621371,
};

document.getElementById("btn").addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input").value);
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;

  if (!isNaN(input)) {
    const result = convert(input, value1, value2);
    document.getElementById("convertedvalue").textContent = result.toFixed(9);
  } else {
    alert("Please Enter a Value!");
  }
});

function convert(input, value1, value2) {
  const meter = input * conversionrates[value1];
  const values = meter / conversionrates[value2];
  return values;
};
