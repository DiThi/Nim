/* Generated by the Nim Compiler v2.1.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555823 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555169 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555177 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555176 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555173 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555174 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217745 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI134217745 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217745.node = NNI134217745;
var NNI33555174 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555174.node = NNI33555174;
NTI33555176.base = NTI33555173;
NTI33555177.base = NTI33555173;
var NNI33555173 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555176, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555177, name: "up", sons: null}]};
NTI33555173.node = NNI33555173;
var NNI33555169 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555169.node = NNI33555169;
NTI33555173.base = NTI33555169;
NTI33555174.base = NTI33555173;
NTI134217745.base = NTI33555174;
var NNI33555823 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554450, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554450, name: "Field2", sons: null}]};
NTI33555823.node = NNI33555823;
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
NTI134217741.base = NTI33555174;
NTI134217743.base = NTI134217741;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555174;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555174;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557250, src_33557251, ti_33557252) {
  var result_33557261 = null;

    switch (ti_33557252.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557241(ti_33557252))) {
      result_33557261 = src_33557251;
      }
      else {
        result_33557261 = [src_33557251[0], src_33557251[1]];
      }
      
      break;
    case 19:
            if (dest_33557250 === null || dest_33557250 === undefined) {
        dest_33557250 = {};
      }
      else {
        for (var key in dest_33557250) { delete dest_33557250[key]; }
      }
      for (var key in src_33557251) { dest_33557250[key] = src_33557251[key]; }
      result_33557261 = dest_33557250;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557252.base == null))) {
      result_33557261 = nimCopy(dest_33557250, src_33557251, ti_33557252.base);
      }
      else {
      if ((ti_33557252.kind == 17)) {
      result_33557261 = (dest_33557250 === null || dest_33557250 === undefined) ? {m_type: ti_33557252} : dest_33557250;
      }
      else {
        result_33557261 = (dest_33557250 === null || dest_33557250 === undefined) ? {} : dest_33557250;
      }
      }
      nimCopyAux(result_33557261, src_33557251, ti_33557252.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557251)) { 
        if(dest_33557250 === null || dest_33557250 === undefined || dest_33557250.length != src_33557251.length) {
          dest_33557250 = new src_33557251.constructor(src_33557251);
        } else {
          dest_33557250.set(src_33557251, 0);
        }
        result_33557261 = dest_33557250;
      } else {
        if (src_33557251 === null) {
          result_33557261 = null;
        }
        else {
          if (dest_33557250 === null || dest_33557250 === undefined || dest_33557250.length != src_33557251.length) {
            dest_33557250 = new Array(src_33557251.length);
          }
          result_33557261 = dest_33557250;
          for (var i = 0; i < src_33557251.length; ++i) {
            result_33557261[i] = nimCopy(result_33557261[i], src_33557251[i], ti_33557252.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557251 === null) {
        result_33557261 = null;
      }
      else {
        if (dest_33557250 === null || dest_33557250 === undefined || dest_33557250.length != src_33557251.length) {
          dest_33557250 = new Array(src_33557251.length);
        }
        result_33557261 = dest_33557250;
        for (var i = 0; i < src_33557251.length; ++i) {
          result_33557261[i] = nimCopy(result_33557261[i], src_33557251[i], ti_33557252.base);
        }
      }
    
      break;
    case 28:
            if (src_33557251 !== null) {
        result_33557261 = src_33557251.slice(0);
      }
    
      break;
    default: 
      result_33557261 = src_33557251;
      break;
    }

  return result_33557261;

}

function arrayConstr(len_33557296, value_33557297, typ_33557298) {
        var result = new Array(len_33557296);
    for (var i = 0; i < len_33557296; ++i) result[i] = nimCopy(null, value_33557297, typ_33557298);
    return result;
  

  
}

function mnewString(len_33556985) {
        return new Array(len_33556985);
  

  
}

function addInt(a_33557032, b_33557033) {
        var result = a_33557032 + b_33557033;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557306, a_33557307, b_33557308) {
  var result_33557309 = 0;

  BeforeRet: {
    if (((a_33557307 <= i_33557306) && (i_33557306 <= b_33557308))) {
    result_33557309 = i_33557306;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557309;

}

function chckIndx(i_33557301, a_33557302, b_33557303) {
  var result_33557304 = 0;

  BeforeRet: {
    if (((a_33557302 <= i_33557301) && (i_33557301 <= b_33557303))) {
    result_33557304 = i_33557301;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557301, a_33557302, b_33557303);
    }
    
  };

  return result_33557304;

}

function cstrToNimstr(c_33556883) {
      var ln = c_33556883.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556883.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556883.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556886) {
  var result_33556887 = null;

    var res_33556928 = newSeq_33556904((s_33556886).length);
    var i_33556929 = 0;
    var j_33556930 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556929 < (s_33556886).length)) break Label2;
          var c_33556931 = s_33556886[i_33556929];
          if ((c_33556931 < 128)) {
          res_33556928[j_33556930] = String.fromCharCode(c_33556931);
          i_33556929 += 1;
          }
          else {
            var helper_33556943 = newSeq_33556904(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556944 = c_33556931.toString(16);
                  if ((((code_33556944) == null ? 0 : (code_33556944).length) == 1)) {
                  helper_33556943.push("%0");;
                  }
                  else {
                  helper_33556943.push("%");;
                  }
                  
                  helper_33556943.push(code_33556944);;
                  i_33556929 += 1;
                  if ((((s_33556886).length <= i_33556929) || (s_33556886[i_33556929] < 128))) {
                  break Label3;
                  }
                  
                  c_33556931 = s_33556886[i_33556929];
                }
            };
++excHandler;
            try {
            res_33556928[j_33556930] = decodeURIComponent(helper_33556943.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556928[j_33556930] = helper_33556943.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556930 += 1;
        }
    };
    if (res_33556928.length < j_33556930) { for (var i = res_33556928.length ; i < j_33556930 ; ++i) res_33556928.push(null); }
               else { res_33556928.length = j_33556930; };
    result_33556887 = res_33556928.join("");

  return result_33556887;

}

function raiseException(e_33556638, ename_33556639) {
    e_33556638.name = ename_33556639;
    if ((excHandler == 0)) {
    unhandledException(e_33556638);
    }
    
    e_33556638.trace = nimCopy(null, rawWriteStackTrace_33556589(), NTI33554449);
    throw e_33556638;

  
}

function makeNimstrLit(c_33556880) {
      var result = [];
  for (var i = 0; i < c_33556880.length; ++i) {
    result[i] = c_33556880.charCodeAt(i);
  }
  return result;
  

  
}
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module macros", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/core/macros.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module macros", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/core/macros.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module hashes", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/hashes.nim", line: 0};
framePtr = F;
F.line = 218;
F.filename = "hashes.nim";
var objectID_754974895 = [0];
framePtr = F.prev;
var F = {procname: "module hashes", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/hashes.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops_utils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/bitops_utils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops_utils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/bitops_utils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module countbits_impl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/countbits_impl.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module countbits_impl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/countbits_impl.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/bitops.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/bitops.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module fenv", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/fenv.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module fenv", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/fenv.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module math", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/math.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module math", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/math.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module algorithm", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/algorithm.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module algorithm", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/algorithm.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module outparams", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/outparams.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module outparams", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/outparams.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module tables", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/collections/tables.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module tables", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/collections/tables.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsffi", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsffi.nim", line: 0};
framePtr = F;
F.line = 45;
F.filename = "jsffi.nim";
F.line = 46;
framePtr = F.prev;
var F = {procname: "module jsffi", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsffi.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557241(ti_33557242) {
  var result_33557243 = false;

  BeforeRet: {
    result_33557243 = !((ConstSet1[ti_33557242.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557243;

}

function nimCopyAux(dest_33557254, src_33557255, n_33557256) {
    switch (n_33557256.kind) {
    case 0:
      break;
    case 1:
            dest_33557254[n_33557256.offset] = nimCopy(dest_33557254[n_33557256.offset], src_33557255[n_33557256.offset], n_33557256.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557256.sons.length; i++) {
      nimCopyAux(dest_33557254, src_33557255, n_33557256.sons[i]);
    }
    
      break;
    case 3:
            dest_33557254[n_33557256.offset] = nimCopy(dest_33557254[n_33557256.offset], src_33557255[n_33557256.offset], n_33557256.typ);
      for (var i = 0; i < n_33557256.sons.length; ++i) {
        nimCopyAux(dest_33557254, src_33557255, n_33557256.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556361(x_33556362, x_33556362_Idx, y_33556363) {
          if (x_33556362[x_33556362_Idx] === null) { x_33556362[x_33556362_Idx] = []; }
      var off = x_33556362[x_33556362_Idx].length;
      x_33556362[x_33556362_Idx].length += y_33556363.length;
      for (var i = 0; i < y_33556363.length; ++i) {
        x_33556362[x_33556362_Idx][off+i] = y_33556363.charCodeAt(i);
      }
    

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33557030) {
        if (a_33557030 > 2147483647 || a_33557030 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556797, a_33556798, b_33556799) {
    var Temporary1;

    if ((b_33556799 < a_33556798)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32] || []).concat(HEX24_369098760(i_33556797) || [],[32,110,111,116,32,105,110,32] || [],HEX24_369098760(a_33556798) || [],[32,46,46,32] || [],HEX24_369098760(b_33556799) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_301990087(result_301990089, result_301990089_Idx, x_301990090, start_301990091, n_301990092) {
    var Temporary1;

  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 44;
    F.filename = "digitsutils.nim";
    var old_301990093 = (result_301990089[result_301990089_Idx]).length;
    F.line = 45;
    if (result_301990089[result_301990089_Idx].length < (Temporary1 = chckRange(addInt(old_301990093, n_301990092), 0, 2147483647), Temporary1)) { for (var i = result_301990089[result_301990089_Idx].length; i < Temporary1; ++i) result_301990089[result_301990089_Idx].push(0); }
         else {result_301990089[result_301990089_Idx].length = Temporary1; };
    Label2: {
      F.line = 47;
      var iHEX60gensym4_301990107 = 0;
      F.line = 119;
      F.filename = "iterators_1.nim";
      var i_654311488 = 0;
      Label3: {
        F.line = 120;
          Label4: while (true) {
          if (!(i_654311488 < n_301990092)) break Label4;
            F.line = 50;
            F.filename = "digitsutils.nim";
            iHEX60gensym4_301990107 = i_654311488;
            F.line = 50;
            result_301990089[result_301990089_Idx][chckIndx(addInt(old_301990093, iHEX60gensym4_301990107), 0, (result_301990089[result_301990089_Idx]).length - 1)] = x_301990090.charCodeAt(chckIndx(addInt(start_301990091, iHEX60gensym4_301990107), 0, (x_301990090).length - 1));
            F.line = 122;
            F.filename = "iterators_1.nim";
            i_654311488 = addInt(i_654311488, 1);
          }
      };
    };
  framePtr = F.prev;

  
}

function addChars_301990083(result_301990085, result_301990085_Idx, x_301990086) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 56;
    F.filename = "digitsutils.nim";
    addChars_301990087(result_301990085, result_301990085_Idx, x_301990086, 0, ((x_301990086) == null ? 0 : (x_301990086).length));
  framePtr = F.prev;

  
}

function addInt_301990108(result_301990109, result_301990109_Idx, x_301990110) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 112;
    F.filename = "digitsutils.nim";
    addChars_301990083(result_301990109, result_301990109_Idx, ((x_301990110) + ""));
  framePtr = F.prev;

  
}

function addInt_301990126(result_301990127, result_301990127_Idx, x_301990128) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 116;
    F.filename = "digitsutils.nim";
    addInt_301990108(result_301990127, result_301990127_Idx, BigInt(x_301990128));
  framePtr = F.prev;

  
}

function HEX24_369098760(x_369098761) {
  var result_369098762 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 18;
    F.filename = "dollars.nim";
    addInt_301990126(result_369098762, 0, x_369098761);
  framePtr = F.prev;

  return result_369098762[0];

}

function auxWriteStackTrace_33556496(f_33556497) {
  var result_33556498 = [[]];

    var it_33556506 = f_33556497;
    var i_33556507 = 0;
    var total_33556508 = 0;
    var tempFrames_33556509 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555823);
    Label1: {
        Label2: while (true) {
        if (!(!((it_33556506 == null)) && (i_33556507 <= 63))) break Label2;
          tempFrames_33556509[i_33556507].Field0 = it_33556506.procname;
          tempFrames_33556509[i_33556507].Field1 = it_33556506.line;
          tempFrames_33556509[i_33556507].Field2 = it_33556506.filename;
          i_33556507 += 1;
          total_33556508 += 1;
          it_33556506 = it_33556506.prev;
        }
    };
    Label3: {
        Label4: while (true) {
        if (!!((it_33556506 == null))) break Label4;
          total_33556508 += 1;
          it_33556506 = it_33556506.prev;
        }
    };
    result_33556498[0] = nimCopy(null, [], NTI33554449);
    if (!((total_33556508 == i_33556507))) {
    result_33556498[0].push.apply(result_33556498[0], [40]);;
    result_33556498[0].push.apply(result_33556498[0], HEX24_369098760((total_33556508 - i_33556507)));;
    result_33556498[0].push.apply(result_33556498[0], [32,99,97,108,108,115,32,111,109,105,116,116,101,100,41,32,46,46,46,10]);;
    }
    
    Label5: {
      var j_33556539 = 0;
      var colontmp__654311480 = 0;
      colontmp__654311480 = (i_33556507 - 1);
      var res_654311482 = colontmp__654311480;
      Label6: {
          Label7: while (true) {
          if (!(0 <= res_654311482)) break Label7;
            j_33556539 = res_654311482;
            result_33556498[0].push.apply(result_33556498[0], cstrToNimstr(tempFrames_33556509[j_33556539].Field2));;
            if ((0 < tempFrames_33556509[j_33556539].Field1)) {
            result_33556498[0].push.apply(result_33556498[0], [40]);;
            addInt_301990126(result_33556498, 0, tempFrames_33556509[j_33556539].Field1);
            if (false) {
            result_33556498[0].push.apply(result_33556498[0], [44,32]);;
            addInt_301990126(result_33556498, 0, 0);
            }
            
            result_33556498[0].push.apply(result_33556498[0], [41]);;
            }
            
            result_33556498[0].push.apply(result_33556498[0], [32,97,116,32]);;
            add_33556361(result_33556498, 0, tempFrames_33556509[j_33556539].Field0);
            result_33556498[0].push.apply(result_33556498[0], [10]);;
            res_654311482 -= 1;
          }
      };
    };

  return result_33556498[0];

}

function rawWriteStackTrace_33556589() {
  var result_33556590 = [];

    if (!((framePtr == null))) {
    result_33556590 = nimCopy(null, ([84,114,97,99,101,98,97,99,107,32,40,109,111,115,116,32,114,101,99,101,110,116,32,99,97,108,108,32,108,97,115,116,41,10] || []).concat(auxWriteStackTrace_33556496(framePtr) || []), NTI33554449);
    }
    else {
      result_33556590 = nimCopy(null, [78,111,32,115,116,97,99,107,32,116,114,97,99,101,98,97,99,107,32,97,118,97,105,108,97,98,108,101,10], NTI33554449);
    }
    

  return result_33556590;

}

function newSeq_33556904(len_33556906) {
  var result_33556907 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 635;
    F.filename = "system.nim";
    result_33556907 = new Array(len_33556906); for (var i = 0 ; i < len_33556906 ; ++i) { result_33556907[i] = null; }  framePtr = F.prev;

  return result_33556907;

}

function unhandledException(e_33556634) {
    var buf_33556635 = [[]];
    if (!(((e_33556634.message).length == 0))) {
    buf_33556635[0].push.apply(buf_33556635[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556635[0].push.apply(buf_33556635[0], e_33556634.message);;
    }
    else {
    buf_33556635[0].push.apply(buf_33556635[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556635[0].push.apply(buf_33556635[0], [32,91]);;
    add_33556361(buf_33556635, 0, e_33556634.name);
    buf_33556635[0].push.apply(buf_33556635[0], [93,10]);;
    buf_33556635[0].push.apply(buf_33556635[0], rawWriteStackTrace_33556589());;
    var cbuf_33556636 = toJSStr(buf_33556635[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556636);
  }
  else {
    throw cbuf_33556636;
  }
  

  
}

function sysFatal_268435501(message_268435504) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    F.filename = "fatal.nim";
    raiseException({message: nimCopy(null, message_268435504, NTI33554449), m_type: NTI134217745, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_268435499(msg_268435500) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 36;
    F.filename = "assertions.nim";
    sysFatal_268435501(msg_268435500);
  framePtr = F.prev;

  
}

function failedAssertImpl_268435541(msg_268435542) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 41;
    F.filename = "assertions.nim";
    raiseAssert_268435499(msg_268435542);
  framePtr = F.prev;

  
}
var F = {procname: "module jsutils_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim", line: 0};
framePtr = F;
if (!((typeof((1)) == "number"))) {
F.line = 27;
F.filename = "jsutils.nim";
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(10, 3) `jsTypeOf(1.toJs) == \"number\"` "));
}

if (!((typeof((false)) == "boolean"))) {
F.line = 27;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(11, 3) `jsTypeOf(false.toJs) == \"boolean\"` "));
}

if (!((typeof((new Int32Array([1]))) == "object"))) {
F.line = 27;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(12, 3) `[1].toJs.jsTypeOf == \"object\"` "));
}

if (!((typeof((BigInt("1"))) == "bigint"))) {
F.line = 27;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(13, 3) `big\"1\".toJs.jsTypeOf == \"bigint\"` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function jsConstructorName_922746890(a_922746892) {
  var result_922746893 = null;

  var F = {procname: "jsConstructorName.jsConstructorName", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
  framePtr = F;
    F.line = 40;
    F.filename = "jsutils.nim";
    result_922746893 = a_922746892.constructor.name
  framePtr = F.prev;

  return result_922746893;

}

function jsConstructorName_922746902(a_922746904) {
  var result_922746905 = null;

  var F = {procname: "jsConstructorName.jsConstructorName", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
  framePtr = F;
    F.line = 40;
    F.filename = "jsutils.nim";
    result_922746905 = a_922746904.constructor.name
  framePtr = F.prev;

  return result_922746905;

}
var F = {procname: "module jsutils_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim", line: 0};
framePtr = F;
F.line = 35;
F.filename = "jsutils.nim";
var a_922746889 = new Float64Array(2);
if (!((jsConstructorName_922746890(a_922746889) == "Float64Array"))) {
F.line = 35;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim(11, 3) `jsConstructorName(a) == \"Float64Array\"` "));
}

if (!((jsConstructorName_922746902((a_922746889)) == "Float64Array"))) {
F.line = 35;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim(12, 3) `jsConstructorName(a.toJs) == \"Float64Array\"` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim", line: 0};
framePtr = F;
if (!((Object.prototype.toString.call((1)) == "[object Number]"))) {
F.line = 49;
F.filename = "jsutils.nim";
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(11, 3) `1.toJs.getProtoName == \"[object Number]\"` "));
}

if (!((Object.prototype.toString.call(("a")) == "[object String]"))) {
F.line = 49;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(12, 3) `\"a\".toJs.getProtoName == \"[object String]\"` "));
}

if (!((Object.prototype.toString.call((BigInt("1"))) == "[object BigInt]"))) {
F.line = 49;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(13, 3) `big\"1\".toJs.getProtoName == \"[object BigInt]\"` "));
}

if (!((Object.prototype.toString.call((false)) == "[object Boolean]"))) {
F.line = 49;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(14, 3) `false.toJs.getProtoName == \"[object Boolean]\"` "));
}

if (!((Object.prototype.toString.call(({Field0: 1})) == "[object Object]"))) {
F.line = 49;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(15, 3) `(a: 1).toJs.getProtoName == \"[object Object]\"` "));
}

if (!((Object.prototype.toString.call((null)) == "[object Null]"))) {
F.line = 49;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(16, 3) `A.default.toJs.getProtoName == \"[object Null]\"` "));
}

if (!((Object.prototype.toString.call((new Int32Array([1]))) == "[object Int32Array]"))) {
F.line = 49;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(17, 3) `[1].toJs.getProtoName == \"[object Int32Array]\"` "));
}

if (!((Object.prototype.toString.call(([1])) == "[object Array]"))) {
F.line = 49;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(18, 3) `@[1].toJs.getProtoName == \"[object Array]\"` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_4.nim", line: 0};
framePtr = F;
if (!((Number.MAX_SAFE_INTEGER == 9007199254740991n))) {
F.line = 64;
F.filename = "jsutils.nim";
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_4.nim(10, 3) `a == maxSafeInteger` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_4.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_5", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim", line: 0};
framePtr = F;
if (!(Number.isInteger(1))) {
F.line = 69;
F.filename = "jsutils.nim";
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(10, 3) `1.isInteger` "));
}

if (!(!(Number.isInteger(1.5)))) {
F.line = 69;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(11, 3) `not 1.5.isInteger` "));
}

if (!(Number.isInteger((1)))) {
F.line = 69;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(12, 3) `1.toJs.isInteger` "));
}

if (!(!(Number.isInteger((1.5))))) {
F.line = 69;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(13, 3) `not 1.5.toJs.isInteger` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_5", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_6", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim", line: 0};
framePtr = F;
if (!(!(Number.isSafeInteger(("123"))))) {
F.line = 77;
F.filename = "jsutils.nim";
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(10, 3) `not \"123\".toJs.isSafeInteger` "));
}

if (!(Number.isSafeInteger(123))) {
F.line = 77;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(11, 3) `123.isSafeInteger` "));
}

if (!(Number.isSafeInteger((123)))) {
F.line = 77;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(12, 3) `123.toJs.isSafeInteger` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_6", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
