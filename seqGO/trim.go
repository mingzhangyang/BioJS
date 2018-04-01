package sequence

import (
	"fmt"
)

func Validate(s string) (string, error) {
	res := make([]byte, 0)
	for _, c := range s {
		switch {
		case c < 65:
			fmt.Printf("An illegal character \"%s\" (ASCII: %v) removed.\n", string(c), c)
		case c > 64 && c < 91:
			res = append(res, byte(c))
		case c > 96 && c < 123:
			res = append(res, byte(c))
		default:
			return "", fmt.Errorf("Only [^A-Za-z] are allowed. But \"%s\" found\n", string(c))
		}
	}
	return string(res), nil
}
