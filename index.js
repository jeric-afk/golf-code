
score = (score) => {
  let par = document.getElementById('par').value;
  let stroke = document.getElementById('stroke').value;



  stroke === 1 ? alert("Golf Score: Hole-in-one") : console.log()
  stroke <= (par -2) ? alert("Golf Score: Eagle"): console.log()
  stroke === (par -1)  ? alert("Golf Score: Birdie") : console.log()
  stroke === par ? alert ("Golf Score: Par"): console.log()
  stroke === (par +1)  ? alert("Golf Score: Bogey") : console.log()
  stroke === (par +2)  ? alert("Golf Score: Double Bogey") : console.log()
  stroke >= (par +3)  ? alert("Golf Score: Go Home!") : console.log()

}
