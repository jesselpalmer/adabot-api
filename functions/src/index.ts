import * as functions from 'firebase-functions'

import { AdaCSQuotesService } from './ada-cs-quotes'
import { AdaCSFactsService } from './ada-cs-facts'
import { AdaCodingProblemsService } from './ada-coding-problems'

export const adaCSQuote = functions.https.onRequest((request, response) => {
  const csQuote = new AdaCSQuotesService().getAdaCSQuote()
  response.send(csQuote)
});

export const adaCSFact = functions.https.onRequest((request, response) => {
  const csFact = new AdaCSFactsService().getAdaCSFact()
  response.send(csFact)
});

export const adaCodingProblem = functions.https.onRequest((request, response) => {
  const codingProblem = new AdaCodingProblemsService().getAdaCodingProblem()
  response.send(codingProblem)
});
