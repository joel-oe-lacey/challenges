#!/bin/python3
# Problem Desc: https://www.hackerrank.com/challenges/2d-array/problem?h_r=next-challenge&h_v=zen

import math
import os
import random
import re
import sys

# Complete the hourglassSum function below.
def hourglassSum(arr):
    # What defines an hourglass in code terms?
    # want a nested function that calculates hourglass sum, to run as we iterate through each arr value
    # stop when x = len(arr) - 14 as no more hourglasses can be made in a 6x6 arr
    # take ind x, + 1, + 2, + 7, + 12, + 13, + 14

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    result = hourglassSum(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
