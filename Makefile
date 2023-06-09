include .env
export

install:
	npm install

format:
	npm run format

lint:
	npm run lint

format-lint: format lint

build-sketch:
	npx canvas-sketch ${SKETCH_PATH}/${SKETCH_NAME}.js --build --dir ./public/pages/${SKETCH_NAME}/

.build-data-index:
	npm run test-e2e

build-data-index: .build-data-index format-lint

.build-app:
	npm run build

build-app: build-data-index .build-app

start-dev:
	npm run start

deploy:
	npm run deploy