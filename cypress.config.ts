const { defineConfig } = require("cypress");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      if(config.env.ENVIRONMENT=="stage05"){
        return{
          baseUrl: "https://rahulshettyacademy.com/",
          specPattern:"cypress/e2e/stage05/**/*.cy.ts",
          chromeWebSecurity: false,
          screenshotsFolder: "cypress/screenshots",
          videosFolder: "cypress/videos",
          defaultCommandTimeout: 10000,
         // responseTimeout: 120e3
        }
   // }
  
  }
  else if(config.env.ENVIRONMENT=="stage07"){
    return{
     // baseUrl: "https://www.saucedemo.com/",
      specPattern:"cypress/e2e/stage07/**/*.cy.js",
      chromeWebSecurity: false,
      screenshotsFolder: "cypress/screenshots",
      videosFolder: "cypress/videos",
      defaultCommandTimeout: 10000,
      pageLoadTimeout: 10000,
      env :{
        seconUser: 'locked_out_user',
        secondPass: 'secret_sauce'
      }
    }

  }
  else if(config.env.ENVIRONMENT=="ALW"){
    return{
      baseUrl: "https://juniper-stage-learn.alw.sa/",
      specPattern:"cypress/e2e/ALW/**/*.cy.js",
      chromeWebSecurity: false,
      screenshotsFolder: "cypress/screenshots",
      videosFolder: "cypress/videos",
      defaultCommandTimeout: 20000,
      pageLoadTimeout: 10000,
      env :{
        seconUser: 'locked_out_user',
        secondPass: 'secret_sauce'
      }
    }

  }
}
  }
});
