print("*************************************************************")
print("*************************************************************")
print("*************************************************************")

escolhido = 'd'
key = chr((ord(escolhido) - ord('a') - 3) % 26 + ord('a'))

print("ord(escolhido) : " + escolhido)
print(ord(escolhido))
print(ord(escolhido))

print("ord('a')")
print(ord('a'))
print(ord('a'))

print("(ord(escolhido) - ord('a') - 3)") # DISTANCIA DE CHR ATÉ O PRRIMEIRO (QUE É O A)
print((ord(escolhido) - ord('a') - 3))
print((ord(escolhido) - ord('a') - 3))

print("(ord(escolhido) - ord('a') - 3) % 26") # wrapping around using modulo 26.
print((ord(escolhido) - ord('a') - 3) % 26)
print((ord(escolhido) - ord('a') - 3) % 26)

print("(ord(escolhido) - ord('a') - 3) % 26 + ord('a')") # Converts the position back to an ASCII value of the corresponding character.
print((ord(escolhido) - ord('a') - 3) % 26 + ord('a'))
print((ord(escolhido) - ord('a') - 3) % 26 + ord('a'))

print("chr((ord(escolhido) - ord('a') - 3) % 26 + ord('a'))")
print(chr((ord(escolhido) - ord('a') - 3) % 26 + ord('a')))
print(chr((ord(escolhido) - ord('a') - 3) % 26 + ord('a')))