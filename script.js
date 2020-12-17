//Color por defecto de las letras de todos los charts

Chart.defaults.global.defaultFontColor = "white";

// Zona de la API

fetch("https://coasters-api.herokuapp.com/country/Spain")
  .then((Response) => Response.json())
  .then((data) => printChart(data));

//-----

function printChart(coasters) {
  console.log("Estas son las Montañas Rusas:", coasters);

  let superman = coasters[9];
  let batman = coasters[8];
  let vertigo = coasters[7];
  let abismo = coasters[4];
  let shambala = coasters[2];
  let tarantula = coasters[3];

  speedChart(superman, batman, vertigo, abismo, shambala, tarantula);
  lengthChart(superman, batman, vertigo, abismo, shambala, tarantula);
  heightChart(superman, batman, vertigo, abismo, shambala, tarantula);
  heightSpeedChart(superman, batman, vertigo, abismo, shambala, tarantula);
}

const borderColor = [
  "rgba(116, 72, 194, 1)",
  "rgba(33, 192, 215, 1)",
  "rgba(217, 158, 43, 1)",
  "rgba(205, 58, 129, 1)",
  "rgba(156, 153, 204, 1)",
  "rgba(225, 78, 202, 1)",
];

const backgroundColor = [
  "rgba(116, 72, 194, .2)",
  "rgba(33, 192, 215, .2)",
  "rgba(217, 158, 43, .2)",
  "rgba(205, 58, 129, .2)",
  "rgba(156, 153, 204, .2)",
  "rgba(225, 78, 202, .2)",
];

const coastersNames = [
  "Superman",
  "Batman",
  "Vértigo",
  "Abismo",
  "Shambala",
  "Tarántula",
];

function speedChart(superman, batman, vertigo, abismo, shambala, tarantula) {
  let data = {
    labels: coastersNames,
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
        borderColor,
        backgroundColor,
      },
    ],
  };

  new Chart("chart1", { type: "bar", data });
}

function lengthChart(superman, batman, vertigo, abismo, shambala, tarantula) {
  let data = {
    labels: coastersNames,
    datasets: [
      {
        data: [
          superman.length,
          batman.length,
          vertigo.length,
          abismo.length,
          shambala.length,
          tarantula.length,
        ],
        label: "metros",
        borderWidth: 1,
        borderColor,
        backgroundColor,
      },
    ],
  };

  let options = {
    legend: {
      position: "left",
    },
  };

  new Chart("chart2", { type: "doughnut", data, options });
}

function heightChart(superman, batman, vertigo, abismo, shambala, tarantula) {
  let data = {
    labels: coastersNames,
    datasets: [
      {
        data: [
          superman.height,
          batman.height,
          vertigo.height,
          abismo.height,
          shambala.height,
          tarantula.height,
        ],
        label: "metros",
        borderWidth: 1,
        borderColor,
        backgroundColor,
      },
    ],
  };

  let options = {
    legend: {
      display: false,
    },
    scale: {
      gridLines: {
        color: "rgba(255,255,255,.1)",
      },
      ticks: {
        display: false,
      },
    },
  };

  new Chart("chart3", { type: "radar", data, options });
}

// Dos charts en uno

function heightSpeedChart(
  superman,
  batman,
  vertigo,
  abismo,
  shambala,
  tarantula
) {
  let data = {
    labels: coastersNames,
    datasets: [
      {
        data: [
          superman.height,
          batman.height,
          vertigo.height,
          abismo.height,
          shambala.height,
          tarantula.height,
        ],
        label: "metros",
        borderWidth: 2,
        borderColor: "rgba(200, 55, 415, 1)",
        backgroundColor: "rgba(200, 55, 415, .2)",
        type: "line",
      },
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
        borderColor,
        backgroundColor,
      },
    ],
  };

  let options = {
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
  };

  new Chart("chart4", { type: "bar", data, options });
}
