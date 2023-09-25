const { execSync } = require('child_process')

const current = execSync('git branch --show-current')

execSync(`git push origin ${current}`)
