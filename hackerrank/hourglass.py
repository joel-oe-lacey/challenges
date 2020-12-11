#!/bin/python3
# Problem Desc: https://www.hackerrank.com/challenges/2d-array/problem?h_r=next-challenge&h_v=zen

import math
import os
import random
import re
import sys

# Pseudocode
# What defines an hourglass in code terms?
# want a nested function that calculates hourglass sum, to run as we iterate through each arr value
# stop when x = len(arr) - 14 as no more hourglasses can be made in a 6x6 arr
# take ind x, + 1, + 2, + 7, + 12, + 13, + 14
# track a max value through iteration and update max if higher val found 
# this structure doesn't work because it doesn't have awareness of the row bounds 
# can only run it up to 4th index of each row 

# Setup
glassExample = [-9, -9, -9,  1, 1, 1,
                0, -9, 0,  4, 3, 2,
                -9, -9, -9,  1, 2, 3,
                0,  0,  8,  6, 6, 0,
                0,  0,  0, -2, 0, 0,
                0,  0,  1,  2, 4, 0]

# Complete the hourglassSum function below.
def hourglassSum(arr):
    def calcSingleHourglass(i, arr):
        return arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 7] + arr[i + 12] + arr[i + 13] + arr[i + 14]

    max = float('-inf')
    
    for x in range(len(arr) - 14):
        glass = calcSingleHourglass(x, arr)
        if (glass > max):
            max = glass
    
    return max
    

print(hourglassSum(glassExample))

