const dummyStates = [
  {
    id: "1",
    state: "Abia",
    status: "published",
    nameOfOfficer: "Abu Abel",
    publishedBy: "pgolle@live.com",
    submittedBy: "sartak@hotmail.com",
    submittedDate: "2021-07-03T11:10:22.876Z",
    publishedOn: "2021-06-20T01:08:20.328Z",
  },
  {
    id: "2",
    state: "Adamawa",
    status: "submitted",
    nameOfOfficer: "Oluwatife Fabunmi",
    publishedBy: "afifi@gmail.com",
    submittedBy: "bulletin@live.com",
    submittedDate: "2023-10-16T04:26:00.196Z",
    publishedOn: "2020-02-17T07:34:33.369Z",
  },
  {
    id: "3",
    state: "Akwa Ibom",
    status: "submitted",
    nameOfOfficer: "Njideka Nwankwo",
    publishedBy: "bulletin@live.com",
    submittedBy: "bahwi@me.com",
    submittedDate: "2022-11-06T18:49:27.770Z",
    publishedOn: "2021-10-07T05:02:35.013Z",
  },
  {
    id: "4",
    state: "Anambra",
    status: "published",
    nameOfOfficer: "Hamza Ali",
    publishedBy: "sartak@hotmail.com",
    submittedBy: "arebenti@aol.com",
    submittedDate: "2020-01-27T10:00:46.640Z",
    publishedOn: "2023-11-26T11:32:43.153Z",
  },
  {
    id: "5",
    state: "Bauchi",
    status: "not submitted",
    nameOfOfficer: "Abu Abel",
    publishedBy: "bahwi@me.com",
    submittedBy: "dkrishna@msn.com",
    submittedDate: "2021-11-14T07:50:26.373Z",
    publishedOn: "2020-08-03T23:29:13.906Z",
  },
  {
    id: "6",
    state: "Bayelsa",
    status: "submitted",
    nameOfOfficer: "Grace Etiebet",
    publishedBy: "sartak@hotmail.com",
    submittedBy: "pierce@mac.com",
    submittedDate: "2020-08-13T09:48:20.241Z",
    publishedOn: "2021-11-05T13:23:38.643Z",
  },
  {
    id: "7",
    state: "Benue",
    status: "submitted",
    nameOfOfficer: "Wari Tamuno",
    publishedBy: "spadkins@me.com",
    submittedBy: "ramollin@me.com",
    submittedDate: "2020-09-09T10:29:17.865Z",
    publishedOn: "2023-10-15T04:13:08.192Z",
  },
  {
    id: "8",
    state: "Borno",
    status: "submitted",
    nameOfOfficer: "Safiyat Omeiza",
    publishedBy: "afifi@gmail.com",
    submittedBy: "ramollin@me.com",
    submittedDate: "2020-03-16T09:21:57.031Z",
    publishedOn: "2023-10-20T10:58:16.151Z",
  },
  {
    id: "9",
    state: "Cross River",
    status: "not submitted",
    nameOfOfficer: "Oluwatife Fabunmi",
    publishedBy: "gavollink@optonline.net",
    submittedBy: "sartak@hotmail.com",
    submittedDate: "2021-03-07T10:04:12.920Z",
    publishedOn: "2023-10-18T15:47:36.021Z",
  },
  {
    id: "10",
    state: "Delta",
    status: "submitted",
    nameOfOfficer: "Jigam Salmat",
    publishedBy: "sartak@hotmail.com",
    submittedBy: "bahwi@me.com",
    submittedDate: "2023-10-15T00:31:08.589Z",
    publishedOn: "2020-09-05T19:47:50.364Z",
  },
  {
    id: "11",
    state: "Ebonyi",
    status: "submitted",
    nameOfOfficer: "Tubosun Ayinla",
    publishedBy: "bahwi@me.com",
    submittedBy: "pgolle@live.com",
    submittedDate: "2023-06-03T08:56:52.584Z",
    publishedOn: "2021-09-22T07:00:26.733Z",
  },
  {
    id: "12",
    state: "Edo",
    status: "published",
    nameOfOfficer: "Safiyat Omeiza",
    publishedBy: "arebenti@aol.com",
    submittedBy: "pierce@mac.com",
    submittedDate: "2023-04-25T05:39:33.089Z",
    publishedOn: "2023-08-30T19:23:32.801Z",
  },
  {
    id: "13",
    state: "Ekiti",
    status: "not submitted",
    nameOfOfficer: "Abu Abel",
    publishedBy: "bahwi@me.com",
    submittedBy: "dkrishna@msn.com",
    submittedDate: "2021-01-13T03:06:51.405Z",
    publishedOn: "2021-02-24T11:26:58.870Z",
  },
  {
    id: "14",
    state: "Enugu",
    status: "submitted",
    nameOfOfficer: "Wari Tamuno",
    publishedBy: "bulletin@live.com",
    submittedBy: "frederic@live.com",
    submittedDate: "2021-06-26T17:47:04.524Z",
    publishedOn: "2023-02-18T03:29:57.466Z",
  },
  {
    id: "15",
    state: "FCT - Abuja",
    status: "not submitted",
    nameOfOfficer: "Safiyat Omeiza",
    publishedBy: "pierce@mac.com",
    submittedBy: "afifi@gmail.com",
    submittedDate: "2023-10-06T08:45:56.144Z",
    publishedOn: "2021-01-17T14:17:32.841Z",
  },
  {
    id: "16",
    state: "Gombe",
    status: "not submitted",
    nameOfOfficer: "Latifa Musa",
    publishedBy: "pgolle@live.com",
    submittedBy: "gemmell@outlook.com",
    submittedDate: "2020-07-11T04:25:10.283Z",
    publishedOn: "2020-02-15T11:26:49.875Z",
  },
  {
    id: "17",
    state: "Imo",
    status: "not submitted",
    nameOfOfficer: "Magaji Aisha",
    publishedBy: "afifi@gmail.com",
    submittedBy: "bahwi@me.com",
    submittedDate: "2023-07-06T09:36:30.242Z",
    publishedOn: "2022-08-10T23:02:57.273Z",
  },
  {
    id: "18",
    state: "Jigawa",
    status: "not submitted",
    nameOfOfficer: "Oluwatife Fabunmi",
    publishedBy: "bahwi@me.com",
    submittedBy: "spadkins@me.com",
    submittedDate: "2021-11-03T15:14:53.742Z",
    publishedOn: "2021-04-20T21:21:20.795Z",
  },
  {
    id: "19",
    state: "Kaduna",
    status: "published",
    nameOfOfficer: "Oluwatife Fabunmi",
    publishedBy: "ramollin@me.com",
    submittedBy: "dkrishna@msn.com",
    submittedDate: "2023-10-23T06:41:10.205Z",
    publishedOn: "2020-07-28T11:12:56.613Z",
  },
  {
    id: "20",
    state: "Kano",
    status: "published",
    nameOfOfficer: "Wari Tamuno",
    publishedBy: "pgolle@live.com",
    submittedBy: "frederic@live.com",
    submittedDate: "2020-04-13T00:06:00.579Z",
    publishedOn: "2020-04-20T15:32:26.588Z",
  },
  {
    id: "21",
    state: "Katsina",
    status: "submitted",
    nameOfOfficer: "Paul Cast",
    publishedBy: "afifi@gmail.com",
    submittedBy: "bahwi@me.com",
    submittedDate: "2023-01-10T23:36:35.034Z",
    publishedOn: "2021-10-28T07:07:01.004Z",
  },
  {
    id: "22",
    state: "Kebbi",
    status: "submitted",
    nameOfOfficer: "Igwe Mathias",
    publishedBy: "gemmell@outlook.com",
    submittedBy: "ramollin@me.com",
    submittedDate: "2021-12-22T21:37:39.530Z",
    publishedOn: "2023-02-15T23:17:29.502Z",
  },
  {
    id: "23",
    state: "Kogi",
    status: "published",
    nameOfOfficer: "Wari Tamuno",
    publishedBy: "bahwi@me.com",
    submittedBy: "bulletin@live.com",
    submittedDate: "2022-11-06T22:41:11.620Z",
    publishedOn: "2022-07-30T21:06:37.339Z",
  },
  {
    id: "24",
    state: "Kwara",
    status: "submitted",
    nameOfOfficer: "Mohammed Mohammed",
    publishedBy: "pgolle@live.com",
    submittedBy: "ramollin@me.com",
    submittedDate: "2020-04-16T10:14:50.731Z",
    publishedOn: "2023-02-16T20:08:43.493Z",
  },
  {
    id: "25",
    state: "Lagos",
    status: "submitted",
    nameOfOfficer: "Igwe Mathias",
    publishedBy: "ramollin@me.com",
    submittedBy: "pgolle@live.com",
    submittedDate: "2023-05-01T20:36:26.101Z",
    publishedOn: "2020-03-26T00:54:54.998Z",
  },
  {
    id: "26",
    state: "Nasarawa",
    status: "published",
    nameOfOfficer: "Paul Cast",
    publishedBy: "sartak@hotmail.com",
    submittedBy: "spadkins@me.com",
    submittedDate: "2021-11-27T04:48:03.593Z",
    publishedOn: "2021-12-28T12:00:33.449Z",
  },
  {
    id: "27",
    state: "Niger",
    status: "published",
    nameOfOfficer: "Paul Cast",
    publishedBy: "spadkins@me.com",
    submittedBy: "bulletin@live.com",
    submittedDate: "2021-04-20T23:03:21.889Z",
    publishedOn: "2022-03-30T01:27:21.985Z",
  },
  {
    id: "28",
    state: "Ogun",
    status: "not submitted",
    nameOfOfficer: "Njideka Nwankwo",
    publishedBy: "spadkins@me.com",
    submittedBy: "pgolle@live.com",
    submittedDate: "2020-10-25T12:58:32.953Z",
    publishedOn: "2020-11-14T08:46:00.619Z",
  },
  {
    id: "29",
    state: "Ondo",
    status: "not submitted",
    nameOfOfficer: "Njideka Nwankwo",
    publishedBy: "gemmell@outlook.com",
    submittedBy: "pierce@mac.com",
    submittedDate: "2023-09-01T09:44:05.237Z",
    publishedOn: "2021-03-01T03:13:29.964Z",
  },
  {
    id: "30",
    state: "Osun",
    status: "submitted",
    nameOfOfficer: "Mohammed Mohammed",
    publishedBy: "bahwi@me.com",
    submittedBy: "dkrishna@msn.com",
    submittedDate: "2021-04-11T05:04:20.114Z",
    publishedOn: "2023-06-29T00:51:16.710Z",
  },
  {
    id: "31",
    state: "Oyo",
    status: "submitted",
    nameOfOfficer: "Paul Cast",
    publishedBy: "frederic@live.com",
    submittedBy: "pgolle@live.com",
    submittedDate: "2022-12-30T20:44:35.319Z",
    publishedOn: "2020-09-18T00:03:26.636Z",
  },
  {
    id: "32",
    state: "Plateau",
    status: "not submitted",
    nameOfOfficer: "Wari Tamuno",
    publishedBy: "jsbach@hotmail.com",
    submittedBy: "sartak@hotmail.com",
    submittedDate: "2020-05-31T19:23:19.864Z",
    publishedOn: "2021-12-16T11:25:55.692Z",
  },
  {
    id: "33",
    state: "Rivers",
    status: "not submitted",
    nameOfOfficer: "Wari Tamuno",
    publishedBy: "arebenti@aol.com",
    submittedBy: "jsbach@hotmail.com",
    submittedDate: "2020-04-05T17:10:38.861Z",
    publishedOn: "2022-07-17T07:17:29.876Z",
  },
  {
    id: "34",
    state: "Sokoto",
    status: "published",
    nameOfOfficer: "Jigam Salmat",
    publishedBy: "pgolle@live.com",
    submittedBy: "bahwi@me.com",
    submittedDate: "2023-02-02T04:41:11.403Z",
    publishedOn: "2023-07-12T09:57:37.082Z",
  },
  {
    id: "35",
    state: "Taraba",
    status: "published",
    nameOfOfficer: "Hamza Ali",
    publishedBy: "bulletin@live.com",
    submittedBy: "bahwi@me.com",
    submittedDate: "2021-11-09T22:14:00.878Z",
    publishedOn: "2022-12-18T20:20:08.835Z",
  },
  {
    id: "36",
    state: "Yobe",
    status: "submitted",
    nameOfOfficer: "Jigam Salmat",
    publishedBy: "dkrishna@msn.com",
    submittedBy: "jsbach@hotmail.com",
    submittedDate: "2022-01-11T05:09:34.434Z",
    publishedOn: "2022-10-16T13:42:37.925Z",
  },
  {
    id: "37",
    state: "Zamfara",
    status: "submitted",
    nameOfOfficer: "Latifa Musa",
    publishedBy: "ramollin@me.com",
    submittedBy: "ramollin@me.com",
    submittedDate: "2020-12-28T17:40:37.739Z",
    publishedOn: "2020-06-04T15:39:23.750Z",
  },
];

export default dummyStates;
