const productionURL = {
  projects: '/api/projects',
  essays: '/api/essays',
  rights: '/api/rights',
  workingStuff: '/api/workingstaff',
  workedStuff: '/api/workedstaff'
}

const developmentURL = {
  projects: 'http://localhost:3000/api/projects',
  essays: 'http://localhost:3000/api/essays',
  rights: 'http://localhost:3000/api/rights',
  workingStuff: 'http://localhost:3000/api/workingstaff',
  workedStuff: 'http://localhost:3000/api/workedstaff'
}

let URL = process.env.NODE_ENV == 'production' ? productionURL : developmentURL

export default URL