import { readFile } from 'node:fs/promises'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const parseOutput = (dangerOutput) => {
  const results = { warnings: [], messages: [], fails: [], markdowns: [] }
  if (dangerOutput.length === 0) return results
  for (let i = 0; i < dangerOutput.length; i++) {
    const lines = dangerOutput[i].split('\n')
    const type = lines[0]
    const resultsArray = results[type.toLowerCase()]
    if (resultsArray)
      resultsArray.push(
        ...lines
          .slice(1)
          .filter((line) => line !== '-' && line)
          .map((line) => ({ message: line })),
      )
  }
  return results
}

const danger = await readFile('dangerOutput.txt', 'utf-8').then((file) => file.replace(/\0|\r/g, '').split('## ').slice(1))

process.stdout.write(JSON.stringify(parseOutput(danger)))
