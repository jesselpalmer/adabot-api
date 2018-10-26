import { AdaCodingProblem } from './ada-coding-problems'
import { SlackMessage } from '../shared/slack-message'

export class AdaCodingProblemsService {

  codingProblems:Array<AdaCodingProblem> = [
    {
      desc: 'Most frequently asked question',
      level: 'easy',
      question: 'Write a function that takes in a string and returns the most frequently used char ignoring whitespace.',
      input: 'Today is the greatest day ever!',
      output: 'e'
    }
  ]

  private getRandomAdaCodingProblem(): AdaCodingProblem {
    const randomNum: number = Math.floor(Math.random() * this.codingProblems.length)
    return this.codingProblems[randomNum]
  }

  private getFormattedAdaCodingProblem(): string {
    const codingProblem: AdaCodingProblem = this.getRandomAdaCodingProblem()
    const formattedCodingProblem: string = `/**\n *Question*: ${codingProblem.question}\n` +
        `\n*Input*: ${codingProblem.input} \n*Output*: ${codingProblem.output}\n*/`
    return formattedCodingProblem
  }

  getAdaCodingProblem(): SlackMessage {
    const codingProblem: string = this.getFormattedAdaCodingProblem()
    return { text: codingProblem }
  }
}
