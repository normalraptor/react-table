import React, {useState} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { Table, Button, Modal } from 'antd';
import './App.css';
const { Column } = Table;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let chart = am4core.create("chartdiv", am4charts.XYChart); 
  
  
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.title.text="Date"
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text="Value"
  
  var series = chart.series.push(new am4charts.LineSeries());
  series.name = "Data Quality";
  series.dataFields.dateX = "date";
  series.dataFields.valueY= "value";
  series.strokeWidth=5;
  series.tooltipText= "Value: [bold]{valueY}[/]"
  series.bullets.push(new am4charts.CircleBullet());

  chart.cursor = new am4charts.XYCursor();

  chart.data = [
    {
      "date": "2020-07-23",
      "value": 0
    },
    {
      "date": "2020-07-24",
      "value": 1.76006525506293
    },
    {
      "date": "2020-07-25",
      "value": -0.0162454041543143
    },
    {
      "date": "2020-07-26",
      "value": 0.577367593130243
    },
    {
      "date": "2020-07-27",
      "value": 1.47644168457706
    },
    {
      "date": "2020-07-28",
      "value": 1.21697355334619
    },
    {
      "date": "2020-07-29",
      "value": 5.9548585695319
    },
    {
      "date": "2020-07-30",
      "value": 4.82763499365078
    },
    {
      "date": "2020-07-31",
      "value": 10.9738258963823
    },
    {
      "date": "2020-08-01",
      "value": 5.47366212250919
    },
    {
      "date": "2020-08-02",
      "value": 4.87584993832604
    },
    {
      "date": "2020-08-03",
      "value": 4.27806228718138
    },
    {
      "date": "2020-08-04",
      "value": 3.13432013253606
    },
    {
      "date": "2020-08-05",
      "value": 1.45889741970063
    },
    {
      "date": "2020-08-06",
      "value": 4.05522632370547
    },
    {
      "date": "2020-08-07",
      "value": 4.90861457762861
    },
    {
      "date": "2020-08-08",
      "value": 3.88888169982175
    },
    {
      "date": "2020-08-09",
      "value": 4.30251286020031
    },
    {
      "date": "2020-08-10",
      "value": 4.14002636401736
    },
    {
      "date": "2020-08-11",
      "value": -12.7458307413395
    },
    {
      "date": "2020-08-12",
      "value": -2.73661532457708
    },
    {
      "date": "2020-08-13",
      "value": 2.76797584697056
    },
    {
      "date": "2020-08-14",
      "value": 11.0171677934527
    },
    {
      "date": "2020-08-15",
      "value": 9.23985105310523
    },
    {
      "date": "2020-08-16",
      "value": 8.99767172749256
    },
    {
      "date": "2020-08-17",
      "value": 14.3673681458438
    },
    {
      "date": "2020-08-18",
      "value": 5.32518840701083
    },
    {
      "date": "2020-08-19",
      "value": 3.71347922598326
    },
    {
      "date": "2020-08-20",
      "value": 6.63325036703302
    },
    {
      "date": "2020-08-21",
      "value": 7.94361086691142
    }
  ];
  
  let dataqualityDummy = [
    {
      "_id": "6114aa1fd7a411ebd0acbac6",
      "date": "2021-05-12T09:32:11 -07:00",
      "group": "Voice",
      "source": "10.54.18.150",
      "pic": "Angelica",
      "dependents": "Tableau > Suropati",
      "kpi": "amet",
      "current_value": 2540.28,
      "threshold": 3911,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 6
    },
    {
      "_id": "6114aa1fde8071f8c772caa6",
      "date": "2021-07-11T11:49:04 -07:00",
      "group": "POI WFH-PPKM",
      "source": "10.54.18.150",
      "pic": "Oneil",
      "dependents": "Tableau > Suropati",
      "kpi": "adipisicing",
      "current_value": 2673.57,
      "threshold": 2912.13,
      "status": "anomaly",
      "remark": "on check",
      "aging": 12
    },
    {
      "_id": "6114aa1fc79fbe15586a2633",
      "date": "2021-05-19T10:43:09 -07:00",
      "group": "Payload",
      "source": "10.54.18.150",
      "pic": "Richard",
      "dependents": "Tableau > Suropati",
      "kpi": "do",
      "current_value": 1819.1,
      "threshold": 3823.27,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 10
    },
    {
      "_id": "6114aa1f8acc2f5a06e329ef",
      "date": "2021-07-09T04:14:22 -07:00",
      "group": "Database Service",
      "source": "10.54.18.150",
      "pic": "Thelma",
      "dependents": "Tableau > Suropati",
      "kpi": "velit",
      "current_value": 1539.25,
      "threshold": 2900.12,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 7
    },
    {
      "_id": "6114aa1f9236e6dfa2ba14a7",
      "date": "2021-08-08T06:34:46 -07:00",
      "group": "Supreme",
      "source": "10.54.18.150",
      "pic": "Chasity",
      "dependents": "Tableau > Suropati",
      "kpi": "sit",
      "current_value": 3914.74,
      "threshold": 3551.42,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 12
    },
    {
      "_id": "6114aa1f08e766523f01d953",
      "date": "2021-06-19T10:42:43 -07:00",
      "group": "Throughput",
      "source": "10.54.18.150",
      "pic": "Dyer",
      "dependents": "Tableau > Suropati",
      "kpi": "eiusmod",
      "current_value": 1252.35,
      "threshold": 2353.84,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 7
    },
    {
      "_id": "6114aa1f5b502c7071c67a97",
      "date": "2021-05-24T11:54:34 -07:00",
      "group": "Customer Base",
      "source": "10.54.18.150",
      "pic": "Guthrie",
      "dependents": "Tableau > Suropati",
      "kpi": "officia",
      "current_value": 1724.21,
      "threshold": 2941.59,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 4
    },
    {
      "_id": "6114aa1f5cc58929eaa4ee94",
      "date": "2021-06-24T08:47:01 -07:00",
      "group": "Performance",
      "source": "10.54.18.150",
      "pic": "Sanford",
      "dependents": "Tableau > Suropati",
      "kpi": "enim",
      "current_value": 2731.91,
      "threshold": 1071.04,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 6
    },
    {
      "_id": "6114aa1fcc94dd09851df7c7",
      "date": "2021-08-03T04:56:37 -07:00",
      "group": "Location Update",
      "source": "10.54.18.150",
      "pic": "Ida",
      "dependents": "Tableau > Suropati",
      "kpi": "veniam",
      "current_value": 3254.57,
      "threshold": 3059.26,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 8
    },
    {
      "_id": "6114aa1f4fd0365de70afcb6",
      "date": "2021-05-06T06:08:36 -07:00",
      "group": "Usage",
      "source": "10.54.18.150",
      "pic": "Lee",
      "dependents": "Tableau > Suropati",
      "kpi": "officia",
      "current_value": 3222.8,
      "threshold": 2969.43,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 7
    },
    {
      "_id": "6114aa1f46199efdc9fc6514",
      "date": "2021-06-30T08:06:08 -07:00",
      "group": "POI WFH-PPKM",
      "source": "10.54.18.150",
      "pic": "Fleming",
      "dependents": "Tableau > Suropati",
      "kpi": "culpa",
      "current_value": 1129.85,
      "threshold": 1398.14,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 10
    },
    {
      "_id": "6114aa1f10dedda1d2c0255f",
      "date": "2021-08-01T08:25:36 -07:00",
      "group": "Latency OpenSignal",
      "source": "10.54.18.150",
      "pic": "Johnson",
      "dependents": "Tableau > Suropati",
      "kpi": "veniam",
      "current_value": 3440.23,
      "threshold": 3665.02,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 17
    },
    {
      "_id": "6114aa1f71baef7fd8591e23",
      "date": "2021-06-26T06:35:41 -07:00",
      "group": "Usage",
      "source": "10.54.18.150",
      "pic": "Betsy",
      "dependents": "Tableau > Suropati",
      "kpi": "ut",
      "current_value": 2003.3,
      "threshold": 3339.75,
      "status": "anomaly",
      "remark": "on check",
      "aging": 14
    },
    {
      "_id": "6114aa1fd3cd74aa6a9c7f0e",
      "date": "2021-06-10T09:23:30 -07:00",
      "group": "Latency OpenSignal",
      "source": "10.54.18.150",
      "pic": "Beatrice",
      "dependents": "Tableau > Suropati",
      "kpi": "est",
      "current_value": 2835.57,
      "threshold": 2732.82,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 11
    },
    {
      "_id": "6114aa1fca90aa23d05cc121",
      "date": "2021-07-03T09:54:51 -07:00",
      "group": "Redman",
      "source": "10.54.18.150",
      "pic": "Bianca",
      "dependents": "Tableau > Suropati",
      "kpi": "mollit",
      "current_value": 1383.01,
      "threshold": 3414.55,
      "status": "anomaly",
      "remark": "on check",
      "aging": 13
    },
    {
      "_id": "6114aa1f0160bce0755c53e0",
      "date": "2021-06-15T09:50:27 -07:00",
      "group": "Chart Pattern Analysis",
      "source": "10.54.18.150",
      "pic": "Baxter",
      "dependents": "Tableau > Suropati",
      "kpi": "adipisicing",
      "current_value": 1374.49,
      "threshold": 2008.29,
      "status": "anomaly",
      "remark": "on check",
      "aging": 13
    },
    {
      "_id": "6114aa1f110e5a313cce91bd",
      "date": "2021-05-07T07:10:58 -07:00",
      "group": "Internet Service",
      "source": "10.54.18.150",
      "pic": "Tamra",
      "dependents": "Tableau > Suropati",
      "kpi": "id",
      "current_value": 2425.38,
      "threshold": 2487.03,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 15
    },
    {
      "_id": "6114aa1fbe4a2e4272d4d8fa",
      "date": "2021-07-24T11:02:42 -07:00",
      "group": "Payload",
      "source": "10.54.18.150",
      "pic": "Ivy",
      "dependents": "Tableau > Suropati",
      "kpi": "do",
      "current_value": 3676.92,
      "threshold": 1430.58,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 9
    },
    {
      "_id": "6114aa1fbe58d0caa546f4e5",
      "date": "2021-07-29T02:00:00 -07:00",
      "group": "POI WFH-PPKM",
      "source": "10.54.18.150",
      "pic": "Corrine",
      "dependents": "Tableau > Suropati",
      "kpi": "magna",
      "current_value": 3558.01,
      "threshold": 1664.59,
      "status": "anomaly",
      "remark": "on check",
      "aging": 20
    },
    {
      "_id": "6114aa1fde9eb821be8103cf",
      "date": "2021-07-20T08:57:16 -07:00",
      "group": "Congested Sector",
      "source": "10.54.18.150",
      "pic": "Alicia",
      "dependents": "Tableau > Suropati",
      "kpi": "est",
      "current_value": 1863.86,
      "threshold": 3783.97,
      "status": "anomaly",
      "remark": "on check",
      "aging": 15
    },
    {
      "_id": "6114aa1fdd6de314a1d0cc08",
      "date": "2021-06-06T08:02:08 -07:00",
      "group": "Packet Loss",
      "source": "10.54.18.150",
      "pic": "Patel",
      "dependents": "Tableau > Suropati",
      "kpi": "velit",
      "current_value": 3269.95,
      "threshold": 3920.19,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 7
    },
    {
      "_id": "6114aa1fae703e796180d4cc",
      "date": "2021-06-27T12:49:06 -07:00",
      "group": "Suropati Knowledge",
      "source": "10.54.18.150",
      "pic": "Gwen",
      "dependents": "Tableau > Suropati",
      "kpi": "aliquip",
      "current_value": 3493.6,
      "threshold": 3276.09,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 17
    },
    {
      "_id": "6114aa1f9e973b59c5e4d17b",
      "date": "2021-08-08T10:45:58 -07:00",
      "group": "Usage",
      "source": "10.54.18.150",
      "pic": "Chambers",
      "dependents": "Tableau > Suropati",
      "kpi": "deserunt",
      "current_value": 1214.37,
      "threshold": 2112.38,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 8
    },
    {
      "_id": "6114aa1fb83d5750d16d084d",
      "date": "2021-05-13T07:21:06 -07:00",
      "group": "Accessibility",
      "source": "10.54.18.150",
      "pic": "Lyons",
      "dependents": "Tableau > Suropati",
      "kpi": "non",
      "current_value": 3667.72,
      "threshold": 3746.44,
      "status": "anomaly",
      "remark": "on check",
      "aging": 18
    },
    {
      "_id": "6114aa1febb6e01d1e8ee0ca",
      "date": "2021-06-01T04:36:11 -07:00",
      "group": "Service Quality",
      "source": "10.54.18.150",
      "pic": "Hughes",
      "dependents": "Tableau > Suropati",
      "kpi": "tempor",
      "current_value": 3684.51,
      "threshold": 3947.66,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 20
    },
    {
      "_id": "6114aa1fc0f1eab0ebe3c10b",
      "date": "2021-07-20T10:30:04 -07:00",
      "group": "Core",
      "source": "10.54.18.150",
      "pic": "Patterson",
      "dependents": "Tableau > Suropati",
      "kpi": "minim",
      "current_value": 1089.45,
      "threshold": 1638.2,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 8
    },
    {
      "_id": "6114aa1f3e126082c835f21a",
      "date": "2021-05-05T01:18:54 -07:00",
      "group": "Daily Monitoring",
      "source": "10.54.18.150",
      "pic": "Talley",
      "dependents": "Tableau > Suropati",
      "kpi": "non",
      "current_value": 1714.44,
      "threshold": 2993.13,
      "status": "anomaly",
      "remark": "on check",
      "aging": 13
    },
    {
      "_id": "6114aa1fc83c6dbd378b5e4e",
      "date": "2021-08-07T11:08:55 -07:00",
      "group": "USSD",
      "source": "10.54.18.150",
      "pic": "Alta",
      "dependents": "Tableau > Suropati",
      "kpi": "nulla",
      "current_value": 2466.18,
      "threshold": 2606.83,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 18
    },
    {
      "_id": "6114aa1fbbafeea089daa710",
      "date": "2021-07-23T11:13:54 -07:00",
      "group": "iNgrid",
      "source": "10.54.18.150",
      "pic": "Valarie",
      "dependents": "Tableau > Suropati",
      "kpi": "id",
      "current_value": 2028.66,
      "threshold": 2359.75,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 6
    },
    {
      "_id": "6114aa1f030d79afa853ab15",
      "date": "2021-07-16T03:52:21 -07:00",
      "group": "Analytic Dashboard",
      "source": "10.54.18.150",
      "pic": "Parks",
      "dependents": "Tableau > Suropati",
      "kpi": "aliquip",
      "current_value": 2655.07,
      "threshold": 3944.67,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 13
    },
    {
      "_id": "6114aa1fb098aa3a529cc9a8",
      "date": "2021-07-27T02:06:48 -07:00",
      "group": "Latency",
      "source": "10.54.18.150",
      "pic": "Landry",
      "dependents": "Tableau > Suropati",
      "kpi": "eiusmod",
      "current_value": 3510.78,
      "threshold": 3549.31,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 18
    },
    {
      "_id": "6114aa1f2cd9d0eb7dc21350",
      "date": "2021-07-13T01:55:50 -07:00",
      "group": "KQI",
      "source": "10.54.18.150",
      "pic": "Debora",
      "dependents": "Tableau > Suropati",
      "kpi": "dolor",
      "current_value": 1621.74,
      "threshold": 3147.61,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 8
    },
    {
      "_id": "6114aa1f35031d244416b272",
      "date": "2021-05-11T08:46:21 -07:00",
      "group": "Chart Pattern Analysis",
      "source": "10.54.18.150",
      "pic": "Dillard",
      "dependents": "Tableau > Suropati",
      "kpi": "Lorem",
      "current_value": 2519.59,
      "threshold": 3109.64,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 4
    },
    {
      "_id": "6114aa1fcfa054314fb6c55a",
      "date": "2021-06-25T03:18:15 -07:00",
      "group": "MBJJ",
      "source": "10.54.18.150",
      "pic": "Mcguire",
      "dependents": "Tableau > Suropati",
      "kpi": "magna",
      "current_value": 1797.4,
      "threshold": 2894.64,
      "status": "anomaly",
      "remark": "on check",
      "aging": 17
    },
    {
      "_id": "6114aa1f53f2c8d68d0e014c",
      "date": "2021-05-30T11:40:07 -07:00",
      "group": "User & Sample",
      "source": "10.54.18.150",
      "pic": "Anita",
      "dependents": "Tableau > Suropati",
      "kpi": "dolor",
      "current_value": 3645.32,
      "threshold": 3193.97,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 4
    },
    {
      "_id": "6114aa1fb18df937a75da18b",
      "date": "2021-06-07T12:46:00 -07:00",
      "group": "Corporate",
      "source": "10.54.18.150",
      "pic": "Ann",
      "dependents": "Tableau > Suropati",
      "kpi": "dolor",
      "current_value": 1189.78,
      "threshold": 2165.4,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 19
    },
    {
      "_id": "6114aa1fcb8f1e45907f0296",
      "date": "2021-07-10T03:15:51 -07:00",
      "group": "Throughput OpenSignal",
      "source": "10.54.18.150",
      "pic": "Stefanie",
      "dependents": "Tableau > Suropati",
      "kpi": "dolore",
      "current_value": 3479.03,
      "threshold": 1815.81,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 15
    },
    {
      "_id": "6114aa1f16b82a4a8d666e21",
      "date": "2021-06-15T07:37:15 -07:00",
      "group": "Games",
      "source": "10.54.18.150",
      "pic": "English",
      "dependents": "Tableau > Suropati",
      "kpi": "pariatur",
      "current_value": 3955.56,
      "threshold": 1411.87,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 19
    },
    {
      "_id": "6114aa1fe5478cdf0d649df4",
      "date": "2021-05-06T07:22:28 -07:00",
      "group": "Communication Service",
      "source": "10.54.18.150",
      "pic": "Iris",
      "dependents": "Tableau > Suropati",
      "kpi": "duis",
      "current_value": 2470.38,
      "threshold": 2567.87,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 17
    },
    {
      "_id": "6114aa1f81027f997391b9de",
      "date": "2021-07-14T01:16:41 -07:00",
      "group": "SAU",
      "source": "10.54.18.150",
      "pic": "Curtis",
      "dependents": "Tableau > Suropati",
      "kpi": "nostrud",
      "current_value": 1488.08,
      "threshold": 2226.54,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 6
    },
    {
      "_id": "6114aa1f4bea9f2557674381",
      "date": "2021-07-06T07:40:08 -07:00",
      "group": "Throughput",
      "source": "10.54.18.150",
      "pic": "Marks",
      "dependents": "Tableau > Suropati",
      "kpi": "mollit",
      "current_value": 3576.92,
      "threshold": 2927.94,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 18
    },
    {
      "_id": "6114aa1f3e3b9d691179cda6",
      "date": "2021-07-06T05:27:01 -07:00",
      "group": "Usage",
      "source": "10.54.18.150",
      "pic": "Miriam",
      "dependents": "Tableau > Suropati",
      "kpi": "magna",
      "current_value": 3921.17,
      "threshold": 2689.48,
      "status": "anomaly",
      "remark": "on check",
      "aging": 13
    },
    {
      "_id": "6114aa1f0c514912eea10c1d",
      "date": "2021-05-20T09:34:38 -07:00",
      "group": "Jitter",
      "source": "10.54.18.150",
      "pic": "Marilyn",
      "dependents": "Tableau > Suropati",
      "kpi": "tempor",
      "current_value": 1434.81,
      "threshold": 1291.58,
      "status": "anomaly",
      "remark": "on check",
      "aging": 3
    },
    {
      "_id": "6114aa1f368daa0a688aada0",
      "date": "2021-07-17T02:40:33 -07:00",
      "group": "Chart Pattern Analysis",
      "source": "10.54.18.150",
      "pic": "Harvey",
      "dependents": "Tableau > Suropati",
      "kpi": "quis",
      "current_value": 2548.45,
      "threshold": 3838.54,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 18
    },
    {
      "_id": "6114aa1f5f316ac5e610becc",
      "date": "2021-07-08T04:06:14 -07:00",
      "group": "Communication Service",
      "source": "10.54.18.150",
      "pic": "Mcleod",
      "dependents": "Tableau > Suropati",
      "kpi": "do",
      "current_value": 1303.07,
      "threshold": 2593.79,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 13
    },
    {
      "_id": "6114aa1f4d08b791ab8cdb93",
      "date": "2021-07-14T11:07:24 -07:00",
      "group": "Package",
      "source": "10.54.18.150",
      "pic": "Hilary",
      "dependents": "Tableau > Suropati",
      "kpi": "non",
      "current_value": 1534.7,
      "threshold": 1465.45,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 13
    },
    {
      "_id": "6114aa1f4ac235f81f5f5275",
      "date": "2021-05-16T02:13:45 -07:00",
      "group": "Opensignal",
      "source": "10.54.18.150",
      "pic": "Melody",
      "dependents": "Tableau > Suropati",
      "kpi": "nulla",
      "current_value": 3121.35,
      "threshold": 1149.07,
      "status": "anomaly",
      "remark": "on check",
      "aging": 20
    },
    {
      "_id": "6114aa1fd2321abd9901907c",
      "date": "2021-05-08T06:55:09 -07:00",
      "group": "Availability",
      "source": "10.54.18.150",
      "pic": "Martina",
      "dependents": "Tableau > Suropati",
      "kpi": "ut",
      "current_value": 1009.63,
      "threshold": 2830.5,
      "status": "anomaly",
      "remark": "on check",
      "aging": 19
    },
    {
      "_id": "6114aa1fc89a6a0816f3f3ae",
      "date": "2021-07-12T03:03:15 -07:00",
      "group": "City",
      "source": "10.54.18.150",
      "pic": "Jimmie",
      "dependents": "Tableau > Suropati",
      "kpi": "dolor",
      "current_value": 3701.32,
      "threshold": 2086.62,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 17
    },
    {
      "_id": "6114aa1f339bc17828405a0b",
      "date": "2021-06-21T11:59:50 -07:00",
      "group": "VAS",
      "source": "10.54.18.150",
      "pic": "Vang",
      "dependents": "Tableau > Suropati",
      "kpi": "in",
      "current_value": 2973.64,
      "threshold": 2690.94,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 6
    },
    {
      "_id": "6114aa1f6db9ec6785b3e925",
      "date": "2021-06-06T01:28:34 -07:00",
      "group": "Subscriber",
      "source": "10.54.18.150",
      "pic": "Lena",
      "dependents": "Tableau > Suropati",
      "kpi": "consectetur",
      "current_value": 3040.92,
      "threshold": 3536.99,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 17
    },
    {
      "_id": "6114aa1feeb5f72c0a0da01b",
      "date": "2021-05-06T11:09:27 -07:00",
      "group": "KQI",
      "source": "10.54.18.150",
      "pic": "Maritza",
      "dependents": "Tableau > Suropati",
      "kpi": "deserunt",
      "current_value": 2098.78,
      "threshold": 2950.59,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 7
    },
    {
      "_id": "6114aa1fa93596466917813e",
      "date": "2021-06-24T04:06:25 -07:00",
      "group": "Weekly",
      "source": "10.54.18.150",
      "pic": "Hicks",
      "dependents": "Tableau > Suropati",
      "kpi": "consequat",
      "current_value": 3769.29,
      "threshold": 2360.21,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 10
    },
    {
      "_id": "6114aa1f86610f8cb76f6bba",
      "date": "2021-08-08T07:39:31 -07:00",
      "group": "Daily Trend Population",
      "source": "10.54.18.150",
      "pic": "Sargent",
      "dependents": "Tableau > Suropati",
      "kpi": "tempor",
      "current_value": 3663.9,
      "threshold": 1428.98,
      "status": "anomaly",
      "remark": "on check",
      "aging": 8
    },
    {
      "_id": "6114aa1f0d8a401abe9d69c0",
      "date": "2021-05-02T10:10:33 -07:00",
      "group": "City",
      "source": "10.54.18.150",
      "pic": "Kane",
      "dependents": "Tableau > Suropati",
      "kpi": "fugiat",
      "current_value": 3748.44,
      "threshold": 3924.98,
      "status": "anomaly",
      "remark": "on check",
      "aging": 10
    },
    {
      "_id": "6114aa1f5cf53ef46fe216f1",
      "date": "2021-07-06T02:21:50 -07:00",
      "group": "Communication Service",
      "source": "10.54.18.150",
      "pic": "Tanisha",
      "dependents": "Tableau > Suropati",
      "kpi": "laborum",
      "current_value": 3213.2,
      "threshold": 3484.97,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 14
    },
    {
      "_id": "6114aa1f3378a5802f30f764",
      "date": "2021-07-23T07:02:09 -07:00",
      "group": "POI WFH-PPKM",
      "source": "10.54.18.150",
      "pic": "Castaneda",
      "dependents": "Tableau > Suropati",
      "kpi": "fugiat",
      "current_value": 1385.26,
      "threshold": 1650.14,
      "status": "anomaly",
      "remark": "on check",
      "aging": 18
    },
    {
      "_id": "6114aa1fe78ba978b3bf47c7",
      "date": "2021-06-08T05:34:20 -07:00",
      "group": "Facebook Share vs Device Share",
      "source": "10.54.18.150",
      "pic": "Snyder",
      "dependents": "Tableau > Suropati",
      "kpi": "et",
      "current_value": 1813.57,
      "threshold": 2435.97,
      "status": "anomaly",
      "remark": "on check",
      "aging": 12
    },
    {
      "_id": "6114aa1f18e45195825addcf",
      "date": "2021-07-08T11:44:32 -07:00",
      "group": "Throughput",
      "source": "10.54.18.150",
      "pic": "Simmons",
      "dependents": "Tableau > Suropati",
      "kpi": "fugiat",
      "current_value": 1486.92,
      "threshold": 2547.77,
      "status": "anomaly",
      "remark": "on check",
      "aging": 4
    },
    {
      "_id": "6114aa1f44fc63beb3fd2535",
      "date": "2021-08-02T08:47:07 -07:00",
      "group": "Percentile Latency",
      "source": "10.54.18.150",
      "pic": "Josefa",
      "dependents": "Tableau > Suropati",
      "kpi": "deserunt",
      "current_value": 3465.21,
      "threshold": 1657.84,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 4
    },
    {
      "_id": "6114aa1f9504159834634cad",
      "date": "2021-05-23T09:04:40 -07:00",
      "group": "Supreme",
      "source": "10.54.18.150",
      "pic": "Alexander",
      "dependents": "Tableau > Suropati",
      "kpi": "tempor",
      "current_value": 1612.32,
      "threshold": 1868.41,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 5
    },
    {
      "_id": "6114aa1f8e9f7ace3dabc653",
      "date": "2021-05-31T05:33:20 -07:00",
      "group": "Analytic Dashboard",
      "source": "10.54.18.150",
      "pic": "Burch",
      "dependents": "Tableau > Suropati",
      "kpi": "reprehenderit",
      "current_value": 2201.89,
      "threshold": 2319.17,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 11
    },
    {
      "_id": "6114aa1fc2bde40341cfa920",
      "date": "2021-06-13T01:32:51 -07:00",
      "group": "Throughput",
      "source": "10.54.18.150",
      "pic": "Anne",
      "dependents": "Tableau > Suropati",
      "kpi": "aliqua",
      "current_value": 2977.16,
      "threshold": 1297.51,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 8
    },
    {
      "_id": "6114aa1f839d5390943a4db6",
      "date": "2021-07-05T02:58:40 -07:00",
      "group": "Communication Service",
      "source": "10.54.18.150",
      "pic": "Everett",
      "dependents": "Tableau > Suropati",
      "kpi": "aute",
      "current_value": 1128.15,
      "threshold": 1266.57,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 20
    },
    {
      "_id": "6114aa1f22e0e8ae1786fdc4",
      "date": "2021-08-09T10:52:26 -07:00",
      "group": "Opensignal_KPI",
      "source": "10.54.18.150",
      "pic": "Patrick",
      "dependents": "Tableau > Suropati",
      "kpi": "tempor",
      "current_value": 1371.88,
      "threshold": 1518.99,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 17
    },
    {
      "_id": "6114aa1f113b32fea91018ce",
      "date": "2021-05-11T10:02:08 -07:00",
      "group": "TNPS",
      "source": "10.54.18.150",
      "pic": "Vivian",
      "dependents": "Tableau > Suropati",
      "kpi": "minim",
      "current_value": 3974.65,
      "threshold": 3158.04,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 13
    },
    {
      "_id": "6114aa1ff4b16c153fdc219f",
      "date": "2021-06-24T12:50:26 -07:00",
      "group": "Throughput & Payload",
      "source": "10.54.18.150",
      "pic": "Rosemary",
      "dependents": "Tableau > Suropati",
      "kpi": "reprehenderit",
      "current_value": 2649.59,
      "threshold": 2605.87,
      "status": "anomaly",
      "remark": "on check",
      "aging": 12
    },
    {
      "_id": "6114aa1fc57cdc062a106dc1",
      "date": "2021-06-09T08:07:15 -07:00",
      "group": "POI & Mudik Route",
      "source": "10.54.18.150",
      "pic": "Mccoy",
      "dependents": "Tableau > Suropati",
      "kpi": "proident",
      "current_value": 1140.75,
      "threshold": 1400.75,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 6
    },
    {
      "_id": "6114aa1f8b652ca8d59ac908",
      "date": "2021-05-05T04:34:41 -07:00",
      "group": "Performance",
      "source": "10.54.18.150",
      "pic": "Roberta",
      "dependents": "Tableau > Suropati",
      "kpi": "exercitation",
      "current_value": 1491.6,
      "threshold": 3713.44,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 12
    },
    {
      "_id": "6114aa1f7ebdf7a70b20c1e1",
      "date": "2021-05-20T01:34:44 -07:00",
      "group": "Throughput & Payload",
      "source": "10.54.18.150",
      "pic": "Nichole",
      "dependents": "Tableau > Suropati",
      "kpi": "anim",
      "current_value": 3415.1,
      "threshold": 2633.85,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 19
    },
    {
      "_id": "6114aa1f0f58f59da2cb7e48",
      "date": "2021-07-11T07:48:34 -07:00",
      "group": "Corporate",
      "source": "10.54.18.150",
      "pic": "Howard",
      "dependents": "Tableau > Suropati",
      "kpi": "minim",
      "current_value": 3466.66,
      "threshold": 3594.21,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 6
    },
    {
      "_id": "6114aa1fe1cf55f230d4e097",
      "date": "2021-05-08T12:43:54 -07:00",
      "group": "SDN",
      "source": "10.54.18.150",
      "pic": "Lillian",
      "dependents": "Tableau > Suropati",
      "kpi": "ut",
      "current_value": 2996.46,
      "threshold": 2801.74,
      "status": "anomaly",
      "remark": "on check",
      "aging": 19
    },
    {
      "_id": "6114aa1fbf032c50a90ff5be",
      "date": "2021-07-29T02:08:59 -07:00",
      "group": "Performance",
      "source": "10.54.18.150",
      "pic": "Beulah",
      "dependents": "Tableau > Suropati",
      "kpi": "non",
      "current_value": 1592.49,
      "threshold": 2070.37,
      "status": "anomaly",
      "remark": "on check",
      "aging": 18
    },
    {
      "_id": "6114aa1f4c81acbea7ddbb73",
      "date": "2021-07-11T01:15:30 -07:00",
      "group": "RGB Data",
      "source": "10.54.18.150",
      "pic": "Sadie",
      "dependents": "Tableau > Suropati",
      "kpi": "ex",
      "current_value": 1899.49,
      "threshold": 2235.8,
      "status": "anomaly",
      "remark": "on check",
      "aging": 15
    },
    {
      "_id": "6114aa1f5de253491aeed6d6",
      "date": "2021-05-19T04:03:11 -07:00",
      "group": "Device Capability",
      "source": "10.54.18.150",
      "pic": "Herminia",
      "dependents": "Tableau > Suropati",
      "kpi": "eu",
      "current_value": 2130.95,
      "threshold": 2211.37,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 12
    },
    {
      "_id": "6114aa1fe42edbfa5bdc1038",
      "date": "2021-08-02T09:20:29 -07:00",
      "group": "Opensignal_KPI",
      "source": "10.54.18.150",
      "pic": "Helena",
      "dependents": "Tableau > Suropati",
      "kpi": "ullamco",
      "current_value": 2543.88,
      "threshold": 3601.05,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 13
    },
    {
      "_id": "6114aa1f0724c921d1dd93e6",
      "date": "2021-08-10T12:15:37 -07:00",
      "group": "Game Max",
      "source": "10.54.18.150",
      "pic": "Angelina",
      "dependents": "Tableau > Suropati",
      "kpi": "commodo",
      "current_value": 2287.9,
      "threshold": 1832.65,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 7
    },
    {
      "_id": "6114aa1f2e4db115e971ae88",
      "date": "2021-06-14T07:36:01 -07:00",
      "group": "Corporate",
      "source": "10.54.18.150",
      "pic": "Ballard",
      "dependents": "Tableau > Suropati",
      "kpi": "ullamco",
      "current_value": 3147.45,
      "threshold": 1081.76,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 19
    },
    {
      "_id": "6114aa1f63ed344ef780456f",
      "date": "2021-06-19T02:47:01 -07:00",
      "group": "Daily Trend Population",
      "source": "10.54.18.150",
      "pic": "Walters",
      "dependents": "Tableau > Suropati",
      "kpi": "quis",
      "current_value": 3820.2,
      "threshold": 3367.84,
      "status": "anomaly",
      "remark": "on check",
      "aging": 13
    },
    {
      "_id": "6114aa1fd33b125853f37edb",
      "date": "2021-06-26T11:53:47 -07:00",
      "group": "Ookla",
      "source": "10.54.18.150",
      "pic": "Hatfield",
      "dependents": "Tableau > Suropati",
      "kpi": "ut",
      "current_value": 2993.83,
      "threshold": 1926.73,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 5
    },
    {
      "_id": "6114aa1fdfe6df6ee7151e27",
      "date": "2021-07-11T07:15:11 -07:00",
      "group": "iNgrid",
      "source": "10.54.18.150",
      "pic": "Maryann",
      "dependents": "Tableau > Suropati",
      "kpi": "amet",
      "current_value": 1348.23,
      "threshold": 2495.54,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 13
    },
    {
      "_id": "6114aa1fb1474b5df1c16b68",
      "date": "2021-06-01T12:20:52 -07:00",
      "group": "IGC Performance Monitoring",
      "source": "10.54.18.150",
      "pic": "Wagner",
      "dependents": "Tableau > Suropati",
      "kpi": "proident",
      "current_value": 3869.21,
      "threshold": 3416.73,
      "status": "anomaly",
      "remark": "on check",
      "aging": 10
    },
    {
      "_id": "6114aa1f89789f273c1a6919",
      "date": "2021-06-13T10:16:33 -07:00",
      "group": "Analytic Dashboard",
      "source": "10.54.18.150",
      "pic": "Sue",
      "dependents": "Tableau > Suropati",
      "kpi": "duis",
      "current_value": 2973.17,
      "threshold": 2454.22,
      "status": "anomaly",
      "remark": "on check",
      "aging": 7
    },
    {
      "_id": "6114aa1fde62682a21bfd451",
      "date": "2021-08-11T11:56:16 -07:00",
      "group": "Opensignal",
      "source": "10.54.18.150",
      "pic": "Freida",
      "dependents": "Tableau > Suropati",
      "kpi": "aliquip",
      "current_value": 3065.07,
      "threshold": 3944.26,
      "status": "anomaly",
      "remark": "on check",
      "aging": 19
    },
    {
      "_id": "6114aa1f697aed9a26709bad",
      "date": "2021-08-01T02:28:36 -07:00",
      "group": "Remedy Ticket Network",
      "source": "10.54.18.150",
      "pic": "Brooks",
      "dependents": "Tableau > Suropati",
      "kpi": "do",
      "current_value": 1642.73,
      "threshold": 1831.12,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 17
    },
    {
      "_id": "6114aa1f84b056ff9a5fcab7",
      "date": "2021-05-22T10:40:30 -07:00",
      "group": "Traffic",
      "source": "10.54.18.150",
      "pic": "Viola",
      "dependents": "Tableau > Suropati",
      "kpi": "minim",
      "current_value": 2057.75,
      "threshold": 1896.09,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 14
    },
    {
      "_id": "6114aa1f558dc0155ab6fbca",
      "date": "2021-07-21T05:28:14 -07:00",
      "group": "TNPS",
      "source": "10.54.18.150",
      "pic": "Katharine",
      "dependents": "Tableau > Suropati",
      "kpi": "veniam",
      "current_value": 3037.26,
      "threshold": 1781,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 12
    },
    {
      "_id": "6114aa1fb847ac9c60c1db65",
      "date": "2021-06-11T06:44:03 -07:00",
      "group": "IuB (3G)",
      "source": "10.54.18.150",
      "pic": "Wade",
      "dependents": "Tableau > Suropati",
      "kpi": "non",
      "current_value": 3471.11,
      "threshold": 2517.84,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 17
    },
    {
      "_id": "6114aa1f55ca3c58a52a967c",
      "date": "2021-07-31T10:36:48 -07:00",
      "group": "Jitter",
      "source": "10.54.18.150",
      "pic": "Tisha",
      "dependents": "Tableau > Suropati",
      "kpi": "in",
      "current_value": 2897.39,
      "threshold": 3336.88,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 6
    },
    {
      "_id": "6114aa1fa0ebad045bb267c4",
      "date": "2021-07-19T05:59:29 -07:00",
      "group": "Orbit",
      "source": "10.54.18.150",
      "pic": "Eleanor",
      "dependents": "Tableau > Suropati",
      "kpi": "nulla",
      "current_value": 3536.64,
      "threshold": 1939.82,
      "status": "anomaly",
      "remark": "on check",
      "aging": 14
    },
    {
      "_id": "6114aa1f8cf24b3885d39e9c",
      "date": "2021-06-27T09:16:13 -07:00",
      "group": "Daily Trend Population",
      "source": "10.54.18.150",
      "pic": "Rosetta",
      "dependents": "Tableau > Suropati",
      "kpi": "consectetur",
      "current_value": 1904.3,
      "threshold": 2054.01,
      "status": "anomaly",
      "remark": "on check",
      "aging": 13
    },
    {
      "_id": "6114aa1fa74b8b5211db2f15",
      "date": "2021-05-09T07:22:52 -07:00",
      "group": "Throughput",
      "source": "10.54.18.150",
      "pic": "Cleo",
      "dependents": "Tableau > Suropati",
      "kpi": "sint",
      "current_value": 3575.87,
      "threshold": 3400.98,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 6
    },
    {
      "_id": "6114aa1fc67278c65c5241ba",
      "date": "2021-06-27T02:02:17 -07:00",
      "group": "Flash Report",
      "source": "10.54.18.150",
      "pic": "Cantrell",
      "dependents": "Tableau > Suropati",
      "kpi": "aliquip",
      "current_value": 1418.05,
      "threshold": 3011.36,
      "status": "anomaly",
      "remark": "on check",
      "aging": 14
    },
    {
      "_id": "6114aa1fde94b9e726a50bad",
      "date": "2021-07-06T10:36:24 -07:00",
      "group": "Dual Axis",
      "source": "10.54.18.150",
      "pic": "Orr",
      "dependents": "Tableau > Suropati",
      "kpi": "nostrud",
      "current_value": 2171.75,
      "threshold": 2226.93,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 5
    },
    {
      "_id": "6114aa1f5cd2a1cdc7a92691",
      "date": "2021-07-31T09:14:06 -07:00",
      "group": "CCIS",
      "source": "10.54.18.150",
      "pic": "Dorothea",
      "dependents": "Tableau > Suropati",
      "kpi": "eiusmod",
      "current_value": 3715.24,
      "threshold": 2106.3,
      "status": "anomaly",
      "remark": "on check",
      "aging": 18
    },
    {
      "_id": "6114aa1f4e8fa08766601f0a",
      "date": "2021-07-22T08:19:56 -07:00",
      "group": "Usage",
      "source": "10.54.18.150",
      "pic": "Amalia",
      "dependents": "Tableau > Suropati",
      "kpi": "et",
      "current_value": 1286.78,
      "threshold": 3510.07,
      "status": "anomaly",
      "remark": "resolved with notes",
      "aging": 12
    },
    {
      "_id": "6114aa1f7b74087d3abebaf6",
      "date": "2021-05-04T03:36:18 -07:00",
      "group": "RGB Data",
      "source": "10.54.18.150",
      "pic": "Ashley",
      "dependents": "Tableau > Suropati",
      "kpi": "pariatur",
      "current_value": 2282.94,
      "threshold": 3477.48,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 4
    },
    {
      "_id": "6114aa1fb56220432b78c0c4",
      "date": "2021-06-07T04:54:52 -07:00",
      "group": "Games Improvement Monitoring",
      "source": "10.54.18.150",
      "pic": "Burnett",
      "dependents": "Tableau > Suropati",
      "kpi": "culpa",
      "current_value": 3843.58,
      "threshold": 2559.24,
      "status": "anomaly",
      "remark": "on check",
      "aging": 16
    },
    {
      "_id": "6114aa1f38f7d659c2ae38ad",
      "date": "2021-08-02T04:05:32 -07:00",
      "group": "TNPS",
      "source": "10.54.18.150",
      "pic": "Madeleine",
      "dependents": "Tableau > Suropati",
      "kpi": "non",
      "current_value": 1623.92,
      "threshold": 3588.19,
      "status": "anomaly",
      "remark": "unresolved",
      "aging": 5
    },
    {
      "_id": "6114aa1fa9d7e97a47e98a9c",
      "date": "2021-06-15T12:11:47 -07:00",
      "group": "Authentication",
      "source": "10.54.18.150",
      "pic": "Mcfarland",
      "dependents": "Tableau > Suropati",
      "kpi": "est",
      "current_value": 2415.8,
      "threshold": 2337.68,
      "status": "anomaly",
      "remark": "resolved",
      "aging": 19
    }
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


    return (
      <>
      <div className="App">
        <Table dataSource={dataqualityDummy}>
          <Column title="Date" dataIndex="date"/>
          <Column title="Group" dataIndex="group" filters={[
            {
              text:'Voice',
              value:'Voice',
            },
            {
              text:'Payload',
              value:'Payload',
            },
            {
              text:'Throughput',
              value:'Throughput',
            },
            {
              text:'Jitter',
              value:'Jitter',
            },
            {
              text:'Packet',
              value:'Packet',
            },
          ]} onFilter={(value, record) => record.group.indexOf(value) === 0}/>
          <Column title="Source" dataIndex="source"/>
          <Column title="PIC" dataIndex="pic"/>
          <Column title="Dependents" dataIndex="dependents"/>
          <Column title="KPI" dataIndex="kpi"/>
          <Column title="Current Value" dataIndex="current_value" defaultSortOrder="descend" sorter={(a,b) => a.current_value - b.current_value}/>
          <Column title="Threshold" dataIndex="threshold"/>
          <Column title="Status" dataIndex="status"/>
          <Column title="Remark" dataIndex="remark"/>
          <Column title="Aging" dataIndex="aging"/>
          <Column title="Actions" key="action" render={(text, record) =>(
            <Button type="link" onClick={showModal}>Last 30 Days</Button>
          )}/>
        </Table>
        <Modal title="Last 30 days" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1200}>
            <div id="chartdiv" >
            </div>
        </Modal>
      </div>
      </>
      );
    }
    
    export default App;