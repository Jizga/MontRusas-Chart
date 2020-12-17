fetch("https://coasters-api.herokuapp.com/country/Spain")
  .then((Response) => Response.json())
  .then((data) => printChart(data));

function printChart(coasters) {
  console.log("Estas son las Montañas Rusas:", coasters);

  let superman = coasters[9];
  let batman = coasters[8];
  let vertigo = coasters[7];
  let abismo = coasters[4];
  let shambala = coasters[2];
  let tarantula = coasters[3];

  
}
