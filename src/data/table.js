const tables = {
  table1: {
    Reconnaissance: {
      'data consumer': [
        ['T1589', 'https://attack.mitre.org/techniques/T1589/'],
        ['T1594', 'https://attack.mitre.org/techniques/T1594/'],
        ['T1598', 'https://attack.mitre.org/techniques/T1598/'],
        ['T1590', 'https://attack.mitre.org/techniques/T1590/'],
        ['T1591', 'https://attack.mitre.org/techniques/T1591/'],
        ['T1597', 'https://attack.mitre.org/techniques/T1597/'],
        ['T1593', 'https://attack.mitre.org/techniques/T1593/'],
        ['T1596', 'https://attack.mitre.org/techniques/T1596/'],
      ],
      data: 'Not available',
    },

    'Resource Development': {
      'data consumer': [
        ['T1586', 'https://attack.mitre.org/techniques/T1586/'],
        ['T1585', 'https://attack.mitre.org/techniques/T1585/'],
      ],
      data: 'Not available',
    },

    'Initial Access': {
      'data consumer': [
        ['T1566', 'https://attack.mitre.org/techniques/T1566/'],
        ['T1078', 'https://attack.mitre.org/techniques/T1078/'],
        ['T0865', 'https://attack.mitre.org/techniques/T0865/'],
      ],
      data: [['T1190', 'https://attack.mitre.org/techniques/T1190/']],
    },

    Execution: {
      'data consumer': 'Not available',
      data: [
        ['T1204', 'https://attack.mitre.org/techniques/T1204/'],
        ['T0863', 'https://attack.mitre.org/techniques/T0863/'],
      ],
    },

    Persistence: {
      'data consumer': [
        ['T1098', 'https://attack.mitre.org/techniques/T1098/'],
        ['T1556', 'https://attack.mitre.org/techniques/T1556/'],
        ['T0859', 'https://attack.mitre.org/techniques/T0859/'],
        ['T1078', 'https://attack.mitre.org/techniques/T1078/'],
      ],
      data: 'Not available',
    },

    'Privilege Escalation': {
      'data consumer': [
        ['T1134', 'https://attack.mitre.org/techniques/T1134/'],
        ['T1078', 'https://attack.mitre.org/techniques/T1078/'],
      ],
      data: 'Not available',
    },

    'Defense Evasion': {
      'data consumer': [
        ['T1134', 'https://attack.mitre.org/techniques/T1134/'],
        ['T1564', 'https://attack.mitre.org/techniques/T1564/'],
        ['T1070', 'https://attack.mitre.org/techniques/T1070/'],
        ['T1036', 'https://attack.mitre.org/techniques/T1036/'],
        ['T1556', 'https://attack.mitre.org/techniques/T1556/'],
        ['T1516', 'https://attack.mitre.org/techniques/T1516/'],
        ['T1628', 'https://attack.mitre.org/techniques/T1628/'],
        ['T1629', 'https://attack.mitre.org/techniques/T1629/'],
        ['T1078', 'https://attack.mitre.org/techniques/T1078/'],
        ['T1550', 'https://attack.mitre.org/techniques/T1550/'],
      ],
      data: [
        ['T1006', 'https://attack.mitre.org/techniques/T1006/'],
        ['T1222', 'https://attack.mitre.org/techniques/T1222/'],
        ['T1564', 'https://attack.mitre.org/techniques/T1564/'],
        ['T1070', 'https://attack.mitre.org/techniques/T1070/'],
        ['T1036', 'https://attack.mitre.org/techniques/T1036/'],
        ['T1630', 'https://attack.mitre.org/techniques/T1630/'],
        ['T1027', 'https://attack.mitre.org/techniques/T1027/'],
        ['T1406', 'https://attack.mitre.org/techniques/T1406/'],
        ['T0856', 'https://attack.mitre.org/techniques/T0856/'],
      ],
    },

    'Credential Access': {
      'data consumer': [
        ['T1557', 'https://attack.mitre.org/techniques/T1557/'],
        ['T1110', 'https://attack.mitre.org/techniques/T1110/'],
        ['T1551', 'https://attack.mitre.org/techniques/T1551/'],
        ['T1212', 'https://attack.mitre.org/techniques/T1212/'],
        ['T1187', 'https://attack.mitre.org/techniques/T1187/'],
        ['T1556', 'https://attack.mitre.org/techniques/T1556/'],
        ['T1056', 'https://attack.mitre.org/techniques/T1056/'],
        ['T1111', 'https://attack.mitre.org/techniques/T1111/'],
        ['T1621', 'https://attack.mitre.org/techniques/T1621/'],
        ['T1040', 'https://attack.mitre.org/techniques/T1040/'],
        ['T1003', 'https://attack.mitre.org/techniques/T1003/'],
        ['T1552', 'https://attack.mitre.org/techniques/T1552/'],
        ['T1517', 'https://attack.mitre.org/techniques/T1517/'],
        ['T1414', 'https://attack.mitre.org/techniques/T1414/'],
        ['T1634', 'https://attack.mitre.org/techniques/T1634/'],
        ['T1417', 'https://attack.mitre.org/techniques/T1417/'],
      ],
      data: [
        ['T1552', 'https://attack.mitre.org/techniques/T1552/'],
        ['T1414', 'https://attack.mitre.org/techniques/T1414/'],
      ],
    },

    Discovery: {
      'data consumer': [
        ['T1087', 'https://attack.mitre.org/techniques/T1087/'],
        ['T1217', 'https://attack.mitre.org/techniques/T1217/'],
        ['T1040', 'https://attack.mitre.org/techniques/T1040/'],
        ['T1201', 'https://attack.mitre.org/techniques/T1201/'],
        ['T1069', 'https://attack.mitre.org/techniques/T1069/'],
        ['T1614', 'https://attack.mitre.org/techniques/T1614/'],
        ['T1033', 'https://attack.mitre.org/techniques/T1033/'],
        ['T1430', 'https://attack.mitre.org/techniques/T1430/'],
        ['T0842', 'https://attack.mitre.org/techniques/T0842/'],
      ],
      data: [
        ['T1217', 'https://attack.mitre.org/techniques/T1217/'],
        ['T1619', 'https://attack.mitre.org/techniques/T1619/'],
        ['T1083', 'https://attack.mitre.org/techniques/T1083/'],
        ['T1120', 'https://attack.mitre.org/techniques/T1120/'],
        ['T1420', 'https://attack.mitre.org/techniques/T1420/'],
      ],
    },

    'Lateral Movement': {
      'data consumer': [
        ['T1534', 'https://attack.mitre.org/techniques/T1534/'],
        ['T1550', 'https://attack.mitre.org/techniques/T1550/'],
        ['T0859', 'https://attack.mitre.org/techniques/T0859/'],
      ],
      data: [
        ['T1210', 'https://attack.mitre.org/techniques/T1210/'],
        ['T1080', 'https://attack.mitre.org/techniques/T1080/'],
        ['T0867', 'https://attack.mitre.org/techniques/T0867/'],
      ],
    },

    Collection: {
      'data consumer': [
        ['T1557', 'https://attack.mitre.org/techniques/T1557/'],
        ['T1056', 'https://attack.mitre.org/techniques/T1056/'],
        ['T1119', 'https://attack.mitre.org/techniques/T1119/'],
        ['T1185', 'https://attack.mitre.org/techniques/T1185/'],
        ['T1114', 'https://attack.mitre.org/techniques/T1114/'],
        ['T1113', 'https://attack.mitre.org/techniques/T1113/'],
        ['T1517', 'https://attack.mitre.org/techniques/T1517/'],
        ['T1429', 'https://attack.mitre.org/techniques/T1429/'],
        ['T1616', 'https://attack.mitre.org/techniques/T1616/'],
        ['T1414', 'https://attack.mitre.org/techniques/T1414/'],
        ['T1417', 'https://attack.mitre.org/techniques/T1417/'],
        ['T1430', 'https://attack.mitre.org/techniques/T1430/'],
        ['T1636', 'https://attack.mitre.org/techniques/T1636/'],
        ['T1513', 'https://attack.mitre.org/techniques/T1513/'],
        ['T0811', 'https://attack.mitre.org/techniques/T0811/'],
      ],
      data: [
        ['T1560', 'https://attack.mitre.org/techniques/T1560/'],
        ['T1119', 'https://attack.mitre.org/techniques/T1119/'],
        ['T1115', 'https://attack.mitre.org/techniques/T1115/'],
        ['T1005', 'https://attack.mitre.org/techniques/T1005/'],
        ['T1025', 'https://attack.mitre.org/techniques/T1025/'],
        ['T1602', 'https://attack.mitre.org/techniques/T1602/'],
        ['T1213', 'https://attack.mitre.org/techniques/T1213/'],
        ['T1039', 'https://attack.mitre.org/techniques/T1039/'],
        ['T1530', 'https://attack.mitre.org/techniques/T1530/'],
        ['T1074', 'https://attack.mitre.org/techniques/T1074/'],
        ['T1532', 'https://attack.mitre.org/techniques/T1532/'],
        ['T1414', 'https://attack.mitre.org/techniques/T1414/'],
        ['T1533', 'https://attack.mitre.org/techniques/T1533/'],
        ['T1409', 'https://attack.mitre.org/techniques/T1409/'],
        ['T0802', 'https://attack.mitre.org/techniques/T0802/'],
        ['T0811', 'https://attack.mitre.org/techniques/T0811/'],
        ['T0893', 'https://attack.mitre.org/techniques/T0893/'],
      ],
    },

    'Command and Control': {
      'data consumer': [
        ['T1001', ''],
        ['T1616', ''],
      ],
      data: 'Not available',
    },

    Exfilteration: { 'data consumer': 'Not available', data: 'Not available' },

    'Inhibit Response': {
      'data consumer': [['T0892', 'https://attack.mitre.org/techniques/T0892/']],
      data: [
        ['T0804', 'https://attack.mitre.org/techniques/T0804/'],
        ['T0809', 'https://attack.mitre.org/techniques/T0809/'],
        ['T0838', 'https://attack.mitre.org/techniques/T0838/'],
        ['T0881', 'https://attack.mitre.org/techniques/T0881/'],
      ],
    },

    'Impair Control': {
      'data consumer': 'Not available',
      data: [['T0856', 'https://attack.mitre.org/techniques/T0856/']],
    },

    Impact: {
      'data consumer': [
        ['T1531', 'https://attack.mitre.org/techniques/T1531/'],
        ['T1486', 'https://attack.mitre.org/techniques/T1486/'],
        ['T1565', 'https://attack.mitre.org/techniques/T1565/'],
        ['T1491', 'https://attack.mitre.org/techniques/T1491/'],
        ['T1640', 'https://attack.mitre.org/techniques/T1640/'],
        ['T1616', 'https://attack.mitre.org/techniques/T1616/'],
        ['T1471', 'https://attack.mitre.org/techniques/T1471/'],
        ['T1643', 'https://attack.mitre.org/techniques/T1643/'],
        ['T1516', 'https://attack.mitre.org/techniques/T1516/'],
        ['T1582', 'https://attack.mitre.org/techniques/T1582/'],
      ],
      data: [
        ['T1561', 'https://attack.mitre.org/techniques/T1561/'],
        ['T1490', 'https://attack.mitre.org/techniques/T1490/'],
        ['T1489', 'https://attack.mitre.org/techniques/T1489/'],
        ['T1485', 'https://attack.mitre.org/techniques/T1485/'],
        ['T1486', 'https://attack.mitre.org/techniques/T1486/'],
        ['T1565', 'https://attack.mitre.org/techniques/T1565/'],
        ['T1471', 'https://attack.mitre.org/techniques/T1471/'],
        ['T1641', 'https://attack.mitre.org/techniques/T1641/'],
        ['T1582', 'https://attack.mitre.org/techniques/T1582/'],
        ['T0826', 'https://attack.mitre.org/techniques/T0826/'],
        ['T0832', 'https://attack.mitre.org/techniques/T0832/'],
        ['T0882', 'https://attack.mitre.org/techniques/T0882/'],
      ],
    },
  },
  table2: {},
  table3: {},
};

export default tables;
