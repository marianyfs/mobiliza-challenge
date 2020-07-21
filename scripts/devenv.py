#!/usr/bin/python3

import sys

from docker.build import build
from docker.clean import clean
from docker.dev import dev
from docker.kill import kill
from docker.lint import lint
from docker.logs import logs
from docker.restart import restart
from docker.start import start
from docker.status import status
from docker.stop import stop
from docker.test import test
from docker.usage import usage


def argument_to_command(arguments):
    commands = {
        "build": build,
        "clean": clean,
        "dev": dev,
        "kill": kill,
        "lint": lint,
        "logs": logs,
        "restart": restart,
        "start": start,
        "status": status,
        "stop": stop,
        "test": test,
    }
    command = commands.get(arguments[0], usage)
    ret = command(arguments[1:])
    sys.exit(ret or 0)


def main():
    arguments = sys.argv[1:]

    if not arguments:
        usage([])
        return

    try:
        argument_to_command(arguments)
    except KeyboardInterrupt:
        pass

    return


if __name__ == '__main__':
    main()
