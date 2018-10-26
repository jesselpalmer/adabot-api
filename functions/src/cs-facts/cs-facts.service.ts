import { CSFact } from './cs-fact'
import { SlackMessage } from '../shared/slack-message'

export class CSFactsService {

  facts:Array<CSFact> = [
    {
      text: 'MIT has developed a computer software that can identify and distinguish a real smile from a smile of frustration. ', 
    },
    {
      text: 'The Motion Picture Academy refused to nominate Tron (1982) for a special-effects award because, according to ' +
        'director Steven Lisberger, “The Academy thought we cheated by using computers”'
    }
  ]

  getRandomCSFact() {
    const randomNum = Math.floor(Math.random() * this.facts.length)
    return this.facts[randomNum]
  }

  getCSFact(): SlackMessage {
    const fact = this.getRandomCSFact().text
    return { text: fact }
  }
}
