install:
	npm install

start:
	npm run babel-node -- src/bin/brain-prime.js

startPrime:
	npm run babel-node -- src/bin/brain-prime.js

startProgression:
	npm run babel-node -- src/bin/brain-progression.js

startBalance:
	npm run babel-node -- src/bin/brain-balance.js

startGcd:
	npm run babel-node -- src/bin/brain-gcd.js

startCalc:
	npm run babel-node -- src/bin/brain-calc.js

startEven:
	npm run babel-node -- src/bin/brain-even.js

startGames:
	npm run babel-node -- src/bin/brain-games.js

build:
	npm run build

publish:
	npm publish

lint:
	npm run eslint
