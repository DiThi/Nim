discard """
output: '''true
true
true
true
p has been called.
p has been called.'''
"""

# https://github.com/nim-lang/Nim/issues/1147
type TTest = object
  vals: seq[int]

proc add*(self: var TTest, val: int) =
  self.vals.add(val)

type CAddable = concept x
  x[].add(int)

echo((ref TTest) is CAddable) # true

# https://github.com/nim-lang/Nim/issues/1570
type ConcretePointOfFloat = object
  x, y: float

type ConcretePoint[Value] = object
  x, y: Value

type AbstractPointOfFloat = generic p
  p.x is float and p.y is float

let p1 = ConcretePointOfFloat(x: 0, y: 0)
let p2 = ConcretePoint[float](x: 0, y: 0)

echo p1 is AbstractPointOfFloat      # true
echo p2 is AbstractPointOfFloat      # true
echo p2.x is float and p2.y is float # true

# https://github.com/nim-lang/Nim/issues/2018
type ProtocolFollower = generic
  true # not a particularly involved protocol

type ImplementorA = object
type ImplementorB = object

proc p[A: ProtocolFollower, B: ProtocolFollower](a: A, b: B) =
  echo "p has been called."

p(ImplementorA(), ImplementorA())
p(ImplementorA(), ImplementorB())

