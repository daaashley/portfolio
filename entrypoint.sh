#!/bin/bash
set -euo pipefail

if [ -v 1 ]; then
    echo 'Running migration!!!!!'
    poetry run yoyo apply -b -vvv
fi
