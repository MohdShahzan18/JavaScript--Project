let date = document.getElementById("Bdate");
date.max = new Date().toISOString().split("T")[0];
let result = document.querySelector("#result");

function calculateAge() {
  let Bdate = new Date(date.value);

  let d1 = Bdate.getDate();
  let m1 = Bdate.getMonth() + 1;
  let y1 = Bdate.getFullYear();

  let currDate = new Date();

  let d2 = currDate.getDate();
  let m2 = currDate.getMonth() + 1;
  let y2 = currDate.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;
  console.log(y3);

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  if (date.value === "") {
    result.innerHTML = "<p>Please choose date</p>";
  } else if (y3 === 0 && m3 === 0) {
    result.innerHTML = `<p>You are ${d3} days old.</p>`;
  } else if (y3 === 0) {
    result.innerHTML = `<p>You are ${m3} month , ${d3} days old.</p>`;
  } else if (y3 != 0) {
    result.innerHTML = `<p>You are ${y3} Year, ${m3} month , ${d3} days old.</p>`;
  }
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
