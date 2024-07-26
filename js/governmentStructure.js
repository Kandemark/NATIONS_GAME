export const GOVERNMENT_STRUCTURES = {
    MONARCHY: {
        name: 'Monarchy',
        description: 'A government where a single person reigns, usually a king or queen, with power that may be absolute or constitutional.',
        branches: {
            Monarch: {
                role: 'King/Queen',
                power: 'Absolute or Constitutional',
                responsibilities: [
                    'Issue decrees',
                    'Appoint ministers',
                    'Dissolve council',
                    'Declare wars',
                    'Grant pardons',
                    'Oversee foreign relations',
                    'Manage royal estates',
                    'Convene and dissolve the council or parliament',
                    'Lead national ceremonies and events',
                    'Negotiate and sign treaties',
                    'Approve budgets and expenditures'
                ]
            },
            Council: {
                role: 'Advisors/Ministers',
                power: 'Limited',
                responsibilities: [
                    'Advise the monarch',
                    'Implement decrees',
                    'Manage various ministries (e.g., finance, defense, education)',
                    'Draft policies',
                    'Oversee local administration',
                    'Coordinate with foreign dignitaries',
                    'Supervise economic projects',
                    'Administer public services'
                ]
            }
        }
    },
    DEMOCRACY: {
        name: 'Democracy',
        description: 'A system of government where citizens exercise power by voting, typically through elected representatives.',
        branches: {
            Executive: {
                role: 'President/Prime Minister',
                power: 'Elected',
                responsibilities: [
                    'Enforce laws',
                    'Veto bills',
                    'Appoint cabinet members',
                    'Commander-in-chief of the armed forces',
                    'Negotiate treaties',
                    'Deliver the state of the nation address',
                    'Propose legislation',
                    'Grant pardons and reprieves',
                    'Oversee national security',
                    'Manage foreign policy',
                    'Implement budget'
                ]
            },
            Legislature: {
                role: 'Parliament/Congress',
                power: 'Law-Making',
                responsibilities: [
                    'Pass bills',
                    'Vote on laws',
                    'Impeach president',
                    'Approve budget',
                    'Declare wars',
                    'Ratify treaties',
                    'Oversee government agencies',
                    'Conduct investigations',
                    'Represent constituents',
                    'Review and amend proposed laws',
                    'Allocate government funding'
                ]
            },
            Judiciary: {
                role: 'Courts',
                power: 'Interprets Laws',
                responsibilities: [
                    'Interpret laws',
                    'Review legislation',
                    'Rule on disputes',
                    'Ensure justice is administered',
                    'Oversee trials and appeals',
                    'Protect civil rights',
                    'Declare laws unconstitutional',
                    'Adjudicate criminal cases',
                    'Resolve civil disputes'
                ]
            }
        }
    },
    DICTATORSHIP: {
        name: 'Dictatorship',
        description: 'A form of government where a single person or a small group possesses absolute power without effective constitutional limitations.',
        branches: {
            Dictator: {
                role: 'Supreme Leader',
                power: 'Absolute',
                responsibilities: [
                    'Issue orders',
                    'Control military',
                    'Suppress opposition',
                    'Enact laws by decree',
                    'Appoint loyalists to key positions',
                    'Manage propaganda',
                    'Control media',
                    'Oversee internal security',
                    'Establish and enforce policies',
                    'Direct economic plans',
                    'Oversee foreign relations'
                ]
            },
            Council: {
                role: 'Advisors',
                power: 'Advisory',
                responsibilities: [
                    'Advise the dictator',
                    'Implement orders',
                    'Manage ministries',
                    'Coordinate security efforts',
                    'Monitor public sentiment',
                    'Draft policies',
                    'Oversee economic plans',
                    'Supervise industrial production',
                    'Manage state-owned enterprises'
                ]
            }
        }
    },
    COMMUNISM: {
        name: 'Communism',
        description: 'A political and economic ideology advocating for a classless society in which all property and wealth are communally owned.',
        branches: {
            Party: {
                role: 'Central Committee',
                power: 'Supreme',
                responsibilities: [
                    'Formulate policies',
                    'Direct economic plans',
                    'Control military',
                    'Appoint government officials',
                    'Ensure party loyalty',
                    'Conduct purges of dissenters',
                    'Manage state propaganda',
                    'Oversee foreign relations',
                    'Supervise collectivization efforts',
                    'Implement five-year plans',
                    'Control resource allocation'
                ]
            },
            Government: {
                role: 'Premier/President',
                power: 'Administrative',
                responsibilities: [
                    'Implement party policies',
                    'Manage state affairs',
                    'Appoint officials',
                    'Oversee ministries',
                    'Coordinate economic plans',
                    'Enforce laws',
                    'Ensure internal security',
                    'Administer public services',
                    'Supervise infrastructure projects',
                    'Manage state budget'
                ]
            },
            Security: {
                role: 'Secret Police',
                power: 'Enforcement',
                responsibilities: [
                    'Maintain internal security',
                    'Suppress dissent',
                    'Conduct surveillance',
                    'Interrogate suspects',
                    'Manage labor camps',
                    'Monitor foreign espionage',
                    'Protect party leadership',
                    'Investigate counter-revolutionary activities',
                    'Ensure ideological conformity'
                ]
            }
        }
    },
    THEOCRACY: {
        name: 'Theocracy',
        description: 'A form of government in which a deity is officially recognized as the civil ruler, and official policy is governed by officials regarded as divinely guided.',
        branches: {
            SupremeLeader: {
                role: 'Religious Leader',
                power: 'Absolute',
                responsibilities: [
                    'Interpret divine laws',
                    'Issue religious edicts',
                    'Oversee religious courts',
                    'Appoint religious officials',
                    'Administer religious institutions',
                    'Enforce moral codes',
                    'Control education and cultural policies',
                    'Supervise charitable activities',
                    'Negotiate with other religious and political entities',
                    'Preside over religious ceremonies',
                    'Manage holy sites'
                ]
            },
            CouncilOfElders: {
                role: 'Advisors',
                power: 'Advisory',
                responsibilities: [
                    'Advise the supreme leader',
                    'Interpret religious texts',
                    'Implement religious edicts',
                    'Manage religious education',
                    'Oversee religious rituals',
                    'Coordinate charitable works',
                    'Supervise religious courts',
                    'Administer community welfare programs',
                    'Engage in interfaith dialogue'
                ]
            }
        }
    },
    FEDERALISM: {
        name: 'Federalism',
        description: 'A system of government where entities such as states or provinces share power with a national government.',
        branches: {
            FederalGovernment: {
                role: 'Central Authority',
                power: 'Shared',
                responsibilities: [
                    'Regulate interstate commerce',
                    'Conduct foreign affairs',
                    'Maintain national defense',
                    'Implement federal laws',
                    'Oversee national infrastructure projects',
                    'Coordinate between states',
                    'Collect federal taxes',
                    'Administer national programs',
                    'Supervise immigration and border control',
                    'Manage national healthcare and education standards'
                ]
            },
            StateGovernments: {
                role: 'Regional Authorities',
                power: 'Shared',
                responsibilities: [
                    'Implement state laws',
                    'Manage local education systems',
                    'Oversee state law enforcement',
                    'Administer state healthcare programs',
                    'Regulate intrastate commerce',
                    'Maintain state infrastructure',
                    'Collect state taxes',
                    'Coordinate disaster response',
                    'Manage state welfare programs',
                    'Regulate land use and zoning'
                ]
            }
        }
    },
    ANARCHY: {
        name: 'Anarchy',
        description: 'A state of society without government or law.',
        branches: {
            CommunityCouncils: {
                role: 'Local Groups',
                power: 'None',
                responsibilities: [
                    'Self-governance',
                    'Organize community resources',
                    'Resolve disputes',
                    'Coordinate mutual aid',
                    'Maintain local order',
                    'Facilitate direct democracy',
                    'Manage shared resources',
                    'Coordinate defense efforts',
                    'Implement communal decisions',
                    'Promote self-sufficiency'
                ]
            }
        }
    },
    OLIGARCHY: {
        name: 'Oligarchy',
        description: 'A form of power structure in which power rests with a small number of people.',
        branches: {
            RulingCouncil: {
                role: 'Council Members',
                power: 'Concentrated',
                responsibilities: [
                    'Make key decisions',
                    'Control resources',
                    'Influence economic policies',
                    'Oversee governance',
                    'Appoint officials',
                    'Maintain social order',
                    'Manage foreign relations',
                    'Supervise law enforcement',
                    'Administer justice',
                    'Oversee public projects'
                ]
            }
        }
    },
    TOTALITARIANISM: {
        name: 'Totalitarianism',
        description: 'A political system in which the state holds total authority over society and seeks to control all aspects of public and private life.',
        branches: {
            Leader: {
                role: 'Supreme Leader',
                power: 'Absolute',
                responsibilities: [
                    'Enforce complete control',
                    'Suppress opposition',
                    'Direct propaganda',
                    'Control military',
                    'Regulate economy',
                    'Monitor citizens',
                    'Enact laws by decree',
                    'Manage foreign policy',
                    'Appoint key officials',
                    'Oversee internal security'
                ]
            },
            CentralAuthority: {
                role: 'Government Bureaucracy',
                power: 'Administrative',
                responsibilities: [
                    'Implement leader’s policies',
                    'Manage state apparatus',
                    'Control media and communication',
                    'Administer public services',
                    'Supervise law enforcement',
                    'Coordinate national projects',
                    'Oversee economic activities',
                    'Enforce strict regulations',
                    'Monitor compliance with state policies',
                    'Manage surveillance and intelligence operations'
                ]
            }
        }
    },
    CONSTITUTIONALMONARCHY: {
        name: 'Constitutional Monarchy',
        description: 'A form of monarchy in which the monarch’s powers are regulated by a constitution or laws.',
        branches: {
            Monarch: {
                role: 'Ceremonial Leader',
                power: 'Limited',
                responsibilities: [
                    'Perform ceremonial duties',
                    'Appoint the Prime Minister',
                    'Represent the nation in foreign affairs',
                    'Promote national unity',
                    'Support cultural and charitable activities'
                ]
            },
            Parliament: {
                role: 'Legislature',
                power: 'Elected',
                responsibilities: [
                    'Pass laws',
                    'Approve budgets',
                    'Debate and amend legislation',
                    'Oversee government operations',
                    'Represent the public',
                    'Approve key appointments',
                    'Conduct investigations',
                    'Monitor and critique executive actions'
                ]
            },
            PrimeMinister: {
                role: 'Head of Government',
                power: 'Executive',
                responsibilities: [
                    'Lead the government',
                    'Implement laws',
                    'Manage state affairs',
                    'Oversee ministries',
                    'Negotiate treaties',
                    'Direct foreign policy',
                    'Propose budget',
                    'Coordinate economic policies',
                    'Administer public services'
                ]
            }
        }
    },
    EMPIRE: {
        name: 'Empire',
        description: 'A political unit that rules over extensive territories and diverse peoples, often through conquest and colonization.',
        branches: {
            Emperor: {
                role: 'Supreme Ruler',
                power: 'Absolute',
                responsibilities: [
                    'Expand and consolidate the empire',
                    'Direct military campaigns',
                    'Manage imperial administration',
                    'Appoint governors to provinces',
                    'Oversee diplomatic relations',
                    'Issue imperial decrees',
                    'Supervise resource allocation',
                    'Control trade and commerce',
                    'Maintain imperial security',
                    'Lead ceremonial functions'
                ]
            },
            Governors: {
                role: 'Regional Leaders',
                power: 'Delegated',
                responsibilities: [
                    'Administer provinces',
                    'Implement imperial policies',
                    'Collect taxes',
                    'Maintain local order',
                    'Oversee local infrastructure',
                    'Manage provincial resources',
                    'Report to the emperor',
                    'Coordinate with local elites',
                    'Ensure loyalty to the empire'
                ]
            }
        }
    }
};




























