//Color por defecto de las letras de todos los charts

Chart.defaults.global.defaultFontColor = "white";

// Zona de la API

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

  speedChart(superman, batman, vertigo, abismo, shambala, tarantula);
}

function speedChart(superman, batman, vertigo, abismo, shambala, tarantula) {
  let data = {
    labels: [
      "Superman",
      "Batman",
      "Vértigo",
      "Abismo",
      "Shambala",
      "Tarántula",
    ],
    datasets: [
      {
        data: [
          superman.speed,
          batman.speed,
          vertigo.speed,
          abismo.speed,
          shambala.speed,
          tarantula.speed,
        ],
        label: "km/h",
        borderWidth: 1,
        borderColor: [
          "rgb(116, 72, 194, 1)",
          "rgb(33, 192, 215, 1)",
          "rg(217, 158, 43, 1)",
          "rgb(205, 58, 129, 1)",
          "rgb(156, 153, 204, 1)",
          "rgb(225, 78, 202, 1)",
        ],
        backgroundColor: [
          "rgb(116, 72, 194, .2)",
          "rgb(33, 192, 215, .2)",
          "rg(217, 158, 43, .2)",
          "rgb(205, 58, 129, .2)",
          "rgb(156, 153, 204, .2)",
          "rgb(225, 78, 202, .2)",
        ],
      },
    ],
  };

  new Chart("chart1", { type: "bar", data });
}
