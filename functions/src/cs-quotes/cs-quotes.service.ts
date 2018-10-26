import { CSQuote } from './cs-quotes'
import { SlackMessage } from '../shared/slack-message'

export class CSQuotesService {

  quotes:Array<CSQuote> = [
    {
      text: 'The unexamined life is not worth living.', 
      author: 'Socrates'
    },
    {
      text: 'The journey of a thousand miles begins with one step.',
      author: 'Lao Tzu'
    }
  ]

  getRandomCsQuote(): CSQuote {
    const randomNum = Math.floor(Math.random() * this.quotes.length)
    return this.quotes[randomNum]
  }

  getCSQuote(): SlackMessage {
    const quote = this.getRandomCsQuote().text
    return { text: quote }
  }
}
