const STORAGE_KEY = 'puzzle_usb_custom_data_v1';
const MERGE_BEST_KEY = 'puzzle_usb_merge_best_v1';
const HIGH_SCORE_STORAGE_KEY = 'puzzle_usb_high_scores_v1';

const DEFAULT_CUSTOM_DATA = {
  wordGuess: {
    answerWordsOverride: [],
    acceptedGuessWordsOverride: [],
    words: [
      'cable', 'tiger', 'sugar', 'light', 'crane', 'flint', 'shore', 'bloom',
      'crown', 'drift', 'spark', 'brave', 'mango', 'pride', 'quilt', 'river',
      'ocean', 'grape', 'smile', 'toast', 'waltz', 'stone', 'glide', 'plaza'
    ]
  },
  groupSort: {
    packs: [
      {
        title: 'Connections #636 - March 8, 2025',
        groups: [
          { name: 'Faux', items: ['ARTIFICIAL', 'FAKE', 'IMITATION', 'MOCK'] },
          { name: 'Washing Machine Cycles/Settings', items: ['BULKY', 'COTTON', 'DELICATE', 'SPIN'] },
          { name: 'Words Said in the "Bill and Ted" Movies', items: ['BOGUS', 'DUDE', 'EXCELLENT', 'TOTALLY'] },
          { name: '___ Box', items: ['CHATTER', 'JUKE', 'SHADOW', 'SOAP'] }
        ]
      },
      {
        title: 'Connections #638 - March 10, 2025',
        groups: [
          { name: 'Cat Breeds', items: ['RAGAMUFFIN', 'RUSSIAN BLUE', 'SPHYNX', 'TURKISH ANGORA'] },
          { name: 'Famous Smiles', items: ['CHESHIRE CAT', 'COMEDY MASK', 'JOKER', 'MONA LISA'] },
          { name: 'Seen in Altered Form', items: ['LIBERTY BELL', 'STATUE OF LIBERTY', 'TOWER OF PISA', 'VENUS DE MILO'] },
          { name: 'Associated with "The Dude" Lebowski', items: ['BATHROBE', 'BOWLING', 'RUG', 'WHITE RUSSIAN'] }
        ]
      },
      {
        title: 'Connections #642 - March 14, 2025',
        groups: [
          { name: 'Impose, as a Penalty', items: ['ASSESS', 'CHARGE', 'FINE', 'LEVY'] },
          { name: 'Checkout Line Impulse Buys', items: ['CANDY', 'CHAPSTICK', 'CHARGING CABLE', 'MAGAZINE'] },
          { name: 'Movies of Various Lengths', items: ['EPIC', 'FEATURE', 'FILM SERIES', 'SHORT'] },
          { name: '___ Road', items: ['DIRT', 'HIGH', 'ROCKY', 'SILK'] }
        ]
      },
      {
        title: 'Connections #650 - March 22, 2025',
        groups: [
          { name: 'Musical Instruments', items: ['TAMBOURINE', 'THEREMIN', 'TIMPANI', 'TROMBONE'] },
          { name: 'Knickknack', items: ['TCHOTCHKE', 'THINGAMAJIG', 'TRIFLE', 'TRINKET'] },
          { name: 'Words with the Prefix Meaning "Three"', items: ['TRIANGLE', 'TRIDENT', 'TRILOBITE', 'TRILLION'] },
          { name: 'Abbreviated with "T" + Letter', items: ['TELEVISION', 'TOUCHDOWN', 'TRADEMARK', 'TUBERCULOSIS'] }
        ]
      },
      {
        title: 'Connections #658 - March 30, 2025',
        groups: [
          { name: 'Average', items: ['MEAN', 'NORM', 'PAR', 'STANDARD'] },
          { name: 'Pictured on the U.S. Great Seal', items: ['ARROWS', 'EAGLE', 'OLIVE BRANCH', 'SHIELD'] },
          { name: 'Proper Nouns in Broadway Titles', items: ['BIRDIE', 'DOLLY', 'KATE', 'YANKEES'] },
          { name: '___MAN', items: ['BOGEY', 'CRAFTS', 'GENTLE', 'SPOKES'] }
        ]
      },
      {
        title: 'Connections #685 - April 26, 2025',
        groups: [
          { name: 'People Named Bob', items: ['DOLE', 'HOPE', 'MARLEY', 'ROSS'] },
          { name: 'Color Synonyms', items: ['COLOR', 'HUE', 'SHADE', 'TONE'] },
          { name: 'Small Valleys', items: ['DALE', 'DELL', 'GLEN', 'HOLLOW'] },
          { name: 'Color Anagrams', items: ['DRE', 'GARY', 'GENRE', 'LUBE'] }
        ]
      },
      {
        title: 'Connections #1008 - March 13, 2026',
        groups: [
          { name: 'Walls', items: ['BERLIN', 'BRICK', 'FOURTH', 'GREAT'] },
          { name: 'Numbers', items: ['EVEN', 'IRRATIONAL', 'PERFECT', 'PRIME'] },
          { name: 'Homophones of All/None/Few/Some', items: ['AWL', 'NUN', 'PHEW', 'SUM'] },
          { name: 'Polite "No" Responses', items: ['LATER', 'NAH', 'NEXT TIME', 'PASS'] }
        ]
      }
    ]
  },
  strands: {
    boards: [
      {
        title: 'Camp Comforts',
        clue: 'Things around the campsite',
        spangram: 'CAMPINGGEAR',
        startingBoard: [
          'TENTLOG',
          'MUGPITX',
          'ROPEXXX',
          'STOVEXX',
          'LANTERN',
          'CAMPING',
          'XXXRAEG'
        ],
        solutions: ['TENT', 'MUG', 'PIT', 'LOG', 'ROPE', 'LANTERN', 'STOVE'],
        themeCoords: {
          TENT: [[0, 0], [0, 1], [0, 2], [0, 3]],
          LOG: [[0, 4], [0, 5], [0, 6]],
          MUG: [[1, 0], [1, 1], [1, 2]],
          PIT: [[1, 3], [1, 4], [1, 5]],
          ROPE: [[2, 0], [2, 1], [2, 2], [2, 3]],
          STOVE: [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4]],
          LANTERN: [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6]]
        },
        spangramCoords: [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [6, 6], [6, 5], [6, 4], [6, 3]]
      },
      {
        title: 'Ocean Wonders',
        clue: 'Creatures in the sea',
        spangram: 'SEACREATURES',
        startingBoard: [
          'SEALRAY',
          'ORCAXXX',
          'TURTLEX',
          'CRABEEL',
          'XXXXXXX',
          'SEACREA',
          'XXSERUT'
        ],
        solutions: ['SEAL', 'RAY', 'ORCA', 'TURTLE', 'CRAB', 'EEL'],
        themeCoords: {
          SEAL: [[0, 0], [0, 1], [0, 2], [0, 3]],
          RAY: [[0, 4], [0, 5], [0, 6]],
          ORCA: [[1, 0], [1, 1], [1, 2], [1, 3]],
          TURTLE: [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5]],
          CRAB: [[3, 0], [3, 1], [3, 2], [3, 3]],
          EEL: [[3, 4], [3, 5], [3, 6]]
        },
        spangramCoords: [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [6, 6], [6, 5], [6, 4], [6, 3], [6, 2]]
      },
      {
        title: 'Bakery Case',
        clue: 'Treats behind the glass',
        spangram: 'SWEETPASTRIES',
        startingBoard: [
          'SCONEXX',
          'DONUTXX',
          'ECLAIRX',
          'TARTXXX',
          'COOKIEX',
          'SWEETPA',
          'XSEIRTS'
        ],
        solutions: ['SCONE', 'DONUT', 'ECLAIR', 'TART', 'COOKIE'],
        themeCoords: {
          SCONE: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
          DONUT: [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]],
          ECLAIR: [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5]],
          TART: [[3, 0], [3, 1], [3, 2], [3, 3]],
          COOKIE: [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5]]
        },
        spangramCoords: [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [6, 6], [6, 5], [6, 4], [6, 3], [6, 2], [6, 1]]
      }
    ]
  },
  nonogram: {
    puzzles: [
      { title: 'Heart', grid: ['.XX..', 'XXXX.', 'XXXXX', '.XXX.', '..X..'] },
      { title: 'Star', grid: ['..X..', 'XXXXX', '.XXX.', 'XXXXX', '..X..'] },
      { title: 'Rocket', grid: ['..X..', '.XXX.', 'XXXXX', '.XXX.', '.X.X.', 'X...X'] },
      { title: 'Tree', grid: ['..X..', '.XXX.', 'XXXXX', '..X..', '..X..', '.XXX.'] },
      { title: 'Crown', grid: ['X...X', 'XX.XX', 'XXXXX', '.XXX.', '.XXX.'] },
      { title: 'Mushroom', grid: ['.XXX.', 'XXXXX', 'XXXXX', '..X..', '.XXX.'] },
      { title: 'Duck', grid: ['.XX..', 'XXXX.', '.XXXX', '.XXX.', '..X..'] },
      { title: 'Ice Cream', grid: ['..X..', '.XXX.', 'XXXXX', '.XXX.', '.X.X.', 'XXXXX'] },
      { title: 'House', grid: ['..X..', '.XXX.', 'XXXXX', 'X.X.X', 'XXXXX'] },
      { title: 'Fish', grid: ['.XX..', 'XXXXX', '.XXXX', 'XXXXX', '.XX..'] },
      { title: 'Flower', grid: ['.X.X.', 'XXXXX', '.XXX.', '.XXX.', 'X.X.X', '.X.X.'] }
    ]
  },
  pinpoint: {
    packs: [
      { answer: 'MERCURY', clues: ['A planet', 'Also a metal', 'Closest to the sun', 'Roman messenger god'] },
      { answer: 'VOLCANO', clues: ['A landform', 'It can erupt', 'Magma becomes lava here', 'Often shaped like a cone'] },
      { answer: 'ANCHOR', clues: ['Used on water', 'Heavy metal tool', 'Keeps a vessel in place', 'Shown on many nautical flags'] },
      { answer: 'ORCHESTRA', clues: ['A performance group', 'Includes strings', 'Has a conductor', 'Usually found in a concert hall'] },
      { answer: 'KEYBOARD', clues: ['A tool for input', 'Found on laptops', 'Also belongs on a piano', 'QWERTY is a common layout'] },
      { answer: 'GLACIER', clues: ['A frozen mass', 'Moves slowly', 'Found in polar or alpine regions', 'Can carve valleys over time'] },
      { answer: 'LIBRARY', clues: ['A public place', 'Often quiet', 'Stores many stories', 'People borrow from it'] },
      { answer: 'COMPASS', clues: ['A tool', 'Used for direction', 'Points north', 'Helpful on a hike'] },
      { answer: 'LANTERN', clues: ['A light source', 'Portable', 'Common on camping trips', 'Often carried by a handle'] },
      { answer: 'PYRAMID', clues: ['A shape', 'Ancient structure', 'Seen in Egypt', 'Wide base with a point at the top'] },
      { answer: 'TELESCOPE', clues: ['A viewing tool', 'Used at night', 'Makes far things look closer', 'Good for stargazing'] },
      { answer: 'CANYON', clues: ['A natural feature', 'Very large crack in the earth', 'Often carved by water', 'The Grand one is famous'] },
      { answer: 'SUBMARINE', clues: ['A vehicle', 'Travels where cars cannot', 'Moves underwater', 'Used by navies and explorers'] },
      { answer: 'SATELLITE', clues: ['Found above Earth', 'Moves in orbit', 'Used for signals and maps', 'Can be natural or man-made'] },
      { answer: 'CHOCOLATE', clues: ['A treat', 'Can be dark or milk', 'Often given on holidays', 'Made from cacao'] },
      { answer: 'TORNADO', clues: ['A weather event', 'Spins fast', 'Forms a funnel', 'Can be very destructive'] },
      { answer: 'WATERFALL', clues: ['A nature sight', 'Has a big drop', 'Made of moving water', 'Niagara is a famous one'] },
      { answer: 'DINOSAUR', clues: ['A living thing from long ago', 'Studied in fossils', 'Some were enormous', 'Not alive today except through birds'] },
      { answer: 'TREASURE', clues: ['Something valuable', 'Often hidden in stories', 'Can be buried', 'Pirates are linked to it'] },
      { answer: 'AVALANCHE', clues: ['A natural event', 'Comes down a mountain', 'Made of snow', 'Can bury everything below'] },
      { answer: 'NOTEBOOK', clues: ['A school supply', 'Has pages', 'Used for writing', 'Often carried in a backpack'] },
      { answer: 'SPHINX', clues: ['A statue', 'Ancient', 'Associated with Egypt', 'Has a human head and lion body'] },
      { answer: 'RAINBOW', clues: ['Seen in the sky', 'Has many colors', 'Needs light and water', 'Appears after some storms'] },
      { answer: 'HONEYCOMB', clues: ['A pattern', 'Has six sides', 'Built by bees', 'Stores something sweet'] },
      { answer: 'MICROSCOPE', clues: ['A lab tool', 'Used by scientists', 'Makes tiny things look larger', 'Good for viewing cells'] },
      { answer: 'TRIANGLE', clues: ['A shape', 'Has three sides', 'Used in music too', 'One of the simplest polygons'] },
      { answer: 'AIRPORT', clues: ['A travel hub', 'Planes use it', 'Has gates and terminals', 'Security lines are common here'] },
      { answer: 'VOLLEYBALL', clues: ['A sport', 'Played over a net', 'Often seen on beaches', 'Players bump, set, and spike'] },
      { answer: 'CHECKERBOARD', clues: ['A pattern', 'Alternating colors', 'Used in a game', 'Often black and red or black and white'] }
    ]
  },
  queens: {
    sizes: [5, 6, 7]
  },
  snake: {
    gridSize: 18,
    stepMs: 120
  },
  popcorn: {
    target: 24,
    maxBurns: 5,
    spawnEveryTicks: 2
  }
};

const GAME_LIST = [
  { id: 'wordGuess', label: 'Wordle', summary: 'Wordle-style five-letter guessing.', category: 'nyt' },
  { id: 'spellingBee', label: 'Spelling Bee', summary: 'Build words from a seven-letter hive.', category: 'nyt' },
  { id: 'groupSort', label: 'Connections', summary: 'Connections-style category matching.', category: 'nyt' },
  { id: 'strands', label: 'Strands', summary: 'Find themed words in a flowing letter grid.', category: 'nyt' },
  { id: 'sudoku', label: 'Sudoku Studio', summary: 'Fill the 9x9 logic grid.', category: 'indie' },
  { id: 'nonogram', label: 'Pixel Picross', summary: 'Reveal pictures with clues.', category: 'indie' },
  { id: 'queens', label: 'Queens Board', summary: 'Place queens by row, column, and region.', category: 'indie' },
  { id: 'pinpoint', label: 'Clue Trail', summary: 'Solve with progressively sharper clues.', category: 'indie' },
  { id: 'snake', label: 'Snake Sprint', summary: 'Classic grid snake, fully offline.', category: 'google' },
  { id: 'blockBreaker', label: 'Block Breaker', summary: 'Bounce the ball and clear the wall.', category: 'indie' },
  { id: 'baseball', label: 'Baseball Blast', summary: 'Time your swing and drive in runs.', category: 'indie' },
  { id: 'imposter', label: 'Imposter', summary: 'Secret word handoff with one hidden imposter.', category: 'indie' },
  { id: 'minesweeper', label: 'Minesweeper', summary: 'Reveal safe tiles and flag the mines.', category: 'indie' },
  { id: 'solitaire', label: 'Solitaire', summary: 'A compact solitaire card layout.', category: 'indie' },
  { id: 'chess', label: 'Chess', summary: 'Local two-player chess on one screen.', category: 'indie' },
  { id: 'memory', label: 'Memory', summary: 'Flip cards and match every pair.', category: 'indie' },
  { id: 'blankSlate', label: 'Blank Slate', summary: 'Roll prompts and score matching ideas.', category: 'indie' },
  { id: 'ticTacToe', label: 'Tic-Tac-Toe', summary: 'Local two-player X and O faceoff.', category: 'indie' },
  { id: 'popcorn', label: 'Popcorn Panic', summary: 'Pop kernels before they burn.', category: 'google' },
  { id: 'merge', label: 'Merge 2048', summary: 'Slide and combine number tiles.', category: 'indie' }
];

const GAME_META = {
  wordGuess: {
    tag: 'NYT-style word puzzle',
    title: 'Wordle',
    description: 'Guess the hidden five-letter word in six tries. Use the on-screen keys or your keyboard.'
  },
  spellingBee: {
    tag: 'NYT-style word builder',
    title: 'Spelling Bee',
    description: 'Create valid words using the hive letters and always include the center letter.'
  },
  groupSort: {
    tag: 'NYT-style category puzzle',
    title: 'Connections',
    description: 'Find four hidden sets of related words. Select four tiles, then submit the set.'
  },
  strands: {
    tag: 'NYT-style word search',
    title: 'Strands',
    description: 'Drag through neighboring letters to find the themed words and the spangram.'
  },
  sudoku: {
    tag: 'Classic number logic',
    title: 'Sudoku Studio',
    description: 'Fill every row, column, and 3x3 box with digits 1 through 9.'
  },
  nonogram: {
    tag: 'Picture logic',
    title: 'Pixel Picross',
    description: 'Use row and column clues to reveal the hidden image. Left click fills, right click marks.'
  },
  queens: {
    tag: 'LinkedIn-style logic puzzle',
    title: 'Queens Board',
    description: 'Place one queen in every row, column, and colored region. Queens cannot touch.'
  },
  pinpoint: {
    tag: 'LinkedIn-style clue game',
    title: 'Clue Trail',
    description: 'Start with a vague clue, reveal more as needed, and solve with as few hints as possible.'
  },
  snake: {
    tag: 'Google-style arcade throwback',
    title: 'Snake Sprint',
    description: 'Use arrow keys or WASD to collect fruit and keep the snake alive.'
  },
  blockBreaker: {
    tag: 'Arcade brick breaker',
    title: 'Block Breaker',
    description: 'Move the paddle, keep the ball alive, and smash every brick.'
  },
  baseball: {
    tag: 'Arcade timing game',
    title: 'Baseball Blast',
    description: 'Start a pitch, time your swing, and turn contact into runs.'
  },
  imposter: {
    tag: 'Party deduction game',
    title: 'Imposter',
    description: 'Hand the device around, reveal one role at a time, and let one player stay hidden.'
  },
  minesweeper: {
    tag: 'Classic deduction puzzle',
    title: 'Minesweeper',
    description: 'Reveal the safe cells, use the numbers, and flag every mine.'
  },
  solitaire: {
    tag: 'Card table classic',
    title: 'Solitaire',
    description: 'Draw from the stock, build foundations, and sort the tableau.'
  },
  chess: {
    tag: 'Local two-player strategy',
    title: 'Chess',
    description: 'Play on one device with white at the bottom, black at the top, and optional chess-clock presets.'
  },
  memory: {
    tag: 'Quick matching game',
    title: 'Memory',
    description: 'Flip two cards at a time and clear the board in as few turns as possible.'
  },
  blankSlate: {
    tag: 'Party word game',
    title: 'Blank Slate',
    description: 'Roll a prompt, score players, and swap the blank left or right.'
  },
  ticTacToe: {
    tag: 'Local two-player classic',
    title: 'Tic-Tac-Toe',
    description: 'Take turns clicking the grid. Red X goes first, blue O follows.'
  },
  popcorn: {
    tag: 'Arcade reflex game',
    title: 'Popcorn Panic',
    description: 'Click kernels to pop them before they burn. Score enough points before the bowl gets overwhelmed.'
  },
  merge: {
    tag: 'Indie number puzzler',
    title: 'Merge 2048',
    description: 'Slide matching tiles together and aim for the 2048 tile.'
  }
};

const refs = {
  layout: document.querySelector('.layout'),
  gameNavCard: document.querySelector('.game-nav-card'),
  customCard: document.querySelector('.custom-card'),
  stageActions: document.querySelector('.stage-actions'),
  homeTitleButton: document.getElementById('home-title-button'),
  customizerToggle: document.getElementById('customizer-toggle'),
  closeCustomizer: document.getElementById('close-customizer'),
  gameNav: document.getElementById('game-nav'),
  gameTag: document.getElementById('game-tag'),
  gameTitle: document.getElementById('game-title'),
  gameDescription: document.getElementById('game-description'),
  gameTools: document.getElementById('game-tools'),
  gameArea: document.getElementById('game-area'),
  gameMessage: document.getElementById('game-message'),
  newGameButton: document.getElementById('new-game-button'),
  checkGameButton: document.getElementById('check-game-button'),
  editor: document.getElementById('custom-data-editor'),
  saveCustomData: document.getElementById('save-custom-data'),
  resetCustomData: document.getElementById('reset-custom-data'),
  exportCustomData: document.getElementById('export-custom-data'),
  exportHighScores: document.getElementById('export-high-scores'),
  importHighScoresButton: document.getElementById('import-high-scores-button'),
  importHighScoresInput: document.getElementById('import-high-scores-input'),
  customStatus: document.getElementById('custom-data-status'),
  wordGuessResultModal: document.getElementById('wordguess-result-modal'),
  wordGuessResultBody: document.getElementById('wordguess-result-body'),
  wordGuessPlayAgain: document.getElementById('wordguess-play-again'),
  wordGuessChooseGame: document.getElementById('wordguess-choose-game'),
  wordGuessCloseModal: document.getElementById('wordguess-close-modal')
};

const HIGH_SCORE_CONFIG = {
  wordGuess: [
    { key: 'bestTimeMs', label: 'Best Time', type: 'min-time' },
    { key: 'fewestGuesses', label: 'Fewest Guesses', type: 'min-count' }
  ],
  groupSort: [
    { key: 'bestTimeMs', label: 'Best Time', type: 'min-time' },
    { key: 'fewestMistakes', label: 'Fewest Misses', type: 'min-count' }
  ],
  strands: [
    { key: 'bestTimeMs', label: 'Best Time', type: 'min-time' },
    { key: 'fewestHints', label: 'Fewest Hints', type: 'min-count' }
  ],
  sudoku: [
    { key: 'bestTimeMs', label: 'Best Time', type: 'min-time' }
  ],
  nonogram: [
    { key: 'bestTimeMs', label: 'Best Time', type: 'min-time' }
  ],
  queens: [
    { key: 'bestTimeMs', label: 'Best Time', type: 'min-time' }
  ],
  pinpoint: [
    { key: 'bestTimeMs', label: 'Best Time', type: 'min-time' },
    { key: 'fewestMistakes', label: 'Fewest Misses', type: 'min-count' }
  ],
  minesweeper: [
    { key: 'bestTimeMs', label: 'Best Time', type: 'min-time' }
  ],
  solitaire: [
    { key: 'bestTimeMs', label: 'Best Time', type: 'min-time' },
    { key: 'fewestMoves', label: 'Fewest Moves', type: 'min-count' }
  ],
  memory: [
    { key: 'bestTimeMs', label: 'Best Time', type: 'min-time' },
    { key: 'fewestTurns', label: 'Fewest Turns', type: 'min-count' }
  ],
  blockBreaker: [
    { key: 'bestScore', label: 'Most Bricks', type: 'max-count' }
  ],
  merge: [
    { key: 'bestScore', label: 'High Score', type: 'max-count' }
  ]
};

const DEFAULT_HIGH_SCORES = {
  version: 1,
  games: {}
};

const app = {
  currentView: 'home',
  activeGame: 'wordGuess',
  homeFilter: 'all',
  customizerOpen: false,
  customData: loadCustomData(),
  highScores: loadHighScores(),
  states: {},
  lastRandomSelections: {},
  mergeBest: 0,
  wordGuessResult: null,
  runtime: {
    snakeTimer: null,
    popcornTimer: null,
    mergeAnimationTimer: null,
    blockBreakerTimer: null,
    minesweeperTimer: null,
    baseballTimer: null,
    chessTimer: null,
    sudokuCompareTimer: null,
    queensCompareTimer: null,
    dictionaryWordSet: null
  }
};

const SNAKE_COMBO_WINDOW_MS = 120;
const SNAKE_REDEMPTION_MS = 90;
const SNAKE_LIGHT_RADIUS = 5;
const SNAKE_MAGNET_STEP_EVERY = 2;
const SNAKE_BOARD_PRESETS = {
  small: 12,
  medium: 18,
  large: 24
};
const SNAKE_SPEED_PRESETS = {
  slow: 5,
  medium: 8,
  fast: 12
};
const SNAKE_FRUIT_PRESETS = [1, 3, 5, 10];
const SNAKE_MODE_OPTIONS = [
  { id: 'normal', label: 'Normal', description: 'Classic snake rules.', implemented: true },
  { id: 'twoHeaded', label: 'Two Headed', description: 'Eating flips head and tail.', implemented: true },
  { id: 'peace', label: 'Peace', description: 'No crash game over until the board is full.', implemented: true },
  { id: 'skull', label: 'Skull', description: 'Poison fruit adds chaos.', implemented: true },
  { id: 'lightbulb', label: 'Lightbulb', description: 'Only nearby squares are visible.', implemented: true },
  { id: 'magnet', label: 'Magnet', description: 'Fruit drifts toward the head.', implemented: true },
  { id: 'blender', label: 'Blender', description: 'Combine several special rules.', implemented: true }
];
const SNAKE_BLENDABLE_MODE_IDS = ['twoHeaded', 'peace', 'skull', 'lightbulb', 'magnet'];
const SNAKE_COLOR_OPTIONS = {
  red: { label: 'Red', dark: [165, 21, 49], light: [255, 163, 182] },
  yellow: { label: 'Yellow', dark: [173, 124, 13], light: [255, 232, 143] },
  blue: { label: 'Blue', dark: [21, 74, 165], light: [152, 201, 255] },
  black: { label: 'Black', dark: [24, 24, 24], light: [24, 24, 24] },
  white: { label: 'White', dark: [248, 248, 248], light: [248, 248, 248] }
};
const SPELLING_BEE_PACKS = [
  {
    center: 'A',
    outer: ['B', 'E', 'L', 'N', 'R', 'T'],
    words: ['ABLE', 'ABATE', 'ALBERT', 'ALTERNATE', 'BANAL', 'BANE', 'BANNER', 'BARREL', 'LATE', 'LATER', 'RATE', 'RATABLE', 'TABLE', 'TABERNA', 'TEAL', 'TERN']
  },
  {
    center: 'O',
    outer: ['C', 'D', 'E', 'L', 'N', 'R'],
    words: ['CODE', 'COOLER', 'COLON', 'COLOR', 'COOLED', 'LONE', 'LONER', 'NOODLE', 'OLDER', 'ORDER', 'RECOLOR', 'ROLE', 'RONDO']
  },
  {
    center: 'I',
    outer: ['D', 'E', 'L', 'M', 'N', 'R', 'T'],
    words: ['DIRT', 'DRILL', 'LIMIT', 'LIMITER', 'LINER', 'MILD', 'MINT', 'TIDIER', 'TIMID', 'TINIER', 'TRIM', 'TRIMMER']
  }
];
const MEMORY_ITEMS = [
  { id: 'sun', label: 'Sun', icon: 'sun' },
  { id: 'moon', label: 'Moon', icon: 'moon' },
  { id: 'star', label: 'Star', icon: 'star' },
  { id: 'wave', label: 'Wave', icon: 'wave' },
  { id: 'tree', label: 'Tree', icon: 'tree' },
  { id: 'bolt', label: 'Bolt', icon: 'bolt' },
  { id: 'fish', label: 'Fish', icon: 'fish' },
  { id: 'note', label: 'Note', icon: 'note' },
  { id: 'leaf', label: 'Leaf', icon: 'leaf' },
  { id: 'planet', label: 'Planet', icon: 'planet' },
  { id: 'cloud', label: 'Cloud', icon: 'cloud' },
  { id: 'shell', label: 'Shell', icon: 'shell' }
];
const MEMORY_DIFFICULTIES = {
  easy: { label: 'Easy', pairs: 4, columns: 4 },
  medium: { label: 'Medium', pairs: 8, columns: 4 },
  hard: { label: 'Hard', pairs: 12, columns: 6 }
};
const BLANK_SLATE_WORDS = [
  'street', 'dog', 'school', 'star', 'book', 'game', 'house', 'car', 'cat', 'tree',
  'fire', 'shoe', 'phone', 'light', 'water', 'dance', 'music', 'party', 'fish', 'cake',
  'pizza', 'money', 'watch', 'train', 'ball', 'bird', 'snow', 'cookie', 'beach', 'chair',
  'glass', 'dream', 'bed', 'laugh', 'time'
];
const CARD_SUITS = [
  { id: 'hearts', symbol: 'H', color: 'red' },
  { id: 'diamonds', symbol: 'D', color: 'red' },
  { id: 'clubs', symbol: 'C', color: 'black' },
  { id: 'spades', symbol: 'S', color: 'black' }
];
const SOLITAIRE_CARD_IMAGE_ROOT = 'PNG-cards';
const SOLITAIRE_CARD_BACK_IMAGE = `${SOLITAIRE_CARD_IMAGE_ROOT}/back-of-card.png`;
const CHESS_FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const CHESS_PIECE_GLYPHS = {
  k: '♔',
  q: '♕',
  r: '♖',
  b: '♗',
  n: '♘',
  p: '♙'
};
const CHESS_TIME_GROUPS = [
  {
    label: 'Bullet',
    options: [
      { id: '20-1', label: '20 sec | 1', seconds: 20, increment: 1 },
      { id: '30-0', label: '30 sec', seconds: 30, increment: 0 },
      { id: '60-0', label: '1 min', seconds: 60, increment: 0 },
      { id: '60-1', label: '1 | 1', seconds: 60, increment: 1 },
      { id: '120-1', label: '2 | 1', seconds: 120, increment: 1 }
    ]
  },
  {
    label: 'Blitz',
    options: [
      { id: '180-0', label: '3 min', seconds: 180, increment: 0 },
      { id: '180-2', label: '3 | 2', seconds: 180, increment: 2 },
      { id: '300-0', label: '5 min', seconds: 300, increment: 0 },
      { id: '300-2', label: '5 | 2', seconds: 300, increment: 2 },
      { id: '300-5', label: '5 | 5', seconds: 300, increment: 5 }
    ]
  },
  {
    label: 'Rapid',
    options: [
      { id: '600-0', label: '10 min', seconds: 600, increment: 0 },
      { id: '600-5', label: '10 | 5', seconds: 600, increment: 5 },
      { id: '900-10', label: '15 | 10', seconds: 900, increment: 10 },
      { id: '1200-0', label: '20 min', seconds: 1200, increment: 0 },
      { id: '1800-0', label: '30 min', seconds: 1800, increment: 0 },
      { id: '3600-0', label: '60 min', seconds: 3600, increment: 0 }
    ]
  }
];

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function safeParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function loadCustomData() {
  const parsed = safeParse(localStorage.getItem(STORAGE_KEY), null);
  return parsed && typeof parsed === 'object' ? parsed : deepClone(DEFAULT_CUSTOM_DATA);
}

