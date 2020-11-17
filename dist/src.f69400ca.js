// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.tsx":[function(require,module,exports) {
var _console;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**EJERCICIOS ENTREGABLES TEMA 2 LENGUAJES */

/*Implementa una función head (inmutable), tal que, dado un array
 *como entrada extraiga y devuelva su primer elemento. Uliza destructuring.*/
var transportsA = ["bus", "coche", "moto", "bici", "patinete"];
console.log('Array transportsA: ', transportsA);
console.log("**********************************");

var head = function head(_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      primero = _ref2[0];

  return [primero];
};

console.log('Primer elemento: ', head(transportsA));
console.log("**********************************");
/**Implementa una función tail (inmutable), tal que, dado un array como
 *entradadevuelta todos menos el primer elemento. Uliza rest operator.*/

var tail = function tail(_ref3) {
  var _ref4 = _toArray(_ref3),
      todosMenosElPrimero = _ref4.slice(1);

  return todosMenosElPrimero;
};

console.log('Todos los elementos menos el primero: ', tail(transportsA));
console.log("**********************************");
/**Implementa una función init (inmutable), tal que, dado un array como entrada devuelva
 * todos los elementos menos el último. Uliza los métodos que ofreceArray.prototype. */

var init = function init(arrayTransports) {
  console.log("Eliminamos el último elemento: ", [arrayTransports.pop()]);
  return arrayTransports;
};
/** Ahora el array contiene solo 4 objetos ["bus" ,"coche" ,"moto, "bici"]*/


console.log("El array transportsA tiene ahora 4 objetos : ", init(transportsA));
console.log("**********************************");
/**Implementa una función last (inmutable), tal que, dado un array como entrada devuelva
 * el último elemento. */

var last = function last(arrayTransports) {
  return [arrayTransports.pop()];
}; // const last = ([...firstElements, lastElement]) => lastElement;  ?????????????????????????????????????????????????????????????????????????????????????????????????


console.log("Ahora le quitamos el último elemento al array transportsA usando de nuevo .pop(), en este caso sería el elemento:  ", last(transportsA));
console.log("Por lo que nos dejará el array transportA con solo tres elementos: ", transportsA);
console.log("**********************************");
var transportsB = ["barco", "lancha", "moto de agua", "yate"];
console.log("Nos dan un nuevo array llamado transportsB: ", transportsB);
console.log("**********************************");
/** Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,devuelva
 *  la concatenación de ambos. Uliza rest / spread operators
 */

var concat = function concat(arrayA, arrayB) {
  return [].concat(_toConsumableArray(arrayA), _toConsumableArray(arrayB));
};

console.log("Concatenación de array 'transportsA': ", [].concat(transportsA), " y array 'transportsB': ", [].concat(transportsB), "Resultado: ", concat(transportsA, transportsB));
console.log("**********************************");
/** Implementa una versión del ejercicio anterior donde se acepten múltiples arrays deentrada (más de 2).
 *
 */

var transportsC = ["avión", "globo aerostático", "helicóptero"];
var transportsD = ["tren", "tranvía", "AVE"];
console.log("Creamos dos arrays nuevos, transportsC: ", [].concat(transportsC));
console.log("Y transportsD: ", [].concat(transportsD));

var concatAny = function concatAny() {
  for (var _len = arguments.length, any = new Array(_len), _key = 0; _key < _len; _key++) {
    any[_key] = arguments[_key];
  }

  return [].concat(any);
};

console.log("La función concatAny acepta un número indefinido de argumentos, en este caso le pasaremos los cuatro arrays creados: ", transportsA, transportsB, transportsC, transportsD);
console.log("Resultado: ", concatAny(transportsA + "," + transportsB + "," + transportsC + "," + transportsD));
console.log("**********************************");
/**Implementa una función clone que, a partir del objeto de entrada source devuelva un nuevo objeto con las mismas propiedades: */

var obj1 = {
  puertas: 4,
  ventanas: 4,
  motor: 1,
  ruedas: 4
};
console.log("Creamos el objeto obj1: ", obj1);

var clone = function clone(source) {
  return Object.assign({}, source);
};

console.log("Y de nuevo creamos un objeto, pero este a partir de obj ", clone(obj1));
console.log("**********************************");
/**Implementa una función merge que, dados dos objetos de entrada source y target,devuelva un nuevo objeto con todas las propiedades de target y
 * de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target. */

