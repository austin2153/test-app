import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClustersService {

  public cloudzones = [{
      "CloudZone": "usljv04xp2vcawir1002.fiserv.one / usljv04-w2-dc",
      "Description": "Production Lewisville",
      "Metric CPU Ratio Max": "2.5",
      "Metric Memory Free %": "0",
      "Metric Disk Free %": "30",
      "Clusters": [{
          "Name": "usljv04ep2genclu0003",
          "HostCount": "32",
          "Memory Total (GiB)": "49107.95",
          "Memory Free (GiB)": "41873.70",
          "Memory Free %": "85.27",
          "CPU (Virtual)": 1523,
          "CPU (Physical)": 1152,
          "CPU Ratio (vCPU:pCPU)": "1.3",
          "Datastore": "usljv04ep2genclu0003-vsan",
          "Disk Total (TiB)": "1341.36",
          "Disk Free (TiB)": "1276.44",
          "Disk Free %": "95.16",
          "Metric CPU Ratio Max": "",
          "Metric Memory Free %": "",
          "Metric Disk Free %": "",
          "Provisioning Status": "enabled"
        },
        {
          "Name": "usljv04ep2genclu0014",
          "HostCount": "32",
          "Memory Total (GiB)": "49107.95",
          "Memory Free (GiB)": "41778.97",
          "Memory Free %": "85.08",
          "CPU (Virtual)": 1827,
          "CPU (Physical)": 1152,
          "CPU Ratio (vCPU:pCPU)": "1.6",
          "Datastore": "usljv04ep2genclu0014-vsan",
          "Disk Total (TiB)": "1341.36",
          "Disk Free (TiB)": "1274.89",
          "Disk Free %": "95.04",
          "Metric CPU Ratio Max": "",
          "Metric Memory Free %": "",
          "Metric Disk Free %": "",
          "Provisioning Status": "enabled"
        }
      ]
    },
    {
      "CloudZone": "uschd01xl2vcawir1001.fiserv.one / uschd01n-wld1-vdc",
      "Description": "Nonproduction Chandler",
      "Metric CPU Ratio Max": "7",
      "Metric Memory Free %": "-20",
      "Metric Disk Free %": "30",
      "Clusters": [{
        "Name": "uschd01en2genclu0001",
        "HostCount": "32",
        "Memory Total (GiB)": "49107.95",
        "Memory Free (GiB)": "28033.13",
        "Memory Free %": "57.08",
        "CPU (Virtual)": 4085,
        "CPU (Physical)": 1152,
        "CPU Ratio (vCPU:pCPU)": "3.5",
        "Datastore": "uschd01en2genclu0001-vsan",
        "Disk Total (TiB)": "1341.37",
        "Disk Free (TiB)": "1065.56",
        "Disk Free %": "79.44",
        "Metric CPU Ratio Max": "",
        "Metric Memory Free %": "",
        "Metric Disk Free %": "",
        "Provisioning Status": "enabled"
      }]
    }
  ]

 getCloudzones() {
  return this.cloudzones;
}

  constructor() { }
}
