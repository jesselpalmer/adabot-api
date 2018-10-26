import { AdaCSFact } from './ada-cs-fact'
import { SlackMessage } from '../shared/slack-message'

export class AdaCSFactsService {

  facts:Array<AdaCSFact> = [
    {
      text: 'MIT has developed a computer software that can identify and distinguish a real smile from a smile of frustration. ', 
    },
    {
      text: 'The Motion Picture Academy refused to nominate Tron (1982) for a special-effects award because, according to ' +
        'director Steven Lisberger, “The Academy thought we cheated by using computers”'
    }
  ]

  getRandomAdaCSFact() {
    const randomNum = Math.floor(Math.random() * this.facts.length)
    return this.facts[randomNum]
  }

  getAdaCSFact(): SlackMessage {
    const fact = this.getRandomAdaCSFact().text
    return { text: fact }
  }
}
