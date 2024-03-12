export const rpsRulesSet1 = [
  {
    id: 1,
    rule: 'The game result should be based on user and user opponent choices',
  },
  {
    id: 2,
    rule:
      'When the user choice is rock and his opponent choice is rock then the result will be IT IS DRAW',
  },
  {
    id: 3,
    rule:
      'When the user choice is paper and his opponent choice is rock then the result will be YOU WON',
  },
  {
    id: 4,
    rule:
      'When the user choice is a scissor and his opponent choice is rock then the result will be YOU LOSE',
  },
  {
    id: 5,
    rule:
      'When the user choice is paper and his opponent choice is paper then the result will be IT IS DRAW',
  },
  {
    id: 6,
    rule:
      'When the user choice is scissors and his opponent choice is paper then the result will be YOU WON',
  },
]

export const rpsRulesSet2 = [
  {
    id: 7,
    rule:
      'When the user choice is rock and his opponent choice is scissors then the result will be YOU WON',
  },
  {
    id: 8,
    rule:
      'When the user choice is rock and his opponent choice is scissors then the result will be YOU WON',
  },
  {
    id: 9,
    rule:
      'When the user choice is scissors and his opponent choice is scissors then the result will be IT IS DRAW',
  },
  {
    id: 10,
    rule:
      'When the result is YOU WON, then the count of the score should be incremented by 1',
  },
  {
    id: 11,
    rule:
      'When the result is IT IS DRAW, then the count of the score should be the same',
  },
  {
    id: 12,
    rule:
      'When the result is YOU LOSE, then the count of the score should be decremented by 1.',
  },
]

export const flipRulesSet1 = [
  {
    id: 1,
    rule:
      'When the game is started, the users should be able to see the list of Cards that are shuffled and turned face down.',
  },
  {
    id: 2,
    rule:
      'When a user starts the game, the user should be able to see the Timer running.',
  },
  {
    id: 3,
    rule: 'The Timer starts from 2 Minutes.',
  },
  {
    id: 4,
    rule:
      'If the two cards have the same image, they remain face up. If not, they should be flipped face down again after a short 2 seconds.',
  },
]

export const flipRulesSet2 = [
  {
    id: 5,
    rule: 'Users should be able to compare only two cards at a time.',
  },
  {
    id: 6,
    rule:
      'When the user is not able to find all the cards before the timer ends then the game should end and redirect to the Time Up Page.',
  },
  {
    id: 6,
    rule:
      'If the user finds all the matching cards before the timer ends, then the user should be redirected to the results page.',
  },
]

export const emojiRulesSet = [
  {
    id: 1,
    rule: 'User should be able to see the list of Emojis',
  },
  {
    id: 2,
    rule:
      'When the user clicks any one of the Emoji for the first time, then the count of the score should be incremented by 1 and the List of emoji cards should be shuffled.',
  },
  {
    id: 3,
    rule:
      'This process should be repeated every time the user clicks on an emoji card',
  },
  {
    id: 4,
    rule:
      'When the user clicks on all Emoji cards without clicking any of it twice, then the user will win the game',
  },
  {
    id: 5,
    rule:
      'When the user clicks on the same Emoji for the second time, then the user will lose the game.',
  },
  {
    id: 6,
    rule:
      'Once the game is over, the user will be redirected to the results page.',
  },
]

export const memoryRuleSet1 = [
  {
    id: 1,
    rule:
      'In each level of the Game, users should be able to see the Grid with (NxN) size starting from 3 and the grid will highlight N cells in Blue, the N highlighted cells will be picked randomly.',
  },
  {
    id: 2,
    rule:
      'The highlighted cells will remian N seconds for the user to memorize the cells. At this point, the user should not be able to perform any action.',
  },
  {
    id: 3,
    rule: 'After N seconds, the grid will clear the N highlighted cells',
  },
]

export const memoryRuleSet2 = [
  {
    id: 4,
    rule:
      'At N seconds, the user can click on any cell. Clicking on a cell that was highlighted before it will turn blue. Clicking on the other cells that were not highlighted before then will turn to red.',
  },
  {
    id: 5,
    rule:
      'The user should be promoted to the next level if they guess all N cells correctly in one attempt.',
  },
  {
    id: 6,
    rule:
      'The user should be taken to the results page if the user clicks on the wrong cell.',
  },
  {
    id: 7,
    rule:
      'If the user completed all the levels, then the user should be taken to the results page.',
  },
]
