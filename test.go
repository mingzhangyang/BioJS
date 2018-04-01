package main

import (
	"fmt"

	"./seqGO"
)

func main() {
	s, _ := sequence.NewDNA("agtcgatcgtagcta")
	fmt.Println(s)
	fmt.Println(s.Length())
	fmt.Println(s.Composition())
	fmt.Println(s.GCContent())
	fmt.Println(s.Complement())
	fmt.Println(s.ReverseComplement())
}
