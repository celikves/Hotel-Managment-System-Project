// This is for able to see chart using Apex Chart

 
var options = {
  series: [
    {
      name: "Number of rooms  booked",
      data: [15,2,22,34,11,6,19],
    },
    {
      name: " Total number of  rooms ",
      data: [40, 40, 40, 40, 40, 40, 40],
    },
    
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yaxis: {
    title: {
      text: " (Rooms)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return  + val + " Rooms";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();

var options = {
  series: [
    {
      name: "Number of rooms booked",
      data: [12, 19, 27, 6],
    },
    {
      name: " Total number of  rooms ",
      data: [40, 40, 40, 40],
    },
    
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Week1","Week2", "Week3", "Week4"],
  },
  yaxis: {
    title: {
      text: " (Rooms)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return  + val + " Rooms";
      },
    },
  },
};
var chart = new ApexCharts(document.querySelector("#apex2"), options);
chart.render();

var options = {
  series: [
    {
      name: "Number of rooms booked",
      data: [24, 15, 37, 16 , 7 , 22, 30, 30, 40,12,22,9],
    },
    {
      name: " Total number of  rooms ",
      data: [40, 40, 40, 40, 40, 40, 40, 40 , 40, 40, 40, 40],
    },
    
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"],
  },
  yaxis: {
    title: {
      text: " (Rooms)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return  + val + " Rooms";
      },
    },
  },
};
var chart = new ApexCharts(document.querySelector("#apex3"), options);
chart.render();



