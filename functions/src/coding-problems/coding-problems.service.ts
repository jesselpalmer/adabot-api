import { CodingProblem } from './coding-problems'
import { CodingProblemData } from './coding-problems.data'
import { SlackMessage } from '../shared/slack-message'

export class CodingProblemsService {
  
  private getRandomCodingProblem(): CodingProblem {
    const randomNum: number = Math.floor(Math.random() * CodingProblemData.length)
    return CodingProblemData[randomNum]
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
