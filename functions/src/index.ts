import * as functions from 'firebase-functions'
import { QuotesService } from './quotes.service'

export const quotes = functions.https.onRequest((request, response) => {
  const quote = new QuotesService().getRandomQuote()
  response.send(quote)
});
