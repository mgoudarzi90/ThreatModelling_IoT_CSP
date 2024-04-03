const tables = {
  table1: {
    id: 1,
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
        ['T1087', ''],
        ['T1217', ''],
        ['T1040', ''],
        ['T1201', ''],
        ['T1069', ''],
      ],
      data: [],
    },
    'Lateral Movement': { 'data consumer': [], data: [] },
    Collection: { 'data consumer': [], data: [] },
    'Command and Control': { 'data consumer': [], data: [] },
    Exfilteration: { 'data consumer': [], data: [] },
    'Inhibit Response': { 'data consumer': [], data: [] },
    'Impair Control': { 'data consumer': [], data: [] },
    Impact: { 'data consumer': [], data: [] },
  },
  table2: {},
  table3: {},
};