// export const GOVERNMENT_STRUCTURES = {
//     MONARCHY: {
//         name: 'Monarchy',
//         branches: {
//             Monarch: {
//                 role: 'King/Queen',
//                 power: 'Absolute or Constitutional',
//                 description: 'Holds supreme authority, either with absolute power or under a constitution.'
//             },
//             Council: {
//                 role: 'Advisors/Ministers',
//                 power: 'Limited',
//                 description: 'Advises the Monarch and helps in governance.'
//             }
//         }
//     },
//     DEMOCRACY: {
//         name: 'Democracy',
//         branches: {
//             Executive: {
//                 role: 'President/Prime Minister',
//                 power: 'Elected',
//                 description: 'Leads the government and enforces laws.'
//             },
//             Legislature: {
//                 role: 'Parliament/Congress',
//                 power: 'Law-Making',
//                 description: 'Creates and passes laws.'
//             },
//             Judiciary: {
//                 role: 'Courts',
//                 power: 'Interprets Laws',
//                 description: 'Interprets and enforces laws.'
//             }
//         }
//     },
//     DICTATORSHIP: {
//         name: 'Dictatorship',
//         branches: {
//             Dictator: {
//                 role: 'Supreme Leader',
//                 power: 'Absolute',
//                 description: 'Holds total control over all branches of government.'
//             },
//             Council: {
//                 role: 'Advisors',
//                 power: 'Advisory',
//                 description: 'Provides advice but has no real power.'
//             }
//         }
//     },
//     REPUBLIC: {
//         name: 'Republic',
//         branches: {
//             President: {
//                 role: 'Head of State',
//                 power: 'Elected',
//                 description: 'Represents the nation and executes laws.'
//             },
//             Senate: {
//                 role: 'Legislature',
//                 power: 'Law-Making',
//                 description: 'Legislates and oversees the executive branch.'
//             },
//             Judiciary: {
//                 role: 'Courts',
//                 power: 'Interprets Laws',
//                 description: 'Ensures laws comply with the constitution.'
//             }
//         }
//     },
//     EMPIRE: {
//         name: 'Empire',
//         branches: {
//             Emperor: {
//                 role: 'Supreme Leader',
//                 power: 'Absolute or Limited',
//                 description: 'Rules over multiple territories or nations.'
//             },
//             ImperialCouncil: {
//                 role: 'Advisors',
//                 power: 'Advisory',
//                 description: 'Assists the Emperor in governance.'
//             }
//         }
//     },
//     THEOCRACY: {
//         name: 'Theocracy',
//         branches: {
//             HighPriest: {
//                 role: 'Religious Leader',
//                 power: 'Supreme',
//                 description: 'Rules according to religious laws.'
//             },
//             ReligiousCouncil: {
//                 role: 'Advisors',
//                 power: 'Advisory',
//                 description: 'Advises on religious and governance matters.'
//             }
//         }
//     },
//     COMMUNISM: {
//         name: 'Communism',
//         branches: {
//             CommunistParty: {
//                 role: 'Central Authority',
//                 power: 'Supreme',
//                 description: 'Controls all aspects of government and economy.'
//             },
//             NationalAssembly: {
//                 role: 'Legislature',
//                 power: 'Law-Making',
//                 description: 'Enacts laws and policies.'
//             }
//         }
//     },
//     SOCIALISM: {
//         name: 'Socialism',
//         branches: {
//             President: {
//                 role: 'Head of State',
//                 power: 'Elected',
//                 description: 'Leads the government and implements policies.'
//             },
//             NationalAssembly: {
//                 role: 'Legislature',
//                 power: 'Law-Making',
//                 description: 'Creates and approves laws and policies.'
//             },
//             JudicialSystem: {
//                 role: 'Courts',
//                 power: 'Interprets Laws',
//                 description: 'Ensures laws and policies are just and fair.'
//             }
//         }
//     },
//     AUTHORITARIANISM: {
//         name: 'Authoritarianism',
//         branches: {
//             AuthoritarianLeader: {
//                 role: 'Supreme Leader',
//                 power: 'Absolute',
//                 description: 'Holds ultimate control and authority.'
//             },
//             AdvisoryCouncil: {
//                 role: 'Advisors',
//                 power: 'Advisory',
//                 description: 'Provides advice but has no real power.'
//             }
//         }
//     },
//     ABSOLUTISM: {
//         name: 'Absolutism',
//         branches: {
//             AbsoluteMonarch: {
//                 role: 'Supreme Leader',
//                 power: 'Absolute',
//                 description: 'Holds unrestrained authority over all aspects of government.'
//             },
//             RoyalCouncil: {
//                 role: 'Advisors',
//                 power: 'Advisory',
//                 description: 'Advises the Absolute Monarch.'
//             }
//         }
//     },
//     CONSTITUTIONAL_MONARCHY: {
//         name: 'Constitutional Monarchy',
//         branches: {
//             Monarch: {
//                 role: 'Ceremonial Head',
//                 power: 'Limited',
//                 description: 'Serves as a ceremonial leader with limited powers.'
//             },
//             PrimeMinister: {
//                 role: 'Head of Government',
//                 power: 'Executive',
//                 description: 'Leads the government and implements policies.'
//             },
//             Parliament: {
//                 role: 'Legislature',
//                 power: 'Law-Making',
//                 description: 'Creates and approves laws and policies.'
//             }
//         }
//     },
//     FEDERAL_REPUBLIC: {
//         name: 'Federal Republic',
//         branches: {
//             President: {
//                 role: 'Head of State',
//                 power: 'Elected',
//                 description: 'Leads the federal government.'
//             },
//             FederalLegislature: {
//                 role: 'Legislature',
//                 power: 'Law-Making',
//                 description: 'Makes federal laws and policies.'
//             },
//             StateGovernments: {
//                 role: 'Regional Authorities',
//                 power: 'Administrative',
//                 description: 'Manage regional affairs and enforce laws.'
//             }
//         }
//     },
//     CONFEDERACY: {
//         name: 'Confederacy',
//         branches: {
//             ConfederatePresident: {
//                 role: 'Head of Confederacy',
//                 power: 'Limited',
//                 description: 'Leads the confederacy with limited powers.'
//             },
//             MemberStates: {
//                 role: 'Sovereign Entities',
//                 power: 'High',
//                 description: 'Maintain most of the power and autonomy.'
//             }
//         }
//     },
//     OLIGARCHY: {
//         name: 'Oligarchy',
//         branches: {
//             Oligarchs: {
//                 role: 'Ruling Elite',
//                 power: 'Collective',
//                 description: 'A small group of powerful individuals govern together.'
//             },
//             AdvisoryCouncil: {
//                 role: 'Advisors',
//                 power: 'Advisory',
//                 description: 'Advises the ruling elite.'
//             }
//         }
//     },
//     PLUTOCRACY: {
//         name: 'Plutocracy',
//         branches: {
//             WealthyElites: {
//                 role: 'Ruling Class',
//                 power: 'Economic',
//                 description: 'Control the government through wealth and influence.'
//             },
//             EconomicAdvisoryBoard: {
//                 role: 'Advisors',
//                 power: 'Advisory',
//                 description: 'Provides advice on economic policies.'
//             }
//         }
//     },
//     TOTALITARIANISM: {
//         name: 'Totalitarianism',
//         branches: {
//             TotalitarianLeader: {
//                 role: 'Supreme Leader',
//                 power: 'Absolute',
//                 description: 'Controls all aspects of the state.'
//             },
//             StateSecurity: {
//                 role: 'Enforcement',
//                 power: 'Enforcement',
//                 description: 'Maintains control and suppresses opposition.'
//             }
//         }
//     },
//     ANARCHY: {
//         name: 'Anarchy',
//         branches: {
//             None: {
//                 role: 'None',
//                 power: 'None',
//                 description: 'No formal government or branches of power.'
//             }
//         }
//     },
//     MARXISM: {
//         name: 'Marxism',
//         branches: {
//             CommunistParty: {
//                 role: 'Central Authority',
//                 power: 'Supreme',
//                 description: 'Governs on behalf of the working class.'
//             },
//             WorkersCouncils: {
//                 role: 'Local Management',
//                 power: 'Administrative',
//                 description: 'Manages local affairs and production.'
//             }
//         }
//     },
//     LIBERTARIANISM: {
//         name: 'Libertarianism',
//         branches: {
//             ElectedOfficials: {
//                 role: 'Minimal Government',
//                 power: 'Minimal',
//                 description: 'Acts with limited intervention in personal and economic affairs.'
//             },
//             LocalCouncils: {
//                 role: 'Local Governance',
//                 power: 'Local',
//                 description: 'Manages local affairs with minimal oversight.'
//             }
//         }
//     }
// };
