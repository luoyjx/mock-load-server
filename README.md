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

## Add crontab on other server

you can change the rule depending on your needs

```bash
# For more information see the manual pages of crontab(5) and cron(8)
#
# m h  dom mon dow   command
*/3 * * * * curl http://your-server-address:3001/cpu
*/4 * * * * curl http://your-server-address:3001/mem
*/5 * * * * curl http://your-server-address:3001/net > /dev/null
```