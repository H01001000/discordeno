import { danger } from 'danger'

danger.git.commits.forEach((commit) => {
  if (!commit.message.match(/^(build\()|(ci: )|(docs\()|(feat\()|(fix\()|(perf\()|(refactor\()|(test\()/g)) {
    warn(`Commit message '${commit.message}' does match the correct format`)
  }
})

message(Date.now().toString())
