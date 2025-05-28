const repoAnalysis = {
  metrics: {
    totalLOC: 'estimated ~15,000-20,000', // Java enterprise project
    repoSize: '~3-5 MB',
    fileCount: '~200-300',
    languages: {
      'Java': '65%',
      'JSP': '20%',
      'JavaScript': '10%',
      'CSS': '3%',
      'XML': '2%'
    },
    outputLanguage: 'Java (1.6)'
  },
  technical: {
    frameworks: [
      'Spring Framework 4.0.6',
      'Spring MVC',
      'Spring Security 4.0.6',
      'Hibernate 4.3.6',
      'Apache Tiles 2.1.4'
    ],
    libraries: [
      'Apache POI 4.1.2 (Excel processing)',
      'JSON (org.json)',
      'Velocity 1.5',
      'EhCache 1.6.0',
      'JUnit 4.5',
      'SLF4J 1.5.2'
    ],
    buildTools: ['Maven 3.2', 'Ant'],
    testingTools: ['JUnit 4.5'],
    databases: ['Unspecified (using Hibernate ORM)'],
    apis: ['RESTful services (Spring MVC)']
  },
  features: {
    authentication: 'Spring Security based',
    mainFeatures: [
      'Citizen document management',
      'Workflow management',
      'Common pages/components',
      'Core functionality pages',
      'Report generation',
      'Audit functionality'
    ],
    uiComponents: 'JSP/Tiles based UI',
    businessLogic: 'E-Government RTS (Real Time Services) - NMC'
  }
};

// Change detection results
const changeDetails = {
  'RTSservices/java/com/mars/service/': {
    changeType: 'modified',
    functions: ['updateCitizenDocument', 'processWorkflow'],
    lines: {
      modified: [120, 145, 167]
    }
  },
  'RTSservices/web/pages/citizendocument/': {
    changeType: 'modified',
    functions: ['form validation'],
    lines: {
      added: [45, 46, 47]
    }
  }
};

module.exports = { repoAnalysis, changeDetails };