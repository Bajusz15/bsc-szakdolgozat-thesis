package main

import (
	"fmt"
	"github.com/oddg/hungarian-algorithm"
)

func main() {
	//a := [][]int{{11, 6, 12}, {12, 4, 6}, {8, 12, 11}}
	a := [][]int{{11, 6, 12}, {12, 4, 6}, {8, 12, 11}}
	fmt.Println(hungarianAlgorithm.Solve(a))
}
