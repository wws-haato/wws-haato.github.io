#!/usr/bin/env python3
import numpy as np
from PIL import Image
from argparse import ArgumentParser
import os


def inputDir(fn: str): 
    assert "file not found" and os.path.isfile(fn) and os.path.exists(fn)
    return fn

def outputName(fn: str):
    assert "invalid filename with '/' " and fn.find('/') == -1 
    return fn

parser = ArgumentParser(description="change color of monochrome pictures")
parser.add_argument('input', type=inputDir, help='path to input image')
parser.add_argument('output', type=outputName, help='raw output filename')
parser.add_argument('degree', type=float, help='ccw rotate degrees')



if __name__ == "__main__": 
    args = parser.parse_args()
    img = Image.open(args.input).rotate(args.degree, Image.NEAREST, expand = 1)

    dir = os.path.dirname(args.input)
    output = os.path.join(dir, args.output)
    img.save(output)
    print('file saved as %s' % output)