var obj2 = {
  puertas: 2,
  ventanas: 2,
  motor: 2,
  tubosDeEscape: 2,
  extras: "si",
  ruedas: 2
};
console.log("Ahora creamos el objeto obj2, que tiene dos elementos nuevos (tubosDeEscape y extras): ", obj2);

var merge = function merge(source, target) {
  return Object.assign(Object.assign({}, target), source);
};

console.log("El resultado de hacer merge de dos objetos respetando los elementos del primero, y añadiendo los elementos del segundo es: ", merge(obj1, obj2));
console.log("**********************************");
/**Crea una función isBookRead que reciba una lista de libros y un titulo y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como
 *  string y isRead como booleano. En caso de no existir el libro devolver false */

/**Opcional
 * Uliza Typescript para añadir los tipos adecuados. */

var library = [];
var isRead = true;
library.push({
  title: "El señor de los anillos",
  isRead: true
}, {
  title: "Los pilares de la tierra",
  isRead: true
}, {
  title: "El código Da Vinci",
  isRead: true
}, {
  title: "El Hobbit",
  isRead: false
}, {
  title: "Fariñas",
  isRead: true
});

(_console = console).log.apply(_console, ["Array library: "].concat(library));

console.log("Ahora filtramos todos los libros del array por su propiedad isRead: ");

var isBookread = function isBookread(books, anyTitle) {
  return books.some(function (book) {
    return book.title === anyTitle && book.isRead === true ? true : false;
  });
};

console.log(isBookread(library, "El señor de los anillos"), "El señor de los anillos está en la lista y leído."); // true, está en la lista y leído.  

console.log(isBookread(library, "El asesinato de PLatón"), "El asesinato de PLatón no está en la lista."); // false, no está en la lista.  

console.log(isBookread(library, "Los pilares de la tierra"), "Los pilares de la tierra está en la lista y leído."); // true, está en la lista y leído.

console.log(isBookread(library, "El código Da Vinci"), "El código Da Vinci está en la lista y leído."); // true, está en la lista y leído.

console.log(isBookread(library, "El Hobbit"), "El Hobbit está en la lista, pero no se ha leído."); // false, está en la lista, pero no se ha leído. 

console.log(isBookread(library, "Fariñas"), "Fariñas está en la lista y leído."); // true, está en la lista y leído. 

console.log(isBookread(library, "La rebelión de las masas"), "La rebelión de las masas no está en la lista."); // false, no está en la lista.

console.log("**********************************");
/**El objevo de este ejercicio es crear una máquina tragaperras ulizando clases donde cada vez que juguemos insertemos una moneda.
 * Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
 * Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que
 * representarán el estado de las 3 ruletas.
 * El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
 * "Congratulations!!!. You won <número de monedas> coins!!"y reiniciar las monedas almacenadas, ya que las hemos conseguido y han
 * salido de la máquina.
 * En caso contrario deberá mostrar otro mensaje:"Good luck next time!!".
*/

var slotMachine = /*#__PURE__*/function () {
  function slotMachine() {
    _classCallCheck(this, slotMachine);

    this.total = 0;
    this.restart = 0;
    this.resultado = {};
    this.ruletaA = Math.random() < 0.5 ? true : false;
    this.ruletaB = Math.random() < 0.5 ? true : false;
    this.ruletaC = Math.random() < 0.5 ? true : false;
  }

  _createClass(slotMachine, [{
    key: "play",
    value: function play() {
      this.total += 1;
      this.ruletaA === true && this.ruletaB === true && this.ruletaC === true ? this.resultado = true : this.resultado = false;
      this.resultado === true ? console.log("Enhorabuena, has ganado ", this.total, this.total >= 2 ? " monedas!!!" : " moneda!") : console.log("Has perdido, sigue intentándolo. ");
      return;
    }
  }]);

  return slotMachine;
}();

var maquina1 = new slotMachine();
maquina1.play();
maquina1.play();
maquina1.play();
maquina1.play();
maquina1.play();
maquina1.play();
maquina1.play();
maquina1.play();
maquina1.play();
maquina1.play();
maquina1.play();
maquina1.play();
console.log(maquina1.ruletaA);
console.log(maquina1.ruletaB);
console.log(maquina1.ruletaC);
},{}],"../../../../Users/manue/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62041" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Users/manue/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.tsx"], null)
//# sourceMappingURL=/src.f69400ca.js.map