function loadHighScores() {
  const parsed = safeParse(localStorage.getItem(HIGH_SCORE_STORAGE_KEY), null);
  if (parsed && parsed.version === 1 && parsed.games && typeof parsed.games === 'object') {
    return parsed;
  }
  return deepClone(DEFAULT_HIGH_SCORES);
}

function hydrateHighScores() {
  const legacyMergeBest = Number.parseInt(localStorage.getItem(MERGE_BEST_KEY), 10);
  const storedMergeBest = app.highScores?.games?.merge?.bestScore;
  const bestScore = Math.max(
    Number.isFinite(legacyMergeBest) ? legacyMergeBest : 0,
    typeof storedMergeBest === 'number' && Number.isFinite(storedMergeBest) ? storedMergeBest : 0
  );

  app.mergeBest = bestScore;
  if (bestScore > 0) {
    ensureGameHighScoreBucket('merge').bestScore = bestScore;
    localStorage.setItem(MERGE_BEST_KEY, String(bestScore));
  } else {
    localStorage.removeItem(MERGE_BEST_KEY);
  }
  localStorage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(app.highScores));
}

function saveCustomData(value) {
  app.customData = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

function saveHighScores() {
  localStorage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(app.highScores));
  const mergeBest = app.highScores?.games?.merge?.bestScore;
  app.mergeBest = typeof mergeBest === 'number' && Number.isFinite(mergeBest) ? mergeBest : 0;
  if (app.mergeBest > 0) localStorage.setItem(MERGE_BEST_KEY, String(app.mergeBest));
  else localStorage.removeItem(MERGE_BEST_KEY);
}

function refreshCustomEditor() {
  refs.editor.value = JSON.stringify(app.customData, null, 2);
}

function setCustomStatus(text, tone = '') {
  refs.customStatus.textContent = text;
  refs.customStatus.className = tone ? `custom-status ${tone}` : 'custom-status';
}

function setGameMessage(text, tone = '') {
  refs.gameMessage.textContent = text;
  refs.gameMessage.className = tone ? `game-message ${tone}` : 'game-message';
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor((ms || 0) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours) return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function getElapsedSince(startedAt, finishedAt = null) {
  if (!startedAt) return 0;
  const end = finishedAt || Date.now();
  return Math.max(0, end - startedAt);
}

function ensureGameHighScoreBucket(gameId) {
  if (!app.highScores.games[gameId]) app.highScores.games[gameId] = {};
  return app.highScores.games[gameId];
}

function recordHighScore(gameId, payload) {
  const config = HIGH_SCORE_CONFIG[gameId];
  if (!config) return false;
  const gameScores = ensureGameHighScoreBucket(gameId);
  let changed = false;

  config.forEach(metric => {
    const nextValue = payload?.[metric.key];
    if (typeof nextValue !== 'number' || !Number.isFinite(nextValue)) return;
    const currentValue = gameScores[metric.key];
    const shouldReplace = typeof currentValue !== 'number'
      ? true
      : metric.type.startsWith('min')
        ? nextValue < currentValue
        : nextValue > currentValue;
    if (shouldReplace) {
      gameScores[metric.key] = nextValue;
      changed = true;
    }
  });

  if (changed) saveHighScores();
  return changed;
}

function getHighScoreDisplayValue(metric, value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return 'None';
  if (metric.type === 'min-time') return formatDuration(value);
  return String(value);
}

function renderHighScoreSummary(gameId) {
  const config = HIGH_SCORE_CONFIG[gameId];
  if (!config?.length) return;
  const gameScores = app.highScores.games[gameId] || {};
  const summary = `
    <div class="score-strip">
      ${config.map(metric => `
        <div class="score-pill">
          <span>${metric.label}</span>
          <strong>${getHighScoreDisplayValue(metric, gameScores[metric.key])}</strong>
        </div>
      `).join('')}
    </div>
  `;
  refs.gameTools.insertAdjacentHTML('beforeend', summary);
}

function submitGameScore(state, gameId, payload) {
  if (!state || state.scoreSubmitted) return;
  recordHighScore(gameId, payload);
  state.scoreSubmitted = true;
}

function normalizeImportedHighScores(value) {
  if (!value || typeof value !== 'object') return null;
  if (value.version !== 1 || !value.games || typeof value.games !== 'object') return null;
  const normalized = deepClone(DEFAULT_HIGH_SCORES);

  Object.entries(HIGH_SCORE_CONFIG).forEach(([gameId, metrics]) => {
    const source = value.games[gameId];
    if (!source || typeof source !== 'object') return;
    normalized.games[gameId] = {};
    metrics.forEach(metric => {
      const metricValue = source[metric.key];
      if (typeof metricValue === 'number' && Number.isFinite(metricValue)) {
        normalized.games[gameId][metric.key] = metricValue;
      }
    });
    if (!Object.keys(normalized.games[gameId]).length) delete normalized.games[gameId];
  });

  return normalized;
}

function importHighScoresFromText(rawText) {
  const parsed = safeParse(rawText, null);
  const normalized = normalizeImportedHighScores(parsed);
  if (!normalized) {
    setCustomStatus('High score file could not be imported. It must be a Puzzle USB high score JSON file.', 'danger');
    return;
  }
  app.highScores = normalized;
  saveHighScores();
  renderApp();
  setCustomStatus('High scores imported for this browser.', 'success');
}

function normalizeWord(word) {
  return String(word || '').trim().toUpperCase().replace(/[^A-Z]/g, '');
}

function sample(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function arraysEqual(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function sampleWithoutImmediateRepeat(list, key, getId = value => value) {
  if (!list.length) return undefined;
  const previous = app.lastRandomSelections[key];
  const pool = list.filter(item => getId(item) !== previous);
  const choice = sample(pool.length ? pool : list);
  app.lastRandomSelections[key] = getId(choice);
  return choice;
}

function readNumber(value, fallback, min, max) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

function normalizeWordList(source) {
  return [...new Set((Array.isArray(source) ? source : []).map(normalizeWord).filter(word => word.length === 5))];
}

function getWordleAnswerList() {
  const override = normalizeWordList(app.customData.wordGuess?.answerWordsOverride);
  if (override.length) return override;

  const builtIn = normalizeWordList(window.PUZZLE_USB_WORDLE_ANSWERS);
  if (builtIn.length) return builtIn;

  const legacy = normalizeWordList(app.customData.wordGuess?.words);
  return legacy.length ? legacy : normalizeWordList(DEFAULT_CUSTOM_DATA.wordGuess.words);
}

function getWordleAcceptedGuessList() {
  const acceptedOverride = normalizeWordList(app.customData.wordGuess?.acceptedGuessWordsOverride);
  const answerList = getWordleAnswerList();
  const builtInAccepted = normalizeWordList(window.PUZZLE_USB_WORDLE_ACCEPTED_GUESSES);
  const legacy = normalizeWordList(app.customData.wordGuess?.words);

  return [...new Set([
    ...answerList,
    ...builtInAccepted,
    ...acceptedOverride,
    ...legacy
  ])];
}

function getDictionaryWordList() {
  return Array.isArray(window.PUZZLE_USB_DICTIONARY_WORDS) ? window.PUZZLE_USB_DICTIONARY_WORDS : [];
}

function getDictionaryWordSet() {
  if (!app.runtime.dictionaryWordSet) {
    app.runtime.dictionaryWordSet = new Set(
      getDictionaryWordList()
        .map(word => String(word || '').trim().toLowerCase())
        .filter(word => word.length > 2)
    );
  }
  return app.runtime.dictionaryWordSet;
}

function getGroupPacks() {
  const source = Array.isArray(app.customData.groupSort?.packs)
    ? app.customData.groupSort.packs
    : DEFAULT_CUSTOM_DATA.groupSort.packs;
  const packs = source.map(pack => {
    const groups = Array.isArray(pack?.groups) ? pack.groups.map(group => {
      const items = Array.isArray(group?.items)
        ? group.items.map(item => String(item || '').trim()).filter(Boolean).slice(0, 4)
        : [];
      return { name: String(group?.name || '').trim(), items };
    }).filter(group => group.name && group.items.length === 4) : [];
    const uniqueItems = new Set(groups.flatMap(group => group.items.map(item => item.toUpperCase())));
    if (groups.length !== 4 || uniqueItems.size !== 16) return null;
    return { title: String(pack?.title || 'Category Pack').trim() || 'Category Pack', groups };
  }).filter(Boolean);
  return packs.length ? packs : deepClone(DEFAULT_CUSTOM_DATA.groupSort.packs);
}

function getNonogramPuzzles() {
  const source = Array.isArray(app.customData.nonogram?.puzzles)
    ? app.customData.nonogram.puzzles
    : DEFAULT_CUSTOM_DATA.nonogram.puzzles;
  const puzzles = source.map(puzzle => {
    const rows = Array.isArray(puzzle?.grid)
      ? puzzle.grid.map(row => String(row || '').toUpperCase().replace(/[^X.\-01]/g, ''))
      : [];
    if (!rows.length) return null;
    const width = rows[0].length;
    if (!width || rows.some(row => row.length !== width)) return null;
    return { title: String(puzzle?.title || 'Picture').trim() || 'Picture', grid: rows };
  }).filter(Boolean);
  return puzzles.length ? puzzles : deepClone(DEFAULT_CUSTOM_DATA.nonogram.puzzles);
}

function getStrandsBoards() {
  const source = Array.isArray(app.customData.strands?.boards)
    ? app.customData.strands.boards
    : DEFAULT_CUSTOM_DATA.strands.boards;
  const boards = source.map(board => {
    const title = String(board?.title || 'Strands Board').trim() || 'Strands Board';
    const clue = String(board?.clue || '').trim();
    const spangram = normalizeWord(board?.spangram);
    const startingBoard = Array.isArray(board?.startingBoard)
      ? board.startingBoard.map(row => String(row || '').trim().toUpperCase())
      : [];
    const width = startingBoard[0]?.length || 0;
    if (!clue || !spangram || !startingBoard.length || startingBoard.some(row => row.length !== width)) return null;
    const themeCoords = board?.themeCoords && typeof board.themeCoords === 'object' ? board.themeCoords : {};
    const normalizedThemeCoords = Object.fromEntries(
      Object.entries(themeCoords)
        .map(([word, coords]) => [normalizeWord(word), Array.isArray(coords) ? coords.map(pair => [Number(pair[0]), Number(pair[1])]) : []])
        .filter(([, coords]) => coords.length)
    );
    const solutions = Array.isArray(board?.solutions)
      ? board.solutions.map(normalizeWord).filter(Boolean)
      : Object.keys(normalizedThemeCoords);
    const spangramCoords = Array.isArray(board?.spangramCoords)
      ? board.spangramCoords.map(pair => [Number(pair[0]), Number(pair[1])])
      : [];
    return { title, clue, spangram, startingBoard, solutions, themeCoords: normalizedThemeCoords, spangramCoords };
  }).filter(Boolean);
  return boards.length ? boards : deepClone(DEFAULT_CUSTOM_DATA.strands.boards);
}

function getPinpointPacks() {
  const source = Array.isArray(app.customData.pinpoint?.packs)
    ? app.customData.pinpoint.packs.concat(DEFAULT_CUSTOM_DATA.pinpoint.packs)
    : DEFAULT_CUSTOM_DATA.pinpoint.packs;
  const seenAnswers = new Set();
  const packs = source.map(pack => {
    const clues = Array.isArray(pack?.clues)
      ? pack.clues.map(clue => String(clue || '').trim()).filter(Boolean)
      : [];
    const answer = String(pack?.answer || '').trim().toUpperCase();
    if (!answer || clues.length < 2) return null;
    if (seenAnswers.has(answer)) return null;
    seenAnswers.add(answer);
    return { answer, clues };
  }).filter(Boolean);
  return packs.length ? packs : deepClone(DEFAULT_CUSTOM_DATA.pinpoint.packs);
}

function getQueensSizes() {
  const source = Array.isArray(app.customData.queens?.sizes)
    ? app.customData.queens.sizes
    : DEFAULT_CUSTOM_DATA.queens.sizes;
  const sizes = [...new Set(source.map(size => readNumber(size, 6, 4, 8)))].sort((a, b) => a - b);
  return sizes.length ? sizes : DEFAULT_CUSTOM_DATA.queens.sizes.slice();
}

function getSnakeSettings() {
  const source = app.customData.snake || {};
  const gridSize = readNumber(source.gridSize, DEFAULT_CUSTOM_DATA.snake.gridSize, 12, 24);
  const blocksPerSecond = Number((1000 / readNumber(source.stepMs, DEFAULT_CUSTOM_DATA.snake.stepMs, 70, 240)).toFixed(1));
  const boardPreset = gridSize <= 13 ? 'small' : (gridSize >= 22 ? 'large' : 'medium');
  const speedPreset = blocksPerSecond <= 5.5 ? 'slow' : (blocksPerSecond >= 11 ? 'fast' : 'medium');
  const blenderModes = [...new Set((Array.isArray(source.blenderModes) ? source.blenderModes : [])
    .filter(modeId => SNAKE_BLENDABLE_MODE_IDS.includes(modeId)))];
  return {
    boardPreset,
    gridSize,
    speedPreset,
    blocksPerSecond,
    fruitCount: readNumber(source.fruitCount, 1, 1, getSnakeMaxFruitCount(gridSize)),
    color: typeof source.color === 'string' && SNAKE_COLOR_OPTIONS[source.color] ? source.color : 'blue',
    mode: typeof source.mode === 'string' && SNAKE_MODE_OPTIONS.some(option => option.id === source.mode) ? source.mode : 'normal',
    blenderModes
  };
}

function getPopcornSettings() {
  const source = app.customData.popcorn || {};
  return {
    target: readNumber(source.target, DEFAULT_CUSTOM_DATA.popcorn.target, 10, 60),
    maxBurns: readNumber(source.maxBurns, DEFAULT_CUSTOM_DATA.popcorn.maxBurns, 3, 10),
    spawnEveryTicks: readNumber(source.spawnEveryTicks, DEFAULT_CUSTOM_DATA.popcorn.spawnEveryTicks, 1, 5)
  };
}

function getImposterWordPool(difficulty) {
  const levels = Array.isArray(window.PUZZLE_USB_IMPOSTER_WORDS?.levels) ? window.PUZZLE_USB_IMPOSTER_WORDS.levels : [];
  return levels
    .filter(level => level.difficulty === difficulty)
    .flatMap(level => level.words || []);
}

function createWordGuessState() {
  const answers = getWordleAnswerList();
  return {
    solution: sampleWithoutImmediateRepeat(answers, 'wordGuess'),
    guesses: [],
    current: '',
    status: 'playing',
    startedAt: Date.now(),
    scoreSubmitted: false
  };
}

function createGroupSortState() {
  const pack = sampleWithoutImmediateRepeat(getGroupPacks(), 'groupSort', entry => entry.title);
  const groups = pack.groups.map((group, index) => ({
    id: `g${index}`,
    color: ['#ae5a4b', '#5f8d64', '#4f75b9', '#c38b2d'][index],
    name: group.name,
    items: group.items.slice()
  }));
  return {
    title: pack.title,
    groups,
    tiles: shuffle(groups.flatMap(group => group.items.map((item, itemIndex) => ({
      id: `${group.id}_${itemIndex}`,
      label: item,
      groupId: group.id
    })))),
    selectedIds: [],
    solvedGroupIds: [],
    mistakes: 0,
    startedAt: Date.now(),
    scoreSubmitted: false
  };
}

function buildSolvedSudoku() {
  const base = 3;
  const side = base * base;
  const pattern = (row, col) => (base * (row % base) + Math.floor(row / base) + col) % side;
  const rBase = [0, 1, 2];
  const rows = shuffle(rBase).flatMap(group => shuffle(rBase).map(row => group * base + row));
  const cols = shuffle(rBase).flatMap(group => shuffle(rBase).map(col => group * base + col));
  const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return rows.map(row => cols.map(col => nums[pattern(row, col)]));
}

function cloneGrid(grid) {
  return grid.map(row => row.slice());
}

function getSudokuRemovalTarget(difficulty) {
  return { easy: 36, medium: 46, hard: 54 }[difficulty] || 46;
}

function getSudokuCandidates(board, row, col) {
  if (board[row][col]) return [];
  const blocked = new Set();
  for (let index = 0; index < 9; index += 1) {
    if (board[row][index]) blocked.add(board[row][index]);
    if (board[index][col]) blocked.add(board[index][col]);
  }
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let nextRow = boxRow; nextRow < boxRow + 3; nextRow += 1) {
    for (let nextCol = boxCol; nextCol < boxCol + 3; nextCol += 1) {
      if (board[nextRow][nextCol]) blocked.add(board[nextRow][nextCol]);
    }
  }
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(value => !blocked.has(value));
}

function getSudokuUnits() {
  const units = [];
  for (let row = 0; row < 9; row += 1) units.push(Array.from({ length: 9 }, (_, col) => [row, col]));
  for (let col = 0; col < 9; col += 1) units.push(Array.from({ length: 9 }, (_, row) => [row, col]));
  for (let boxRow = 0; boxRow < 3; boxRow += 1) {
    for (let boxCol = 0; boxCol < 3; boxCol += 1) {
      const unit = [];
      for (let row = 0; row < 3; row += 1) {
        for (let col = 0; col < 3; col += 1) unit.push([boxRow * 3 + row, boxCol * 3 + col]);
      }
      units.push(unit);
    }
  }
  return units;
}

function buildSudokuCandidateGrid(board) {
  return board.map((row, rowIndex) => row.map((value, colIndex) => new Set(value ? [] : getSudokuCandidates(board, rowIndex, colIndex))));
}

function pruneSudokuCandidateGrid(candidateGrid) {
  let changed = false;
  const units = getSudokuUnits();

  units.forEach(unit => {
    const pairs = {};
    unit.forEach(([row, col]) => {
      const candidates = candidateGrid[row][col];
      if (candidates.size !== 2) return;
      const key = [...candidates].sort((a, b) => a - b).join(',');
      if (!pairs[key]) pairs[key] = [];
      pairs[key].push([row, col]);
    });
    Object.entries(pairs).forEach(([key, cells]) => {
      if (cells.length !== 2) return;
      const digits = key.split(',').map(Number);
      unit.forEach(([row, col]) => {
        if (cells.some(([cellRow, cellCol]) => cellRow === row && cellCol === col)) return;
        digits.forEach(digit => {
          if (candidateGrid[row][col].delete(digit)) changed = true;
        });
      });
    });
  });

  for (let boxRow = 0; boxRow < 3; boxRow += 1) {
    for (let boxCol = 0; boxCol < 3; boxCol += 1) {
      for (let digit = 1; digit <= 9; digit += 1) {
        const boxCells = [];
        for (let row = boxRow * 3; row < boxRow * 3 + 3; row += 1) {
          for (let col = boxCol * 3; col < boxCol * 3 + 3; col += 1) {
            if (candidateGrid[row][col].has(digit)) boxCells.push([row, col]);
          }
        }
        if (!boxCells.length) continue;
        if (boxCells.every(([row]) => row === boxCells[0][0])) {
          const row = boxCells[0][0];
          for (let col = 0; col < 9; col += 1) {
            if (Math.floor(col / 3) === boxCol) continue;
            if (candidateGrid[row][col].delete(digit)) changed = true;
          }
        }
        if (boxCells.every(([, col]) => col === boxCells[0][1])) {
          const col = boxCells[0][1];
          for (let row = 0; row < 9; row += 1) {
            if (Math.floor(row / 3) === boxRow) continue;
            if (candidateGrid[row][col].delete(digit)) changed = true;
          }
        }
      }
    }
  }

  for (let row = 0; row < 9; row += 1) {
    for (let digit = 1; digit <= 9; digit += 1) {
      const rowCells = Array.from({ length: 9 }, (_, col) => [row, col]).filter(([, col]) => candidateGrid[row][col].has(digit));
      if (!rowCells.length) continue;
      if (rowCells.every(([, col]) => Math.floor(col / 3) === Math.floor(rowCells[0][1] / 3))) {
        const boxRow = Math.floor(row / 3);
        const boxCol = Math.floor(rowCells[0][1] / 3);
        for (let nextRow = boxRow * 3; nextRow < boxRow * 3 + 3; nextRow += 1) {
          for (let nextCol = boxCol * 3; nextCol < boxCol * 3 + 3; nextCol += 1) {
            if (nextRow === row) continue;
            if (candidateGrid[nextRow][nextCol].delete(digit)) changed = true;
          }
        }
      }
    }
  }

  for (let col = 0; col < 9; col += 1) {
    for (let digit = 1; digit <= 9; digit += 1) {
      const colCells = Array.from({ length: 9 }, (_, row) => [row, col]).filter(([row]) => candidateGrid[row][col].has(digit));
      if (!colCells.length) continue;
      if (colCells.every(([row]) => Math.floor(row / 3) === Math.floor(colCells[0][0] / 3))) {
        const boxRow = Math.floor(colCells[0][0] / 3);
        const boxCol = Math.floor(col / 3);
        for (let nextRow = boxRow * 3; nextRow < boxRow * 3 + 3; nextRow += 1) {
          for (let nextCol = boxCol * 3; nextCol < boxCol * 3 + 3; nextCol += 1) {
            if (nextCol === col) continue;
            if (candidateGrid[nextRow][nextCol].delete(digit)) changed = true;
          }
        }
      }
    }
  }

  return changed;
}

function collectSudokuPlacements(candidateGrid) {
  const placements = new Map();

  candidateGrid.forEach((row, rowIndex) => {
    row.forEach((candidates, colIndex) => {
      if (candidates.size === 1) placements.set(`${rowIndex}-${colIndex}`, [...candidates][0]);
    });
  });

  getSudokuUnits().forEach(unit => {
    for (let digit = 1; digit <= 9; digit += 1) {
      const cells = unit.filter(([row, col]) => candidateGrid[row][col].has(digit));
      if (cells.length !== 1) continue;
      const [row, col] = cells[0];
      placements.set(`${row}-${col}`, digit);
    }
  });

  return [...placements.entries()].map(([key, digit]) => {
    const [row, col] = key.split('-').map(Number);
    return { row, col, digit };
  });
}

function solveSudokuByLogic(board) {
  const working = cloneGrid(board);

  while (true) {
    const candidateGrid = buildSudokuCandidateGrid(working);
    let invalid = false;
    candidateGrid.forEach((row, rowIndex) => {
      row.forEach((candidates, colIndex) => {
        if (!working[rowIndex][colIndex] && candidates.size === 0) invalid = true;
      });
    });
    if (invalid) return { solved: false, valid: false, board: working };

    while (pruneSudokuCandidateGrid(candidateGrid)) {
      let prunedInvalid = false;
      candidateGrid.forEach((row, rowIndex) => {
        row.forEach((candidates, colIndex) => {
          if (!working[rowIndex][colIndex] && candidates.size === 0) prunedInvalid = true;
        });
      });
      if (prunedInvalid) return { solved: false, valid: false, board: working };
    }

    const placements = collectSudokuPlacements(candidateGrid);
    if (!placements.length) break;
    placements.forEach(({ row, col, digit }) => {
      working[row][col] = digit;
    });
  }

  return {
    solved: working.every(row => row.every(Boolean)),
    valid: true,
    board: working
  };
}

function countSudokuSolutions(board, limit = 2) {
  const working = cloneGrid(board);

  function search() {
    let target = null;
    for (let row = 0; row < 9; row += 1) {
      for (let col = 0; col < 9; col += 1) {
        if (working[row][col]) continue;
        const candidates = getSudokuCandidates(working, row, col);
        if (!candidates.length) return 0;
        if (!target || candidates.length < target.candidates.length) target = { row, col, candidates };
      }
    }
    if (!target) return 1;

    let total = 0;
    target.candidates.forEach(digit => {
      if (total >= limit) return;
      working[target.row][target.col] = digit;
      total += search();
      working[target.row][target.col] = 0;
    });
    return total;
  }

  return search();
}

function buildSudokuPuzzle(solution, difficulty) {
  const removalsTarget = getSudokuRemovalTarget(difficulty);
  let bestPuzzle = cloneGrid(solution);
  let bestRemoved = 0;

  for (let attempt = 0; attempt < 10; attempt += 1) {
    const puzzle = cloneGrid(solution);
    let removed = 0;

    shuffle(Array.from({ length: 81 }, (_, index) => index)).forEach(index => {
      if (removed >= removalsTarget) return;
      const row = Math.floor(index / 9);
      const col = index % 9;
      const previous = puzzle[row][col];
      puzzle[row][col] = 0;
      const logicResult = solveSudokuByLogic(puzzle);
      if (!logicResult.valid
        || !logicResult.solved
        || !arraysEqual(logicResult.board.flat(), solution.flat())
        || countSudokuSolutions(puzzle, 2) !== 1) {
        puzzle[row][col] = previous;
        return;
      }
      removed += 1;
    });

    if (removed > bestRemoved) {
      bestRemoved = removed;
      bestPuzzle = cloneGrid(puzzle);
    }
    if (bestRemoved >= removalsTarget) break;
  }

  return { puzzle: bestPuzzle, removed: bestRemoved };
}

function createSudokuState(difficulty = 'medium') {
  const removalsTarget = getSudokuRemovalTarget(difficulty);
  let best = null;

  for (let attempt = 0; attempt < 8; attempt += 1) {
    const solution = buildSolvedSudoku();
    const result = buildSudokuPuzzle(solution, difficulty);
    if (!best || result.removed > best.removed) best = { ...result, solution };
    if (result.removed >= removalsTarget) break;
  }

  return {
    difficulty,
    solution: best.solution,
    puzzle: best.puzzle,
    board: cloneGrid(best.puzzle),
    feedback: {},
    lastCheckMilestone: 0,
    startedAt: Date.now(),
    showSolution: false
  };
}

function normalizeNonogramGrid(grid) {
  return grid.map(row => row.split('').map(char => char === 'X' || char === '1'));
}

function createNonogramState() {
  const puzzle = sample(getNonogramPuzzles());
  const solution = normalizeNonogramGrid(puzzle.grid);
  return {
    title: puzzle.title,
    solution,
    board: solution.map(row => row.map(() => 0)),
    startedAt: Date.now(),
    solved: false,
    scoreSubmitted: false
  };
}

function generateQueensSolution(size) {
  const cols = Array(size).fill(-1);
  const used = new Set();
  const fallbackMap = {
    4: [1, 3, 0, 2],
    5: [0, 2, 4, 1, 3],
    6: [1, 3, 5, 0, 2, 4],
    7: [0, 2, 4, 6, 1, 3, 5],
    8: [1, 3, 5, 7, 0, 2, 4, 6]
  };

  function backtrack(row) {
    if (row === size) return true;
    for (const col of shuffle(Array.from({ length: size }, (_, index) => index))) {
      if (used.has(col)) continue;
      if (row > 0 && Math.abs(cols[row - 1] - col) <= 1) continue;
      cols[row] = col;
      used.add(col);
      if (backtrack(row + 1)) return true;
      used.delete(col);
      cols[row] = -1;
    }
    return false;
  }

  if (backtrack(0)) return cols;
  return fallbackMap[size] ? fallbackMap[size].slice() : Array.from({ length: size }, (_, index) => (index * 2) % size);
}

function buildQueensRegions(size, solution) {
  const regions = Array.from({ length: size }, () => Array(size).fill(-1));
  const frontiers = Array.from({ length: size }, () => []);
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  function pushNeighbors(row, col, regionId) {
    dirs.forEach(([dr, dc]) => {
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (nextRow < 0 || nextRow >= size || nextCol < 0 || nextCol >= size) return;
      if (regions[nextRow][nextCol] !== -1) return;
      frontiers[regionId].push(`${nextRow},${nextCol}`);
    });
  }

  solution.forEach((col, row) => {
    regions[row][col] = row;
    pushNeighbors(row, col, row);
  });

  let remaining = size * size - size;
  let guard = 0;
  while (remaining > 0 && guard < size * size * 30) {
    guard += 1;
    const regionChoices = shuffle(Array.from({ length: size }, (_, index) => index)).filter(index => frontiers[index].length);
    if (!regionChoices.length) break;
    const regionId = regionChoices[0];
    const key = frontiers[regionId].splice(Math.floor(Math.random() * frontiers[regionId].length), 1)[0];
    const [row, col] = key.split(',').map(Number);
    if (regions[row][col] !== -1) continue;
    regions[row][col] = regionId;
    remaining -= 1;
    pushNeighbors(row, col, regionId);
  }

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      if (regions[row][col] !== -1) continue;
      let bestRegion = 0;
      let bestDistance = Infinity;
      solution.forEach((queenCol, queenRow) => {
        const distance = Math.abs(queenRow - row) + Math.abs(queenCol - col);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestRegion = queenRow;
        }
      });
      regions[row][col] = bestRegion;
    }
  }

  return regions;
}

function cloneQueensLogicBoard(board) {
  return board.map(row => row.slice());
}

function getQueensUnits(size, regions) {
  const rows = Array.from({ length: size }, (_, row) => Array.from({ length: size }, (_, col) => [row, col]));
  const cols = Array.from({ length: size }, (_, col) => Array.from({ length: size }, (_, row) => [row, col]));
  const regionUnits = Array.from({ length: size }, () => []);
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) regionUnits[regions[row][col]].push([row, col]);
  }
  return { rows, cols, regions: regionUnits };
}

