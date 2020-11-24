const fs = require('fs')
const path = require('path')
const getRepoInfo = require('git-repo-info')

const info = getRepoInfo()

const build = {
  date: Date.now(),
  hash: info.sha,
  branch: info.branch
}

fs.writeFileSync(
  path.join(__dirname, '../src/build.json'), JSON.stringify(build), { encoding: 'utf8' })
