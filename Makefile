install:
	npm install

start:
	npm run babel-node -- src/bin/brain-calc.js

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