function getQueensPeerCells(row, col, size, regions) {
  const peers = new Map();
  for (let index = 0; index < size; index += 1) {
    if (index !== col) peers.set(`${row}-${index}`, [row, index]);
    if (index !== row) peers.set(`${index}-${col}`, [index, col]);
  }
  for (let nextRow = 0; nextRow < size; nextRow += 1) {
    for (let nextCol = 0; nextCol < size; nextCol += 1) {
      if ((nextRow !== row || nextCol !== col) && regions[nextRow][nextCol] === regions[row][col]) {
        peers.set(`${nextRow}-${nextCol}`, [nextRow, nextCol]);
      }
    }
  }
  for (let dr = -1; dr <= 1; dr += 1) {
    for (let dc = -1; dc <= 1; dc += 1) {
      if (!dr && !dc) continue;
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (nextRow < 0 || nextRow >= size || nextCol < 0 || nextCol >= size) continue;
      peers.set(`${nextRow}-${nextCol}`, [nextRow, nextCol]);
    }
  }
  return [...peers.values()];
}

function propagateQueensLogicBoard(board, size, regions) {
  const units = getQueensUnits(size, regions);
  let changed = true;

  while (changed) {
    changed = false;
    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        if (board[row][col] !== 1) continue;
        for (const [peerRow, peerCol] of getQueensPeerCells(row, col, size, regions)) {
          if (board[peerRow][peerCol] === 1) return { valid: false, board };
          if (board[peerRow][peerCol] === 0) {
            board[peerRow][peerCol] = -1;
            changed = true;
          }
        }
      }
    }

    for (const unit of [...units.rows, ...units.cols, ...units.regions]) {
      const queens = unit.filter(([row, col]) => board[row][col] === 1);
      if (queens.length > 1) return { valid: false, board };
      if (queens.length === 1) {
        unit.forEach(([row, col]) => {
          if (board[row][col] === 0) {
            board[row][col] = -1;
            changed = true;
          }
        });
        continue;
      }
      const candidates = unit.filter(([row, col]) => board[row][col] === 0);
      if (!candidates.length) return { valid: false, board };
      if (candidates.length === 1) {
        const [row, col] = candidates[0];
        board[row][col] = 1;
        changed = true;
      }
    }
  }

  return { valid: true, board };
}

function isQueensLogicSolved(board, size, regions) {
  const units = getQueensUnits(size, regions);
  return [...units.rows, ...units.cols, ...units.regions].every(unit => unit.filter(([row, col]) => board[row][col] === 1).length === 1);
}

function extractQueensSolution(board) {
  return board.map(row => row.findIndex(value => value === 1));
}

function solveQueensByLogic(size, regions) {
  const board = Array.from({ length: size }, () => Array(size).fill(0));

  while (true) {
    const propagated = propagateQueensLogicBoard(board, size, regions);
    if (!propagated.valid) return { valid: false, solved: false, board };
    if (isQueensLogicSolved(board, size, regions)) {
      return { valid: true, solved: true, board, solution: extractQueensSolution(board) };
    }

    let changed = false;
    for (let row = 0; row < size && !changed; row += 1) {
      for (let col = 0; col < size && !changed; col += 1) {
        if (board[row][col] !== 0) continue;

        const queenBoard = cloneQueensLogicBoard(board);
        queenBoard[row][col] = 1;
        if (!propagateQueensLogicBoard(queenBoard, size, regions).valid) {
          board[row][col] = -1;
          changed = true;
          break;
        }

        const blockedBoard = cloneQueensLogicBoard(board);
        blockedBoard[row][col] = -1;
        if (!propagateQueensLogicBoard(blockedBoard, size, regions).valid) {
          board[row][col] = 1;
          changed = true;
        }
      }
    }

    if (!changed) return { valid: true, solved: false, board };
  }
}

function countQueensSolutions(regions, limit = 2) {
  const size = regions.length;
  const placements = Array(size).fill(-1);
  const usedCols = new Set();
  const usedRegions = new Set();

  function canPlace(row, col) {
    if (usedCols.has(col) || usedRegions.has(regions[row][col])) return false;
    for (let otherRow = 0; otherRow < size; otherRow += 1) {
      const otherCol = placements[otherRow];
      if (otherCol === -1) continue;
      if (Math.abs(otherRow - row) <= 1 && Math.abs(otherCol - col) <= 1) return false;
    }
    return true;
  }

  function search() {
    let targetRow = -1;
    let targetCandidates = null;
    for (let row = 0; row < size; row += 1) {
      if (placements[row] !== -1) continue;
      const candidates = Array.from({ length: size }, (_, col) => col).filter(col => canPlace(row, col));
      if (!candidates.length) return 0;
      if (!targetCandidates || candidates.length < targetCandidates.length) {
        targetRow = row;
        targetCandidates = candidates;
      }
    }
    if (targetRow === -1) return 1;

    let total = 0;
    for (const col of targetCandidates) {
      placements[targetRow] = col;
      usedCols.add(col);
      usedRegions.add(regions[targetRow][col]);
      total += search();
      placements[targetRow] = -1;
      usedCols.delete(col);
      usedRegions.delete(regions[targetRow][col]);
      if (total >= limit) break;
    }
    return total;
  }

  return search();
}

function createQueensState(size = sample(getQueensSizes())) {
  while (true) {
    const solution = generateQueensSolution(size);
    const regions = buildQueensRegions(size, solution);
    const logicResult = solveQueensByLogic(size, regions);
    if (!logicResult.valid || !logicResult.solved) continue;
    if (!arraysEqual(logicResult.solution, solution)) continue;
    if (countQueensSolutions(regions, 2) !== 1) continue;
    return {
      size,
      solution,
      regions,
      board: Array.from({ length: size }, () => Array(size).fill(0)),
      startedAt: Date.now(),
      showSolution: false,
      scoreSubmitted: false
    };
  }
}

function createPinpointState() {
  const pack = sampleWithoutImmediateRepeat(getPinpointPacks(), 'pinpoint', entry => entry.answer);
  return {
    answer: pack.answer,
    clues: pack.clues.slice(),
    revealed: 1,
    current: '',
    guesses: [],
    solved: false,
    startedAt: Date.now(),
    scoreSubmitted: false
  };
}

function createStrandsState() {
  const board = deepClone(sampleWithoutImmediateRepeat(getStrandsBoards(), 'strands', entry => entry.title));
  return {
    title: board.title,
    clue: board.clue,
    spangram: board.spangram,
    spangramCoords: board.spangramCoords || [],
    startingBoard: board.startingBoard,
    solutions: board.solutions || Object.keys(board.themeCoords),
    themeCoords: board.themeCoords,
    width: board.startingBoard[0].length,
    height: board.startingBoard.length,
    selected: [],
    currentGuess: '',
    foundThemeWords: [],
    foundBonusWords: [],
    foundSpangram: false,
    wordsRemainingForHint: 3,
    hintsUsed: 0,
    solved: false,
    startedAt: Date.now(),
    scoreSubmitted: false
  };
}

function createSnakeSetup() {
  const defaults = getSnakeSettings();
  return {
    boardPreset: defaults.boardPreset,
    gridSize: SNAKE_BOARD_PRESETS[defaults.boardPreset],
    speedPreset: defaults.speedPreset,
    blocksPerSecond: defaults.blocksPerSecond,
    fruitPreset: SNAKE_FRUIT_PRESETS.includes(defaults.fruitCount) ? defaults.fruitCount : null,
    fruitCount: defaults.fruitCount,
    color: defaults.color,
    mode: defaults.mode,
    blenderModes: defaults.blenderModes,
    setupPage: 'base'
  };
}

function getSnakeReservedRow(gridSize) {
  return Math.floor(gridSize / 2);
}

function getSnakeMaxFruitCount(gridSize) {
  const boardArea = gridSize * gridSize;
  return Math.max(1, Math.min(Math.floor(boardArea / 2), boardArea - gridSize));
}

function clampSnakeFruitCount(gridSize, fruitCount) {
  return readNumber(fruitCount, 1, 1, getSnakeMaxFruitCount(gridSize));
}

function buildSnakeRuntime(setup) {
  const center = Math.floor(setup.gridSize / 2);
  const snake = [
    { x: 4, y: center },
    { x: 3, y: center },
    { x: 2, y: center }
  ];
  return {
    screen: 'setup',
    gridSize: setup.gridSize,
    reservedFruitRow: center,
    blocksPerSecond: setup.blocksPerSecond,
    stepMs: Math.max(40, Math.round(1000 / setup.blocksPerSecond)),
    snake,
    direction: 'right',
    nextDirection: 'right',
    foods: [],
    score: 0,
    running: false,
    over: false,
    manualStop: false,
    comboCandidate: null,
    queuedQuickTurn: null,
    poisonMovesRemaining: 0,
    moveCount: 0,
    awaitingRedemption: false,
    redemptionSnapshot: null,
    redemptionTimeout: null,
    modeNoticeShown: false
  };
}

function spawnSnakeFood(state, type = 'normal', anchor = null) {
  const occupied = new Set(state.snake.map(segment => `${segment.x},${segment.y}`));
  state.foods.forEach(food => occupied.add(`${food.x},${food.y}`));

  if (anchor) {
    const anchorCandidates = [
      anchor,
      { x: anchor.x + 1, y: anchor.y },
      { x: anchor.x - 1, y: anchor.y },
      { x: anchor.x, y: anchor.y + 1 },
      { x: anchor.x, y: anchor.y - 1 }
    ].filter(candidate => (
      candidate.x >= 0 &&
      candidate.y >= 0 &&
      candidate.x < state.gridSize &&
      candidate.y < state.gridSize &&
      candidate.y !== state.reservedFruitRow
    ));

    for (const candidate of anchorCandidates) {
      if (!occupied.has(`${candidate.x},${candidate.y}`)) {
        return { x: candidate.x, y: candidate.y, type };
      }
    }
  }

  const openCells = [];
  for (let row = 0; row < state.gridSize; row += 1) {
    if (row === state.reservedFruitRow) continue;
    for (let col = 0; col < state.gridSize; col += 1) {
      const key = `${col},${row}`;
      if (!occupied.has(key)) openCells.push({ x: col, y: row });
    }
  }

  if (!openCells.length) return null;
  const pick = sample(openCells);
  return { x: pick.x, y: pick.y, type };
}

function syncSnakeFoods(state, lastFood = null) {
  if (snakeHasMode(state, 'skull')) {
    state.foods = [];
    const first = spawnSnakeFood(state, 'normal', lastFood);
    if (first) {
      state.foods.push(first);
      const second = spawnSnakeFood(state, 'poison', { x: first.x + 1, y: first.y });
      if (second) state.foods.push(second);
    }
    return;
  }

  while (state.foods.length < state.setup.fruitCount) {
    const next = spawnSnakeFood(state, 'normal');
    if (!next) break;
    state.foods.push(next);
  }

  if (state.foods.length > state.setup.fruitCount) {
    state.foods = state.foods.slice(0, state.setup.fruitCount);
  }
}

function createSnakeState() {
  const setup = createSnakeSetup();
  return {
    setup,
    ...buildSnakeRuntime(setup)
  };
}

function createPopcornState() {
  const settings = getPopcornSettings();
  return {
    kernels: [],
    score: 0,
    burns: 0,
    tick: 0,
    running: false,
    over: false,
    target: settings.target,
    maxBurns: settings.maxBurns,
    spawnEveryTicks: settings.spawnEveryTicks,
    nextId: 1
  };
}

function placeRandomMergeTile(board) {
  const empties = [];
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      if (!board[row][col]) empties.push({ row, col });
    }
  }
  if (!empties.length) return null;
  const pick = sample(empties);
  const value = Math.random() < 0.9 ? 2 : 4;
  board[pick.row][pick.col] = value;
  return { row: pick.row, col: pick.col, value };
}

function createMergeState() {
  const board = Array.from({ length: 4 }, () => Array(4).fill(0));
  placeRandomMergeTile(board);
  placeRandomMergeTile(board);
  return {
    board,
    score: 0,
    over: false,
    won: false,
    animation: null
  };
}

function createSpellingBeeState() {
  const pack = deepClone(sampleWithoutImmediateRepeat(SPELLING_BEE_PACKS, 'spellingBee', entry => `${entry.center}:${entry.outer.join('')}`));
  return {
    pack,
    current: '',
    found: [],
    bonusFound: [],
    score: 0
  };
}

function buildBlockBreakerBricks(wall = 1) {
  const rows = Math.min(8, 5 + ((wall - 1) % 3));
  const cols = 8;
  const bricks = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      bricks.push({ row, col, alive: true });
    }
  }
  return bricks;
}

function createBlockBreakerState() {
  const wall = 1;
  return {
    paddleX: 230,
    ball: { x: 280, y: 250, dx: 3.1, dy: -3.6, stuck: true },
    bricks: buildBlockBreakerBricks(wall),
    running: false,
    over: false,
    won: false,
    lives: 3,
    wall,
    bricksBroken: 0,
    lastStatus: 'Click the board or press Start to launch the ball.',
    scoreSubmitted: false
  };
}

function createBaseballState() {
  return {
    running: false,
    over: false,
    pitch: 50,
    direction: 1,
    outs: 0,
    runs: 0,
    inning: 1,
    bases: [false, false, false],
    lastPlay: 'Press Pitch to start the at-bat.'
  };
}

function createMinesweeperBoard(size, mines) {
  const board = Array.from({ length: size }, () => Array.from({ length: size }, () => ({
    mine: false,
    revealed: false,
    flagged: false,
    count: 0
  })));
  const cells = shuffle(Array.from({ length: size * size }, (_, index) => index)).slice(0, mines);
  cells.forEach(index => {
    const row = Math.floor(index / size);
    const col = index % size;
    board[row][col].mine = true;
  });
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      if (board[row][col].mine) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr += 1) {
        for (let dc = -1; dc <= 1; dc += 1) {
          if (!dr && !dc) continue;
          const nextRow = row + dr;
          const nextCol = col + dc;
          if (nextRow < 0 || nextRow >= size || nextCol < 0 || nextCol >= size) continue;
          if (board[nextRow][nextCol].mine) count += 1;
        }
      }
      board[row][col].count = count;
    }
  }
  return board;
}

function createMinesweeperState() {
  return {
    size: 10,
    mines: 14,
    board: createMinesweeperBoard(10, 14),
    over: false,
    won: false,
    flagsLeft: 14,
    startedAt: null,
    finishedAt: null,
    scoreSubmitted: false
  };
}

function buildDeck() {
  let nextId = 1;
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const deck = CARD_SUITS.flatMap(suit => ranks.map((label, index) => ({
    id: `card-${nextId++}`,
    suit: suit.id,
    suitLabel: suit.symbol,
    color: suit.color,
    rank: index + 1,
    label
  })));
  const uniqueCards = new Set(deck.map(card => `${card.suit}-${card.rank}`));
  if (deck.length !== 52 || uniqueCards.size !== 52) throw new Error('Invalid solitaire deck.');
  return shuffle(deck);
}

function createSolitaireState() {
  const deck = buildDeck();
  const tableau = Array.from({ length: 7 }, () => []);
  for (let col = 0; col < 7; col += 1) {
    for (let depth = 0; depth <= col; depth += 1) {
      const card = deck.shift();
      tableau[col].push({ ...card, faceUp: depth === col });
    }
  }
  return {
    tableau,
    stock: deck.map(card => ({ ...card, faceUp: false })),
    waste: [],
    foundations: Array.from({ length: 4 }, () => []),
    selected: null,
    won: false,
    moves: 0,
    history: [],
    startedAt: Date.now(),
    scoreSubmitted: false
  };
}

function createMemoryState(difficulty = 'medium') {
  const config = MEMORY_DIFFICULTIES[difficulty] || MEMORY_DIFFICULTIES.medium;
  const cards = shuffle(MEMORY_ITEMS.slice(0, config.pairs)
    .flatMap(item => [{ ...item, id: `${item.id}-a` }, { ...item, id: `${item.id}-b` }]))
    .map(card => ({ ...card, revealed: false, matched: false }));
  return {
    difficulty,
    columns: config.columns,
    cards,
    firstPick: null,
    secondPick: null,
    turns: 0,
    locked: false,
    won: false,
    startedAt: Date.now(),
    scoreSubmitted: false
  };
}

function createBlankSlateState() {
  return {
    words: shuffle(BLANK_SLATE_WORDS),
    currentIndex: 0,
    currentWord: '',
    blankOnRight: true,
    players: [
      { id: 'p1', name: 'Player 1', score: 0 },
      { id: 'p2', name: 'Player 2', score: 0 }
    ]
  };
}

function createImposterState() {
  return {
    screen: 'setup',
    playerCount: 4,
    difficulty: 'easy',
    chosenWord: '',
    imposterPlayer: 0,
    currentPlayer: 1,
    revealed: false
  };
}

function createTicTacToeState() {
  return {
    board: Array(9).fill(''),
    turn: 'X',
    winner: '',
    winningLine: [],
    moves: 0
  };
}

function buildChessBoard() {
  const backRank = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];
  const board = Array.from({ length: 8 }, () => Array(8).fill(null));
  for (let x = 0; x < 8; x += 1) {
    board[0][x] = { type: backRank[x], color: 'b', moved: false };
    board[1][x] = { type: 'p', color: 'b', moved: false };
    board[6][x] = { type: 'p', color: 'w', moved: false };
    board[7][x] = { type: backRank[x], color: 'w', moved: false };
  }
  return board;
}

function cloneChessBoard(board) {
  return board.map(row => row.map(piece => (piece ? { ...piece } : null)));
}

function getOpposingChessColor(color) {
  return color === 'w' ? 'b' : 'w';
}

function inChessBounds(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function getChessTimeOption(optionId) {
  return CHESS_TIME_GROUPS.flatMap(group => group.options).find(option => option.id === optionId) || CHESS_TIME_GROUPS[2].options[0];
}

function formatChessClock(seconds) {
  const safeSeconds = Math.max(0, seconds);
  const wholeSeconds = Math.floor(safeSeconds);
  const minutes = Math.floor(wholeSeconds / 60);
  const secs = wholeSeconds % 60;
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}:${String(remainingMinutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  return `${minutes}:${String(secs).padStart(2, '0')}`;
}

function createChessState() {
  return {
    screen: 'setup-mode',
    timed: false,
    selectedTimeId: CHESS_TIME_GROUPS[2].options[0].id,
    timeLabel: 'Untimed',
    increment: 0,
    board: buildChessBoard(),
    turn: 'w',
    selected: null,
    legalMoves: [],
    lastMove: null,
    status: 'setup',
    winner: '',
    resultReason: '',
    moveCount: 0,
    enPassant: null,
    clocks: { w: 0, b: 0 },
    lastTickAt: 0,
    checkColor: '',
    captured: { w: [], b: [] }
  };
}

function createChessMove(x, y, extra = {}) {
  return { x, y, ...extra };
}

function getChessPiece(board, x, y) {
  return inChessBounds(x, y) ? board[y][x] : null;
}

function findChessKing(board, color) {
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      const piece = board[y][x];
      if (piece?.type === 'k' && piece.color === color) return { x, y };
    }
  }
  return null;
}

function isChessSquareAttacked(board, targetX, targetY, attackerColor) {
  const pawnDirection = attackerColor === 'w' ? -1 : 1;
  const pawnRow = targetY - pawnDirection;
  for (const offsetX of [-1, 1]) {
    const pawn = getChessPiece(board, targetX + offsetX, pawnRow);
    if (pawn?.color === attackerColor && pawn.type === 'p') return true;
  }

  const knightOffsets = [
    [1, 2], [2, 1], [2, -1], [1, -2],
    [-1, -2], [-2, -1], [-2, 1], [-1, 2]
  ];
  for (const [dx, dy] of knightOffsets) {
    const piece = getChessPiece(board, targetX + dx, targetY + dy);
    if (piece?.color === attackerColor && piece.type === 'n') return true;
  }

  const lineChecks = [
    { dirs: [[1, 0], [-1, 0], [0, 1], [0, -1]], types: ['r', 'q'] },
    { dirs: [[1, 1], [1, -1], [-1, 1], [-1, -1]], types: ['b', 'q'] }
  ];
  for (const { dirs, types } of lineChecks) {
    for (const [dx, dy] of dirs) {
      let x = targetX + dx;
      let y = targetY + dy;
      while (inChessBounds(x, y)) {
        const piece = getChessPiece(board, x, y);
        if (piece) {
          if (piece.color === attackerColor && types.includes(piece.type)) return true;
          break;
        }
        x += dx;
        y += dy;
      }
    }
  }

  for (let dy = -1; dy <= 1; dy += 1) {
    for (let dx = -1; dx <= 1; dx += 1) {
      if (!dx && !dy) continue;
      const piece = getChessPiece(board, targetX + dx, targetY + dy);
      if (piece?.color === attackerColor && piece.type === 'k') return true;
    }
  }

  return false;
}

function isChessKingInCheck(board, color) {
  const king = findChessKing(board, color);
  if (!king) return false;
  return isChessSquareAttacked(board, king.x, king.y, getOpposingChessColor(color));
}

function getChessPseudoMoves(board, x, y, state, attacksOnly = false) {
  const piece = getChessPiece(board, x, y);
  if (!piece) return [];
  const moves = [];
  const pushSlideMoves = directions => {
    for (const [dx, dy] of directions) {
      let nextX = x + dx;
      let nextY = y + dy;
      while (inChessBounds(nextX, nextY)) {
        const target = getChessPiece(board, nextX, nextY);
        if (!target) {
          moves.push(createChessMove(nextX, nextY));
        } else {
          if (target.color !== piece.color) moves.push(createChessMove(nextX, nextY, { capture: true }));
          break;
        }
        nextX += dx;
        nextY += dy;
      }
    }
  };

  if (piece.type === 'p') {
    const forward = piece.color === 'w' ? -1 : 1;
    const startRow = piece.color === 'w' ? 6 : 1;
    const nextY = y + forward;
    if (!attacksOnly && inChessBounds(x, nextY) && !getChessPiece(board, x, nextY)) {
      moves.push(createChessMove(x, nextY, { promotion: nextY === 0 || nextY === 7 }));
      const jumpY = y + forward * 2;
      if (y === startRow && inChessBounds(x, jumpY) && !getChessPiece(board, x, jumpY)) {
        moves.push(createChessMove(x, jumpY, { doubleStep: true }));
      }
    }
    for (const offsetX of [-1, 1]) {
      const targetX = x + offsetX;
      const targetY = y + forward;
      if (!inChessBounds(targetX, targetY)) continue;
      const target = getChessPiece(board, targetX, targetY);
      if (target?.color === getOpposingChessColor(piece.color)) {
        moves.push(createChessMove(targetX, targetY, { capture: true, promotion: targetY === 0 || targetY === 7 }));
      }
      if (!attacksOnly && state.enPassant && state.enPassant.color !== piece.color && state.enPassant.x === targetX && state.enPassant.y === targetY) {
        moves.push(createChessMove(targetX, targetY, {
          capture: true,
          enPassant: true,
          captureX: state.enPassant.pawnX,
          captureY: state.enPassant.pawnY
        }));
      }
    }
    return moves;
  }

  if (piece.type === 'n') {
    const offsets = [
      [1, 2], [2, 1], [2, -1], [1, -2],
      [-1, -2], [-2, -1], [-2, 1], [-1, 2]
    ];
    for (const [dx, dy] of offsets) {
      const targetX = x + dx;
      const targetY = y + dy;
      if (!inChessBounds(targetX, targetY)) continue;
      const target = getChessPiece(board, targetX, targetY);
      if (!target || target.color !== piece.color) {
        moves.push(createChessMove(targetX, targetY, { capture: Boolean(target) }));
      }
    }
    return moves;
  }

  if (piece.type === 'b') {
    pushSlideMoves([[1, 1], [1, -1], [-1, 1], [-1, -1]]);
    return moves;
  }

  if (piece.type === 'r') {
    pushSlideMoves([[1, 0], [-1, 0], [0, 1], [0, -1]]);
    return moves;
  }

  if (piece.type === 'q') {
    pushSlideMoves([[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]);
    return moves;
  }

  for (let dy = -1; dy <= 1; dy += 1) {
    for (let dx = -1; dx <= 1; dx += 1) {
      if (!dx && !dy) continue;
      const targetX = x + dx;
      const targetY = y + dy;
      if (!inChessBounds(targetX, targetY)) continue;
      const target = getChessPiece(board, targetX, targetY);
      if (!target || target.color !== piece.color) {
        moves.push(createChessMove(targetX, targetY, { capture: Boolean(target) }));
      }
    }
  }

  if (attacksOnly || piece.moved || isChessKingInCheck(board, piece.color)) return moves;

  const homeRow = piece.color === 'w' ? 7 : 0;
  const rookKingSide = getChessPiece(board, 7, homeRow);
  if (rookKingSide?.type === 'r' && rookKingSide.color === piece.color && !rookKingSide.moved
    && !getChessPiece(board, 5, homeRow)
    && !getChessPiece(board, 6, homeRow)
    && !isChessSquareAttacked(board, 5, homeRow, getOpposingChessColor(piece.color))
    && !isChessSquareAttacked(board, 6, homeRow, getOpposingChessColor(piece.color))) {
    moves.push(createChessMove(6, homeRow, { castle: 'king' }));
  }

  const rookQueenSide = getChessPiece(board, 0, homeRow);
  if (rookQueenSide?.type === 'r' && rookQueenSide.color === piece.color && !rookQueenSide.moved
    && !getChessPiece(board, 1, homeRow)
    && !getChessPiece(board, 2, homeRow)
    && !getChessPiece(board, 3, homeRow)
    && !isChessSquareAttacked(board, 3, homeRow, getOpposingChessColor(piece.color))
    && !isChessSquareAttacked(board, 2, homeRow, getOpposingChessColor(piece.color))) {
    moves.push(createChessMove(2, homeRow, { castle: 'queen' }));
  }

  return moves;
}

function applyChessMove(board, fromX, fromY, move, state) {
  const nextBoard = cloneChessBoard(board);
  const movingPiece = { ...nextBoard[fromY][fromX], moved: true };
  let capturedPiece = null;
  nextBoard[fromY][fromX] = null;

  if (move.castle === 'king') {
    nextBoard[move.y][move.x] = movingPiece;
    const rook = { ...nextBoard[move.y][7], moved: true };
    nextBoard[move.y][7] = null;
    nextBoard[move.y][5] = rook;
  } else if (move.castle === 'queen') {
    nextBoard[move.y][move.x] = movingPiece;
    const rook = { ...nextBoard[move.y][0], moved: true };
    nextBoard[move.y][0] = null;
    nextBoard[move.y][3] = rook;
  } else {
    if (move.enPassant) {
      capturedPiece = nextBoard[move.captureY][move.captureX];
      nextBoard[move.captureY][move.captureX] = null;
    } else {
      capturedPiece = nextBoard[move.y][move.x];
    }
    if (move.promotion) movingPiece.type = 'q';
    nextBoard[move.y][move.x] = movingPiece;
  }

  const enPassant = movingPiece.type === 'p' && move.doubleStep
    ? {
      x: fromX,
      y: fromY + (move.y - fromY) / 2,
      pawnX: move.x,
      pawnY: move.y,
      color: movingPiece.color
    }
    : null;

  return {
    board: nextBoard,
    enPassant,
    capturedPiece
  };
}

function getLegalChessMoves(state, x, y) {
  const piece = getChessPiece(state.board, x, y);
  if (!piece || piece.color !== state.turn) return [];
  const pseudoMoves = getChessPseudoMoves(state.board, x, y, state, false);
  return pseudoMoves.filter(move => {
    const next = applyChessMove(state.board, x, y, move, state);
    return !isChessKingInCheck(next.board, piece.color);
  });
}

function getAllLegalChessMoves(state, color) {
  const moves = [];
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      const piece = getChessPiece(state.board, x, y);
      if (piece?.color !== color) continue;
      const legal = getLegalChessMoves({ ...state, turn: color }, x, y);
      if (legal.length) moves.push({ from: { x, y }, moves: legal });
    }
  }
  return moves;
}

function syncChessClock(state) {
  if (!state.timed || state.screen !== 'playing' || state.status !== 'playing' || !state.lastTickAt) return;
  const now = Date.now();
  const elapsed = Math.max(0, (now - state.lastTickAt) / 1000);
  if (!elapsed) return;
  state.clocks[state.turn] = Math.max(0, state.clocks[state.turn] - elapsed);
  state.lastTickAt = now;
  if (state.clocks[state.turn] <= 0) {
    state.clocks[state.turn] = 0;
    state.status = 'timeout';
    state.winner = getOpposingChessColor(state.turn);
    state.resultReason = 'time';
  }
}

function stopChessLoop() {
  if (app.runtime.chessTimer) {
    clearInterval(app.runtime.chessTimer);
    app.runtime.chessTimer = null;
  }
}

function startChessLoop() {
  stopChessLoop();
  app.runtime.chessTimer = setInterval(() => {
    if (app.currentView !== 'play' || app.activeGame !== 'chess') return;
    const state = getGameState('chess');
    if (!state.timed || state.screen !== 'playing' || state.status !== 'playing') return;
    const beforeSecond = Math.ceil(state.clocks[state.turn]);
    syncChessClock(state);
    if (state.status !== 'playing') {
      stopChessLoop();
      renderActiveGame();
      return;
    }
    const afterSecond = Math.ceil(state.clocks[state.turn]);
    if (beforeSecond !== afterSecond) renderActiveGame();
  }, 200);
}

function startChessMatch(state, timed, optionId = state.selectedTimeId) {
  const timeOption = getChessTimeOption(optionId);
  state.screen = 'playing';
  state.timed = timed;
  state.selectedTimeId = timeOption.id;
  state.timeLabel = timed ? timeOption.label : 'Untimed';
  state.increment = timed ? timeOption.increment : 0;
  state.board = buildChessBoard();
  state.turn = 'w';
  state.selected = null;
  state.legalMoves = [];
  state.lastMove = null;
  state.status = 'playing';
  state.winner = '';
  state.resultReason = '';
  state.moveCount = 0;
  state.enPassant = null;
  state.checkColor = '';
  state.captured = { w: [], b: [] };
  state.clocks = timed ? { w: timeOption.seconds, b: timeOption.seconds } : { w: 0, b: 0 };
  state.lastTickAt = timed ? Date.now() : 0;
  if (timed) startChessLoop();
  else stopChessLoop();
}

function completeChessTurn(state, movingColor) {
  const nextColor = getOpposingChessColor(movingColor);
  state.turn = nextColor;
  state.selected = null;
  state.legalMoves = [];
  state.moveCount += 1;
  state.checkColor = isChessKingInCheck(state.board, nextColor) ? nextColor : '';
  const nextMoves = getAllLegalChessMoves(state, nextColor);
  if (!nextMoves.length) {
    if (state.checkColor) {
      state.status = 'checkmate';
      state.winner = movingColor;
      state.resultReason = 'checkmate';
    } else {
      state.status = 'stalemate';
      state.winner = 'draw';
      state.resultReason = 'stalemate';
    }
    stopChessLoop();
    return;
  }
  state.status = 'playing';
  if (state.timed) state.lastTickAt = Date.now();
}

