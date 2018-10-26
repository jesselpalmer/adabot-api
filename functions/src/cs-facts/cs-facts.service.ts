import { CSFact } from './cs-fact'
import { CSFactData } from './cs-facts.data'
import { SlackMessage } from '../shared/slack-message'

export class CSFactsService {

  getRandomCSFact(): CSFact {
    const randomNum = Math.floor(Math.random() * CSFactData.length)
    return CSFactData[randomNum]
  }

  getCSFact(): SlackMessage {
    const fact = this.getRandomCSFact().text
    return { text: fact }
  }
}
