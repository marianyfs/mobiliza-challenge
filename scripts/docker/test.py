#!/usr/bin/python3

from docker.run import run


def usage():
    print("What do you want to test? <frontend>")


def argument_to_params(arguments):
    if not arguments:
        return
    params = {
        "frontend": ['mobiliza-frontend', 'yarn', 'run', 'test']
    }
    return params.get(arguments[0])


def test(arguments):
    print(">>>>>>>>>> Running Test Suite <<<<<<<<<<")
    param = argument_to_params(arguments)
    if not param:
        return usage()

    return run(param + arguments[1:])
