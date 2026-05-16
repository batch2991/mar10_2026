

module.exports = {
  default: {
   
    "requireModule":["ts-node/register"],

    "require":[
        "src/tests/steps/*.ts",
        "src/tests/common/hooks.ts"
    ],

    paths: ['src/tests/features/*.feature'],

    "formatOptions":{
          "snippetInterface":"async-await"
    },
    format: ['progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json',
    ],

       
    dryRun:false
  }
};