function commitChessMove(fromX, fromY, move) {
  const state = getGameState('chess');
  if (state.screen !== 'playing' || state.status !== 'playing') return;
  const piece = getChessPiece(state.board, fromX, fromY);
  if (!piece || piece.color !== state.turn) return;
  syncChessClock(state);
  if (state.status !== 'playing') {
    stopChessLoop();
    renderActiveGame();
    return;
  }
  const result = applyChessMove(state.board, fromX, fromY, move, state);
  state.board = result.board;
  state.enPassant = result.enPassant;
  if (result.capturedPiece) state.captured[piece.color].push(result.capturedPiece);
  if (state.timed) state.clocks[piece.color] += state.increment;
  state.lastMove = { fromX, fromY, toX: move.x, toY: move.y };
  completeChessTurn(state, piece.color);
  renderActiveGame();
}

function handleChessSquareClick(x, y) {
  const state = getGameState('chess');
  if (state.screen !== 'playing' || state.status !== 'playing') return;
  const targetMove = state.legalMoves.find(move => move.x === x && move.y === y);
  if (state.selected && targetMove) {
    commitChessMove(state.selected.x, state.selected.y, targetMove);
    return;
  }
  const piece = getChessPiece(state.board, x, y);
  if (!piece || piece.color !== state.turn) {
    state.selected = null;
    state.legalMoves = [];
    renderActiveGame();
    return;
  }
  state.selected = { x, y };
  state.legalMoves = getLegalChessMoves(state, x, y);
  renderActiveGame();
}

function getChessSquareName(x, y) {
  return `${CHESS_FILES[x]}${8 - y}`;
}

const GAME_BUILDERS = {
  wordGuess: createWordGuessState,
  spellingBee: createSpellingBeeState,
  groupSort: createGroupSortState,
  strands: createStrandsState,
  sudoku: createSudokuState,
  nonogram: createNonogramState,
  queens: createQueensState,
  pinpoint: createPinpointState,
  snake: createSnakeState,
  blockBreaker: createBlockBreakerState,
  baseball: createBaseballState,
  imposter: createImposterState,
  minesweeper: createMinesweeperState,
  solitaire: createSolitaireState,
  chess: createChessState,
  memory: createMemoryState,
  blankSlate: createBlankSlateState,
  ticTacToe: createTicTacToeState,
  popcorn: createPopcornState,
  merge: createMergeState
};

function getGameState(gameId) {
  if (!app.states[gameId]) app.states[gameId] = GAME_BUILDERS[gameId]();
  return app.states[gameId];
}

function stopSnakeLoop() {
  if (app.runtime.snakeTimer) {
    clearInterval(app.runtime.snakeTimer);
    app.runtime.snakeTimer = null;
  }
}

function clearSnakeRedemption(state = app.states.snake) {
  if (!state) return;
  if (state.redemptionTimeout) {
    clearTimeout(state.redemptionTimeout);
    state.redemptionTimeout = null;
  }
  state.awaitingRedemption = false;
  state.redemptionSnapshot = null;
}

function stopPopcornLoop() {
  if (app.runtime.popcornTimer) {
    clearInterval(app.runtime.popcornTimer);
    app.runtime.popcornTimer = null;
  }
}

function stopBlockBreakerLoop() {
  if (app.runtime.blockBreakerTimer) {
    clearInterval(app.runtime.blockBreakerTimer);
    app.runtime.blockBreakerTimer = null;
  }
}

function stopBaseballLoop() {
  if (app.runtime.baseballTimer) {
    clearInterval(app.runtime.baseballTimer);
    app.runtime.baseballTimer = null;
  }
}

function stopMinesweeperLoop() {
  if (app.runtime.minesweeperTimer) {
    clearInterval(app.runtime.minesweeperTimer);
    app.runtime.minesweeperTimer = null;
  }
}

function cleanupGame(gameId) {
  if (gameId === 'snake') {
    stopSnakeLoop();
    clearSnakeRedemption(app.states.snake);
  }
  if (gameId === 'sudoku' && app.runtime.sudokuCompareTimer) {
    clearTimeout(app.runtime.sudokuCompareTimer);
    app.runtime.sudokuCompareTimer = null;
  }
  if (gameId === 'queens' && app.runtime.queensCompareTimer) {
    clearTimeout(app.runtime.queensCompareTimer);
    app.runtime.queensCompareTimer = null;
  }
  if (gameId === 'popcorn') stopPopcornLoop();
  if (gameId === 'blockBreaker') stopBlockBreakerLoop();
  if (gameId === 'baseball') stopBaseballLoop();
  if (gameId === 'minesweeper') stopMinesweeperLoop();
  if (gameId === 'chess') stopChessLoop();
  if (gameId === 'merge' && app.runtime.mergeAnimationTimer) {
    clearTimeout(app.runtime.mergeAnimationTimer);
    app.runtime.mergeAnimationTimer = null;
  }
}

function resetGame(gameId = app.activeGame) {
  cleanupGame(gameId);
  if (gameId === 'wordGuess') closeWordGuessResultModal();
  app.states[gameId] = GAME_BUILDERS[gameId]();
  renderActiveGame();
}

function switchGame(gameId) {
  if (gameId === app.activeGame && app.currentView === 'play') return;
  cleanupGame(app.activeGame);
  closeWordGuessResultModal();
  app.currentView = 'play';
  app.activeGame = gameId;
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHomeView() {
  cleanupGame(app.activeGame);
  closeWordGuessResultModal();
  app.currentView = 'home';
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startGame(gameId) {
  app.activeGame = gameId;
  app.currentView = 'play';
  closeWordGuessResultModal();
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openWordGuessResultModal() {
  const state = getGameState('wordGuess');
  app.wordGuessResult = {
    word: state.solution,
    tries: Math.min(state.guesses.length, 6),
    won: state.status === 'won'
  };
  syncWordGuessResultModal();
}

function closeWordGuessResultModal() {
  app.wordGuessResult = null;
  syncWordGuessResultModal();
}

function syncWordGuessResultModal() {
  const isOpen = Boolean(app.wordGuessResult);
  refs.wordGuessResultModal.classList.toggle('hidden', !isOpen);
  refs.wordGuessResultModal.setAttribute('aria-hidden', String(!isOpen));
  if (!isOpen) {
    refs.wordGuessResultBody.innerHTML = '';
    return;
  }

  const result = app.wordGuessResult;
  refs.wordGuessResultBody.innerHTML = `
    <p><strong>Correct word:</strong> ${result.word}</p>
    <p><strong>Tries used:</strong> ${result.tries}/6</p>
    <p>${result.won ? 'You solved it.' : 'That round used all available guesses.'}</p>
  `;

  setTimeout(() => {
    refs.wordGuessPlayAgain.focus();
  }, 0);
}

function getActionConfig() {
  const state = getGameState(app.activeGame);
  switch (app.activeGame) {
    case 'wordGuess':
      return { newLabel: 'New Word', checkLabel: 'Submit Guess', checkHidden: false, checkDisabled: Boolean(app.wordGuessResult) || state.status !== 'playing' || state.current.length !== 5 };
    case 'spellingBee':
      return { newLabel: 'New Hive', checkLabel: 'Submit Word', checkHidden: false, checkDisabled: state.current.length < 4 };
    case 'groupSort':
      return { newLabel: 'New Pack', checkLabel: 'Submit Set', checkHidden: false, checkDisabled: state.selectedIds.length !== 4 || state.solvedGroupIds.length === 4 };
    case 'strands':
      return { newLabel: 'New Board', checkLabel: 'Use Hint', checkHidden: false, checkDisabled: state.solved || state.wordsRemainingForHint > 0 };
    case 'sudoku':
      return { newLabel: 'New Puzzle', checkLabel: 'Check Grid', checkHidden: false, checkDisabled: !canCheckSudoku(state) };
    case 'nonogram':
      return { newLabel: 'New Picture', checkLabel: 'Check Picture', checkHidden: false, checkDisabled: false };
    case 'queens':
      return { newLabel: 'New Board', checkLabel: 'Check Board', checkHidden: false, checkDisabled: false };
    case 'pinpoint':
      return { newLabel: 'New Clue Round', checkLabel: 'Submit Guess', checkHidden: false, checkDisabled: state.solved || !state.current.trim() };
    case 'snake':
      if (state.screen === 'setup') {
        if (state.setup.mode === 'blender' && state.setup.setupPage === 'blender') {
          return { newLabel: 'Back', checkLabel: 'Start Snake', checkHidden: false, checkDisabled: false };
        }
        return { newLabel: 'Reset Options', checkLabel: state.setup.mode === 'blender' ? 'Continue' : 'Start Snake', checkHidden: false, checkDisabled: false };
      }
      return { newLabel: 'Setup', checkLabel: state.running ? 'Stop' : 'Play Again', checkHidden: false, checkDisabled: false };
    case 'blockBreaker':
      return { newLabel: 'New Wall', checkLabel: state.over ? 'Play Again' : (state.running ? 'Pause' : 'Start'), checkHidden: false, checkDisabled: false };
    case 'baseball':
      return { newLabel: 'New Game', checkLabel: state.over ? 'Play Again' : (state.running ? 'Swing' : 'Pitch'), checkHidden: false, checkDisabled: false };
    case 'imposter':
      return { newLabel: 'Reset Round', checkLabel: '', checkHidden: true, checkDisabled: true };
    case 'minesweeper':
      return { newLabel: 'New Field', checkLabel: '', checkHidden: true, checkDisabled: true };
    case 'solitaire':
      return { newLabel: 'New Deal', checkLabel: '', checkHidden: true, checkDisabled: true };
    case 'chess':
      return { newLabel: 'New Match', checkLabel: '', checkHidden: true, checkDisabled: true };
    case 'memory':
      return { newLabel: 'New Board', checkLabel: '', checkHidden: true, checkDisabled: true };
    case 'blankSlate':
      return { newLabel: 'Restart Deck', checkLabel: 'Roll Prompt', checkHidden: false, checkDisabled: false };
    case 'ticTacToe':
      return { newLabel: 'Reset Board', checkLabel: '', checkHidden: true, checkDisabled: true };
    case 'popcorn':
      return { newLabel: 'New Bowl', checkLabel: state.over ? 'Restart' : (state.running ? 'Pause' : 'Start'), checkHidden: false, checkDisabled: false };
    case 'merge':
      return { newLabel: 'New Merge', checkLabel: '', checkHidden: true, checkDisabled: true };
    default:
      return { newLabel: 'New Round', checkLabel: 'Check', checkHidden: false, checkDisabled: false };
  }
}

function renderGameNav() {
  refs.gameNav.innerHTML = GAME_LIST.map(game => `
    <button type="button" class="game-select ${game.id === app.activeGame ? 'active' : ''}" data-game-id="${game.id}">
      <strong>${game.label}</strong>
      <span>${game.summary}</span>
    </button>
  `).join('');
  refs.gameNav.querySelectorAll('[data-game-id]').forEach(button => {
    button.addEventListener('click', () => switchGame(button.dataset.gameId));
  });
}

function renderApp() {
  renderGameNav();
  const isHome = app.currentView === 'home';
  refs.layout.classList.toggle('home-mode', isHome);
  refs.gameNavCard.classList.toggle('hidden', isHome);
  refs.customCard.classList.toggle('hidden', !app.customizerOpen);
  refs.stageActions.classList.toggle('hidden', isHome);
  refs.customizerToggle.textContent = app.customizerOpen ? 'Hide Customizer' : 'Open Customizer';
  refs.customizerToggle.setAttribute('aria-expanded', String(app.customizerOpen));

  if (isHome) renderHomeView();
  else renderActiveGame();

  syncWordGuessResultModal();
}

function toggleCustomizer(forceOpen = null) {
  app.customizerOpen = typeof forceOpen === 'boolean' ? forceOpen : !app.customizerOpen;
  renderApp();
  if (app.customizerOpen) refreshCustomEditor();
}

function renderActiveGame() {
  const meta = GAME_META[app.activeGame];
  refs.gameTag.textContent = meta.tag;
  refs.gameTitle.textContent = meta.title;
  refs.gameDescription.textContent = meta.description;
  refs.gameTools.innerHTML = '';
  refs.gameArea.innerHTML = '';

  const config = getActionConfig();
  refs.newGameButton.textContent = config.newLabel;
  refs.checkGameButton.textContent = config.checkLabel;
  refs.checkGameButton.disabled = config.checkDisabled;
  refs.checkGameButton.classList.toggle('hidden', config.checkHidden);

  switch (app.activeGame) {
    case 'wordGuess':
      renderWordGuess();
      break;
    case 'spellingBee':
      renderSpellingBee();
      break;
    case 'groupSort':
      renderGroupSort();
      break;
    case 'strands':
      renderStrands();
      break;
    case 'sudoku':
      renderSudoku();
      break;
    case 'nonogram':
      renderNonogram();
      break;
    case 'queens':
      renderQueens();
      break;
    case 'pinpoint':
      renderPinpoint();
      break;
    case 'snake':
      renderSnake();
      break;
    case 'blockBreaker':
      renderBlockBreaker();
      break;
    case 'baseball':
      renderBaseball();
      break;
    case 'imposter':
      renderImposter();
      break;
    case 'minesweeper':
      renderMinesweeper();
      break;
    case 'solitaire':
      renderSolitaire();
      break;
    case 'chess':
      renderChess();
      break;
    case 'memory':
      renderMemory();
      break;
    case 'blankSlate':
      renderBlankSlate();
      break;
    case 'ticTacToe':
      renderTicTacToe();
      break;
    case 'popcorn':
      renderPopcorn();
      break;
    case 'merge':
      renderMerge();
      break;
    default:
      break;
  }

  renderHighScoreSummary(app.activeGame);
}

function renderHomeView() {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'nyt', label: 'New York Times' },
    { id: 'google', label: 'Google' },
    { id: 'indie', label: 'Independent' }
  ];
  const visibleGames = app.homeFilter === 'all'
    ? GAME_LIST
    : GAME_LIST.filter(game => game.category === app.homeFilter);

  refs.gameTag.textContent = 'Start Here';
  refs.gameTitle.textContent = 'Choose a Game';
  refs.gameDescription.textContent = 'Pick a puzzle or arcade game to begin. Filter the shelf if you want to narrow it down first.';
  refs.gameTools.innerHTML = `
    <div class="home-toolbar">
      <div class="inline-tools">
        <span class="pill">Filter Games</span>
        ${filters.map(filter => `
          <button
            type="button"
            class="${app.homeFilter === filter.id ? '' : 'secondary-button'} home-filter-button ${app.homeFilter === filter.id ? 'active' : ''}"
            data-home-filter="${filter.id}"
          >${filter.label}</button>
        `).join('')}
      </div>
      <span class="game-note">${visibleGames.length} game${visibleGames.length === 1 ? '' : 's'} shown</span>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="home-grid">
      ${visibleGames.map(game => `
        <button type="button" class="home-game-card" data-home-game-id="${game.id}">
          <div>
            <strong>${game.label}</strong>
            <span>${game.summary}</span>
          </div>
          <span class="home-card-footer">Play ${game.label}</span>
        </button>
      `).join('')}
    </div>
  `;
  setGameMessage('');

  refs.gameTools.querySelectorAll('[data-home-filter]').forEach(button => {
    button.addEventListener('click', () => {
      app.homeFilter = button.dataset.homeFilter;
      renderHomeView();
    });
  });
  refs.gameArea.querySelectorAll('[data-home-game-id]').forEach(button => {
    button.addEventListener('click', () => startGame(button.dataset.homeGameId));
  });
}

function scoreWordGuess(guess, solution) {
  const result = Array(guess.length).fill('absent');
  const counts = {};
  solution.split('').forEach(letter => {
    counts[letter] = (counts[letter] || 0) + 1;
  });

  guess.split('').forEach((letter, index) => {
    if (solution[index] === letter) {
      result[index] = 'correct';
      counts[letter] -= 1;
    }
  });

  guess.split('').forEach((letter, index) => {
    if (result[index] === 'correct') return;
    if (counts[letter] > 0) {
      result[index] = 'present';
      counts[letter] -= 1;
    }
  });

  return result;
}

function getKeyboardStatus(guesses, solution) {
  const priority = { absent: 1, present: 2, correct: 3 };
  const statusMap = {};
  guesses.forEach(guess => {
    const result = scoreWordGuess(guess, solution);
    result.forEach((status, index) => {
      const letter = guess[index];
      if (!statusMap[letter] || priority[status] > priority[statusMap[letter]]) {
        statusMap[letter] = status;
      }
    });
  });
  return statusMap;
}

function renderWordGuess() {
  const state = getGameState('wordGuess');
  const answerCount = getWordleAnswerList().length;
  const acceptedCount = getWordleAcceptedGuessList().length;
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">5 letters</span>
      <span class="pill">${6 - state.guesses.length} guesses left</span>
      <span class="pill">${answerCount} possible answers</span>
      <span class="pill">${acceptedCount} accepted guesses</span>
      <span class="pill">Type directly on the board</span>
    </div>
  `;

  const boardRows = Array.from({ length: 6 }, (_, rowIndex) => {
    const guess = state.guesses[rowIndex] || '';
    const scored = rowIndex < state.guesses.length ? scoreWordGuess(guess, state.solution) : [];
    const live = rowIndex === state.guesses.length ? state.current : '';
    return `
      <div class="word-row">
        ${Array.from({ length: 5 }, (_, colIndex) => {
          const char = guess[colIndex] || live[colIndex] || '';
          const status = scored[colIndex] || '';
          return `<div class="letter-tile ${status}">${char}</div>`;
        }).join('')}
      </div>
    `;
  }).join('');

  const keyStatus = getKeyboardStatus(state.guesses, state.solution);
  const keyboardRows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map(row => `
    <div class="keyboard-row">
      ${row.split('').map(letter => `<button type="button" class="key-button ${keyStatus[letter] || ''}" data-word-key="${letter}">${letter}</button>`).join('')}
    </div>
  `).join('');

  refs.gameArea.innerHTML = `
    <div class="word-board">${boardRows}</div>
    <div class="keyboard">
      ${keyboardRows}
      <div class="keyboard-row">
        <button type="button" class="key-button wide" data-word-action="enter">Enter</button>
        <button type="button" class="key-button wide" data-word-action="delete">Delete</button>
      </div>
    </div>
  `;

  refs.gameArea.querySelectorAll('[data-word-key]').forEach(button => {
    button.addEventListener('click', () => {
      if (state.status !== 'playing' || state.current.length >= 5) return;
      state.current += button.dataset.wordKey;
      renderActiveGame();
    });
  });

  refs.gameArea.querySelectorAll('[data-word-action]').forEach(button => {
    button.addEventListener('click', () => {
      if (button.dataset.wordAction === 'delete') {
        state.current = state.current.slice(0, -1);
      } else {
        submitWordGuess();
        return;
      }
      renderActiveGame();
    });
  });

  if (state.status === 'won') {
    setGameMessage(`Solved. The word was ${state.solution}.`, 'success');
  } else if (state.status === 'lost') {
    setGameMessage(`Out of tries. The word was ${state.solution}.`, 'danger');
  } else {
    setGameMessage('Type anywhere outside the customizer to fill the current row.');
  }
}

function submitWordGuess() {
  const state = getGameState('wordGuess');
  const guess = normalizeWord(state.current);
  const acceptedGuesses = getWordleAcceptedGuessList();
  if (app.wordGuessResult) return;
  if (state.status !== 'playing') return;
  if (guess.length !== 5) {
    setGameMessage('Enter a full five-letter word first.', 'warning');
    return;
  }
  if (!acceptedGuesses.includes(guess)) {
    setGameMessage('That word is not in the accepted guess list.', 'warning');
    return;
  }
  state.guesses.push(guess);
  state.current = '';
  if (guess === state.solution) {
    state.status = 'won';
    submitGameScore(state, 'wordGuess', {
      bestTimeMs: getElapsedSince(state.startedAt),
      fewestGuesses: state.guesses.length
    });
  }
  else if (state.guesses.length >= 6) state.status = 'lost';
  renderActiveGame();
  if (state.status === 'won' || state.status === 'lost') openWordGuessResultModal();
}

function renderGroupSort() {
  const state = getGameState('groupSort');
  const solved = state.groups.filter(group => state.solvedGroupIds.includes(group.id));
  const unsolvedTiles = state.tiles.filter(tile => !state.solvedGroupIds.includes(tile.groupId));

  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">${state.title}</span>
      <span class="pill">${solved.length}/4 groups solved</span>
      <span class="pill">${state.mistakes} misses</span>
      <button type="button" class="secondary-button" id="shuffle-connections">Shuffle Tiles</button>
      <button type="button" class="secondary-button" id="clear-connections">Clear Picks</button>
    </div>
  `;

  refs.gameArea.innerHTML = `
    <div class="connections-shell">
      <div class="connections-solved">
        ${solved.map(group => `
          <div class="solved-group" style="background:${group.color}">
            <h3>${group.name}</h3>
            <p>${group.items.join(' · ')}</p>
          </div>
        `).join('')}
      </div>
      <div class="connections-grid">
        ${unsolvedTiles.map(tile => `
          <button type="button" class="connection-tile ${state.selectedIds.includes(tile.id) ? 'selected' : ''}" data-connection-id="${tile.id}">
            ${tile.label}
          </button>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('shuffle-connections').addEventListener('click', () => {
    const solvedIds = new Set(state.solvedGroupIds);
    const solvedTiles = state.tiles.filter(tile => solvedIds.has(tile.groupId));
    const unsolved = state.tiles.filter(tile => !solvedIds.has(tile.groupId));
    state.tiles = solvedTiles.concat(shuffle(unsolved));
    renderActiveGame();
  });

  document.getElementById('clear-connections').addEventListener('click', () => {
    state.selectedIds = [];
    renderActiveGame();
  });

  refs.gameArea.querySelectorAll('[data-connection-id]').forEach(button => {
    button.addEventListener('click', () => {
      const tileId = button.dataset.connectionId;
      if (state.selectedIds.includes(tileId)) state.selectedIds = state.selectedIds.filter(id => id !== tileId);
      else if (state.selectedIds.length < 4) state.selectedIds = state.selectedIds.concat(tileId);
      renderActiveGame();
    });
  });

  if (state.solvedGroupIds.length === 4) setGameMessage('All four groups solved.', 'success');
  else setGameMessage('Select four related tiles, then submit the set.');
}

function submitGroupSort() {
  const state = getGameState('groupSort');
  if (state.selectedIds.length !== 4) {
    setGameMessage('Pick exactly four tiles before submitting.', 'warning');
    return;
  }
  const selectedTiles = state.tiles.filter(tile => state.selectedIds.includes(tile.id));
  const groupId = selectedTiles[0].groupId;
  const isMatch = selectedTiles.every(tile => tile.groupId === groupId);
  if (isMatch && !state.solvedGroupIds.includes(groupId)) {
    state.solvedGroupIds.push(groupId);
    state.selectedIds = [];
    if (state.solvedGroupIds.length === 4) {
      submitGameScore(state, 'groupSort', {
        bestTimeMs: getElapsedSince(state.startedAt),
        fewestMistakes: state.mistakes
      });
    }
    renderActiveGame();
    return;
  }
  state.mistakes += 1;
  state.selectedIds = [];
  renderActiveGame();
  setGameMessage('That set does not belong together.', 'warning');
}

function updateStrandsGuess(state) {
  state.currentGuess = state.selected.map(([row, col]) => state.startingBoard[row][col]).join('');
}

function coordsMatchList(left, right) {
  return left.length === right.length && left.every(([row, col], index) => row === right[index][0] && col === right[index][1]);
}

function coordsMatchEitherDirection(left, right) {
  return coordsMatchList(left, right) || coordsMatchList(left, right.slice().reverse());
}

function getStrandsFoundWordCount(state) {
  return state.foundThemeWords.length + (state.foundSpangram ? 1 : 0);
}

function isStrandsSolved(state) {
  return state.foundSpangram && state.foundThemeWords.length === Object.keys(state.themeCoords).length;
}

function clearStrandsSelection(state) {
  state.selected = [];
  state.currentGuess = '';
}

function useStrandsHint() {
  const state = getGameState('strands');
  if (state.solved || state.wordsRemainingForHint > 0) return;

  const nextThemeWord = Object.keys(state.themeCoords).find(word => !state.foundThemeWords.includes(word));
  if (nextThemeWord) {
    state.foundThemeWords.push(nextThemeWord);
  } else if (!state.foundSpangram) {
    state.foundSpangram = true;
  } else {
    return;
  }

  state.hintsUsed += 1;
  state.wordsRemainingForHint = 3;
  clearStrandsSelection(state);
  state.solved = isStrandsSolved(state);
  if (state.solved) {
    submitGameScore(state, 'strands', {
      bestTimeMs: getElapsedSince(state.startedAt),
      fewestHints: state.hintsUsed
    });
    setGameMessage('Strands solved.', 'success');
  } else {
    setGameMessage('Hint used. One answer was revealed.', 'warning');
  }
  renderActiveGame();
}

function submitStrandsSelection() {
  const state = getGameState('strands');
  if (state.selected.length < 2) {
    clearStrandsSelection(state);
    renderActiveGame();
    return;
  }

  const guess = state.currentGuess;
  const selectedPath = state.selected.slice();
  clearStrandsSelection(state);

  if (!state.foundSpangram && guess === state.spangram && coordsMatchEitherDirection(selectedPath, state.spangramCoords)) {
    state.foundSpangram = true;
    state.solved = isStrandsSolved(state);
    if (state.solved) {
      submitGameScore(state, 'strands', {
        bestTimeMs: getElapsedSince(state.startedAt),
        fewestHints: state.hintsUsed
      });
    }
    renderActiveGame();
    setGameMessage(state.solved ? 'Strands solved.' : 'Spangram found.', 'success');
    return;
  }

  const matchingThemeWord = Object.entries(state.themeCoords).find(([word, coords]) => {
    if (state.foundThemeWords.includes(word)) return false;
    return guess === word && coordsMatchEitherDirection(selectedPath, coords);
  });
  if (matchingThemeWord) {
    state.foundThemeWords.push(matchingThemeWord[0]);
    state.solved = isStrandsSolved(state);
    if (state.solved) {
      submitGameScore(state, 'strands', {
        bestTimeMs: getElapsedSince(state.startedAt),
        fewestHints: state.hintsUsed
      });
    }
    renderActiveGame();
    setGameMessage(state.solved ? 'Strands solved.' : 'Theme word found.', 'success');
    return;
  }

  if (guess.length >= 4 && getDictionaryWordSet().has(guess.toLowerCase()) && !state.foundBonusWords.includes(guess)) {
    state.foundBonusWords.push(guess);
    state.wordsRemainingForHint = Math.max(0, state.wordsRemainingForHint - 1);
    renderActiveGame();
    if (state.wordsRemainingForHint > 0) {
      setGameMessage(`Extra word found. ${state.wordsRemainingForHint} more for a hint.`, 'warning');
    } else {
      setGameMessage('Hint unlocked. Press Use Hint when you want it.', 'success');
    }
    return;
  }

  renderActiveGame();
  setGameMessage('That path is not one of the answers.', 'warning');
}

function pressStrandsCell(row, col) {
  const state = getGameState('strands');
  if (state.solved) return;

  const existingIndex = state.selected.findIndex(([selectedRow, selectedCol]) => selectedRow === row && selectedCol === col);
  if (existingIndex === state.selected.length - 1) {
    submitStrandsSelection();
    return;
  }

  if (existingIndex >= 0) {
    state.selected = state.selected.slice(0, existingIndex + 1);
    updateStrandsGuess(state);
    renderActiveGame();
    return;
  }

  const last = state.selected[state.selected.length - 1];
  if (!last) {
    state.selected.push([row, col]);
    updateStrandsGuess(state);
    renderActiveGame();
    return;
  }

  const isAdjacent = Math.abs(last[0] - row) <= 1 && Math.abs(last[1] - col) <= 1 && !(last[0] === row && last[1] === col);
  if (!isAdjacent) {
    state.selected = [[row, col]];
    updateStrandsGuess(state);
    renderActiveGame();
    return;
  }

  state.selected.push([row, col]);
  updateStrandsGuess(state);
  renderActiveGame();
}

function getStrandsCellState(state, row, col) {
  if (state.selected.some(([selectedRow, selectedCol]) => selectedRow === row && selectedCol === col)) return 'selected';
  if (state.foundSpangram && state.spangramCoords.some(([matchRow, matchCol]) => matchRow === row && matchCol === col)) return 'spangram';
  const foundThemeEntries = state.foundThemeWords.map(word => state.themeCoords[word] || []);
  if (foundThemeEntries.some(coords => coords.some(([matchRow, matchCol]) => matchRow === row && matchCol === col))) return 'found';
  return '';
}

function renderStrands() {
  const state = getGameState('strands');
  const totalTargets = Object.keys(state.themeCoords).length + 1;

  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">${state.title}</span>
      <span class="pill">${getStrandsFoundWordCount(state)}/${totalTargets} answers found</span>
      <span class="pill">Hint meter ${3 - state.wordsRemainingForHint}/3</span>
      <span class="pill">Hints used ${state.hintsUsed}</span>
    </div>
  `;

  refs.gameArea.innerHTML = `
    <div class="strands-shell">
      <div class="strands-info-card">
        <p class="eyebrow">Theme</p>
        <div class="strands-clue">${state.clue}</div>
        <div class="strands-current-word">${state.currentGuess || 'Tap neighboring letters. Tap the last selected letter again to submit.'}</div>
        <div class="inline-tools">
          <button type="button" class="secondary-button" id="strands-clear" ${state.selected.length ? '' : 'disabled'}>Clear Guess</button>
          <button type="button" class="secondary-button" id="strands-hint-inline" ${state.solved || state.wordsRemainingForHint > 0 ? 'disabled' : ''}>Use Hint</button>
        </div>
      </div>
      <div class="strands-board" style="--strands-cols:${state.width}">
        ${state.startingBoard.flatMap((rowText, rowIndex) => rowText.split('').map((letter, colIndex) => `
          <button
            type="button"
            class="strands-cell ${getStrandsCellState(state, rowIndex, colIndex)}"
            data-strands-cell="${rowIndex}-${colIndex}"
          >${letter}</button>
        `)).join('')}
      </div>
      <div class="strands-found-panel">
        <div class="strands-found-group">
          <h3>Found Answers</h3>
          <div class="guess-history">
            ${state.foundThemeWords.map(word => `<span class="guess-chip">${word}</span>`).join('') || '<span class="game-note">No theme words yet.</span>'}
            ${state.foundSpangram ? `<span class="guess-chip success-chip">${state.spangram}</span>` : ''}
          </div>
        </div>
        <div class="strands-found-group">
          <h3>Extra Words</h3>
          <div class="guess-history">
            ${state.foundBonusWords.map(word => `<span class="guess-chip">${word}</span>`).join('') || '<span class="game-note">Extra words build your hint meter.</span>'}
          </div>
        </div>
      </div>
    </div>
  `;

  refs.gameArea.querySelectorAll('[data-strands-cell]').forEach(button => {
    button.addEventListener('click', () => {
      const [row, col] = button.dataset.strandsCell.split('-').map(Number);
      pressStrandsCell(row, col);
    });
  });
  document.getElementById('strands-clear').addEventListener('click', () => {
    clearStrandsSelection(state);
    renderActiveGame();
  });
  document.getElementById('strands-hint-inline').addEventListener('click', useStrandsHint);

  if (state.solved) setGameMessage('All answers found.', 'success');
  else setGameMessage('Find the theme words and the spangram. Extra words can unlock hints.');
}

function getSudokuConflicts(board) {
  const conflicts = new Set();

  function scan(cells) {
    const map = {};
    cells.forEach(([row, col]) => {
      const value = board[row][col];
      if (!value) return;
      if (!map[value]) map[value] = [];
      map[value].push([row, col]);
    });
    Object.values(map).forEach(group => {
      if (group.length < 2) return;
      group.forEach(([row, col]) => conflicts.add(`${row}-${col}`));
    });
  }

  for (let row = 0; row < 9; row += 1) scan(Array.from({ length: 9 }, (_, col) => [row, col]));
  for (let col = 0; col < 9; col += 1) scan(Array.from({ length: 9 }, (_, row) => [row, col]));
  for (let boxRow = 0; boxRow < 3; boxRow += 1) {
    for (let boxCol = 0; boxCol < 3; boxCol += 1) {
      const cells = [];
      for (let row = 0; row < 3; row += 1) {
        for (let col = 0; col < 3; col += 1) cells.push([boxRow * 3 + row, boxCol * 3 + col]);
      }
      scan(cells);
    }
  }

  return conflicts;
}

function getSudokuFillMetrics(state) {
  const fillableTotal = state.puzzle.flat().filter(value => value === 0).length;
  const filled = state.board.flatMap((row, rowIndex) => row.map((value, colIndex) => (state.puzzle[rowIndex][colIndex] === 0 && value ? 1 : 0)))
    .reduce((sum, value) => sum + value, 0);
  const thresholds = [0.25, 0.5, 0.75].map(step => Math.floor(fillableTotal * step)).filter(Boolean);
  const reachedMilestone = thresholds.filter(threshold => filled >= threshold).length;
  return { fillableTotal, filled, thresholds, reachedMilestone };
}

function canCheckSudoku(state) {
  const metrics = getSudokuFillMetrics(state);
  if (metrics.filled === metrics.fillableTotal) return true;
  return metrics.reachedMilestone > state.lastCheckMilestone;
}

function isCompareReady(gameId, state, waitMs) {
  const timerKey = gameId === 'sudoku' ? 'sudokuCompareTimer' : 'queensCompareTimer';
  const elapsed = Date.now() - state.startedAt;
  if (elapsed >= waitMs) {
    if (app.runtime[timerKey]) {
      clearTimeout(app.runtime[timerKey]);
      app.runtime[timerKey] = null;
    }
    return true;
  }
  if (!app.runtime[timerKey]) {
    app.runtime[timerKey] = setTimeout(() => {
      app.runtime[timerKey] = null;
      if (app.currentView === 'play' && app.activeGame === gameId) renderActiveGame();
    }, waitMs - elapsed);
  }
  return false;
}

function getCompareCountdown(state, waitMs) {
  return Math.max(1, Math.ceil((waitMs - (Date.now() - state.startedAt)) / 1000));
}

function renderSudokuSolutionGrid(board) {
  return `
    <div class="sudoku-board solution-board">
      ${board.flatMap((row, rowIndex) => row.map((value, colIndex) => {
        const classes = [
          'sudoku-cell',
          'given',
          'static',
          colIndex % 3 === 2 && colIndex !== 8 ? 'box-right' : '',
          rowIndex % 3 === 2 && rowIndex !== 8 ? 'box-bottom' : '',
          rowIndex === 0 && colIndex === 0 ? 'corner-tl' : '',
          rowIndex === 0 && colIndex === 8 ? 'corner-tr' : '',
          rowIndex === 8 && colIndex === 0 ? 'corner-bl' : '',
          rowIndex === 8 && colIndex === 8 ? 'corner-br' : ''
        ].filter(Boolean).join(' ');
        return `<div class="${classes}">${value}</div>`;
      })).join('')}
    </div>
  `;
}

function renderSudoku() {
  const state = getGameState('sudoku');
  const metrics = getSudokuFillMetrics(state);
  const nextThreshold = metrics.thresholds[state.lastCheckMilestone];
  const compareReady = isCompareReady('sudoku', state, 10000);
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <label class="tool-label">Difficulty
        <select id="sudoku-difficulty">
          <option value="easy" ${state.difficulty === 'easy' ? 'selected' : ''}>Easy</option>
          <option value="medium" ${state.difficulty === 'medium' ? 'selected' : ''}>Medium</option>
          <option value="hard" ${state.difficulty === 'hard' ? 'selected' : ''}>Hard</option>
        </select>
      </label>
      <span class="pill">Type digits 1-9</span>
      <span class="pill">${metrics.filled}/${metrics.fillableTotal} filled</span>
      <span class="pill">${metrics.filled === metrics.fillableTotal ? 'Final check ready' : `Next check at ${nextThreshold ?? metrics.fillableTotal}`}</span>
      <button type="button" class="secondary-button" id="sudoku-solution-toggle" ${compareReady ? '' : 'disabled'}>
        ${state.showSolution ? 'Hide Solution' : (compareReady ? 'Show Solution' : `Show Solution (${getCompareCountdown(state, 10000)}s)`)}
      </button>
    </div>
  `;

  refs.gameArea.innerHTML = `
    <div class="compare-layout">
      <div class="compare-panel">
        <h3>Your Grid</h3>
        <div class="sudoku-board">
          ${state.board.flatMap((row, rowIndex) => row.map((value, colIndex) => {
            const given = state.puzzle[rowIndex][colIndex] !== 0;
            const classes = [
              'sudoku-cell',
              given ? 'given' : '',
              colIndex % 3 === 2 && colIndex !== 8 ? 'box-right' : '',
              rowIndex % 3 === 2 && rowIndex !== 8 ? 'box-bottom' : '',
              rowIndex === 0 && colIndex === 0 ? 'corner-tl' : '',
              rowIndex === 0 && colIndex === 8 ? 'corner-tr' : '',
              rowIndex === 8 && colIndex === 0 ? 'corner-bl' : '',
              rowIndex === 8 && colIndex === 8 ? 'corner-br' : ''
            ].filter(Boolean).join(' ');
            return `
              <input
                data-sudoku-cell="${rowIndex}-${colIndex}"
                class="${classes}"
                inputmode="numeric"
                maxlength="1"
                value="${value || ''}"
                ${given ? 'readonly' : ''}
              >
            `;
          })).join('')}
        </div>
      </div>
      ${state.showSolution ? `
        <div class="compare-panel">
          <h3>Solution</h3>
          ${renderSudokuSolutionGrid(state.solution)}
        </div>
      ` : ''}
    </div>
  `;

  document.getElementById('sudoku-difficulty').addEventListener('change', event => {
    app.states.sudoku = createSudokuState(event.target.value);
    renderActiveGame();
  });
  document.getElementById('sudoku-solution-toggle').addEventListener('click', () => {
    if (!isCompareReady('sudoku', state, 10000)) return;
    state.showSolution = !state.showSolution;
    renderActiveGame();
  });

  refs.gameArea.querySelectorAll('[data-sudoku-cell]').forEach(input => {
    input.addEventListener('input', () => {
      const [row, col] = input.dataset.sudokuCell.split('-').map(Number);
      const clean = String(input.value || '').replace(/[^1-9]/g, '').slice(0, 1);
      input.value = clean;
      const liveState = getGameState('sudoku');
      liveState.board[row][col] = clean ? Number(clean) : 0;
      delete liveState.feedback[`${row}-${col}`];
      refreshSudokuUi();
    });
  });

  refreshSudokuUi();
  if (!state.board.every((row, rowIndex) => row.every((value, colIndex) => value === state.solution[rowIndex][colIndex]))) {
    setGameMessage('Generated logic-solvable puzzle. Check Grid unlocks at each quarter mark.');
  }
}

function refreshSudokuUi() {
  const state = getGameState('sudoku');
  const conflicts = getSudokuConflicts(state.board);
  refs.gameArea.querySelectorAll('[data-sudoku-cell]').forEach(input => {
    const [row, col] = input.dataset.sudokuCell.split('-').map(Number);
    input.classList.toggle('conflict', conflicts.has(`${row}-${col}`));
    const feedback = state.feedback[`${row}-${col}`];
    input.classList.toggle('correct-hint', feedback === 'correct');
    input.classList.toggle('incorrect-hint', feedback === 'incorrect');
  });
  refs.checkGameButton.disabled = !canCheckSudoku(state);
  const solved = state.board.every((row, rowIndex) => row.every((value, colIndex) => value === state.solution[rowIndex][colIndex]));
  if (solved) setGameMessage('Sudoku solved.', 'success');
}

function checkSudoku() {
  const state = getGameState('sudoku');
  const metrics = getSudokuFillMetrics(state);
  if (!canCheckSudoku(state)) {
    const nextThreshold = metrics.thresholds[state.lastCheckMilestone] ?? metrics.fillableTotal;
    setGameMessage(`Fill ${nextThreshold} editable boxes to unlock the next check.`, 'warning');
    return;
  }
  const feedback = {};
  let correctCount = 0;
  let incorrectCount = 0;
  state.board.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (state.puzzle[rowIndex][colIndex] !== 0 || !value) return;
      const key = `${rowIndex}-${colIndex}`;
      if (value === state.solution[rowIndex][colIndex]) {
        feedback[key] = 'correct';
        correctCount += 1;
      } else {
        feedback[key] = 'incorrect';
        incorrectCount += 1;
      }
    });
  });
  state.feedback = feedback;
  if (metrics.filled < metrics.fillableTotal) state.lastCheckMilestone = metrics.reachedMilestone;
  refreshSudokuUi();
  const solved = metrics.filled === metrics.fillableTotal && incorrectCount === 0;
  if (solved) {
    submitGameScore(state, 'sudoku', { bestTimeMs: getElapsedSince(state.startedAt) });
    setGameMessage('Sudoku solved.', 'success');
    return;
  }
  if (metrics.filled === metrics.fillableTotal) {
    setGameMessage(`Grid checked: ${correctCount} correct, ${incorrectCount} incorrect.`, incorrectCount ? 'danger' : 'success');
    return;
  }
  setGameMessage(`Checked filled cells: ${correctCount} correct, ${incorrectCount} incorrect.`, incorrectCount ? 'warning' : 'success');
}

