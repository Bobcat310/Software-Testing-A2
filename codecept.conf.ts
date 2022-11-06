export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      //url: 'http://localhost:3000',
      url: 'file:///C:/Users/HP/Downloads/JS%20site/loginpage-main/index.html',
      show: true,
      browser: 'chromium'
    }
  },
  include: {},
  name: 'Web'
}