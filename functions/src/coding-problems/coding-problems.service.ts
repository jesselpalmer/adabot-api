import { CodingProblem } from './coding-problems'
import { SlackMessage } from '../shared/slack-message'

export class CodingProblemsService {

  codingProblems:Array<CodingProblem> = [
    {
      desc: 'Most frequently asked question',
      level: 'easy',
      question: 'Write a function that takes in a string and returns the most frequently used char ignoring whitespace.',
      input: 'Today is the greatest day ever!',
      output: 'e'
    }
  ]

  private getRandomCodingProblem(): CodingProblem {
    const randomNum: number = Math.floor(Math.random() * this.codingProblems.length)
    return this.codingProblems[randomNum]
  }

  private getFormattedCodingProblem(): string {
    const codingProblem: CodingProblem = this.getRandomCodingProblem()
    const formattedCodingProblem: string = `/**\n *Question*: ${codingProblem.question}\n` +
        `\n*Input*: ${codingProblem.input} \n*Output*: ${codingProblem.output}\n*/`
    return formattedCodingProblem
  }

  getCodingProblem(): SlackMessage {
    const codingProblem: string = this.getFormattedCodingProblem()
    return { text: codingProblem }
  }
}
