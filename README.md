# mock-load-server

Simple server for simulating server CPU, memory, network load

## Pre-requisites

- Node.js

## Usage

install dependencies

```bash
npm install
```

install pm2 globally

```bash
npm i -g pm2
```

start server

```bash
# set max memory limit to 4GB
pm2 start app.js --node-args="--max-old-space-size=4096"
```

## API Usage

```bash
# mock CPU load
curl http://localhost:3001/cpu
# mock memory leak
curl http://localhost:3001/mem
# mock network data output
curl http://localhost:3001/net > /dev/null
```

