#[
autogenerated by docgen
loc: /home/runner/work/Nim/Nim/lib/js/jsre.nim(65, 3)
rdoccmd: 
]#
import std/assertions
import "/home/runner/work/Nim/Nim/lib/js/jsre.nim"
{.line: ("/home/runner/work/Nim/Nim/lib/js/jsre.nim", 65, 3).}:
  let jsregex: RegExp = newRegExp(r"abc", r"i")
  assert "abcd".startsWith jsregex