function getLineClues(line) {
  const clues = [];
  let run = 0;
  line.forEach(cell => {
    if (cell) run += 1;
    else if (run) {
      clues.push(run);
      run = 0;
    }
  });
  if (run) clues.push(run);
  return clues.length ? clues : [0];
}

function renderNonogram() {
  const state = getGameState('nonogram');
  const rowClues = state.solution.map(getLineClues);
  const colClues = state.solution[0].map((_, colIndex) => getLineClues(state.solution.map(row => row[colIndex])));

  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">${state.title}</span>
      <span class="pill">Left click fills</span>
      <span class="pill">Right click marks</span>
      <button type="button" class="secondary-button" id="reset-nonogram">Reset Board</button>
    </div>
  `;

  refs.gameArea.innerHTML = `
    <table class="nonogram-table">
      <tr>
        <th></th>
        ${colClues.map(clues => `
          <th class="nonogram-clue col">
            <span class="nonogram-clue-stack">${clues.map(clue => `<span>${clue}</span>`).join('')}</span>
          </th>
        `).join('')}
      </tr>
      ${state.board.map((row, rowIndex) => `
        <tr>
          <th class="nonogram-clue">${rowClues[rowIndex].join(' ')}</th>
          ${row.map((value, colIndex) => `
            <td>
              <button
                type="button"
                class="nonogram-cell ${value === 1 ? 'filled' : ''} ${value === 2 ? 'crossed' : ''}"
                data-nonogram-cell="${rowIndex}-${colIndex}"
              ></button>
            </td>
          `).join('')}
        </tr>
      `).join('')}
    </table>
  `;

  refs.gameArea.querySelectorAll('[data-nonogram-cell]').forEach(button => {
    button.addEventListener('click', () => {
      const [row, col] = button.dataset.nonogramCell.split('-').map(Number);
      const value = state.board[row][col];
      state.board[row][col] = value === 1 ? 0 : 1;
      state.solved = isNonogramSolved();
      if (state.solved) submitGameScore(state, 'nonogram', { bestTimeMs: getElapsedSince(state.startedAt) });
      renderActiveGame();
      if (state.solved) setGameMessage('Picture solved.', 'success');
    });
    button.addEventListener('contextmenu', event => {
      event.preventDefault();
      const [row, col] = button.dataset.nonogramCell.split('-').map(Number);
      const value = state.board[row][col];
      state.board[row][col] = value === 2 ? 0 : 2;
      renderActiveGame();
    });
  });

  document.getElementById('reset-nonogram').addEventListener('click', () => {
    state.board = state.solution.map(row => row.map(() => 0));
    renderActiveGame();
    setGameMessage('Picross board reset.');
  });

  setGameMessage('Fill cells to match the clue counts.');
}

function isNonogramSolved() {
  const state = getGameState('nonogram');
  return state.solution.every((row, rowIndex) => row.every((filled, colIndex) => Boolean(state.board[rowIndex][colIndex] === 1) === filled));
}

function checkNonogram() {
  const state = getGameState('nonogram');
  const solved = isNonogramSolved();
  state.solved = solved;
  if (solved) submitGameScore(state, 'nonogram', { bestTimeMs: getElapsedSince(state.startedAt) });
  setGameMessage(solved ? 'Picture solved.' : 'The filled pattern does not match yet.', solved ? 'success' : 'warning');
}

function getQueensColor(regionId, size) {
  const hue = Math.round((360 / size) * regionId + 18);
  return `hsl(${hue} 72% 83%)`;
}

function analyzeQueensBoard(state) {
  const rowCounts = Array(state.size).fill(0);
  const colCounts = Array(state.size).fill(0);
  const regionCounts = Array(state.size).fill(0);
  const queens = [];
  const conflicts = new Set();

  for (let row = 0; row < state.size; row += 1) {
    for (let col = 0; col < state.size; col += 1) {
      if (state.board[row][col] !== 1) continue;
      queens.push({ row, col, region: state.regions[row][col] });
      rowCounts[row] += 1;
      colCounts[col] += 1;
      regionCounts[state.regions[row][col]] += 1;
    }
  }

  queens.forEach(queen => {
    if (rowCounts[queen.row] > 1 || colCounts[queen.col] > 1 || regionCounts[queen.region] > 1) {
      conflicts.add(`${queen.row}-${queen.col}`);
    }
  });

  for (let i = 0; i < queens.length; i += 1) {
    for (let j = i + 1; j < queens.length; j += 1) {
      if (Math.abs(queens[i].row - queens[j].row) <= 1 && Math.abs(queens[i].col - queens[j].col) <= 1) {
        conflicts.add(`${queens[i].row}-${queens[i].col}`);
        conflicts.add(`${queens[j].row}-${queens[j].col}`);
      }
    }
  }

  const solved = queens.length === state.size
    && rowCounts.every(count => count === 1)
    && colCounts.every(count => count === 1)
    && regionCounts.every(count => count === 1)
    && conflicts.size === 0;

  return { conflicts, solved, placed: queens.length };
}

function renderQueens() {
  const state = getGameState('queens');
  const analysis = analyzeQueensBoard(state);
  if (analysis.solved) submitGameScore(state, 'queens', { bestTimeMs: getElapsedSince(state.startedAt) });
  const compareReady = isCompareReady('queens', state, 5000);
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <label class="tool-label">Size
        <select id="queens-size">
          ${getQueensSizes().map(size => `<option value="${size}" ${size === state.size ? 'selected' : ''}>${size}x${size}</option>`).join('')}
        </select>
      </label>
      <span class="pill">${analysis.placed}/${state.size} queens placed</span>
      <span class="pill">Left click queen</span>
      <span class="pill">Right click mark</span>
      <button type="button" class="secondary-button" id="queens-solution-toggle" ${compareReady ? '' : 'disabled'}>
        ${state.showSolution ? 'Hide Solution' : (compareReady ? 'Show Solution' : `Show Solution (${getCompareCountdown(state, 5000)}s)`)}
      </button>
    </div>
  `;

  refs.gameArea.innerHTML = `
    <div class="compare-layout">
      <div class="compare-panel">
        <h3>Your Board</h3>
        <div class="queens-board" style="--size:${state.size}">
          ${state.board.flatMap((row, rowIndex) => row.map((value, colIndex) => {
            const region = state.regions[rowIndex][colIndex];
            const classes = [
              'queen-cell',
              value === 1 ? 'queen' : '',
              value === 2 ? 'marked' : '',
              analysis.conflicts.has(`${rowIndex}-${colIndex}`) ? 'conflict' : ''
            ].filter(Boolean).join(' ');
            return `
              <button
                type="button"
                class="${classes}"
                data-queen-cell="${rowIndex}-${colIndex}"
                style="background:${getQueensColor(region, state.size)}"
              ></button>
            `;
          })).join('')}
        </div>
      </div>
      ${state.showSolution ? `
        <div class="compare-panel">
          <h3>Solution</h3>
          <div class="queens-board" style="--size:${state.size}">
            ${state.regions.flatMap((row, rowIndex) => row.map((region, colIndex) => `
              <div
                class="queen-cell static ${state.solution[rowIndex] === colIndex ? 'queen' : ''}"
                style="background:${getQueensColor(region, state.size)}"
              ></div>
            `)).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  document.getElementById('queens-size').addEventListener('change', event => {
    app.states.queens = createQueensState(Number(event.target.value));
    renderActiveGame();
  });
  document.getElementById('queens-solution-toggle').addEventListener('click', () => {
    if (!isCompareReady('queens', state, 5000)) return;
    state.showSolution = !state.showSolution;
    renderActiveGame();
  });

  refs.gameArea.querySelectorAll('[data-queen-cell]').forEach(button => {
    button.addEventListener('click', () => {
      const [row, col] = button.dataset.queenCell.split('-').map(Number);
      state.board[row][col] = state.board[row][col] === 1 ? 0 : 1;
      renderActiveGame();
    });
    button.addEventListener('contextmenu', event => {
      event.preventDefault();
      const [row, col] = button.dataset.queenCell.split('-').map(Number);
      state.board[row][col] = state.board[row][col] === 2 ? 0 : 2;
      renderActiveGame();
    });
  });

  if (analysis.solved) setGameMessage('Queens board solved.', 'success');
  else if (analysis.conflicts.size) setGameMessage('Red-outlined queens conflict with another rule.', 'danger');
  else setGameMessage('Place one queen in each row, column, and region. This board was screened to avoid guess-only starts.');
}

function checkQueens() {
  const analysis = analyzeQueensBoard(getGameState('queens'));
  if (analysis.solved) setGameMessage('Queens board solved.', 'success');
  else if (analysis.conflicts.size) setGameMessage('Some queens conflict with row, column, region, or adjacency rules.', 'danger');
  else setGameMessage('Keep going. The board is incomplete but currently valid.', 'warning');
}

function renderPinpoint() {
  const state = getGameState('pinpoint');
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">${state.revealed}/${state.clues.length} clues shown</span>
      <button type="button" class="secondary-button" id="reveal-clue-button" ${state.revealed >= state.clues.length || state.solved ? 'disabled' : ''}>Reveal Next Clue</button>
      <input id="pinpoint-input" class="guess-input" placeholder="Type answer" value="${state.current}">
    </div>
  `;

  refs.gameArea.innerHTML = `
    <div class="pinpoint-shell">
      <div class="pinpoint-clues">
        ${state.clues.map((clue, index) => `
          <div class="pinpoint-clue ${index < state.revealed ? '' : 'locked'}">
            ${index < state.revealed ? clue : 'Hidden clue'}
          </div>
        `).join('')}
      </div>
      <div class="guess-history">
        ${state.guesses.map(guess => `<span class="guess-chip">${guess}</span>`).join('')}
      </div>
    </div>
  `;

  const input = document.getElementById('pinpoint-input');
  input.addEventListener('input', () => {
    state.current = input.value.toUpperCase();
    refs.checkGameButton.disabled = state.solved || !state.current.trim();
  });
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitPinpointGuess();
    }
  });
  input.focus();

  document.getElementById('reveal-clue-button').addEventListener('click', () => {
    if (state.revealed < state.clues.length && !state.solved) {
      state.revealed += 1;
      renderActiveGame();
    }
  });

  if (state.solved) setGameMessage(`Solved in ${state.revealed} clue${state.revealed === 1 ? '' : 's'}.`, 'success');
  else setGameMessage('Reveal clues slowly if you want a harder round.');
}

function submitPinpointGuess() {
  const state = getGameState('pinpoint');
  const guess = String(state.current || '').trim().toUpperCase();
  if (!guess) {
    setGameMessage('Enter a guess first.', 'warning');
    return;
  }
  if (!getDictionaryWordSet().has(guess.toLowerCase())) {
    setGameMessage('That guess is not in the dictionary list.', 'warning');
    return;
  }
  state.guesses.push(guess);
  if (guess === state.answer) {
    state.solved = true;
    submitGameScore(state, 'pinpoint', {
      bestTimeMs: getElapsedSince(state.startedAt),
      fewestMistakes: Math.max(0, state.guesses.length - 1)
    });
  }
  state.current = '';
  renderActiveGame();
  if (!state.solved) setGameMessage('Not quite. Reveal another clue or try a new guess.', 'warning');
}

function renderSnake() {
  const state = getGameState('snake');
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">${state.setup.gridSize}x${state.setup.gridSize} board</span>
      <span class="pill">${state.setup.blocksPerSecond.toFixed(1)} blocks/sec</span>
      <span class="pill">${state.setup.fruitCount} fruit${state.setup.fruitCount === 1 ? '' : 's'}</span>
      <span class="pill">Color ${SNAKE_COLOR_OPTIONS[state.setup.color].label}</span>
      <span class="pill">${getSnakeModeSummary(state.setup)}</span>
    </div>
  `;

  if (state.screen === 'setup') {
    renderSnakeSetup(state);
    setGameMessage(
      state.setup.mode === 'blender' && state.setup.setupPage === 'blender'
        ? 'Choose the special rules you want blended together, then start the run.'
        : 'Choose your settings, then start the run.'
    );
    return;
  }

  refs.gameArea.innerHTML = `
    <div class="canvas-wrap">
      <div class="snake-canvas-head">
        <div class="inline-tools">
          <span class="score-pill" id="snake-score">Score: ${state.score}</span>
          <span class="score-pill" id="snake-status">${state.over ? 'Finished' : (state.running ? 'Running' : 'Stopped')}</span>
          <span class="score-pill">Color ${SNAKE_COLOR_OPTIONS[state.setup.color].label}</span>
        </div>
        ${state.running ? '<button type="button" class="snake-inline-stop" id="snake-inline-stop">Stop</button>' : ''}
      </div>
      <canvas id="snake-canvas" class="game-canvas" width="560" height="560"></canvas>
    </div>
  `;
  const inlineStopButton = document.getElementById('snake-inline-stop');
  if (inlineStopButton) {
    inlineStopButton.addEventListener('click', () => {
      stopSnakeRound(state);
    });
  }
  drawSnake();

  if (state.over) {
    if (state.manualStop) setGameMessage('Snake stopped. Open setup to change options or play again.', 'warning');
    else if (snakeHasMode(state, 'peace') && state.snake.length >= state.gridSize * state.gridSize) setGameMessage('The board is full. Peace mode completed.', 'success');
    else setGameMessage(`Snake finished with score ${state.score}.`, snakeHasMode(state, 'peace') ? 'success' : 'danger');
  } else if (state.awaitingRedemption) {
    setGameMessage('Redemption window active. Last-moment turns still count.', 'warning');
  } else if (state.poisonMovesRemaining > 0) {
    setGameMessage(`Poison effect active for ${state.poisonMovesRemaining} more move${state.poisonMovesRemaining === 1 ? '' : 's'}.`, 'warning');
  } else {
    setGameMessage('Use the top-right Stop button to end this run and return to setup.');
  }
}

function renderSnakeSetup(state) {
  const modeOption = getSnakeModeOption(state.setup.mode);
  const isBlenderBase = state.setup.mode === 'blender' && state.setup.setupPage !== 'blender';
  const isBlenderPage = state.setup.mode === 'blender' && state.setup.setupPage === 'blender';
  refs.gameArea.innerHTML = isBlenderPage
    ? `
      <div class="snake-setup-shell">
        <div class="snake-setup-section">
          <div class="snake-setup-nav">
            <button type="button" class="secondary-button snake-back-button" id="snake-back-button" aria-label="Back to snake setup">&lt; Back</button>
            <div>
              <h3>Blender Modes</h3>
              <p>Turn on any combination of special rules. Anything left off stays normal.</p>
            </div>
          </div>
          <div class="snake-choice-grid">
            ${SNAKE_BLENDABLE_MODE_IDS.map(modeId => {
              const option = getSnakeModeOption(modeId);
              return `
                <button type="button" class="snake-choice-button ${state.setup.blenderModes.includes(modeId) ? 'selected' : ''}" data-snake-blender-mode="${modeId}">
                  <strong>${option.label}</strong>
                  <span>${option.description}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="snake-summary-card">
          <div class="snake-summary-grid">
            <div class="snake-summary-chip">
              <strong>${state.setup.gridSize} x ${state.setup.gridSize}</strong>
              <span>Board</span>
            </div>
            <div class="snake-summary-chip">
              <strong>${state.setup.blocksPerSecond.toFixed(1)} blocks/sec</strong>
              <span>Speed</span>
            </div>
            <div class="snake-summary-chip">
              <strong>${state.setup.fruitCount}</strong>
              <span>Fruit visible</span>
            </div>
            <div class="snake-summary-chip">
              <strong>${SNAKE_COLOR_OPTIONS[state.setup.color].label}</strong>
              <span>Color</span>
            </div>
            <div class="snake-summary-chip">
              <strong>${state.setup.blenderModes.length}</strong>
              <span>Special rules</span>
            </div>
          </div>
          <button type="button" class="snake-start-button" id="snake-start-button">Start Snake</button>
        </div>
      </div>
    `
    : `
      <div class="snake-setup-shell">
        <div class="snake-setup-section">
          <h3>Display</h3>
          <p>Pick the snake color. Primary colors use a score-based head-to-tail gradient.</p>
          <div class="snake-choice-grid">
            ${Object.entries(SNAKE_COLOR_OPTIONS).map(([colorId, color]) => `
              <button type="button" class="snake-choice-button ${state.setup.color === colorId ? 'selected' : ''}" data-snake-color="${colorId}">
                <strong>${color.label}</strong>
                <span>${colorId === 'black' || colorId === 'white' ? 'Solid tone' : 'Gradient body'}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="snake-setup-section">
          <h3>Board Size</h3>
          <p>Choose a preset board size.</p>
          <div class="snake-choice-grid">
            ${Object.entries(SNAKE_BOARD_PRESETS).map(([preset, size]) => `
              <button type="button" class="snake-choice-button ${state.setup.boardPreset === preset ? 'selected' : ''}" data-snake-board="${preset}">
                <strong>${preset[0].toUpperCase()}${preset.slice(1)}</strong>
                <span>${size} x ${size}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="snake-setup-section">
          <h3>Speed</h3>
          <p>Use the presets or tune the actual speed in blocks per second.</p>
          <div class="snake-choice-grid">
            ${Object.entries(SNAKE_SPEED_PRESETS).map(([preset, speed]) => `
              <button type="button" class="snake-choice-button ${state.setup.speedPreset === preset ? 'selected' : ''}" data-snake-speed-preset="${preset}">
                <strong>${preset[0].toUpperCase()}${preset.slice(1)}</strong>
                <span>${speed.toFixed(1)} blocks/sec</span>
              </button>
            `).join('')}
          </div>
          <label class="snake-slider-row">
            <span id="snake-speed-label">Speed: ${state.setup.blocksPerSecond.toFixed(1)} blocks/sec</span>
            <input id="snake-speed-slider" type="range" min="2" max="20" step="0.5" value="${state.setup.blocksPerSecond}">
          </label>
        </div>

        <div class="snake-setup-section">
          <h3>Fruit Count</h3>
          <p>Set how many fruit are on the board at once while leaving the snake's starting row open.</p>
          <div class="snake-choice-grid">
            ${SNAKE_FRUIT_PRESETS.map(count => `
              <button type="button" class="snake-choice-button ${state.setup.fruitPreset === count ? 'selected' : ''}" data-snake-fruit-preset="${count}">
                <strong>${count}</strong>
                <span>${count === 1 ? 'Single fruit' : 'Active fruit'}</span>
              </button>
            `).join('')}
          </div>
          <label class="snake-slider-row">
            <span id="snake-fruit-label">Fruit visible: ${state.setup.fruitCount}</span>
            <input id="snake-fruit-slider" type="range" min="1" max="${getSnakeMaxFruitCount(state.setup.gridSize)}" step="1" value="${state.setup.fruitCount}">
          </label>
        </div>

        <div class="snake-setup-section">
          <h3>Mode</h3>
          <p>Pick one rule set, or choose Blender to combine multiple special settings.</p>
          <div class="snake-choice-grid">
            ${SNAKE_MODE_OPTIONS.map(option => `
              <button type="button" class="snake-choice-button ${state.setup.mode === option.id ? 'selected' : ''}" data-snake-mode="${option.id}">
                <strong>${option.label}</strong>
                <span>${option.description}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="snake-summary-card">
          <div class="snake-summary-grid">
            <div class="snake-summary-chip">
              <strong>${state.setup.gridSize} x ${state.setup.gridSize}</strong>
              <span>Board</span>
            </div>
            <div class="snake-summary-chip">
              <strong>${state.setup.blocksPerSecond.toFixed(1)} blocks/sec</strong>
              <span>Speed</span>
            </div>
            <div class="snake-summary-chip">
              <strong>${state.setup.fruitCount}</strong>
              <span>Fruit visible</span>
            </div>
            <div class="snake-summary-chip">
              <strong>${SNAKE_COLOR_OPTIONS[state.setup.color].label}</strong>
              <span>Color</span>
            </div>
            <div class="snake-summary-chip">
              <strong>${modeOption.label}</strong>
              <span>Mode</span>
            </div>
          </div>
          <button type="button" class="snake-start-button" id="snake-start-button">${isBlenderBase ? 'Continue' : 'Start Snake'}</button>
        </div>
      </div>
    `;

  refs.gameArea.querySelectorAll('[data-snake-color]').forEach(button => {
    button.addEventListener('click', () => {
      updateSnakeSetup(state, { color: button.dataset.snakeColor });
      renderActiveGame();
    });
  });

  refs.gameArea.querySelectorAll('[data-snake-board]').forEach(button => {
    button.addEventListener('click', () => {
      const boardPreset = button.dataset.snakeBoard;
      updateSnakeSetup(state, {
        boardPreset,
        gridSize: SNAKE_BOARD_PRESETS[boardPreset]
      });
      renderActiveGame();
    });
  });

  refs.gameArea.querySelectorAll('[data-snake-speed-preset]').forEach(button => {
    button.addEventListener('click', () => {
      const speedPreset = button.dataset.snakeSpeedPreset;
      updateSnakeSetup(state, {
        speedPreset,
        blocksPerSecond: SNAKE_SPEED_PRESETS[speedPreset]
      });
      renderActiveGame();
    });
  });

  refs.gameArea.querySelectorAll('[data-snake-fruit-preset]').forEach(button => {
    button.addEventListener('click', () => {
      const fruitCount = Number(button.dataset.snakeFruitPreset);
      updateSnakeSetup(state, {
        fruitPreset: fruitCount,
        fruitCount
      });
      renderActiveGame();
    });
  });

  refs.gameArea.querySelectorAll('[data-snake-mode]').forEach(button => {
    button.addEventListener('click', () => {
      updateSnakeSetup(state, {
        mode: button.dataset.snakeMode,
        setupPage: 'base'
      });
      renderActiveGame();
    });
  });

  refs.gameArea.querySelectorAll('[data-snake-blender-mode]').forEach(button => {
    button.addEventListener('click', () => {
      const modeId = button.dataset.snakeBlenderMode;
      const nextModes = state.setup.blenderModes.includes(modeId)
        ? state.setup.blenderModes.filter(entry => entry !== modeId)
        : [...state.setup.blenderModes, modeId];
      updateSnakeSetup(state, { blenderModes: nextModes });
      renderActiveGame();
    });
  });

  const speedSlider = document.getElementById('snake-speed-slider');
  if (speedSlider) {
    speedSlider.addEventListener('input', event => {
      updateSnakeSetup(state, {
        speedPreset: null,
        blocksPerSecond: Number(event.target.value)
      });
      const speedLabel = document.getElementById('snake-speed-label');
      if (speedLabel) speedLabel.textContent = `Speed: ${state.setup.blocksPerSecond.toFixed(1)} blocks/sec`;
      const speedPill = refs.gameTools.querySelectorAll('.pill')[1];
      if (speedPill) speedPill.textContent = `${state.setup.blocksPerSecond.toFixed(1)} blocks/sec`;
      refs.gameArea.querySelectorAll('[data-snake-speed-preset]').forEach(button => {
        button.classList.remove('selected');
      });
    });
    speedSlider.addEventListener('change', () => {
      renderActiveGame();
    });
  }

  const fruitSlider = document.getElementById('snake-fruit-slider');
  if (fruitSlider) {
    fruitSlider.addEventListener('input', event => {
      const fruitCount = Number(event.target.value);
      updateSnakeSetup(state, {
        fruitPreset: SNAKE_FRUIT_PRESETS.includes(fruitCount) ? fruitCount : null,
        fruitCount
      });
      const fruitLabel = document.getElementById('snake-fruit-label');
      if (fruitLabel) fruitLabel.textContent = `Fruit visible: ${state.setup.fruitCount}`;
      const fruitPill = refs.gameTools.querySelectorAll('.pill')[2];
      if (fruitPill) fruitPill.textContent = `${state.setup.fruitCount} fruit${state.setup.fruitCount === 1 ? '' : 's'}`;
      refs.gameArea.querySelectorAll('[data-snake-fruit-preset]').forEach(button => {
        if (Number(button.dataset.snakeFruitPreset) === state.setup.fruitPreset) button.classList.add('selected');
        else button.classList.remove('selected');
      });
    });
    fruitSlider.addEventListener('change', () => {
      renderActiveGame();
    });
  }

  const backButton = document.getElementById('snake-back-button');
  if (backButton) {
    backButton.addEventListener('click', () => {
      updateSnakeSetup(state, { setupPage: 'base' });
      renderActiveGame();
    });
  }

  document.getElementById('snake-start-button').addEventListener('click', () => {
    if (isBlenderBase) {
      updateSnakeSetup(state, { setupPage: 'blender' });
      renderActiveGame();
      return;
    }
    startSnakeRound(state);
  });
}

function updateSnakeSetup(state, updates) {
  state.setup = {
    ...state.setup,
    ...updates
  };
  state.setup.gridSize = SNAKE_BOARD_PRESETS[state.setup.boardPreset] || state.setup.gridSize;
  state.setup.blocksPerSecond = readNumber(state.setup.blocksPerSecond, SNAKE_SPEED_PRESETS.medium, 2, 20);
  state.setup.fruitCount = clampSnakeFruitCount(state.setup.gridSize, state.setup.fruitCount);
  state.setup.blenderModes = [...new Set((Array.isArray(state.setup.blenderModes) ? state.setup.blenderModes : [])
    .filter(modeId => SNAKE_BLENDABLE_MODE_IDS.includes(modeId)))];
  if (!SNAKE_FRUIT_PRESETS.includes(state.setup.fruitCount)) state.setup.fruitPreset = null;
  if (state.setup.mode !== 'blender') state.setup.setupPage = 'base';
}

function getSnakeModeOption(modeId) {
  return SNAKE_MODE_OPTIONS.find(option => option.id === modeId) || SNAKE_MODE_OPTIONS[0];
}

function getSnakeActiveModes(state) {
  if (state.setup.mode === 'blender') return new Set(state.setup.blenderModes);
  if (state.setup.mode === 'normal') return new Set();
  return new Set([state.setup.mode]);
}

function snakeHasMode(state, modeId) {
  return getSnakeActiveModes(state).has(modeId);
}

function getSnakeModeSummary(setup) {
  if (setup.mode !== 'blender') return getSnakeModeOption(setup.mode).label;
  if (!setup.blenderModes.length) return 'Blender: Normal Base';
  return `Blender: ${setup.blenderModes.map(modeId => getSnakeModeOption(modeId).label).join(', ')}`;
}

function getSnakeRevealDistance(origin, target) {
  return Math.abs(origin.x - target.x) + Math.abs(origin.y - target.y);
}

function isSnakeCellVisible(state, cell) {
  if (!snakeHasMode(state, 'lightbulb')) return true;
  return getSnakeRevealDistance(state.snake[0], cell) <= SNAKE_LIGHT_RADIUS;
}

function startSnakeRound(state) {
  stopSnakeLoop();
  clearSnakeRedemption(state);
  const runtime = buildSnakeRuntime(state.setup);
  Object.assign(state, runtime, {
    screen: 'playing',
    running: true,
    over: false,
    manualStop: false
  });
  syncSnakeFoods(state);
  startSnakeLoop();
  renderActiveGame();
}

function openSnakeSetup(state, resetOptions = false) {
  stopSnakeLoop();
  clearSnakeRedemption(state);
  const setup = resetOptions ? createSnakeSetup() : deepClone(state.setup);
  app.states.snake = {
    setup,
    ...buildSnakeRuntime(setup)
  };
  renderActiveGame();
}

function stopSnakeRound(state) {
  clearSnakeRedemption(state);
  state.running = false;
  state.over = true;
  state.manualStop = true;
  stopSnakeLoop();
  renderActiveGame();
}

function drawSnake() {
  const canvas = document.getElementById('snake-canvas');
  if (!canvas) return;
  const state = getGameState('snake');
  const ctx = canvas.getContext('2d');
  const cell = canvas.width / state.gridSize;
  const lightbulbMode = snakeHasMode(state, 'lightbulb');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = lightbulbMode ? '#141821' : '#fff8ef';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < state.gridSize; row += 1) {
    for (let col = 0; col < state.gridSize; col += 1) {
      if (!lightbulbMode || isSnakeCellVisible(state, { x: col, y: row })) {
        ctx.fillStyle = '#fffdf8';
        ctx.fillRect(col * cell, row * cell, cell, cell);
      }
    }
  }

  ctx.strokeStyle = lightbulbMode ? 'rgba(244, 239, 224, 0.08)' : 'rgba(20, 92, 100, 0.1)';
  for (let index = 0; index <= state.gridSize; index += 1) {
    ctx.beginPath();
    ctx.moveTo(index * cell, 0);
    ctx.lineTo(index * cell, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, index * cell);
    ctx.lineTo(canvas.width, index * cell);
    ctx.stroke();
  }

  state.foods.forEach(food => {
    if (lightbulbMode && !isSnakeCellVisible(state, food)) return;
    const centerX = (food.x + 0.5) * cell;
    const centerY = (food.y + 0.5) * cell;
    ctx.fillStyle = food.type === 'poison' ? '#5f566f' : '#dc6e48';
    ctx.beginPath();
    ctx.arc(centerX, centerY, cell * 0.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = food.type === 'poison' ? '#f4f0ff' : '#fff5e8';
    ctx.fillRect(centerX - (cell * 0.05), centerY - (cell * 0.36), cell * 0.1, cell * 0.16);
    if (food.type === 'poison') {
      ctx.fillStyle = '#fff5e8';
      ctx.font = `${Math.max(10, cell * 0.22)}px Trebuchet MS`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('!', centerX, centerY + 1);
    }
  });

  state.snake.forEach((segment, index) => {
    if (lightbulbMode && !isSnakeCellVisible(state, segment)) return;
    ctx.fillStyle = getSnakeSegmentColor(state, index);
    ctx.fillRect(segment.x * cell + 2, segment.y * cell + 2, cell - 4, cell - 4);
  });

  const scoreEl = document.getElementById('snake-score');
  const statusEl = document.getElementById('snake-status');
  if (scoreEl) scoreEl.textContent = `Score: ${state.score}`;
  if (statusEl) statusEl.textContent = state.over ? 'Finished' : (state.running ? 'Running' : 'Stopped');
}

function getSnakeSegmentColor(state, index) {
  if (state.poisonMovesRemaining > 0) {
    return state.setup.color === 'black' ? 'rgb(248, 248, 248)' : 'rgb(140, 140, 140)';
  }

  const color = SNAKE_COLOR_OPTIONS[state.setup.color] || SNAKE_COLOR_OPTIONS.blue;
  if (state.setup.color === 'black' || state.setup.color === 'white') {
    return `rgb(${color.dark.join(', ')})`;
  }

  const intensity = Math.min(1, 0.55 + (state.score / Math.max(8, state.gridSize)));
  const adjustedLight = color.light.map((value, valueIndex) => Math.round(color.dark[valueIndex] + ((value - color.dark[valueIndex]) * intensity)));
  const ratio = state.snake.length <= 1 ? 0 : index / (state.snake.length - 1);
  const rgb = color.dark.map((value, valueIndex) => Math.round(value + ((adjustedLight[valueIndex] - value) * ratio)));
  return `rgb(${rgb.join(', ')})`;
}

function isOppositeDirection(current, next) {
  return (
    (current === 'up' && next === 'down') ||
    (current === 'down' && next === 'up') ||
    (current === 'left' && next === 'right') ||
    (current === 'right' && next === 'left')
  );
}

function getOppositeDirection(direction) {
  return {
    up: 'down',
    down: 'up',
    left: 'right',
    right: 'left'
  }[direction];
}

function getNextHeadPosition(head, direction) {
  const nextHead = { x: head.x, y: head.y };
  if (direction === 'up') nextHead.y -= 1;
  if (direction === 'down') nextHead.y += 1;
  if (direction === 'left') nextHead.x -= 1;
  if (direction === 'right') nextHead.x += 1;
  return nextHead;
}

function canUseQuickTurn(currentDirection, firstDirection, secondDirection) {
  const opposite = getOppositeDirection(currentDirection);
  const dirs = [firstDirection, secondDirection];
  const perpendicular = dirs.find(direction => direction !== currentDirection && direction !== opposite);
  return Boolean(perpendicular && dirs.includes(opposite));
}

function buildQuickTurnSequence(currentDirection, firstDirection, secondDirection) {
  if (!canUseQuickTurn(currentDirection, firstDirection, secondDirection)) return null;
  const opposite = getOppositeDirection(currentDirection);
  const perpendicular = [firstDirection, secondDirection].find(direction => direction !== currentDirection && direction !== opposite);
  return [perpendicular, opposite];
}

function queueSnakeDirection(state, direction) {
  if (!state.running || state.poisonMovesRemaining > 0) return;
  const now = Date.now();
  const currentDirection = state.direction;
  const candidate = state.comboCandidate;

  if (candidate && now - candidate.time <= SNAKE_COMBO_WINDOW_MS) {
    const quickTurn = buildQuickTurnSequence(currentDirection, candidate.direction, direction);
    if (quickTurn) {
      state.queuedQuickTurn = quickTurn;
      state.comboCandidate = null;
      state.nextDirection = quickTurn[quickTurn.length - 1];
      return;
    }
  }

  state.comboCandidate = { direction, time: now };
  if (!isOppositeDirection(state.nextDirection || currentDirection, direction)) {
    state.nextDirection = direction;
  }
}

function getSnakeSearchOffsets(limit) {
  const offsets = [0];
  for (let step = 1; step < limit; step += 1) {
    offsets.push(-step, step);
  }
  return offsets;
}

function getPeaceTeleportPosition(state, direction, bodyToCheck, nextHead) {
  const occupied = new Set(bodyToCheck.map(segment => `${segment.x},${segment.y}`));
  const offsets = getSnakeSearchOffsets(state.gridSize);
  const candidates = [];

  if (direction === 'left' || direction === 'right') {
    const x = direction === 'left' ? state.gridSize - 1 : 0;
    offsets.forEach(offset => {
      const row = nextHead.y + offset;
      if (row >= 0 && row < state.gridSize) {
        candidates.push({ x, y: row });
      }
    });
  } else {
    const y = direction === 'up' ? state.gridSize - 1 : 0;
    offsets.forEach(offset => {
      const col = nextHead.x + offset;
      if (col >= 0 && col < state.gridSize) {
        candidates.push({ x: col, y });
      }
    });
  }

  const openSpot = candidates.find(candidate => !occupied.has(`${candidate.x},${candidate.y}`));
  return openSpot || candidates[0] || { x: Math.max(0, Math.min(state.gridSize - 1, nextHead.x)), y: Math.max(0, Math.min(state.gridSize - 1, nextHead.y)) };
}

function getSnakeDirectionFromSegments(snake, fallback = 'right') {
  if (snake.length < 2) return fallback;
  const head = snake[0];
  const neck = snake[1];
  if (head.x > neck.x) return 'right';
  if (head.x < neck.x) return 'left';
  if (head.y > neck.y) return 'down';
  if (head.y < neck.y) return 'up';
  return fallback;
}

function cloneSnakeTurnSnapshot(state) {
  return {
    snake: deepClone(state.snake),
    direction: state.direction,
    nextDirection: state.nextDirection,
    foods: deepClone(state.foods),
    score: state.score,
    poisonMovesRemaining: state.poisonMovesRemaining,
    queuedQuickTurn: state.queuedQuickTurn ? state.queuedQuickTurn.slice() : null,
    comboCandidate: state.comboCandidate ? { ...state.comboCandidate } : null,
    moveCount: state.moveCount
  };
}

function restoreSnakeTurnSnapshot(state, snapshot) {
  if (!snapshot) return;
  state.snake = deepClone(snapshot.snake);
  state.direction = snapshot.direction;
  state.nextDirection = snapshot.nextDirection;
  state.foods = deepClone(snapshot.foods);
  state.score = snapshot.score;
  state.poisonMovesRemaining = snapshot.poisonMovesRemaining;
  state.queuedQuickTurn = snapshot.queuedQuickTurn ? snapshot.queuedQuickTurn.slice() : null;
  state.comboCandidate = snapshot.comboCandidate ? { ...snapshot.comboCandidate } : null;
  state.moveCount = snapshot.moveCount;
}

function applySnakeFoodEffect(state, food) {
  state.foods = state.foods.filter(existing => !(existing.x === food.x && existing.y === food.y && existing.type === food.type));
  if (food.type === 'normal') {
    state.score += 1;
  } else if (food.type === 'poison') {
    state.poisonMovesRemaining = Math.max(1, state.score || 1);
  }

  if (snakeHasMode(state, 'twoHeaded')) {
    state.snake.reverse();
    const nextDirection = getSnakeDirectionFromSegments(state.snake, getOppositeDirection(state.direction));
    state.direction = nextDirection;
    state.nextDirection = nextDirection;
  }

  syncSnakeFoods(state, food);
}

function getSafePoisonDirection(state) {
  const options = shuffle(['up', 'down', 'left', 'right']);
  for (const direction of options) {
    const nextHead = getNextHeadPosition(state.snake[0], direction);
    const hitWall = nextHead.x < 0 || nextHead.y < 0 || nextHead.x >= state.gridSize || nextHead.y >= state.gridSize;
    if (snakeHasMode(state, 'peace')) return direction;
    const bodyToCheck = state.snake.slice(0, -1);
    const hitSelf = bodyToCheck.some(segment => segment.x === nextHead.x && segment.y === nextHead.y);
    if (!hitWall && !hitSelf) return direction;
  }
  return options[0] || state.direction;
}

function getSnakePendingDirections(state) {
  return state.poisonMovesRemaining > 0
    ? [getSafePoisonDirection(state)]
    : (state.queuedQuickTurn && state.queuedQuickTurn.length
      ? state.queuedQuickTurn.slice()
      : [isOppositeDirection(state.direction, state.nextDirection) ? state.direction : state.nextDirection]);
}

function getMagnetFruitCandidates(food, head) {
  const deltaX = head.x - food.x;
  const deltaY = head.y - food.y;
  const options = [];
  const horizontalStep = deltaX === 0 ? null : { x: food.x + Math.sign(deltaX), y: food.y };
  const verticalStep = deltaY === 0 ? null : { x: food.x, y: food.y + Math.sign(deltaY) };
  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    if (horizontalStep) options.push(horizontalStep);
    if (verticalStep) options.push(verticalStep);
  } else {
    if (verticalStep) options.push(verticalStep);
    if (horizontalStep) options.push(horizontalStep);
  }
  options.push({ x: food.x, y: food.y });
  return options;
}

function moveSnakeFoodsTowardHead(state) {
  if (!snakeHasMode(state, 'magnet')) return;
  if (state.moveCount % SNAKE_MAGNET_STEP_EVERY !== 0) return;

  const head = state.snake[0];
  const updatedFoods = [];
  state.foods.forEach(food => {
    const occupiedSnake = new Set(state.snake.slice(1).map(segment => `${segment.x},${segment.y}`));
    const occupiedFoods = new Set(updatedFoods.map(item => `${item.x},${item.y}`));
    const nextSpot = getMagnetFruitCandidates(food, head).find(candidate => {
      if (candidate.x === head.x && candidate.y === head.y) return true;
      if (candidate.x < 0 || candidate.y < 0 || candidate.x >= state.gridSize || candidate.y >= state.gridSize) return false;
      if (candidate.y === state.reservedFruitRow) return false;
      if (occupiedSnake.has(`${candidate.x},${candidate.y}`)) return false;
      if (occupiedFoods.has(`${candidate.x},${candidate.y}`)) return false;
      return true;
    }) || food;
    updatedFoods.push({ ...food, x: nextSpot.x, y: nextSpot.y });
  });
  state.foods = updatedFoods;

  let foodOnHead = state.foods.find(food => food.x === state.snake[0].x && food.y === state.snake[0].y);
  while (foodOnHead) {
    const tail = state.snake[state.snake.length - 1];
    state.snake.push({ ...tail });
    applySnakeFoodEffect(state, foodOnHead);
    foodOnHead = state.foods.find(food => food.x === state.snake[0].x && food.y === state.snake[0].y);
  }
}

function advanceSnake(state, directions) {
  for (const direction of directions) {
    const head = state.snake[0];
    let nextHead = getNextHeadPosition(head, direction);
    const food = state.foods.find(item => item.x === nextHead.x && item.y === nextHead.y);
    const willGrow = Boolean(food);
    const bodyToCheck = willGrow ? state.snake : state.snake.slice(0, -1);
    const hitWall = nextHead.x < 0 || nextHead.y < 0 || nextHead.x >= state.gridSize || nextHead.y >= state.gridSize;
    const hitSelf = bodyToCheck.some(segment => segment.x === nextHead.x && segment.y === nextHead.y);

    if (hitWall || hitSelf) {
      if (snakeHasMode(state, 'peace')) {
        nextHead = getPeaceTeleportPosition(state, direction, bodyToCheck, nextHead);
      } else {
        return { crashed: true };
      }
    }

    const actualFood = state.foods.find(item => item.x === nextHead.x && item.y === nextHead.y);
    const actualWillGrow = Boolean(actualFood);
    state.snake.unshift(nextHead);
    state.direction = direction;
    state.nextDirection = direction;

    if (actualWillGrow) {
      applySnakeFoodEffect(state, actualFood);
    } else {
      state.snake.pop();
    }

    state.moveCount += 1;
    moveSnakeFoodsTowardHead(state);

    if (snakeHasMode(state, 'peace') && state.snake.length >= state.gridSize * state.gridSize) {
      state.running = false;
      state.over = true;
      return { crashed: false, completed: true };
    }
  }

  return { crashed: false };
}

function finalizeSnakeCrash(state) {
  clearSnakeRedemption(state);
  state.running = false;
  state.over = true;
  stopSnakeLoop();
  drawSnake();
  renderActiveGame();
  setGameMessage(`Snake crashed with score ${state.score}.`, 'danger');
}

function resolveSnakeRedemption(state) {
  if (!state || state.screen !== 'playing' || state.over) return;
  const snapshot = state.redemptionSnapshot;
  state.redemptionTimeout = null;
  state.awaitingRedemption = false;
  state.redemptionSnapshot = null;
  restoreSnakeTurnSnapshot(state, snapshot);

  const pendingDirections = getSnakePendingDirections(state);
  state.queuedQuickTurn = null;
  if (state.comboCandidate && Date.now() - state.comboCandidate.time > SNAKE_COMBO_WINDOW_MS) state.comboCandidate = null;

  const result = advanceSnake(state, pendingDirections);
  if (result.crashed) {
    finalizeSnakeCrash(state);
    return;
  }
  if (state.poisonMovesRemaining > 0) state.poisonMovesRemaining = Math.max(0, state.poisonMovesRemaining - 1);
  if (result.completed) {
    stopSnakeLoop();
    drawSnake();
    renderActiveGame();
    return;
  }
  drawSnake();
  startSnakeLoop();
}

function startSnakeLoop() {
  const state = getGameState('snake');
  stopSnakeLoop();
  if (state.awaitingRedemption) return;
  state.stepMs = Math.max(40, Math.round(1000 / state.blocksPerSecond));
  app.runtime.snakeTimer = setInterval(() => {
    const snapshot = cloneSnakeTurnSnapshot(state);
    const pendingDirections = getSnakePendingDirections(state);

    state.queuedQuickTurn = null;
    if (state.comboCandidate && Date.now() - state.comboCandidate.time > SNAKE_COMBO_WINDOW_MS) state.comboCandidate = null;

    const result = advanceSnake(state, pendingDirections);
    if (result.crashed) {
      stopSnakeLoop();
      restoreSnakeTurnSnapshot(state, snapshot);
      state.awaitingRedemption = true;
      state.redemptionSnapshot = snapshot;
      state.redemptionTimeout = setTimeout(() => resolveSnakeRedemption(state), SNAKE_REDEMPTION_MS);
      drawSnake();
      renderActiveGame();
      return;
    }
    if (state.poisonMovesRemaining > 0) state.poisonMovesRemaining = Math.max(0, state.poisonMovesRemaining - 1);
    if (result.completed) {
      stopSnakeLoop();
      drawSnake();
      renderActiveGame();
      return;
    }
    drawSnake();
  }, state.stepMs);
}

function toggleSnake() {
  const state = getGameState('snake');
  if (state.screen === 'setup') {
    if (state.setup.mode === 'blender' && state.setup.setupPage !== 'blender') {
      updateSnakeSetup(state, { setupPage: 'blender' });
      renderActiveGame();
      return;
    }
    startSnakeRound(state);
    return;
  }
  if (state.running) {
    stopSnakeRound(state);
    return;
  }
  startSnakeRound(state);
}

function renderPopcorn() {
  const state = getGameState('popcorn');
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">Target ${state.target}</span>
      <span class="pill">Max burns ${state.maxBurns}</span>
      <span class="pill">Click kernels to pop</span>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="canvas-wrap">
      <canvas id="popcorn-canvas" class="game-canvas" width="560" height="340"></canvas>
      <div class="inline-tools">
        <span class="score-pill" id="popcorn-score">Score: ${state.score}</span>
        <span class="score-pill" id="popcorn-burns">Burns: ${state.burns}/${state.maxBurns}</span>
        <span class="score-pill" id="popcorn-status">${state.over ? 'Round over' : (state.running ? 'Running' : 'Paused')}</span>
      </div>
    </div>
  `;

  const canvas = document.getElementById('popcorn-canvas');
  canvas.addEventListener('click', event => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;
    const hit = state.kernels.find(kernel => {
      const dx = x - kernel.x;
      const dy = y - kernel.y;
      return Math.sqrt(dx * dx + dy * dy) <= kernel.radius;
    });
    if (!hit || state.over || !state.running) return;
    state.kernels = state.kernels.filter(kernel => kernel.id !== hit.id);
    state.score += 1;
    if (state.score >= state.target) {
      state.running = false;
      state.over = true;
      stopPopcornLoop();
      renderActiveGame();
      setGameMessage('Popcorn round cleared.', 'success');
      return;
    }
    drawPopcorn();
  });

  drawPopcorn();
  setGameMessage(state.over ? 'Round over. Restart for a fresh bowl.' : 'Start the round, then click kernels before they burn.');
}

function drawPopcorn() {
  const canvas = document.getElementById('popcorn-canvas');
  if (!canvas) return;
  const state = getGameState('popcorn');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#fffaf1');
  gradient.addColorStop(1, '#f1e0bf');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#b55f2f';
  ctx.beginPath();
  ctx.moveTo(70, 275);
  ctx.lineTo(490, 275);
  ctx.lineTo(450, 330);
  ctx.lineTo(110, 330);
  ctx.closePath();
  ctx.fill();

  state.kernels.forEach(kernel => {
    const freshness = Math.max(0, kernel.ttl) / kernel.maxTtl;
    ctx.fillStyle = freshness > 0.45 ? '#f7d878' : '#d96a4e';
    ctx.beginPath();
    ctx.arc(kernel.x, kernel.y, kernel.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(24, 34, 45, 0.25)';
    ctx.stroke();
  });

  const scoreEl = document.getElementById('popcorn-score');
  const burnsEl = document.getElementById('popcorn-burns');
  const statusEl = document.getElementById('popcorn-status');
  if (scoreEl) scoreEl.textContent = `Score: ${state.score}`;
  if (burnsEl) burnsEl.textContent = `Burns: ${state.burns}/${state.maxBurns}`;
  if (statusEl) statusEl.textContent = state.over ? 'Round over' : (state.running ? 'Running' : 'Paused');
}

function spawnKernel(state) {
  const radius = 16 + Math.floor(Math.random() * 8);
  const maxTtl = 8 + Math.floor(Math.random() * 7);
  state.kernels.push({
    id: state.nextId,
    x: 90 + Math.random() * 380,
    y: 55 + Math.random() * 180,
    radius,
    ttl: maxTtl,
    maxTtl
  });
  state.nextId += 1;
}

function startPopcornLoop() {
  const state = getGameState('popcorn');
  stopPopcornLoop();
  app.runtime.popcornTimer = setInterval(() => {
    state.tick += 1;
    if (state.tick % state.spawnEveryTicks === 0 && state.kernels.length < 12) spawnKernel(state);
    state.kernels = state.kernels.filter(kernel => {
      kernel.ttl -= 1;
      if (kernel.ttl <= 0) {
        state.burns += 1;
        return false;
      }
      return true;
    });
    if (state.burns >= state.maxBurns) {
      state.running = false;
      state.over = true;
      stopPopcornLoop();
      drawPopcorn();
      renderActiveGame();
      setGameMessage(`Too many burned kernels. Score ${state.score}.`, 'danger');
      return;
    }
    drawPopcorn();
  }, 260);
}

function togglePopcorn() {
  const state = getGameState('popcorn');
  if (state.over) {
    resetGame('popcorn');
    return;
  }
  state.running = !state.running;
  if (state.running) startPopcornLoop();
  else stopPopcornLoop();
  renderActiveGame();
}

function compressMergeLine(line) {
  const values = line.filter(Boolean);
  const merged = [];
  let score = 0;
  const mergedIndices = [];
  for (let index = 0; index < values.length; index += 1) {
    let value = values[index];
    if (values[index + 1] === value) {
      value *= 2;
      score += value;
      mergedIndices.push(merged.length);
      index += 1;
    }
    merged.push(value);
  }
  while (merged.length < 4) merged.push(0);
  return { line: merged, score, mergedIndices };
}

function boardsEqual(a, b) {
  return a.every((row, rowIndex) => row.every((value, colIndex) => value === b[rowIndex][colIndex]));
}

function moveMergeBoard(board, direction) {
  const next = Array.from({ length: 4 }, () => Array(4).fill(0));
  let score = 0;
  const merged = [];

  if (direction === 'left' || direction === 'right') {
    for (let row = 0; row < 4; row += 1) {
      const line = direction === 'left' ? board[row].slice() : board[row].slice().reverse();
      const result = compressMergeLine(line);
      score += result.score;
      next[row] = direction === 'left' ? result.line : result.line.reverse();
      result.mergedIndices.forEach(index => {
        merged.push({
          row,
          col: direction === 'left' ? index : 3 - index
        });
      });
    }
  } else {
    for (let col = 0; col < 4; col += 1) {
      const line = [];
      for (let row = 0; row < 4; row += 1) line.push(board[row][col]);
      const processed = direction === 'up' ? line : line.reverse();
      const result = compressMergeLine(processed);
      const finalLine = direction === 'up' ? result.line : result.line.reverse();
      score += result.score;
      for (let row = 0; row < 4; row += 1) next[row][col] = finalLine[row];
      result.mergedIndices.forEach(index => {
        merged.push({
          row: direction === 'up' ? index : 3 - index,
          col
        });
      });
    }
  }

  return { board: next, score, merged, changed: !boardsEqual(board, next) };
}

function canMoveMerge(board) {
  return ['left', 'right', 'up', 'down'].some(direction => moveMergeBoard(board, direction).changed);
}

function renderMerge() {
  const state = getGameState('merge');
  const animation = state.animation || { direction: '', spawned: [], merged: [] };
  const spawnedSet = new Set((animation.spawned || []).map(tile => `${tile.row}-${tile.col}`));
  const mergedSet = new Set((animation.merged || []).map(tile => `${tile.row}-${tile.col}`));
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">Score ${state.score}</span>
      <span class="pill">Best ${app.mergeBest}</span>
      <span class="pill">Arrow keys or WASD</span>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="merge-board ${animation.direction ? `move-${animation.direction}` : ''}">
      ${state.board.flatMap((row, rowIndex) => row.map((value, colIndex) => {
        const key = `${rowIndex}-${colIndex}`;
        const classes = [
          'merge-tile',
          value ? 'value' : '',
          value ? `merge-v${Math.min(value, 2048)}` : '',
          value && spawnedSet.has(key) ? 'spawned' : '',
          value && mergedSet.has(key) ? 'merged' : ''
        ].filter(Boolean).join(' ');
        return `<div class="${classes}">${value || ''}</div>`;
      })).join('')}
    </div>
  `;

  if (state.over) setGameMessage(`No moves left. Final score ${state.score}.`, 'danger');
  else if (state.won) setGameMessage('2048 reached. Keep going if you want a bigger tile.', 'success');
  else setGameMessage('Slide tiles to combine matching values.');
}

function moveMerge(direction) {
  const state = getGameState('merge');
  if (state.over) return;
  const result = moveMergeBoard(state.board, direction);
  if (!result.changed) return;
  state.board = result.board;
  state.score += result.score;
  if (state.score > app.mergeBest) {
    app.mergeBest = state.score;
    localStorage.setItem(MERGE_BEST_KEY, String(app.mergeBest));
  }
  recordHighScore('merge', { bestScore: state.score });
  const spawned = placeRandomMergeTile(state.board);
  state.animation = {
    direction,
    merged: result.merged,
    spawned: spawned ? [spawned] : []
  };
  if (state.board.some(row => row.some(value => value >= 2048))) state.won = true;
  if (!canMoveMerge(state.board)) state.over = true;
  if (app.runtime.mergeAnimationTimer) clearTimeout(app.runtime.mergeAnimationTimer);
  app.runtime.mergeAnimationTimer = setTimeout(() => {
    state.animation = null;
    if (app.currentView === 'play' && app.activeGame === 'merge') renderActiveGame();
  }, 220);
  renderActiveGame();
}

function isSpellingBeePangram(state, word) {
  return [...state.pack.outer, state.pack.center].every(letter => word.includes(letter));
}

function getSpellingBeePoints(state, word, bonus = false) {
  let points = word.length === 4 ? 1 : word.length;
  if (!bonus && isSpellingBeePangram(state, word)) points += 7;
  return points;
}

function renderSpellingBee() {
  const state = getGameState('spellingBee');
  const hiveLetters = [
    { letter: state.pack.outer[0], slot: 'top' },
    { letter: state.pack.outer[1], slot: 'upper-left' },
    { letter: state.pack.outer[2], slot: 'upper-right' },
    { letter: state.pack.center, slot: 'center' },
    { letter: state.pack.outer[3], slot: 'lower-left' },
    { letter: state.pack.outer[4], slot: 'lower-right' },
    { letter: state.pack.outer[5], slot: 'bottom' }
  ];
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">Found ${state.found.length}/${state.pack.words.length}</span>
      <span class="pill">Score ${state.score}</span>
      <span class="pill">Center ${state.pack.center}</span>
      <span class="pill">Bonus ${state.bonusFound.length}</span>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="spelling-bee-shell">
      <div class="spelling-current">${state.current || 'TYPE OR TAP LETTERS'}</div>
      <div class="bee-grid">
        ${hiveLetters.map(({ letter, slot }) => `
          <button type="button" class="bee-cell ${slot === 'center' ? 'center' : ''}" data-bee-letter="${letter}" data-bee-slot="${slot}">${letter}</button>
        `).join('')}
      </div>
      <div class="inline-tools">
        <button type="button" class="secondary-button" id="bee-delete">Delete</button>
        <button type="button" class="secondary-button" id="bee-shuffle">Shuffle Outer</button>
      </div>
      <div class="bee-word-columns">
        <div class="bee-word-column">
          <h3>Hive Words</h3>
          <div class="guess-history">
            ${state.found.map(word => `<span class="guess-chip">${word}</span>`).join('')}
          </div>
        </div>
        <div class="bee-word-column">
          <h3>Bonus Words</h3>
          <div class="guess-history">
            ${state.bonusFound.map(word => `<span class="guess-chip bonus">${word}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  refs.gameArea.querySelectorAll('[data-bee-letter]').forEach(button => {
    button.addEventListener('click', () => {
      state.current += button.dataset.beeLetter;
      renderActiveGame();
    });
  });
  document.getElementById('bee-delete').addEventListener('click', () => {
    state.current = state.current.slice(0, -1);
    renderActiveGame();
  });
  document.getElementById('bee-shuffle').addEventListener('click', () => {
    state.pack.outer = shuffle(state.pack.outer);
    renderActiveGame();
  });
  setGameMessage('Make words of at least 4 letters and include the center letter.');
}

function submitSpellingBeeWord() {
  const state = getGameState('spellingBee');
  const guess = String(state.current || '').trim().toUpperCase();
  const dictionaryWords = getDictionaryWordSet();
  if (guess.length < 4) {
    setGameMessage('Words must be at least 4 letters long.', 'warning');
    return;
  }
  if (!guess.includes(state.pack.center)) {
    setGameMessage(`Every word must use ${state.pack.center}.`, 'warning');
    return;
  }
  if ([...guess].some(letter => ![...state.pack.outer, state.pack.center].includes(letter))) {
    setGameMessage('That word uses letters outside this hive.', 'warning');
    return;
  }
  if (state.found.includes(guess) || state.bonusFound.includes(guess)) {
    setGameMessage('Already found that word.', 'warning');
    return;
  }
  if (!state.pack.words.includes(guess)) {
    if (!dictionaryWords.has(guess.toLowerCase())) {
      setGameMessage('That word is not in this hive list or the dictionary list.', 'warning');
      return;
    }
    state.bonusFound.push(guess);
    state.score += getSpellingBeePoints(state, guess, true);
    state.current = '';
    renderActiveGame();
    setGameMessage('Accepted as a bonus dictionary word.', 'success');
    return;
  }
  state.found.push(guess);
  state.score += getSpellingBeePoints(state, guess);
  state.current = '';
  renderActiveGame();
  setGameMessage(state.found.length === state.pack.words.length ? 'Hive cleared.' : 'Accepted.', 'success');
}

function renderBlockBreaker() {
  const state = getGameState('blockBreaker');
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">Lives ${state.lives}</span>
      <span class="pill">Wall ${state.wall}</span>
      <span class="pill">${state.bricks.filter(brick => brick.alive).length} bricks left</span>
      <span class="pill">Broken ${state.bricksBroken}</span>
      <span class="pill">Mouse or arrow keys move the paddle</span>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="canvas-wrap">
      <canvas id="block-breaker-canvas" class="game-canvas" width="560" height="360"></canvas>
    </div>
  `;
  const canvas = document.getElementById('block-breaker-canvas');
  canvas.addEventListener('mousemove', event => {
    const rect = canvas.getBoundingClientRect();
    const ratio = canvas.width / rect.width;
    const x = (event.clientX - rect.left) * ratio;
    state.paddleX = Math.max(0, Math.min(canvas.width - 96, x - 48));
    if (state.ball.stuck) state.ball.x = state.paddleX + 48;
    drawBlockBreaker();
  });
  canvas.addEventListener('click', () => {
    if (!state.running && !state.over) toggleBlockBreaker();
  });
  drawBlockBreaker();
  if (state.over) setGameMessage(`No lives left. ${state.bricksBroken} bricks broken total.`, 'danger');
  else setGameMessage(state.lastStatus, state.won ? 'success' : '');
}

function drawBlockBreaker() {
  const canvas = document.getElementById('block-breaker-canvas');
  if (!canvas) return;
  const state = getGameState('blockBreaker');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fffaf1';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  state.bricks.filter(brick => brick.alive).forEach(brick => {
    ctx.fillStyle = `hsl(${(brick.row * 55) + (brick.col * 6)}, 65%, 58%)`;
    ctx.fillRect(24 + brick.col * 64, 26 + brick.row * 28, 56, 20);
  });
  ctx.fillStyle = '#145c64';
  ctx.fillRect(state.paddleX, 320, 96, 14);
  ctx.fillStyle = '#dc6e48';
  ctx.beginPath();
  ctx.arc(state.ball.x, state.ball.y, 8, 0, Math.PI * 2);
  ctx.fill();
}

function tickBlockBreaker() {
  const state = getGameState('blockBreaker');
  if (!state.running || state.over || state.won) return;
  if (state.ball.stuck) state.ball.stuck = false;
  state.ball.x += state.ball.dx;
  state.ball.y += state.ball.dy;
  if (state.ball.x <= 8 || state.ball.x >= 552) state.ball.dx *= -1;
  if (state.ball.y <= 8) state.ball.dy *= -1;
  if (state.ball.y >= 312 && state.ball.x >= state.paddleX && state.ball.x <= state.paddleX + 96 && state.ball.dy > 0) {
    state.ball.dy = -Math.abs(state.ball.dy);
    state.ball.dx = (state.ball.x - (state.paddleX + 48)) / 18;
  }
  const hitBrick = state.bricks.find(brick => brick.alive && state.ball.x >= 24 + brick.col * 64 && state.ball.x <= 80 + brick.col * 64 && state.ball.y >= 26 + brick.row * 28 && state.ball.y <= 46 + brick.row * 28);
  if (hitBrick) {
    hitBrick.alive = false;
    state.bricksBroken += 1;
    recordHighScore('blockBreaker', { bestScore: state.bricksBroken });
    state.ball.dy *= -1;
    if (!state.bricks.some(brick => brick.alive)) {
      state.running = false;
      state.won = false;
      state.wall += 1;
      state.bricks = buildBlockBreakerBricks(state.wall);
      state.ball = { x: state.paddleX + 48, y: 250, dx: 3.1, dy: -3.6, stuck: true };
      state.lastStatus = `Wall cleared. Wall ${state.wall} is ready. Click the board or press Start.`;
      stopBlockBreakerLoop();
      renderActiveGame();
      return;
    }
  }
  if (state.ball.y > 368) {
    state.lives -= 1;
    if (state.lives <= 0) {
      state.running = false;
      state.over = true;
      state.lastStatus = `No lives left. ${state.bricksBroken} bricks broken total.`;
      stopBlockBreakerLoop();
      renderActiveGame();
      return;
    }
    state.ball = { x: state.paddleX + 48, y: 250, dx: 3.1, dy: -3.6, stuck: true };
    state.running = false;
    state.lastStatus = 'Life lost. Click the board or press Start to relaunch.';
    stopBlockBreakerLoop();
    renderActiveGame();
    return;
  }
  drawBlockBreaker();
}

function toggleBlockBreaker() {
  const state = getGameState('blockBreaker');
  if (state.over) {
    resetGame('blockBreaker');
    return;
  }
  state.running = !state.running;
  if (state.running) {
    state.lastStatus = 'Keep the ball in play.';
    stopBlockBreakerLoop();
    app.runtime.blockBreakerTimer = setInterval(tickBlockBreaker, 16);
  } else {
    state.lastStatus = 'Paused. Click the board or press Start to continue.';
    stopBlockBreakerLoop();
  }
  renderActiveGame();
}

function renderBaseball() {
  const state = getGameState('baseball');
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">Runs ${state.runs}</span>
      <span class="pill">Outs ${state.outs}/9</span>
      <span class="pill">Inning ${state.inning}</span>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="baseball-shell">
      <div class="baseball-bases">
        ${state.bases.map((occupied, index) => `<div class="baseball-base ${occupied ? 'filled' : ''}">Base ${index + 1}</div>`).join('')}
      </div>
      <div class="baseball-meter">
        <div class="baseball-sweet-spot"></div>
        <div class="baseball-marker" id="baseball-marker" style="left:${state.pitch}%"></div>
      </div>
      <p class="game-note">${state.lastPlay}</p>
    </div>
  `;
  if (state.over) setGameMessage(`Ballgame over. ${state.runs} run${state.runs === 1 ? '' : 's'} scored.`, 'success');
  else setGameMessage(state.running ? 'Swing while the marker is near the center.' : 'Start a pitch, then swing.');
}

function updateBaseballMarker() {
  const marker = document.getElementById('baseball-marker');
  const state = getGameState('baseball');
  if (marker) marker.style.left = `${state.pitch}%`;
}

function startBaseballPitch() {
  const state = getGameState('baseball');
  if (state.over || state.running) return;
  state.running = true;
  stopBaseballLoop();
  app.runtime.baseballTimer = setInterval(() => {
    state.pitch += state.direction * 3.2;
    if (state.pitch >= 96 || state.pitch <= 4) state.direction *= -1;
    updateBaseballMarker();
  }, 40);
  renderActiveGame();
}

function advanceBaseballRunners(state, basesToTake) {
  let runs = 0;
  const nextBases = [false, false, false];
  for (let index = 2; index >= 0; index -= 1) {
    if (!state.bases[index]) continue;
    const destination = index + basesToTake;
    if (destination >= 3) runs += 1;
    else nextBases[destination] = true;
  }
  if (basesToTake >= 4) runs += 1;
  else nextBases[basesToTake - 1] = true;
  state.bases = nextBases;
  state.runs += runs;
}

function handleBaseballAction() {
  const state = getGameState('baseball');
  if (state.over) {
    resetGame('baseball');
    return;
  }
  if (!state.running) {
    startBaseballPitch();
    return;
  }
  stopBaseballLoop();
  state.running = false;
  const distance = Math.abs(state.pitch - 50);
  if (distance <= 3) {
    advanceBaseballRunners(state, 4);
    state.lastPlay = 'Home run.';
  } else if (distance <= 8) {
    advanceBaseballRunners(state, 3);
    state.lastPlay = 'Triple.';
  } else if (distance <= 14) {
    advanceBaseballRunners(state, 2);
    state.lastPlay = 'Double.';
  } else if (distance <= 22) {
    advanceBaseballRunners(state, 1);
    state.lastPlay = 'Single.';
  } else {
    state.outs += 1;
    state.inning = 1 + Math.floor(state.outs / 3);
    state.lastPlay = 'Swing and miss.';
    if (state.outs >= 9) state.over = true;
  }
  state.pitch = 50;
  renderActiveGame();
}

function renderMinesweeper() {
  const state = getGameState('minesweeper');
  const elapsed = state.finishedAt ? getElapsedSince(state.startedAt, state.finishedAt) : getElapsedSince(state.startedAt);
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">Flags ${state.flagsLeft}</span>
      <span class="pill">${state.size} x ${state.size}</span>
      <span class="pill">Time ${formatDuration(elapsed)}</span>
      <span class="pill">Right-click to flag</span>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="minesweeper-board" style="--size:${state.size}">
      ${state.board.flatMap((row, rowIndex) => row.map((cell, colIndex) => {
        const classes = ['minesweeper-cell', cell.revealed ? 'revealed' : '', cell.flagged ? 'flagged' : '', cell.mine && state.over ? 'mine' : '']
          .filter(Boolean).join(' ');
        const text = cell.revealed ? (cell.mine ? '*' : (cell.count || '')) : (cell.flagged ? 'F' : '');
        return `<button type="button" class="${classes}" data-mine-row="${rowIndex}" data-mine-col="${colIndex}">${text}</button>`;
      })).join('')}
    </div>
  `;
  refs.gameArea.querySelectorAll('[data-mine-row]').forEach(button => {
    const row = Number(button.dataset.mineRow);
    const col = Number(button.dataset.mineCol);
    button.addEventListener('click', () => revealMinesweeperCell(row, col));
    button.addEventListener('contextmenu', event => {
      event.preventDefault();
      toggleMinesweeperFlag(row, col);
    });
  });
  if (state.won) setGameMessage('Field cleared.', 'success');
  else if (state.over) setGameMessage('Boom. Try a fresh field.', 'danger');
  else setGameMessage('Open safe cells and flag the mines.');
}

function revealMinesweeperCell(row, col) {
  const state = getGameState('minesweeper');
  if (state.over || state.won) return;
  if (!state.startedAt) {
    state.startedAt = Date.now();
    state.finishedAt = null;
    stopMinesweeperLoop();
    app.runtime.minesweeperTimer = setInterval(() => {
      if (app.currentView === 'play' && app.activeGame === 'minesweeper') renderActiveGame();
    }, 250);
  }
  revealMinesweeperFrom(state, row, col);
  const cleared = state.board.flat().every(entry => entry.mine || entry.revealed);
  if (cleared) {
    state.won = true;
    state.finishedAt = Date.now();
    stopMinesweeperLoop();
    submitGameScore(state, 'minesweeper', { bestTimeMs: getElapsedSince(state.startedAt, state.finishedAt) });
  }
  renderActiveGame();
}

function revealMinesweeperFrom(state, row, col) {
  const cell = state.board[row][col];
  if (cell.flagged || cell.revealed) return;
  cell.revealed = true;
  if (cell.mine) {
    state.over = true;
    state.finishedAt = Date.now();
    stopMinesweeperLoop();
    state.board.flat().forEach(entry => { if (entry.mine) entry.revealed = true; });
    return;
  }
  if (!cell.count) {
    for (let dr = -1; dr <= 1; dr += 1) {
      for (let dc = -1; dc <= 1; dc += 1) {
        const nextRow = row + dr;
        const nextCol = col + dc;
        if (nextRow < 0 || nextRow >= state.size || nextCol < 0 || nextCol >= state.size) continue;
        if (!state.board[nextRow][nextCol].revealed) revealMinesweeperFrom(state, nextRow, nextCol);
      }
    }
  }
}

function toggleMinesweeperFlag(row, col) {
  const state = getGameState('minesweeper');
  if (state.over || state.won) return;
  const cell = state.board[row][col];
  if (cell.revealed) return;
  cell.flagged = !cell.flagged;
  state.flagsLeft += cell.flagged ? -1 : 1;
  renderActiveGame();
}

function getSolitaireCardLabel(card) {
  return `${card.label}${card.suitLabel}`;
}

function getSolitaireCardImage(card, faceUp = card?.faceUp) {
  if (!card || !faceUp) return SOLITAIRE_CARD_BACK_IMAGE;
  const rankMap = { A: 'ace', J: 'jack', Q: 'queen', K: 'king' };
  const rankName = rankMap[card.label] || String(card.label).toLowerCase();
  return `${SOLITAIRE_CARD_IMAGE_ROOT}/${rankName}_of_${card.suit}.png`;
}

function renderSolitaireCardImage(card, faceUp = card?.faceUp) {
  const label = card ? getSolitaireCardLabel(card) : 'Card';
  return `<img class="solitaire-card-image" src="${getSolitaireCardImage(card, faceUp)}" alt="${faceUp ? label : 'Face-down card'}">`;
}

function getMemoryIconSvg(icon) {
  const common = 'stroke-linecap="round" stroke-linejoin="round"';
  switch (icon) {
    case 'sun':
      return `<circle cx="50" cy="50" r="16" fill="#f4b942"/><g stroke="#f4b942" stroke-width="6" ${common}><line x1="50" y1="10" x2="50" y2="24"/><line x1="50" y1="76" x2="50" y2="90"/><line x1="10" y1="50" x2="24" y2="50"/><line x1="76" y1="50" x2="90" y2="50"/><line x1="22" y1="22" x2="31" y2="31"/><line x1="69" y1="69" x2="78" y2="78"/><line x1="22" y1="78" x2="31" y2="69"/><line x1="69" y1="31" x2="78" y2="22"/></g>`;
    case 'moon':
      return `<path d="M66 18c-5 2-11 8-13 18-4 18 10 34 29 34 4 0 8-1 11-2-5 10-15 17-28 17-19 0-34-15-34-34 0-15 10-28 24-33 4-2 8-2 11 0z" fill="#8aa4ff"/>`;
    case 'star':
      return `<polygon points="50,12 60,38 88,38 66,54 74,82 50,65 26,82 34,54 12,38 40,38" fill="#f0c94c"/>`;
    case 'wave':
      return `<path d="M10 58c10 0 10-8 20-8s10 8 20 8 10-8 20-8 10 8 20 8" fill="none" stroke="#4ca6d8" stroke-width="8" ${common}/><path d="M10 74c10 0 10-8 20-8s10 8 20 8 10-8 20-8 10 8 20 8" fill="none" stroke="#4ca6d8" stroke-width="8" ${common}/>`;
    case 'tree':
      return `<rect x="44" y="56" width="12" height="24" rx="4" fill="#8a5a3c"/><circle cx="50" cy="34" r="22" fill="#67a95b"/><circle cx="34" cy="44" r="14" fill="#67a95b"/><circle cx="66" cy="44" r="14" fill="#67a95b"/>`;
    case 'bolt':
      return `<polygon points="54,10 26,54 45,54 36,90 74,42 54,42" fill="#f0c94c"/>`;
    case 'fish':
      return `<ellipse cx="46" cy="50" rx="24" ry="16" fill="#59b8c8"/><polygon points="68,50 88,36 88,64" fill="#59b8c8"/><circle cx="38" cy="46" r="3" fill="#163040"/>`;
    case 'note':
      return `<path d="M62 18v40c0 10-8 18-18 18-8 0-14-5-14-12 0-8 7-13 16-13 3 0 6 1 8 2V28l24-6v36c0 10-8 18-18 18-8 0-14-5-14-12 0-8 7-13 16-13 3 0 6 1 8 2V18z" fill="#7a68d8"/>`;
    case 'leaf':
      return `<path d="M78 22c-28 2-46 16-52 40-3 13 4 26 17 29 24 6 46-18 43-69-1-1-4-1-8 0z" fill="#6dad5f"/><path d="M24 72c15-14 28-24 46-34" fill="none" stroke="#3d6b33" stroke-width="5" ${common}/>`;
    case 'planet':
      return `<circle cx="50" cy="46" r="20" fill="#8c83ff"/><ellipse cx="50" cy="52" rx="34" ry="10" fill="none" stroke="#d1b56e" stroke-width="7"/><ellipse cx="50" cy="52" rx="34" ry="10" fill="none" stroke="#d1b56e" stroke-width="3"/>`;
    case 'cloud':
      return `<circle cx="38" cy="50" r="14" fill="#9cc7ef"/><circle cx="52" cy="42" r="18" fill="#9cc7ef"/><circle cx="68" cy="50" r="14" fill="#9cc7ef"/><rect x="24" y="50" width="58" height="18" rx="9" fill="#9cc7ef"/>`;
    case 'shell':
      return `<path d="M50 84c-18 0-30-12-30-30 0-20 14-34 30-34s30 14 30 34c0 18-12 30-30 30z" fill="#e4b48e"/><path d="M50 24v56M36 28l8 52M64 28l-8 52M24 44l24 36M76 44L52 80" stroke="#c48761" stroke-width="4" ${common}/>`;
    default:
      return `<circle cx="50" cy="50" r="24" fill="#4ca6d8"/>`;
  }
}

function getMemoryCardImage(item) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#fff6ea"/>${getMemoryIconSvg(item.icon)}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getSolitaireCardRun(state, columnIndex, cardIndex) {
  const column = state.tableau[columnIndex];
  if (!column || !column[cardIndex]?.faceUp) return null;
  const run = column.slice(cardIndex);
  return isValidSolitaireRun(run) ? run : null;
}

function revealTopTableauCard(column) {
  const lastCard = column[column.length - 1];
  if (lastCard) lastCard.faceUp = true;
}

function getSelectedSolitaireCards(state) {
  if (!state.selected) return null;
  if (state.selected.source === 'waste') return state.waste.length ? [state.waste[state.waste.length - 1]] : null;
  const column = state.tableau[state.selected.index];
  return column.slice(state.selected.cardIndex);
}

function isValidSolitaireRun(cards) {
  if (!cards?.length) return false;
  for (let index = 0; index < cards.length - 1; index += 1) {
    const current = cards[index];
    const next = cards[index + 1];
    if (current.color === next.color || current.rank !== next.rank + 1) return false;
  }
  return true;
}

function popSelectedSolitaireCards(state) {
  if (!state.selected) return [];
  if (state.selected.source === 'waste') return state.waste.length ? [state.waste.pop()] : [];
  const column = state.tableau[state.selected.index];
  const cards = column.splice(state.selected.cardIndex);
  revealTopTableauCard(column);
  return cards;
}

function snapshotSolitaireState(state) {
  return {
    tableau: deepClone(state.tableau),
    stock: deepClone(state.stock),
    waste: deepClone(state.waste),
    foundations: deepClone(state.foundations),
    won: state.won
  };
}

function pushSolitaireHistory(state) {
  state.history.push(snapshotSolitaireState(state));
  if (state.history.length > 100) state.history.shift();
}

function canPlaceOnSolitaireFoundation(card, foundation) {
  if (!foundation.length) return card.rank === 1;
  const top = foundation[foundation.length - 1];
  return top.suit === card.suit && top.rank + 1 === card.rank;
}

function undoSolitaireMove() {
  const state = getGameState('solitaire');
  const snapshot = state.history.pop();
  if (!snapshot) return;
  const nextMoves = state.moves + 1;
  state.tableau = deepClone(snapshot.tableau);
  state.stock = deepClone(snapshot.stock);
  state.waste = deepClone(snapshot.waste);
  state.foundations = deepClone(snapshot.foundations);
  state.won = snapshot.won;
  state.selected = null;
  state.moves = nextMoves;
  renderActiveGame();
}

function canPlaceOnSolitaireTableau(card, column) {
  if (!column.length) return card.rank === 13;
  const top = column[column.length - 1];
  if (!top.faceUp) return false;
  return top.color !== card.color && top.rank === card.rank + 1;
}

function renderSolitaire() {
  const state = getGameState('solitaire');
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">Stock ${state.stock.length}</span>
      <span class="pill">Waste ${state.waste.length}</span>
      <span class="pill">Foundations ${state.foundations.reduce((sum, pile) => sum + pile.length, 0)}/52</span>
      <span class="pill">Moves ${state.moves}</span>
      <button type="button" class="secondary-button" id="solitaire-undo" ${state.history.length ? '' : 'disabled'}>Undo</button>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="solitaire-shell">
      <div class="solitaire-top">
        <button type="button" class="solitaire-pile" id="solitaire-stock">${state.stock.length ? renderSolitaireCardImage(state.stock[state.stock.length - 1], false) : 'Recycle'}</button>
        <button type="button" draggable="${state.waste.length ? 'true' : 'false'}" class="solitaire-pile ${state.selected?.source === 'waste' ? 'selected' : ''}" id="solitaire-waste">${state.waste.length ? renderSolitaireCardImage(state.waste[state.waste.length - 1], true) : 'Waste'}</button>
        ${state.foundations.map((pile, index) => `
          <button type="button" class="solitaire-pile foundation" data-foundation="${index}">
            ${pile.length ? renderSolitaireCardImage(pile[pile.length - 1], true) : 'Ace'}
          </button>
        `).join('')}
      </div>
      <div class="solitaire-tableau">
        ${state.tableau.map((column, columnIndex) => `
          <div class="solitaire-column" data-tableau-column="${columnIndex}">
            ${column.map((card, cardIndex) => `
              <button
                type="button"
                draggable="${card.faceUp ? 'true' : 'false'}"
                class="solitaire-card ${card.faceUp ? `face-up ${card.color}` : 'face-down'} ${state.selected?.source === 'tableau' && state.selected.index === columnIndex && cardIndex >= state.selected.cardIndex ? 'selected' : ''}"
                data-tableau-card="${columnIndex}:${cardIndex}"
              >
                ${renderSolitaireCardImage(card, card.faceUp)}
              </button>
            `).join('')}
            ${!column.length ? '<button type="button" class="solitaire-card empty">Empty</button>' : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
  document.getElementById('solitaire-undo').addEventListener('click', undoSolitaireMove);
  document.getElementById('solitaire-stock').addEventListener('click', drawSolitaireStock);
  document.getElementById('solitaire-waste').addEventListener('click', () => {
    if (!state.waste.length) return;
    state.selected = state.selected?.source === 'waste' ? null : { source: 'waste' };
    renderActiveGame();
  });
  document.getElementById('solitaire-waste').addEventListener('dragstart', event => {
    if (!state.waste.length) {
      event.preventDefault();
      return;
    }
    state.selected = { source: 'waste' };
    event.dataTransfer.setData('text/plain', 'waste');
    event.dataTransfer.effectAllowed = 'move';
  });
  refs.gameArea.querySelectorAll('[data-foundation]').forEach(button => {
    button.addEventListener('click', () => moveSolitaireToFoundation(button.dataset.foundation));
    button.addEventListener('dragover', event => event.preventDefault());
    button.addEventListener('drop', event => {
      event.preventDefault();
      moveSolitaireToFoundation(button.dataset.foundation);
    });
  });
  refs.gameArea.querySelectorAll('[data-tableau-card]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      const [columnIndex, cardIndex] = button.dataset.tableauCard.split(':').map(Number);
      const run = getSolitaireCardRun(state, columnIndex, cardIndex);
      if (!run) return;
      if (!state.selected) {
        state.selected = { source: 'tableau', index: columnIndex, cardIndex };
        renderActiveGame();
        return;
      }
      if (state.selected.source === 'tableau' && state.selected.index === columnIndex && state.selected.cardIndex === cardIndex) {
        state.selected = null;
        renderActiveGame();
        return;
      }
      moveSolitaireToTableau(columnIndex);
    });
    button.addEventListener('dragstart', event => {
      const [columnIndex, cardIndex] = button.dataset.tableauCard.split(':').map(Number);
      const run = getSolitaireCardRun(state, columnIndex, cardIndex);
      if (!run) {
        event.preventDefault();
        return;
      }
      state.selected = { source: 'tableau', index: columnIndex, cardIndex };
      event.dataTransfer.setData('text/plain', `${columnIndex}:${cardIndex}`);
      event.dataTransfer.effectAllowed = 'move';
    });
  });
  refs.gameArea.querySelectorAll('[data-tableau-column]').forEach(button => {
    button.addEventListener('click', event => {
      if (event.target.closest('[data-tableau-card]')) return;
      moveSolitaireToTableau(Number(button.dataset.tableauColumn));
    });
    button.addEventListener('dragover', event => event.preventDefault());
    button.addEventListener('drop', event => {
      event.preventDefault();
      moveSolitaireToTableau(Number(button.dataset.tableauColumn));
    });
  });
  if (state.won) setGameMessage('Table cleared.', 'success');
  else setGameMessage('Click a card then a destination, or drag a card stack where you want it.');
}

function drawSolitaireStock() {
  const state = getGameState('solitaire');
  pushSolitaireHistory(state);
  if (!state.stock.length) {
    state.stock = state.waste.reverse().map(card => ({ ...card, faceUp: false }));
    state.waste = [];
    state.selected = null;
    state.moves += 1;
    renderActiveGame();
    return;
  }
  const card = state.stock.pop();
  state.waste.push({ ...card, faceUp: true });
  state.selected = null;
  state.moves += 1;
  renderActiveGame();
}

function moveSolitaireToFoundation(foundationId) {
  const state = getGameState('solitaire');
  if (!state.selected) return;
  const cards = getSelectedSolitaireCards(state);
  const card = cards?.[0];
  if (!card || cards.length !== 1) return;
  const foundation = state.foundations[Number(foundationId)];
  if (!card || !canPlaceOnSolitaireFoundation(card, foundation)) return;
  pushSolitaireHistory(state);
  foundation.push(popSelectedSolitaireCards(state)[0]);
  state.selected = null;
  state.moves += 1;
  state.won = state.foundations.every(pile => pile.length === 13);
  if (state.won) {
    submitGameScore(state, 'solitaire', {
      bestTimeMs: getElapsedSince(state.startedAt),
      fewestMoves: state.moves
    });
  }
  renderActiveGame();
}

function moveSolitaireToTableau(columnIndex) {
  const state = getGameState('solitaire');
  if (!state.selected) return;
  const cardsToMove = getSelectedSolitaireCards(state);
  const sourceCard = cardsToMove?.[0];
  const column = state.tableau[columnIndex];
  if (!sourceCard || !canPlaceOnSolitaireTableau(sourceCard, column)) {
    if (state.selected.source === 'tableau' && state.selected.index === columnIndex) state.selected = null;
    renderActiveGame();
    return;
  }
  if (state.selected.source === 'tableau' && state.selected.index === columnIndex) {
    state.selected = null;
    renderActiveGame();
    return;
  }
  pushSolitaireHistory(state);
  popSelectedSolitaireCards(state).forEach(card => column.push({ ...card, faceUp: true }));
  state.selected = null;
  state.moves += 1;
  renderActiveGame();
}

function renderChessPiece(piece) {
  if (!piece) return '';
  return `<span class="chess-piece ${piece.color === 'w' ? 'piece-white' : 'piece-black'}">${CHESS_PIECE_GLYPHS[piece.type]}</span>`;
}

function renderChessBoardMarkup(state) {
  return `
    <div class="chess-board">
      ${state.board.flatMap((row, y) => row.map((piece, x) => {
        const isDark = (x + y) % 2 === 1;
        const isSelected = state.selected?.x === x && state.selected?.y === y;
        const legalMove = state.legalMoves.find(move => move.x === x && move.y === y);
        const isLastMove = state.lastMove && (
          (state.lastMove.fromX === x && state.lastMove.fromY === y)
          || (state.lastMove.toX === x && state.lastMove.toY === y)
        );
        const inCheck = piece?.type === 'k' && piece.color === state.checkColor;
        return `
          <button
            type="button"
            class="chess-square ${isDark ? 'dark' : 'light'} ${isSelected ? 'selected' : ''} ${legalMove ? (legalMove.capture ? 'legal-capture' : 'legal-move') : ''} ${isLastMove ? 'last-move' : ''} ${inCheck ? 'in-check' : ''}"
            data-chess-square="${x}:${y}"
            aria-label="${piece ? `${piece.color === 'w' ? 'White' : 'Black'} ${piece.type} on ${getChessSquareName(x, y)}` : `Empty ${getChessSquareName(x, y)}`}"
          >
            ${x === 0 ? `<span class="chess-coordinate chess-rank">${8 - y}</span>` : ''}
            ${y === 7 ? `<span class="chess-coordinate chess-file">${CHESS_FILES[x]}</span>` : ''}
            ${renderChessPiece(piece)}
          </button>
        `;
      })).join('')}
    </div>
  `;
}

function renderChessSetupMode(state) {
  refs.gameArea.innerHTML = `
    <div class="chess-setup-shell">
      <div class="chess-setup-card">
        <p class="eyebrow">Game Settings</p>
        <h3>Choose the match style</h3>
        <p class="game-note">This is built for two players sharing one phone. White starts, white stays at the bottom, and black pieces are rotated for the top side.</p>
        <div class="chess-setup-actions">
          <button type="button" id="chess-untimed">Not Timed</button>
          <button type="button" id="chess-timed" class="secondary-button">Timed</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('chess-untimed').addEventListener('click', () => {
    startChessMatch(state, false);
    renderActiveGame();
  });
  document.getElementById('chess-timed').addEventListener('click', () => {
    state.screen = 'setup-time';
    renderActiveGame();
  });
  setGameMessage('Choose whether this match uses a clock.');
}

function renderChessTimeSetup(state) {
  refs.gameArea.innerHTML = `
    <div class="chess-setup-shell">
      <div class="chess-setup-card chess-time-card">
        <p class="eyebrow">Timed Match</p>
        <h3>Pick a clock</h3>
        <p class="game-note">Using the same preset labels commonly shown on Chess.com.</p>
        <div class="chess-time-groups">
          ${CHESS_TIME_GROUPS.map(group => `
            <section class="chess-time-group">
              <h4>${group.label}</h4>
              <div class="chess-time-options">
                ${group.options.map(option => `
                  <button type="button" class="chess-time-option ${state.selectedTimeId === option.id ? 'active' : 'secondary-button'}" data-chess-time="${option.id}">
                    ${option.label}
                  </button>
                `).join('')}
              </div>
            </section>
          `).join('')}
        </div>
        <div class="chess-setup-actions">
          <button type="button" id="chess-back-to-mode" class="secondary-button">Back</button>
        </div>
      </div>
    </div>
  `;
  refs.gameArea.querySelectorAll('[data-chess-time]').forEach(button => {
    button.addEventListener('click', () => {
      startChessMatch(state, true, button.dataset.chessTime);
      renderActiveGame();
    });
  });
  document.getElementById('chess-back-to-mode').addEventListener('click', () => {
    state.screen = 'setup-mode';
    renderActiveGame();
  });
  setGameMessage('Tap a time control to start the match.');
}

function renderChess() {
  const state = getGameState('chess');
  if (state.screen === 'setup-mode') {
    refs.gameTools.innerHTML = '';
    renderChessSetupMode(state);
    return;
  }
  if (state.screen === 'setup-time') {
    refs.gameTools.innerHTML = '';
    renderChessTimeSetup(state);
    return;
  }

  refs.gameTools.innerHTML = `
    <div class="inline-tools chess-tools">
      <span class="pill chess-turn-pill ${state.turn === 'w' ? 'white-turn' : 'black-turn'}">${state.turn === 'w' ? 'White to move' : 'Black to move'}</span>
      <span class="pill">Mode ${state.timeLabel}</span>
      <span class="pill">Moves ${state.moveCount}</span>
      <span class="pill">${state.checkColor ? `${state.checkColor === 'w' ? 'White' : 'Black'} in check` : 'Legal moves only'}</span>
      ${state.timed ? `
        <span class="pill chess-clock ${state.turn === 'w' && state.status === 'playing' ? 'active' : ''}">White ${formatChessClock(state.clocks.w)}</span>
        <span class="pill chess-clock ${state.turn === 'b' && state.status === 'playing' ? 'active' : ''}">Black ${formatChessClock(state.clocks.b)}</span>
      ` : ''}
    </div>
  `;

  refs.gameArea.innerHTML = `
    <div class="chess-shell">
      <div class="chess-board-panel">
        ${renderChessBoardMarkup(state)}
      </div>
      <div class="chess-side-panel">
        <div class="chess-status-card">
          <strong>${state.status === 'playing'
            ? `${state.turn === 'w' ? 'White' : 'Black'} is up`
            : state.status === 'checkmate'
              ? `${state.winner === 'w' ? 'White' : 'Black'} wins by checkmate`
              : state.status === 'timeout'
                ? `${state.winner === 'w' ? 'White' : 'Black'} wins on time`
                : 'Draw by stalemate'}</strong>
          <p class="game-note">${state.lastMove ? `Last move: ${getChessSquareName(state.lastMove.fromX, state.lastMove.fromY)} to ${getChessSquareName(state.lastMove.toX, state.lastMove.toY)}.` : 'Tap a piece, then tap a highlighted square to move it.'}</p>
        </div>
        <div class="chess-capture-card">
          <h3>Captured by White</h3>
          <div class="chess-captured-row">${state.captured.w.length ? state.captured.w.map(renderChessPiece).join('') : '<span class="game-note">None yet.</span>'}</div>
          <h3>Captured by Black</h3>
          <div class="chess-captured-row">${state.captured.b.length ? state.captured.b.map(renderChessPiece).join('') : '<span class="game-note">None yet.</span>'}</div>
        </div>
      </div>
    </div>
  `;

  refs.gameArea.querySelectorAll('[data-chess-square]').forEach(button => {
    button.addEventListener('click', () => {
      const [x, y] = button.dataset.chessSquare.split(':').map(Number);
      handleChessSquareClick(x, y);
    });
  });

  if (state.status === 'checkmate') {
    setGameMessage(`${state.winner === 'w' ? 'White' : 'Black'} wins by checkmate.`, 'success');
  } else if (state.status === 'timeout') {
    setGameMessage(`${state.winner === 'w' ? 'White' : 'Black'} wins on time.`, 'warning');
  } else if (state.status === 'stalemate') {
    setGameMessage('Stalemate. No legal moves remain.', 'warning');
  } else if (state.checkColor) {
    setGameMessage(`${state.checkColor === 'w' ? 'White' : 'Black'} is in check.`, 'warning');
  } else {
    setGameMessage('Tap a piece, then tap one of the highlighted squares.');
  }
}

function renderMemory() {
  const state = getGameState('memory');
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <label class="tool-label">Difficulty
        <select id="memory-difficulty">
          ${Object.entries(MEMORY_DIFFICULTIES).map(([id, config]) => `<option value="${id}" ${state.difficulty === id ? 'selected' : ''}>${config.label}</option>`).join('')}
        </select>
      </label>
      <span class="pill">Turns ${state.turns}</span>
      <span class="pill">${state.cards.filter(card => card.matched).length / 2} pairs found</span>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="memory-grid" style="--memory-columns:${state.columns}">
      ${state.cards.map((card, index) => `
        <button type="button" class="memory-card ${card.revealed || card.matched ? 'revealed' : ''}" data-memory-card="${index}">
          ${card.revealed || card.matched
            ? `<img class="memory-card-image" src="${getMemoryCardImage(card)}" alt="${card.label}">`
            : '<span class="memory-card-back">?</span>'}
        </button>
      `).join('')}
    </div>
  `;
  document.getElementById('memory-difficulty').addEventListener('change', event => {
    app.states.memory = createMemoryState(event.target.value);
    renderActiveGame();
  });
  refs.gameArea.querySelectorAll('[data-memory-card]').forEach(button => {
    button.addEventListener('click', () => revealMemoryCard(Number(button.dataset.memoryCard)));
  });
  setGameMessage(state.won ? `Board cleared in ${state.turns} turns.` : 'Flip two cards and match every pair.');
}

function revealMemoryCard(index) {
  const state = getGameState('memory');
  const card = state.cards[index];
  if (state.locked || card.matched || card.revealed) return;
  card.revealed = true;
  if (state.firstPick === null) {
    state.firstPick = index;
    renderActiveGame();
    return;
  }
  state.secondPick = index;
  state.turns += 1;
  const firstCard = state.cards[state.firstPick];
  const secondCard = state.cards[state.secondPick];
  if (firstCard.id.split('-')[0] === secondCard.id.split('-')[0]) {
    firstCard.matched = true;
    secondCard.matched = true;
    state.firstPick = null;
    state.secondPick = null;
    state.won = state.cards.every(entry => entry.matched);
    if (state.won) {
      submitGameScore(state, 'memory', {
        bestTimeMs: getElapsedSince(state.startedAt),
        fewestTurns: state.turns
      });
    }
    renderActiveGame();
    return;
  }
  state.locked = true;
  renderActiveGame();
  setTimeout(() => {
    const liveState = getGameState('memory');
    if (liveState.firstPick === null || liveState.secondPick === null) return;
    liveState.cards[liveState.firstPick].revealed = false;
    liveState.cards[liveState.secondPick].revealed = false;
    liveState.firstPick = null;
    liveState.secondPick = null;
    liveState.locked = false;
    renderActiveGame();
  }, 650);
}

function renderBlankSlate() {
  const state = getGameState('blankSlate');
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">Prompt ${Math.min(state.currentIndex, state.words.length)}/${state.words.length}</span>
      <span class="pill">${state.blankOnRight ? 'Blank Right' : 'Blank Left'}</span>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="blank-slate-shell">
      <div class="inline-tools">
        <button type="button" class="secondary-button" id="blank-toggle">${state.blankOnRight ? 'Switch Blank Left' : 'Switch Blank Right'}</button>
        <button type="button" class="secondary-button" id="blank-add-player">Add Player</button>
        <button type="button" class="secondary-button" id="blank-remove-player">Remove Player</button>
      </div>
      <div class="blank-prompt">${state.currentWord ? (state.blankOnRight ? `(${state.currentWord}) ___` : `___ (${state.currentWord})`) : 'Press Roll Prompt to Start'}</div>
      <div class="blank-player-list">
        ${state.players.map(player => `
          <div class="blank-player-card">
            <strong>${player.name}: ${player.score}</strong>
            <div class="inline-tools">
              <button type="button" class="secondary-button" data-player-score="${player.id}:-1">-1</button>
              <button type="button" class="secondary-button" data-player-score="${player.id}:1">+1</button>
              <button type="button" class="secondary-button" data-player-score="${player.id}:3">+3</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  document.getElementById('blank-toggle').addEventListener('click', () => {
    state.blankOnRight = !state.blankOnRight;
    renderActiveGame();
  });
  document.getElementById('blank-add-player').addEventListener('click', addBlankSlatePlayer);
  document.getElementById('blank-remove-player').addEventListener('click', removeBlankSlatePlayer);
  refs.gameArea.querySelectorAll('[data-player-score]').forEach(button => {
    button.addEventListener('click', () => {
      const [playerId, delta] = button.dataset.playerScore.split(':');
      const player = state.players.find(entry => entry.id === playerId);
      if (!player) return;
      player.score += Number(delta);
      renderActiveGame();
    });
  });
  setGameMessage('Roll prompts and update scores as players match answers.');
}

function rollBlankSlatePrompt() {
  const state = getGameState('blankSlate');
  if (state.currentIndex >= state.words.length) {
    state.words = shuffle(BLANK_SLATE_WORDS);
    state.currentIndex = 0;
  }
  const pickIndex = state.currentIndex + Math.floor(Math.random() * (state.words.length - state.currentIndex));
  [state.words[state.currentIndex], state.words[pickIndex]] = [state.words[pickIndex], state.words[state.currentIndex]];
  state.currentWord = state.words[state.currentIndex];
  state.currentIndex += 1;
  renderActiveGame();
}

function addBlankSlatePlayer() {
  const state = getGameState('blankSlate');
  const name = prompt('New player name?');
  if (!name) return;
  state.players.push({ id: `p${Date.now()}`, name: name.trim() || `Player ${state.players.length + 1}`, score: 0 });
  renderActiveGame();
}

function removeBlankSlatePlayer() {
  const state = getGameState('blankSlate');
  const name = prompt('Remove which player?');
  if (!name) return;
  state.players = state.players.filter(player => player.name.toLowerCase() !== name.trim().toLowerCase());
  renderActiveGame();
}

function getTicTacToeOutcome(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], winningLine: line };
    }
  }
  if (board.every(Boolean)) return { winner: 'draw', winningLine: [] };
  return { winner: '', winningLine: [] };
}

function renderTicTacToe() {
  const state = getGameState('ticTacToe');
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">${state.winner ? 'Round finished' : `${state.turn === 'X' ? 'Red X' : 'Blue O'} to move`}</span>
      <span class="pill">${state.moves}/9 moves</span>
    </div>
  `;
  refs.gameArea.innerHTML = `
    <div class="tic-shell">
      <div class="tic-board">
        ${state.board.map((value, index) => `
          <button
            type="button"
            class="tic-cell ${value === 'X' ? 'x-mark' : ''} ${value === 'O' ? 'o-mark' : ''} ${state.winningLine.includes(index) ? 'winning' : ''}"
            data-tic-cell="${index}"
          >${value}</button>
        `).join('')}
      </div>
    </div>
  `;

  refs.gameArea.querySelectorAll('[data-tic-cell]').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.ticCell);
      const liveState = getGameState('ticTacToe');
      if (liveState.winner || liveState.board[index]) return;
      liveState.board[index] = liveState.turn;
      liveState.moves += 1;
      const outcome = getTicTacToeOutcome(liveState.board);
      liveState.winner = outcome.winner;
      liveState.winningLine = outcome.winningLine;
      if (!outcome.winner) liveState.turn = liveState.turn === 'X' ? 'O' : 'X';
      renderActiveGame();
    });
  });

  if (state.winner === 'X') setGameMessage('Red X wins.', 'success');
  else if (state.winner === 'O') setGameMessage('Blue O wins.', 'success');
  else if (state.winner === 'draw') setGameMessage('Draw board.', 'warning');
  else setGameMessage('Players share the same mouse. Left click to alternate turns.');
}

function startImposterRound() {
  const state = getGameState('imposter');
  const pool = getImposterWordPool(state.difficulty);
  if (!pool.length) {
    setGameMessage('No words were loaded for that difficulty.', 'danger');
    return;
  }
  state.chosenWord = sample(pool).toUpperCase();
  state.imposterPlayer = 1 + Math.floor(Math.random() * state.playerCount);
  state.currentPlayer = 1;
  state.screen = 'warning';
  state.revealed = false;
  renderActiveGame();
}

function renderImposter() {
  const state = getGameState('imposter');
  refs.gameTools.innerHTML = `
    <div class="inline-tools">
      <span class="pill">${state.playerCount} players</span>
      <span class="pill">${state.difficulty[0].toUpperCase()}${state.difficulty.slice(1)} words</span>
    </div>
  `;
  if (state.screen === 'setup') {
    refs.gameArea.innerHTML = `
      <div class="imposter-shell">
        <label class="tool-label">Players
          <input id="imposter-player-count" type="number" min="3" max="20" value="${state.playerCount}">
        </label>
        <label class="tool-label">Difficulty
          <select id="imposter-difficulty">
            <option value="easy" ${state.difficulty === 'easy' ? 'selected' : ''}>Easy</option>
            <option value="medium" ${state.difficulty === 'medium' ? 'selected' : ''}>Medium</option>
            <option value="hard" ${state.difficulty === 'hard' ? 'selected' : ''}>Hard</option>
            <option value="expert" ${state.difficulty === 'expert' ? 'selected' : ''}>Expert</option>
          </select>
        </label>
        <button type="button" id="imposter-start">Start Round</button>
      </div>
    `;
    document.getElementById('imposter-player-count').addEventListener('input', event => {
      state.playerCount = readNumber(event.target.value, 4, 3, 20);
    });
    document.getElementById('imposter-difficulty').addEventListener('change', event => {
      state.difficulty = event.target.value;
    });
    document.getElementById('imposter-start').addEventListener('click', startImposterRound);
    setGameMessage('Choose the player count and difficulty, then start the round.');
    return;
  }

  const topLabel = `Player ${state.currentPlayer}`;
  if (state.screen === 'warning') {
    refs.gameArea.innerHTML = `
      <div class="imposter-shell">
        <h3>${topLabel}</h3>
        <p class="game-note">Take the screen away from everyone else before revealing your role.</p>
        <button type="button" id="imposter-reveal">Reveal Word</button>
      </div>
    `;
    document.getElementById('imposter-reveal').addEventListener('click', () => {
      state.screen = 'revealed';
      renderActiveGame();
    });
    setGameMessage('Only the current player should be looking.');
    return;
  }

  if (state.screen === 'handoff') {
    refs.gameArea.innerHTML = `
      <div class="imposter-shell">
        <h3>${topLabel}</h3>
        <p class="game-note">Pass it to the next player. If that is you, take the screen away from everyone else.</p>
        <button type="button" id="imposter-handoff-reveal">Reveal Word</button>
      </div>
    `;
    document.getElementById('imposter-handoff-reveal').addEventListener('click', () => {
      state.screen = 'revealed';
      renderActiveGame();
    });
    setGameMessage('Only the next player should reveal this role.');
    return;
  }

  if (state.screen === 'revealed') {
    const text = state.currentPlayer === state.imposterPlayer ? 'IMPOSTER' : state.chosenWord;
    refs.gameArea.innerHTML = `
      <div class="imposter-shell">
        <h3>${topLabel}</h3>
        <div class="blank-prompt">${text}</div>
        <button type="button" id="imposter-hide">Hide Word</button>
      </div>
    `;
    document.getElementById('imposter-hide').addEventListener('click', () => {
      if (state.currentPlayer >= state.playerCount) {
        state.screen = 'done';
      } else {
        state.currentPlayer += 1;
        state.screen = 'handoff';
      }
      renderActiveGame();
    });
    setGameMessage('Hide the role before handing the screen over.');
    return;
  }

  refs.gameArea.innerHTML = `
    <div class="imposter-shell">
      <h3>All players have seen their roles.</h3>
      <p class="game-note">Talk through clues and figure out who the imposter is.</p>
      <button type="button" id="imposter-new-round">Start Another Round</button>
    </div>
  `;
  document.getElementById('imposter-new-round').addEventListener('click', () => {
    app.states.imposter = createImposterState();
    renderActiveGame();
  });
  setGameMessage('Discussion time.');
}

function runCheckAction() {
  if (app.currentView !== 'play') return;
  switch (app.activeGame) {
    case 'wordGuess':
      submitWordGuess();
      break;
    case 'spellingBee':
      submitSpellingBeeWord();
      break;
    case 'groupSort':
      submitGroupSort();
      break;
    case 'strands':
      useStrandsHint();
      break;
    case 'sudoku':
      checkSudoku();
      break;
    case 'nonogram':
      checkNonogram();
      break;
    case 'queens':
      checkQueens();
      break;
    case 'pinpoint':
      submitPinpointGuess();
      break;
    case 'snake':
      toggleSnake();
      break;
    case 'blockBreaker':
      toggleBlockBreaker();
      break;
    case 'baseball':
      handleBaseballAction();
      break;
    case 'blankSlate':
      rollBlankSlatePrompt();
      break;
    case 'popcorn':
      togglePopcorn();
      break;
    default:
      break;
  }
}

function runNewAction() {
  if (app.currentView !== 'play') return;

  if (app.activeGame === 'snake') {
    const state = getGameState('snake');
    if (state.screen === 'setup') {
      if (state.setup.mode === 'blender' && state.setup.setupPage === 'blender') {
        updateSnakeSetup(state, { setupPage: 'base' });
        renderActiveGame();
        return;
      }
      app.states.snake = createSnakeState();
      renderActiveGame();
      return;
    }
    openSnakeSetup(state, false);
    return;
  }

  resetGame();
}

function isEditingText(target) {
  const tag = target?.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable;
}

function handleWordGuessKey(event) {
  const state = getGameState('wordGuess');
  if (app.wordGuessResult) return;
  if (state.status !== 'playing') return;
  if (/^[a-z]$/i.test(event.key)) {
    event.preventDefault();
    if (state.current.length < 5) {
      state.current += event.key.toUpperCase();
      renderActiveGame();
    }
    return;
  }
  if (event.key === 'Backspace') {
    event.preventDefault();
    state.current = state.current.slice(0, -1);
    renderActiveGame();
    return;
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    submitWordGuess();
  }
}

function handleSpellingBeeKey(event) {
  const state = getGameState('spellingBee');
  if (/^[a-z]$/i.test(event.key)) {
    const letter = event.key.toUpperCase();
    if ([...state.pack.outer, state.pack.center].includes(letter)) {
      event.preventDefault();
      state.current += letter;
      renderActiveGame();
    }
    return;
  }
  if (event.key === 'Backspace') {
    event.preventDefault();
    state.current = state.current.slice(0, -1);
    renderActiveGame();
    return;
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    submitSpellingBeeWord();
  }
}

function handleSnakeKey(event) {
  const state = getGameState('snake');
  if (event.key === 'Enter' && state.screen === 'playing' && state.over) {
    event.preventDefault();
    startSnakeRound(state);
    return;
  }
  const map = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right' };
  const direction = map[event.key];
  if (!direction) return;
  if (state.screen !== 'playing' || state.over) return;
  event.preventDefault();
  queueSnakeDirection(state, direction);
  if (!state.running && !state.over) {
    state.running = true;
    startSnakeLoop();
    renderActiveGame();
  }
}

function handleBlockBreakerKey(event) {
  const state = getGameState('blockBreaker');
  if (event.key === 'ArrowLeft' || event.key === 'a') {
    event.preventDefault();
    state.paddleX = Math.max(0, state.paddleX - 24);
    if (state.ball.stuck) state.ball.x = state.paddleX + 48;
    drawBlockBreaker();
  }
  if (event.key === 'ArrowRight' || event.key === 'd') {
    event.preventDefault();
    state.paddleX = Math.min(464, state.paddleX + 24);
    if (state.ball.stuck) state.ball.x = state.paddleX + 48;
    drawBlockBreaker();
  }
  if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault();
    toggleBlockBreaker();
  }
}

function handleBaseballKey(event) {
  if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault();
    handleBaseballAction();
  }
}

function handleMergeKey(event) {
  const map = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right' };
  const direction = map[event.key];
  if (!direction) return;
  event.preventDefault();
  moveMerge(direction);
}

function attachGlobalEvents() {
  refs.newGameButton.addEventListener('click', runNewAction);
  refs.checkGameButton.addEventListener('click', runCheckAction);
  refs.homeTitleButton.addEventListener('click', showHomeView);
  refs.customizerToggle.addEventListener('click', () => toggleCustomizer());
  refs.closeCustomizer.addEventListener('click', () => toggleCustomizer(false));
  refs.wordGuessPlayAgain.addEventListener('click', () => {
    closeWordGuessResultModal();
    app.currentView = 'play';
    app.activeGame = 'wordGuess';
    app.states.wordGuess = createWordGuessState();
    renderApp();
  });
  refs.wordGuessChooseGame.addEventListener('click', showHomeView);
  refs.wordGuessCloseModal.addEventListener('click', closeWordGuessResultModal);

  refs.saveCustomData.addEventListener('click', () => {
    const parsed = safeParse(refs.editor.value, null);
    if (!parsed || typeof parsed !== 'object') {
      setCustomStatus('JSON could not be parsed. Fix the editor content first.', 'danger');
      return;
    }
    cleanupGame(app.activeGame);
    saveCustomData(parsed);
    app.states = {};
    setCustomStatus('Custom data saved locally for this browser.', 'success');
    renderApp();
    refreshCustomEditor();
  });

  refs.resetCustomData.addEventListener('click', () => {
    cleanupGame(app.activeGame);
    saveCustomData(deepClone(DEFAULT_CUSTOM_DATA));
    app.states = {};
    setCustomStatus('Defaults restored.', 'success');
    renderApp();
    refreshCustomEditor();
  });

  refs.exportCustomData.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(app.customData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'puzzle-usb-custom-data.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
    setCustomStatus('Current data exported as JSON.', 'success');
  });

  refs.exportHighScores.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(app.highScores, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'puzzle-usb-high-scores.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
    setCustomStatus('High scores exported as JSON. You can save that file onto the USB drive.', 'success');
  });

  refs.importHighScoresButton.addEventListener('click', () => {
    refs.importHighScoresInput.value = '';
    refs.importHighScoresInput.click();
  });

  refs.importHighScoresInput.addEventListener('change', event => {
    const [file] = event.target.files || [];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = loadEvent => importHighScoresFromText(String(loadEvent.target?.result || ''));
    reader.onerror = () => setCustomStatus('The selected high score file could not be read.', 'danger');
    reader.readAsText(file);
  });

  window.addEventListener('keydown', event => {
    if (app.currentView !== 'play') return;
    if (isEditingText(event.target)) return;
    if (app.activeGame === 'wordGuess') handleWordGuessKey(event);
    if (app.activeGame === 'spellingBee') handleSpellingBeeKey(event);
    if (app.activeGame === 'snake') handleSnakeKey(event);
    if (app.activeGame === 'blockBreaker') handleBlockBreakerKey(event);
    if (app.activeGame === 'baseball') handleBaseballKey(event);
    if (app.activeGame === 'merge') handleMergeKey(event);
  });
}

function init() {
  hydrateHighScores();
  refreshCustomEditor();
  attachGlobalEvents();
  renderApp();
}

init();
