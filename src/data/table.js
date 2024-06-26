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
      data: 'Not Available',
    },

    'Resource Development': {
      'data consumer': [
        ['T1586', 'https://attack.mitre.org/techniques/T1586/'],
        ['T1585', 'https://attack.mitre.org/techniques/T1585/'],
      ],
      data: 'Not Available',
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
      'data consumer': 'Not Available',
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
      data: 'Not Available',
    },

    'Privilege Escalation': {
      'data consumer': [
        ['T1134', 'https://attack.mitre.org/techniques/T1134/'],
        ['T1078', 'https://attack.mitre.org/techniques/T1078/'],
      ],
      data: 'Not Available',
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
        ['T1001', 'https://attack.mitre.org/techniques/T1001/'],
        ['T1616', 'https://attack.mitre.org/techniques/T1616/'],
      ],
      data: 'Not Available',
    },

    Exfilteration: { 'data consumer': 'Not Available', data: 'Not Available' },

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
      'data consumer': 'Not Available',
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
  table2: {
    Reconnaissance: {
      hardware: [
        ['T1595', 'https://attack.mitre.org/techniques/T1595/'],
        ['T1590', 'https://attack.mitre.org/techniques/T1590/'],
        ['T1592', 'https://attack.mitre.org/techniques/T1592/'],
      ],
      Transmission: [
        ['T1595', 'https://attack.mitre.org/techniques/T1595/'],
        ['T1592', 'https://attack.mitre.org/techniques/T1592/'],
        ['T1590', 'https://attack.mitre.org/techniques/T1590/'],
        ['T1596', 'https://attack.mitre.org/techniques/T1596/'],
      ],
      'OS/Firmware': [['T1592', 'https://attack.mitre.org/techniques/T1592/']],
      Application: [
        ['T1595', 'https://attack.mitre.org/techniques/T1595/'],
        ['T1584', 'https://attack.mitre.org/techniques/T1584/'],
        ['T1592', 'https://attack.mitre.org/techniques/T1592/'],
      ],
    },

    'Resource Development': {
      hardware: [
        ['T1650', 'https://attack.mitre.org/techniques/T1650/'],
        ['T1583', 'https://attack.mitre.org/techniques/T1583/'],
        ['T1584', 'https://attack.mitre.org/techniques/T1584/'],
        ['T1588', 'https://attack.mitre.org/techniques/T1588/'],
        ['T1587', 'https://attack.mitre.org/techniques/T1587/'],
      ],
      Transmission: [
        ['T1650', 'https://attack.mitre.org/techniques/T1650/'],
        ['T1583', 'https://attack.mitre.org/techniques/T1583/'],
        ['T1587', 'https://attack.mitre.org/techniques/T1587/'],
        ['T1584', 'https://attack.mitre.org/techniques/T1584/'],
        ['T1588', 'https://attack.mitre.org/techniques/T1588/'],
      ],
      'OS/Firmware': [
        ['T1587', 'https://attack.mitre.org/techniques/T1587/'],
        ['T1588', 'https://attack.mitre.org/techniques/T1588/'],
      ],
      Application: [
        ['T1583', 'https://attack.mitre.org/techniques/T1583/'],
        ['T1650', 'https://attack.mitre.org/techniques/T1650/'],
        ['T1608', 'https://attack.mitre.org/techniques/T1608/'],
        ['T1588', 'https://attack.mitre.org/techniques/T1588/'],
        ['T1584', 'https://attack.mitre.org/techniques/T1584/'],
        ['T1587', 'https://attack.mitre.org/techniques/T1587/'],
      ],
    },

    'Initial Access': {
      hardware: [
        ['T1566', 'https://attack.mitre.org/techniques/T1566/'],
        ['T1091', 'https://attack.mitre.org/techniques/T1091/'],
        ['T1195', 'https://attack.mitre.org/techniques/T1195/'],
        ['T0862', 'https://attack.mitre.org/techniques/T0862/'],
        ['T1474', 'https://attack.mitre.org/techniques/T1474/'],
        ['T0847', 'https://attack.mitre.org/techniques/T0847/'],
        ['T0864', 'https://attack.mitre.org/techniques/T0864/'],
        ['T0860', 'https://attack.mitre.org/techniques/T0860/'],
        ['T0848', 'https://attack.mitre.org/techniques/T0848/'],
        ['T1200', 'https://attack.mitre.org/techniques/T1200/'],
        ['T1461', 'https://attack.mitre.org/techniques/T1461/'],
        ['T1458', 'https://attack.mitre.org/techniques/T1458/'],
      ],
      Transmission: [
        ['T1200', 'https://attack.mitre.org/techniques/T1200/'],
        ['T1091', 'https://attack.mitre.org/techniques/T1091/'],
        ['T1199', 'https://attack.mitre.org/techniques/T1199/'],
        ['T0886', 'https://attack.mitre.org/techniques/T0886/'],
        ['T0819', 'https://attack.mitre.org/techniques/T0819/'],
        ['T0883', 'https://attack.mitre.org/techniques/T0883/'],
        ['T0848', 'https://attack.mitre.org/techniques/T0848/'],
        ['T0860', 'https://attack.mitre.org/techniques/T0860/'],
      ],
      'OS/Firmware': [
        ['T1091', 'https://attack.mitre.org/techniques/T1091/'],
        ['T1195', 'https://attack.mitre.org/techniques/T1195/'],
        ['T1133', 'https://attack.mitre.org/techniques/T1133/'],
        ['T1200', 'https://attack.mitre.org/techniques/T1200/'],
        ['T1566', 'https://attack.mitre.org/techniques/T1566/'],
        ['T1199', 'https://attack.mitre.org/techniques/T1199/'],
        ['T1078', 'https://attack.mitre.org/techniques/T1078/'],
        ['T1461', 'https://attack.mitre.org/techniques/T1461/'],
        ['T1458', 'https://attack.mitre.org/techniques/T1458/'],
        ['T0819', 'https://attack.mitre.org/techniques/T0819/'],
        ['T0886', 'https://attack.mitre.org/techniques/T0886/'],
        ['T1474', 'https://attack.mitre.org/techniques/T1474/'],
        ['T0862', 'https://attack.mitre.org/techniques/T0862/'],
      ],
      Application: [
        ['T1189', 'https://attack.mitre.org/techniques/T1189/'],
        ['T1190', 'https://attack.mitre.org/techniques/T1190/'],
        ['T1133', 'https://attack.mitre.org/techniques/T1133/'],
        ['T0822', 'https://attack.mitre.org/techniques/T0822/'],
        ['T1199', 'https://attack.mitre.org/techniques/T1199/'],
        ['T1566', 'https://attack.mitre.org/techniques/T1566/'],
        ['T1200', 'https://attack.mitre.org/techniques/T1200/'],
        ['T1195', 'https://attack.mitre.org/techniques/T1195/'],
        ['T0862', 'https://attack.mitre.org/techniques/T0862/'],
        ['T0817', 'https://attack.mitre.org/techniques/T0817/'],
        ['T1078', 'https://attack.mitre.org/techniques/T1078/'],
        ['T1456', 'https://attack.mitre.org/techniques/T1456/'],
        ['T1461', 'https://attack.mitre.org/techniques/T1461/'],
        ['T1458', 'https://attack.mitre.org/techniques/T1458/'],
        ['T1474', 'https://attack.mitre.org/techniques/T1474/'],
        ['T0865', 'https://attack.mitre.org/techniques/T0865/'],
        ['T0819', 'https://attack.mitre.org/techniques/T0819/'],
        ['T0864', 'https://attack.mitre.org/techniques/T0864/'],
        ['T0866', 'https://attack.mitre.org/techniques/T0866/'],
        ['T0822', 'https://attack.mitre.org/techniques/T0822/'],
        ['T0886', 'https://attack.mitre.org/techniques/T0886/'],
      ],
    },

    Execution: {
      hardware: [
        ['T1651', 'https://attack.mitre.org/techniques/T1651/'],
        ['T1106', 'https://attack.mitre.org/techniques/T1106/'],
        ['T1072', 'https://attack.mitre.org/techniques/T1072/'],
        ['T1603', 'https://attack.mitre.org/techniques/T1603/'],
        ['T0858', 'https://attack.mitre.org/techniques/T0858/'],
        ['T0807', 'https://attack.mitre.org/techniques/T0807/'],
        ['T0871', 'https://attack.mitre.org/techniques/T0871/'],
        ['T0834', 'https://attack.mitre.org/techniques/T0834/'],
        ['T0974', 'https://attack.mitre.org/techniques/T0974/'],
      ],
      Transmission: [
        ['T1059', 'https://attack.mitre.org/techniques/T1059/'],
        ['T1106', 'https://attack.mitre.org/techniques/T1106/'],
        ['T1072', 'https://attack.mitre.org/techniques/T1072/'],
        ['T1204', 'https://attack.mitre.org/techniques/T1204/'],
        ['T1623', 'https://attack.mitre.org/techniques/T1623/'],
        ['T0858', 'https://attack.mitre.org/techniques/T0858/'],
        ['T0807', 'https://attack.mitre.org/techniques/T0807/'],
      ],
      'OS/Firmware': [
        ['T1059', 'https://attack.mitre.org/techniques/T1059/'],
        ['T1559', 'https://attack.mitre.org/techniques/T1559/'],
        ['T0807', 'https://attack.mitre.org/techniques/T0807/'],
        ['T1106', 'https://attack.mitre.org/techniques/T1106/'],
        ['T1047', 'https://attack.mitre.org/techniques/T1047/'],
        ['T0858', 'https://attack.mitre.org/techniques/T0858/'],
        ['T1575', 'https://attack.mitre.org/techniques/T1575/'],
        ['T1603', 'https://attack.mitre.org/techniques/T1603/'],
        ['T1129', 'https://attack.mitre.org/techniques/T1129/'],
        ['T1072', 'https://attack.mitre.org/techniques/T1072/'],
        ['T1569', 'https://attack.mitre.org/techniques/T1569/'],
        ['T0807', 'https://attack.mitre.org/techniques/T0807/'],
        ['T0834', 'https://attack.mitre.org/techniques/T0834/'],
        ['T1623', 'https://attack.mitre.org/techniques/T1623/'],
        ['T1053', 'https://attack.mitre.org/techniques/T1053/'],
      ],
      Application: [
        ['T1651', 'https://attack.mitre.org/techniques/T1651/'],
        ['T1059', 'https://attack.mitre.org/techniques/T1059/'],
        ['T1072', 'https://attack.mitre.org/techniques/T1072/'],
        ['T1559', 'https://attack.mitre.org/techniques/T1559/'],
        ['T1106', 'https://attack.mitre.org/techniques/T1106/'],
        ['T1203', 'https://attack.mitre.org/techniques/T1203/'],
        ['T1129', 'https://attack.mitre.org/techniques/T1129/'],
        ['T1569', 'https://attack.mitre.org/techniques/T1569/'],
        ['T1610', 'https://attack.mitre.org/techniques/T1610/'],
        ['T1053', 'https://attack.mitre.org/techniques/T1053/'],
      ],
    },

    Persistence: {
      hardware: [
        ['T1098', 'https://attack.mitre.org/techniques/T1098/'],
        ['T1078', 'https://attack.mitre.org/techniques/T1078/'],
        ['T1541', 'https://attack.mitre.org/techniques/T1541/'],
        ['T0891', 'https://attack.mitre.org/techniques/T0891/'],
        ['T0889', 'https://attack.mitre.org/techniques/T0889/'],
      ],
      Transmission: [
        ['T1136', 'https://attack.mitre.org/techniques/T1136/'],
        ['T1556', 'https://attack.mitre.org/techniques/T1556/'],
        ['T1205', 'https://attack.mitre.org/techniques/T1205/'],
        ['T0889', 'https://attack.mitre.org/techniques/T0889/'],
        ['T1037', 'https://attack.mitre.org/techniques/T1037/'],
        ['T1078', 'https://attack.mitre.org/techniques/T1078/'],
        ['T1542', 'https://attack.mitre.org/techniques/T1542/'],
        ['T0891', 'https://attack.mitre.org/techniques/T0891/'],
      ],
      'OS/Firmware': [
        ['T1542', 'https://attack.mitre.org/techniques/T1542/'],
        ['T1546', 'https://attack.mitre.org/techniques/T1546/'],
        ['T1547', 'https://attack.mitre.org/techniques/T1547/'],
        ['T0857', 'https://attack.mitre.org/techniques/T0857/'],
        ['T1037', 'https://attack.mitre.org/techniques/T1037/'],
        ['T1543', 'https://attack.mitre.org/techniques/T1543/'],
        ['T1574', 'https://attack.mitre.org/techniques/T1574/'],
        ['T1205', 'https://attack.mitre.org/techniques/T1205/'],
        ['T1078', 'https://attack.mitre.org/techniques/T1078/'],
        ['T1398', 'https://attack.mitre.org/techniques/T1398/'],
        ['T1624', 'https://attack.mitre.org/techniques/T1624/'],
        ['T1625', 'https://attack.mitre.org/techniques/T1625/'],
        ['T1603', 'https://attack.mitre.org/techniques/T1603/'],
        ['T0891', 'https://attack.mitre.org/techniques/T0891/'],
        ['T0839', 'https://attack.mitre.org/techniques/T0839/'],
      ],
      Application: [
        ['T1547', 'https://attack.mitre.org/techniques/T1547/'],
        ['T1197', 'https://attack.mitre.org/techniques/T1197/'],
        ['T0873', 'https://attack.mitre.org/techniques/T0873/'],
        ['T1037', 'https://attack.mitre.org/techniques/T1037/'],
        ['T1577', 'https://attack.mitre.org/techniques/T1577/'],
        ['T1543', 'https://attack.mitre.org/techniques/T1543/'],
        ['T1176', 'https://attack.mitre.org/techniques/T1176/'],
        ['T1133', 'https://attack.mitre.org/techniques/T1133/'],
        ['T1137', 'https://attack.mitre.org/techniques/T1137/'],
        ['T1645', 'https://attack.mitre.org/techniques/T1645/'],
        ['T1603', ''],
        ['T1078', ''],
        ['T1546', ''],
        ['T1505', ''],
        ['T1053', ''],
        ['T1554', ''],
        ['T0891', ''],
        ['T1574', ''],
      ],
    },

    'Privilege Escalation': {
      hardware: [
        ['T1055', ''],
        ['T1626', ''],
        ['T1078', ''],
        ['T1404', ''],
        ['T1631', ''],
        ['T0890', ''],
        ['T0874', ''],
      ],
      Transmission: [
        ['T1037', ''],
        ['T1484', ''],
        ['T1055', ''],
        ['T1631', ''],
        ['T0890', ''],
      ],
      'OS/Firmware': [
        ['T1547', ''],
        ['T1078', ''],
        ['T1543', ''],
        ['T1484', ''],
        ['T1611', ''],
        ['T1548', ''],
        ['T0890', ''],
        ['T1546', ''],
        ['T1068', ''],
        ['T1631', ''],
        ['T1404', ''],
        ['T1574', ''],
        ['T1055', ''],
        ['T1053', ''],
        ['T1626', ''],
      ],
      Application: [
        ['T1548', ''],
        ['T1404', ''],
        ['T0874', ''],
        ['T1037', ''],
        ['T0890', ''],
        ['T1068', ''],
        ['T1484', ''],
        ['T1543', ''],
        ['T1574', ''],
        ['T1078', ''],
        ['T1626', ''],
        ['T1631', ''],
        ['T1546', ''],
        ['T1547', ''],
      ],
    },

    'Defense Evasion': {
      hardware: [
        ['T1070', ''],
        ['T0858', ''],
        ['T0851', ''],
        ['T1407', ''],
        ['T1631', ''],
        ['T1078', ''],
        ['T1055', ''],
        ['T1014', ''],
        ['T1562', ''],
        ['T1541', ''],
        ['T1575', ''],
      ],
      Transmission: [
        ['T1610', ''],
        ['T1484', ''],
        ['T1564', ''],
        ['T1599', ''],
        ['T1070', ''],
        ['T1407', ''],
        ['T1604', ''],
        ['T0858', ''],
        ['T0851', ''],
        ['T1562', ''],
        ['T1601', ''],
        ['T1631', ''],
        ['T1542', ''],
        ['T1556', ''],
        ['T1550', ''],
        ['T1014', ''],
        ['T1055', ''],
        ['T1205', ''],
        ['T1600', ''],
      ],
      'OS/Firmware': [
        ['T1548', ''],
        ['T1006', ''],
        ['T1121', ''],
        ['T1112', ''],
        ['T1484', ''],
        ['T0858', ''],
        ['T1216', ''],
        ['T1014', ''],
        ['T1222', ''],
        ['T1575', ''],
        ['T1631', ''],
        ['T1564', ''],
        ['T1647', ''],
        ['T1202', ''],
        ['T1497', ''],
        ['T0820', ''],
        ['T0851', ''],
        ['T1617', ''],
        ['T1574', ''],
        ['T1620', ''],
        ['T1221', ''],
        ['T1562', ''],
        ['T1127', ''],
        ['T1070', ''],
        ['T0849', ''],
        ['T1205', ''],
        ['T1218', ''],
        ['T1036', ''],
        ['T1629', ''],
        ['T1027', ''],
        ['T1550', ''],
        ['T1055', ''],
        ['T1078', ''],
        ['T1553', ''],
        ['T1632', ''],
      ],
      Application: [
        ['T1548', ''],
        ['T1197', ''],
        ['T0849', ''],
        ['T1622', ''],
        ['T1631', ''],
        ['T1121', ''],
        ['T1407', ''],
        ['T1484', ''],
        ['T1216', ''],
        ['T1564', ''],
        ['T1220', ''],
        ['T1574', ''],
        ['T1562', ''],
        ['T1620', ''],
        ['T1070', ''],
        ['T1027', ''],
        ['T1553', ''],
        ['T1014', ''],
        ['T1221', ''],
        ['T1127', ''],
        ['T1629', ''],
        ['T1550', ''],
        ['T0851', ''],
        ['T1218', ''],
        ['T1036', ''],
        ['T1617', ''],
        ['T1078', ''],
        ['T0820', ''],
      ],
    },

    'Credential Access': {
      hardware: [
        ['T1110', ''],
        ['T1056', ''],
        ['T1552', ''],
        ['T1040', ''],
        ['T1621', ''],
        ['T1551', ''],
      ],
      Transmission: [
        ['T1557', ''],
        ['T1556', ''],
        ['T1110', ''],
        ['T1111', ''],
        ['T1551', ''],
        ['T1552', ''],
        ['T1056', ''],
        ['T1634', ''],
        ['T1621', ''],
        ['T1040', ''],
      ],
      'OS/Firmware': [
        ['T1557', ''],
        ['T1110', ''],
        ['T1551', ''],
        ['T1212', ''],
        ['T1056', ''],
        ['T1621', ''],
        ['T1040', ''],
        ['T1003', ''],
        ['T1649', ''],
        ['T1558', ''],
        ['T1552', ''],
        ['T1634', ''],
        ['T1417', ''],
      ],
      Application: [
        ['T1110', ''],
        ['T1212', ''],
        ['T1634', ''],
        ['T1551', ''],
        ['T1111', ''],
        ['T1621', ''],
        ['T1414', ''],
        ['T1056', ''],
        ['T1539', ''],
        ['T1040', ''],
        ['T1417', ''],
        ['T1649', ''],
        ['T1003', ''],
        ['T1528', ''],
        ['T1517', ''],
        ['T1635', ''],
        ['T1552', ''],
      ],
    },

    Discovery: {
      hardware: [
        ['T1652', ''],
        ['T1040', ''],
        ['T1120', ''],
        ['T1426', ''],
        ['T1614', ''],
        ['T1082', ''],
        ['T0888', ''],
        ['T0887', ''],
      ],
      Transmission: [
        ['T1217', ''],
        ['T1083', ''],
        ['T1046', ''],
        ['T1135', ''],
        ['T1040', ''],
        ['T1201', ''],
        ['T0846', ''],
        ['T1057', ''],
        ['T1012', ''],
        ['T1018', ''],
        ['T1082', ''],
        ['T1614', ''],
        ['T0887', ''],
        ['T1016', ''],
        ['T1089', ''],
        ['T1124', ''],
        ['T1049', ''],
        ['T1426', ''],
        ['T1422', ''],
        ['T1421', ''],
        ['T0840', ''],
        ['T0842', ''],
        ['T0888', ''],
      ],
      'OS/Firmware': [
        ['T1010', ''],
        ['T1083', ''],
        ['T1135', ''],
        ['T1040', ''],
        ['T1201', ''],
        ['T1057', ''],
        ['T1012', ''],
        ['T1018', ''],
        ['T1082', ''],
        ['T1007', ''],
        ['T1124', ''],
        ['T1426', ''],
        ['T1497', ''],
        ['T1420', ''],
        ['T1424', ''],
        ['T0888', ''],
      ],
      Application: [
        ['T1010', ''],
        ['T1217', ''],
        ['T1622', ''],
        ['T0888', ''],
        ['T1652', ''],
        ['T1046', ''],
        ['T1040', ''],
        ['T1424', ''],
        ['T1057', ''],
        ['T1012', ''],
        ['T1423', ''],
        ['T1007', ''],
        ['T1082', ''],
        ['T0842', ''],
        ['T1418', ''],
        ['T1518', ''],
      ],
    },

    'Lateral Movement': {
      hardware: [
        ['T1210', ''],
        ['T1091', ''],
        ['T1072', ''],
        ['T0891', ''],
        ['T0812', ''],
      ],
      Transmission: [
        ['T1210', ''],
        ['T1091', ''],
        ['T1072', ''],
        ['T0886', ''],
        ['T1550', ''],
        ['T0891', ''],
        ['T0812', ''],
      ],
      'OS/Firmware': [
        ['T1210', ''],
        ['T1570', ''],
        ['T1563', ''],
        ['T1091', ''],
        ['T1072', ''],
        ['T1550', ''],
        ['T1080', ''],
        ['T1021', ''],
        ['T1428', ''],
        ['T1458', ''],
        ['T0891', ''],
        ['T0812', ''],
        ['T0867', ''],
        ['T0886', ''],
      ],
      Application: [
        ['T1210', ''],
        ['T1563', ''],
        ['T0812', ''],
        ['T1072', ''],
        ['T0866', ''],
        ['T1080', ''],
        ['T0843', ''],
        ['T1550', ''],
        ['T1428', ''],
        ['T0867', ''],
        ['T1458', ''],
        ['T0891', ''],
        ['T0886', ''],
      ],
    },

    Collection: {
      hardware: [
        ['T1056', ''],
        ['T1123', ''],
        ['T1119', ''],
        ['T1602', ''],
        ['T1213', ''],
        ['T1005', ''],
        ['T1025', ''],
        ['T1125', ''],
        ['T1533', ''],
        ['T1512', ''],
        ['T0820', ''],
        ['T0811', ''],
      ],
      Transmission: [
        ['T1557', ''],
        ['T0852', ''],
        ['T1119', ''],
        ['T1602', ''],
        ['T1039', ''],
        ['T1213', ''],
        ['T1005', ''],
        ['T1638', ''],
        ['T0830', ''],
        ['T0811', ''],
        ['T0893', ''],
        ['T0887', ''],
        ['T1056', ''],
      ],
      'OS/Firmware': [
        ['T1557', ''],
        ['T1056', ''],
        ['T1185', ''],
        ['T1602', ''],
        ['T1005', ''],
        ['T1213', ''],
        ['T1113', ''],
        ['T1533', ''],
        ['T1417', ''],
        ['T1513', ''],
        ['T0802', ''],
        ['T0811', ''],
        ['T0893', ''],
        ['T0868', ''],
        ['T0877', ''],
        ['T0801', ''],
        ['T0852', ''],
        ['T1119', ''],
      ],
      Application: [
        ['T1056', ''],
        ['T1123', ''],
        ['T0802', ''],
        ['T1119', ''],
        ['T1185', ''],
        ['T0845', ''],
        ['T0861', ''],
        ['T0877', ''],
        ['T1602', ''],
        ['T1213', ''],
        ['T1005', ''],
        ['T1113', ''],
        ['T1517', ''],
        ['T0801', ''],
        ['T1414', ''],
        ['T1533', ''],
        ['T1513', ''],
        ['T0893', ''],
        ['T1417', ''],
        ['T1409', ''],
        ['T0811', ''],
      ],
    },

    'Command and Control': {
      hardware: [
        ['T1132', ''],
        ['T1001', ''],
        ['T1568', ''],
        ['T1573', ''],
      ],
      Transmission: [
        ['T1205', ''],
        ['T0884', ''],
        ['T1509', ''],
        ['T1071', ''],
        ['T1008', ''],
        ['T1644', ''],
        ['T1132', ''],
        ['T1105', ''],
        ['T1572', ''],
        ['T1001', ''],
        ['T1104', ''],
        ['T1571', ''],
        ['T1568', ''],
        ['T1090', ''],
        ['T1095', ''],
        ['T1573', ''],
        ['T1521', ''],
        ['T1437', ''],
        ['T1481', ''],
        ['T0869', ''],
        ['T1102', ''],
        ['T0885', ''],
      ],
      'OS/Firmware': [
        ['T1205', ''],
        ['T1092', ''],
        ['T1132', ''],
        ['T1105', ''],
        ['T1001', ''],
        ['T1568', ''],
        ['T1573', ''],
        ['T1104', ''],
        ['T1095', ''],
        ['T1521', ''],
        ['T1219', ''],
      ],
      Application: [
        ['T1092', ''],
        ['T1132', ''],
        ['T1001', ''],
        ['T1637', ''],
        ['T1573', ''],
        ['T1105', ''],
        ['T1104', ''],
        ['T1095', ''],
        ['T1571', ''],
        ['T1568', ''],
        ['T1219', ''],
      ],
    },

    Exfilteration: {
      hardware: 'Not Available',
      Transmission: [
        ['T1020', ''],
        ['T1030', ''],
        ['T1041', ''],
        ['T1639', ''],
        ['T1537', ''],
        ['T1567', ''],
        ['T1048', ''],
        ['T1052', ''],
        ['T1011', ''],
        ['T1029', ''],
        ['T1646', ''],
      ],
      'OS/Firmware': 'Not Available',
      Application: [
        ['T1537', ''],
        ['T1052', ''],
      ],
    },

    'Inhibit Response': {
      hardware: [
        ['T0804', ''],
        ['T0805', ''],
        ['T0892', ''],
        ['T0814', ''],
        ['T0835', ''],
        ['T0838', ''],
      ],
      Transmission: [
        ['T0804', ''],
        ['T0805', ''],
        ['T0892', ''],
        ['T0851', ''],
        ['T0814', ''],
      ],
      'OS/Firmware': [
        ['T0878', ''],
        ['T0804', ''],
        ['T0892', ''],
        ['T0809', ''],
        ['T0800', ''],
        ['T0857', ''],
        ['T0814', ''],
        ['T0816', ''],
        ['T0835', ''],
        ['T0838', ''],
        ['T0851', ''],
        ['T0881', ''],
      ],
      Application: [
        ['T0878', ''],
        ['T0804', ''],
        ['T0892', ''],
        ['T0881', ''],
        ['T0814', ''],
        ['T0816', ''],
        ['T0838', ''],
        ['T0851', ''],
      ],
    },

    'Impair Control': {
      hardware: [
        ['T0806', ''],
        ['T0836', ''],
      ],
      Transmission: 'Not Available',
      'OS/Firmware': [
        ['T0839', ''],
        ['T0855', ''],
      ],
      Application: 'Not Available',
    },

    Impact: {
      hardware: [
        ['T1561', ''],
        ['T1531', ''],
        ['T1495', ''],
        ['T1496', ''],
        ['T1464', ''],
        ['T0917', ''],
        ['T0826', ''],
        ['T0827', ''],
        ['T0828', ''],
        ['T1485', ''],
        ['T0879', ''],
      ],
      Transmission: [
        ['T1531', ''],
        ['T1485', ''],
        ['T1486', ''],
        ['T1464', ''],
        ['T1565', ''],
        ['T1529', ''],
        ['T0826', ''],
        ['T1561', ''],
        ['T1489', ''],
        ['T0817', ''],
        ['T1499', ''],
        ['T1490', ''],
        ['T0879', ''],
        ['T1498', ''],
        ['T1496', ''],
        ['T0815', ''],
        ['T1641', ''],
      ],
      'OS/Firmware': [
        ['T1486', ''],
        ['T1565', ''],
        ['T0828', ''],
        ['T0837', ''],
        ['T1499', ''],
        ['T1490', ''],
        ['T0880', ''],
        ['T1495', ''],
        ['T1489', ''],
        ['T1529', ''],
        ['T1471', ''],
        ['T0826', ''],
        ['T0827', ''],
      ],
      Application: [
        ['T1485', ''],
        ['T1486', ''],
        ['T1496', ''],
        ['T1464', ''],
        ['T1565', ''],
        ['T1490', ''],
        ['T1582', ''],
        ['T1499', ''],
        ['T1643', ''],
        ['T1642', ''],
        ['T1498', ''],
        ['T1489', ''],
        ['T0828', ''],
        ['T0826', ''],
        ['T1471', ''],
      ],
    },
  },
  table3: {
    Reconnaissance: {
      Virtualization: [
        ['T1595', ''],
        ['T1592', ''],
        ['T1590', ''],
      ],
    },
    'Resource Development': {
      Virtualization: [
        ['T1583', ''],
        ['T1586', ''],
        ['T1584', ''],
        ['T1587', ''],
        ['T1585', ''],
        ['T1588', ''],
        ['T1608', ''],
        ['T1584', ''],
        ['T1587', ''],
        ['T1588', ''],
        ['T1608', ''],
      ],
    },
    'Initial Access': {
      Virtualization: [
        ['T1189', ''],
        ['T1199', ''],
        ['T1078', ''],
        ['T1190', ''],
        ['T1133', ''],
        ['T0822', ''],
      ],
    },
    Execution: {
      Virtualization: [
        ['T1651', ''],
        ['T1059', ''],
        ['T1648', ''],
        ['T1204', ''],
        ['T1609', ''],
        ['T1610', ''],
        ['T1053', ''],
      ],
    },
    Persistence: {
      Virtualization: [
        ['T1098', ''],
        ['T1136', ''],
        ['T1078', ''],
        ['T1133', ''],
        ['T1525', ''],
        ['T1053', ''],
      ],
    },
    'Privilege Escalation': {
      Virtualization: [
        ['T1078', ''],
        ['T1611', ''],
        ['T1068', ''],
        ['T1053', ''],
      ],
    },
    'Defense Evasion': {
      Virtualization: [
        ['T1562', ''],
        ['T1070', ''],
        ['T1578', ''],
        ['T1078', ''],
        ['T1497', ''],
        ['T1535', ''],
        ['T1612', ''],
        ['T1610', ''],
        ['T1550', ''],
      ],
    },
    'Credential Access': {
      Virtualization: [
        ['T1110', ''],
        ['T1551', ''],
        ['T1212', ''],
        ['T1606', ''],
        ['T1056', ''],
        ['T1621', ''],
        ['T1040', ''],
        ['T1528', ''],
        ['T1649', ''],
        ['T1539', ''],
        ['T1552', ''],
      ],
    },
    Discovery: {
      Virtualization: [
        ['T1087', ''],
        ['T1580', ''],
        ['T1538', ''],
        ['T1526', ''],
        ['T1619', ''],
        ['T1046', ''],
        ['T1040', ''],
        ['T1201', ''],
        ['T1069', ''],
        ['T1518', ''],
        ['T1082', ''],
        ['T1049', ''],
        ['T1124', ''],
        ['T1497', ''],
        ['T1613', ''],
      ],
    },
    'Lateral Movement': {
      Virtualization: [
        ['T1210', ''],
        ['T1563', ''],
        ['T1550', ''],
        ['T1021', ''],
      ],
    },
    Collection: {
      Virtualization: [
        ['T1056', ''],
        ['T1119', ''],
        ['T1530', ''],
        ['T1602', ''],
        ['T1213', ''],
        ['T1113', ''],
      ],
    },
    'Command and Control': {
      Virtualization: [
        ['T1132', ''],
        ['T1001', ''],
        ['T1573', ''],
        ['T1219', ''],
      ],
    },
    Exfilteration: {
      Virtualization: [['T1020', '']],
    },
    'Inhibit Response': { Virtualization: 'Not Available' },
    'Impair Control': { Virtualization: 'Not Available' },
    Impact: {
      Virtualization: [
        ['T1531', ''],
        ['T1485', ''],
        ['T1486', ''],
        ['T1565', ''],
        ['T1561', ''],
        ['T1489', ''],
        ['T1499', ''],
        ['T1490', ''],
        ['T1498', ''],
        ['T1496', ''],
      ],
    },
  },
};

export default tables;
