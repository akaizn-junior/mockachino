#!/bin/bash

rm -R ../test2 && cd ../package && npm unlink && cd ../build && rm -R ../package && npm pack && mv *.tgz ../ && cd ../ && tar -xvf *.tgz && rm *.tgz && mkdir test2 && cd package && npm link && cd ../test2 && touch index.js && npm link mockachino && echo "const mocka = require('mockachino'); console.log((new mocka()).mock());" >> ./index.js && node index
