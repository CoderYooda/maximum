(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~Templates"],{

/***/ "./node_modules/highlight.js/lib/languages/css.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/css.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const MODES = (hljs) => {
  return {
    IMPORTANT: {
      className: 'meta',
      begin: '!important'
    },
    HEXCOLOR: {
      className: 'number',
      begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
    },
    ATTRIBUTE_SELECTOR_MODE: {
      className: 'selector-attr',
      begin: /\[/,
      end: /\]/,
      illegal: '$',
      contains: [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ]
    }
  };
};

const TAGS = [
  'a',
  'abbr',
  'address',
  'article',
  'aside',
  'audio',
  'b',
  'blockquote',
  'body',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'main',
  'mark',
  'menu',
  'nav',
  'object',
  'ol',
  'p',
  'q',
  'quote',
  'samp',
  'section',
  'span',
  'strong',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'tr',
  'ul',
  'var',
  'video'
];

const MEDIA_FEATURES = [
  'any-hover',
  'any-pointer',
  'aspect-ratio',
  'color',
  'color-gamut',
  'color-index',
  'device-aspect-ratio',
  'device-height',
  'device-width',
  'display-mode',
  'forced-colors',
  'grid',
  'height',
  'hover',
  'inverted-colors',
  'monochrome',
  'orientation',
  'overflow-block',
  'overflow-inline',
  'pointer',
  'prefers-color-scheme',
  'prefers-contrast',
  'prefers-reduced-motion',
  'prefers-reduced-transparency',
  'resolution',
  'scan',
  'scripting',
  'update',
  'width',
  // TODO: find a better solution?
  'min-width',
  'max-width',
  'min-height',
  'max-height'
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
const PSEUDO_CLASSES = [
  'active',
  'any-link',
  'blank',
  'checked',
  'current',
  'default',
  'defined',
  'dir', // dir()
  'disabled',
  'drop',
  'empty',
  'enabled',
  'first',
  'first-child',
  'first-of-type',
  'fullscreen',
  'future',
  'focus',
  'focus-visible',
  'focus-within',
  'has', // has()
  'host', // host or host()
  'host-context', // host-context()
  'hover',
  'indeterminate',
  'in-range',
  'invalid',
  'is', // is()
  'lang', // lang()
  'last-child',
  'last-of-type',
  'left',
  'link',
  'local-link',
  'not', // not()
  'nth-child', // nth-child()
  'nth-col', // nth-col()
  'nth-last-child', // nth-last-child()
  'nth-last-col', // nth-last-col()
  'nth-last-of-type', //nth-last-of-type()
  'nth-of-type', //nth-of-type()
  'only-child',
  'only-of-type',
  'optional',
  'out-of-range',
  'past',
  'placeholder-shown',
  'read-only',
  'read-write',
  'required',
  'right',
  'root',
  'scope',
  'target',
  'target-within',
  'user-invalid',
  'valid',
  'visited',
  'where' // where()
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
const PSEUDO_ELEMENTS = [
  'after',
  'backdrop',
  'before',
  'cue',
  'cue-region',
  'first-letter',
  'first-line',
  'grammar-error',
  'marker',
  'part',
  'placeholder',
  'selection',
  'slotted',
  'spelling-error'
];

const ATTRIBUTES = [
  'align-content',
  'align-items',
  'align-self',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'auto',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',
  'border',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'bottom',
  'box-decoration-break',
  'box-shadow',
  'box-sizing',
  'break-after',
  'break-before',
  'break-inside',
  'caption-side',
  'clear',
  'clip',
  'clip-path',
  'color',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'content',
  'counter-increment',
  'counter-reset',
  'cursor',
  'direction',
  'display',
  'empty-cells',
  'filter',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'float',
  'font',
  'font-display',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-language-override',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-variant-ligatures',
  'font-variation-settings',
  'font-weight',
  'height',
  'hyphens',
  'icon',
  'image-orientation',
  'image-rendering',
  'image-resolution',
  'ime-mode',
  'inherit',
  'initial',
  'justify-content',
  'left',
  'letter-spacing',
  'line-height',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'marks',
  'mask',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'nav-down',
  'nav-index',
  'nav-left',
  'nav-right',
  'nav-up',
  'none',
  'normal',
  'object-fit',
  'object-position',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-wrap',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'perspective',
  'perspective-origin',
  'pointer-events',
  'position',
  'quotes',
  'resize',
  'right',
  'src', // @font-face
  'tab-size',
  'table-layout',
  'text-align',
  'text-align-last',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-style',
  'text-indent',
  'text-overflow',
  'text-rendering',
  'text-shadow',
  'text-transform',
  'text-underline-position',
  'top',
  'transform',
  'transform-origin',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'unicode-bidi',
  'vertical-align',
  'visibility',
  'white-space',
  'widows',
  'width',
  'word-break',
  'word-spacing',
  'word-wrap',
  'z-index'
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse();

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: CSS
Category: common, css
Website: https://developer.mozilla.org/en-US/docs/Web/CSS
*/

/** @type LanguageFn */
function css(hljs) {
  const modes = MODES(hljs);
  const FUNCTION_DISPATCH = {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  };
  const VENDOR_PREFIX = {
    begin: /-(webkit|moz|ms|o)-(?=[a-z])/
  };
  const AT_MODIFIERS = "and or not only";
  const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/; // @-webkit-keyframes
  const IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  const STRINGS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ];

  return {
    name: 'CSS',
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: {
      keyframePosition: "from to"
    },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      VENDOR_PREFIX,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      hljs.CSS_NUMBER_MODE,
      {
        className: 'selector-id',
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: 'selector-class',
        begin: '\\.' + IDENT_RE,
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: 'selector-pseudo',
        variants: [
          {
            begin: ':(' + PSEUDO_CLASSES.join('|') + ')'
          },
          {
            begin: '::(' + PSEUDO_ELEMENTS.join('|') + ')'
          }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      {
        className: 'attribute',
        begin: '\\b(' + ATTRIBUTES.join('|') + ')\\b'
      },
      // attribute values
      {
        begin: ':',
        end: '[;}]',
        contains: [
          modes.HEXCOLOR,
          modes.IMPORTANT,
          hljs.CSS_NUMBER_MODE,
          ...STRINGS,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0, // from keywords
            keywords: {
              built_in: "url data-uri"
            },
            contains: [
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          FUNCTION_DISPATCH
        ]
      },
      {
        begin: lookahead(/@/),
        end: '[{;]',
        relevance: 0,
        illegal: /:/, // break on Less variables @var: ...
        contains: [
          {
            className: 'keyword',
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...STRINGS,
              hljs.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: 'selector-tag',
        begin: '\\b(' + TAGS.join('|') + ')\\b'
      }
    ]
  };
}

module.exports = css;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/javascript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/javascript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
const KEYWORDS = [
  "as", // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];

const TYPES = [
  "Intl",
  "DataView",
  "Number",
  "Math",
  "Date",
  "String",
  "RegExp",
  "Object",
  "Function",
  "Boolean",
  "Error",
  "Symbol",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "Proxy",
  "Reflect",
  "JSON",
  "Promise",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Float32Array",
  "Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "ArrayBuffer"
];

const ERROR_TYPES = [
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];

const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",

  "require",
  "exports",

  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];

const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "module",
  "global" // Node.js
];

const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  BUILT_IN_VARIABLES,
  TYPES,
  ERROR_TYPES
);

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/

/** @type LanguageFn */
function javascript(hljs) {
  /**
   * Takes a string like "<Booger" and checks to see
   * if we can find a matching "</Booger" later in the
   * content.
   * @param {RegExpMatchArray} match
   * @param {{after:number}} param1
   */
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };

  const IDENT_RE$1 = IDENT_RE;
  const FRAGMENT = {
    begin: '<>',
    end: '</>'
  };
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      // nested type?
      // HTML should not include another raw `<` inside a tag
      // But a type might: `<Array<Array<number>>`, etc.
      if (nextChar === "<") {
        response.ignoreMatch();
        return;
      }
      // <something>
      // This is now either a tag or a type.
      if (nextChar === ">") {
        // if we cannot find a matching closing tag, then we
        // will ignore it
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS
  };

  // https://tc39.es/ecma262/#sec-literals-numeric-literals
  const decimalDigits = '[0-9](_?[0-9])*';
  const frac = `\\.(${decimalDigits})`;
  // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
  // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: 'number',
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` +
        `[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },

      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },

      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },

      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" },
    ],
    relevance: 0
  };

  const SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS$1,
    contains: [] // defined later
  };
  const HTML_TEMPLATE = {
    begin: 'html`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'xml'
    }
  };
  const CSS_TEMPLATE = {
    begin: 'css`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'css'
    }
  };
  const TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    '\\*/',
    {
      relevance: 0,
      contains: [
        {
          className: 'doctag',
          begin: '@[A-Za-z]+',
          contains: [
            {
              className: 'type',
              begin: '\\{',
              end: '\\}',
              relevance: 0
            },
            {
              className: 'variable',
              begin: IDENT_RE$1 + '(?=\\s*(-)|$)',
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS
    .concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };

  return {
    name: 'Javascript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      {
        label: "use_strict",
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      NUMBER,
      { // object attr container
        begin: concat(/[{,\n]\s*/,
          // we need to look ahead to make sure that we actually have an
          // attribute coming up so we don't steal a comma from a potential
          // "value" container
          //
          // NOTE: this might not work how you think.  We don't actually always
          // enter this mode and stay.  Instead it might merely match `,
          // <comments up next>` and then immediately end after the , because it
          // fails to find any actual attrs. But this still does the job because
          // it prevents the value contain rule from grabbing this instead and
          // prevening this rule from firing when we actually DO have keys.
          lookahead(concat(
            // we also need to allow for multiple possible comments inbetween
            // the first key:value pairing
            /(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,
            IDENT_RE$1 + '\\s*:'))),
        relevance: 0,
        contains: [
          {
            className: 'attr',
            begin: IDENT_RE$1 + lookahead('\\s*:'),
            relevance: 0
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: '(\\(' +
            '[^()]*(\\(' +
            '[^()]*(\\(' +
            '[^()]*' +
            '\\)[^()]*)*' +
            '\\)[^()]*)*' +
            '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>',
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // could be a comma delimited list of params to a function call
            begin: /,/, relevance: 0
          },
          {
            className: '',
            begin: /\s/,
            end: /\s*/,
            skip: true
          },
          { // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                'on:begin': XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ['self']
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function',
        end: /[{;]/,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: [
          'self',
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          PARAMS
        ],
        illegal: /%/
      },
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        className: 'function',
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: hljs.UNDERSCORE_IDENT_RE +
          '\\(' + // first parens
          '[^()]*(\\(' +
            '[^()]*(\\(' +
              '[^()]*' +
            '\\)[^()]*)*' +
          '\\)[^()]*)*' +
          '\\)\\s*\\{', // end parens
        returnBegin:true,
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
        ]
      },
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        variants: [
          { begin: '\\.' + IDENT_RE$1 },
          { begin: '\\$' + IDENT_RE$1 }
        ],
        relevance: 0
      },
      { // ES6 class
        className: 'class',
        beginKeywords: 'class',
        end: /[{;=]/,
        excludeEnd: true,
        illegal: /[:"[\]]/,
        contains: [
          { beginKeywords: 'extends' },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        begin: /\b(?=constructor)/,
        end: /[{;]/,
        excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          'self',
          PARAMS
        ]
      },
      {
        begin: '(get|set)\\s+(?=' + IDENT_RE$1 + '\\()',
        end: /\{/,
        keywords: "get set",
        contains: [
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          { begin: /\(\)/ }, // eat to avoid empty params
          PARAMS
        ]
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}

module.exports = javascript;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/vbscript-html.js":
/*!******************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vbscript-html.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: VBScript in HTML
Requires: xml.js, vbscript.js
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Description: "Bridge" language defining fragments of VBScript in HTML within <% .. %>
Website: https://en.wikipedia.org/wiki/VBScript
Category: scripting
*/

function vbscriptHtml(hljs) {
  return {
    name: 'VBScript in HTML',
    subLanguage: 'xml',
    contains: [
      {
        begin: '<%',
        end: '%>',
        subLanguage: 'vbscript'
      }
    ]
  };
}

module.exports = vbscriptHtml;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qYXZhc2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy92YnNjcmlwdC1odG1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRCQUE0QixFQUFFLGFBQWEsRUFBRTtBQUM3QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QixjQUFjLGNBQWM7QUFDNUI7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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cnN+VGVtcGxhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTU9ERVMgPSAoaGxqcykgPT4ge1xuICByZXR1cm4ge1xuICAgIElNUE9SVEFOVDoge1xuICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICBiZWdpbjogJyFpbXBvcnRhbnQnXG4gICAgfSxcbiAgICBIRVhDT0xPUjoge1xuICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgIGJlZ2luOiAnIyhbYS1mQS1GMC05XXs2fXxbYS1mQS1GMC05XXszfSknXG4gICAgfSxcbiAgICBBVFRSSUJVVEVfU0VMRUNUT1JfTU9ERToge1xuICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItYXR0cicsXG4gICAgICBiZWdpbjogL1xcWy8sXG4gICAgICBlbmQ6IC9cXF0vLFxuICAgICAgaWxsZWdhbDogJyQnLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICBdXG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgVEFHUyA9IFtcbiAgJ2EnLFxuICAnYWJicicsXG4gICdhZGRyZXNzJyxcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYXVkaW8nLFxuICAnYicsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2JvZHknLFxuICAnYnV0dG9uJyxcbiAgJ2NhbnZhcycsXG4gICdjYXB0aW9uJyxcbiAgJ2NpdGUnLFxuICAnY29kZScsXG4gICdkZCcsXG4gICdkZWwnLFxuICAnZGV0YWlscycsXG4gICdkZm4nLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2VtJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHRtbCcsXG4gICdpJyxcbiAgJ2lmcmFtZScsXG4gICdpbWcnLFxuICAnaW5wdXQnLFxuICAnaW5zJyxcbiAgJ2tiZCcsXG4gICdsYWJlbCcsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbWFpbicsXG4gICdtYXJrJyxcbiAgJ21lbnUnLFxuICAnbmF2JyxcbiAgJ29iamVjdCcsXG4gICdvbCcsXG4gICdwJyxcbiAgJ3EnLFxuICAncXVvdGUnLFxuICAnc2FtcCcsXG4gICdzZWN0aW9uJyxcbiAgJ3NwYW4nLFxuICAnc3Ryb25nJyxcbiAgJ3N1bW1hcnknLFxuICAnc3VwJyxcbiAgJ3RhYmxlJyxcbiAgJ3Rib2R5JyxcbiAgJ3RkJyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3Rmb290JyxcbiAgJ3RoJyxcbiAgJ3RoZWFkJyxcbiAgJ3RpbWUnLFxuICAndHInLFxuICAndWwnLFxuICAndmFyJyxcbiAgJ3ZpZGVvJ1xuXTtcblxuY29uc3QgTUVESUFfRkVBVFVSRVMgPSBbXG4gICdhbnktaG92ZXInLFxuICAnYW55LXBvaW50ZXInLFxuICAnYXNwZWN0LXJhdGlvJyxcbiAgJ2NvbG9yJyxcbiAgJ2NvbG9yLWdhbXV0JyxcbiAgJ2NvbG9yLWluZGV4JyxcbiAgJ2RldmljZS1hc3BlY3QtcmF0aW8nLFxuICAnZGV2aWNlLWhlaWdodCcsXG4gICdkZXZpY2Utd2lkdGgnLFxuICAnZGlzcGxheS1tb2RlJyxcbiAgJ2ZvcmNlZC1jb2xvcnMnLFxuICAnZ3JpZCcsXG4gICdoZWlnaHQnLFxuICAnaG92ZXInLFxuICAnaW52ZXJ0ZWQtY29sb3JzJyxcbiAgJ21vbm9jaHJvbWUnLFxuICAnb3JpZW50YXRpb24nLFxuICAnb3ZlcmZsb3ctYmxvY2snLFxuICAnb3ZlcmZsb3ctaW5saW5lJyxcbiAgJ3BvaW50ZXInLFxuICAncHJlZmVycy1jb2xvci1zY2hlbWUnLFxuICAncHJlZmVycy1jb250cmFzdCcsXG4gICdwcmVmZXJzLXJlZHVjZWQtbW90aW9uJyxcbiAgJ3ByZWZlcnMtcmVkdWNlZC10cmFuc3BhcmVuY3knLFxuICAncmVzb2x1dGlvbicsXG4gICdzY2FuJyxcbiAgJ3NjcmlwdGluZycsXG4gICd1cGRhdGUnLFxuICAnd2lkdGgnLFxuICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHNvbHV0aW9uP1xuICAnbWluLXdpZHRoJyxcbiAgJ21heC13aWR0aCcsXG4gICdtaW4taGVpZ2h0JyxcbiAgJ21heC1oZWlnaHQnXG5dO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWNsYXNzZXNcbmNvbnN0IFBTRVVET19DTEFTU0VTID0gW1xuICAnYWN0aXZlJyxcbiAgJ2FueS1saW5rJyxcbiAgJ2JsYW5rJyxcbiAgJ2NoZWNrZWQnLFxuICAnY3VycmVudCcsXG4gICdkZWZhdWx0JyxcbiAgJ2RlZmluZWQnLFxuICAnZGlyJywgLy8gZGlyKClcbiAgJ2Rpc2FibGVkJyxcbiAgJ2Ryb3AnLFxuICAnZW1wdHknLFxuICAnZW5hYmxlZCcsXG4gICdmaXJzdCcsXG4gICdmaXJzdC1jaGlsZCcsXG4gICdmaXJzdC1vZi10eXBlJyxcbiAgJ2Z1bGxzY3JlZW4nLFxuICAnZnV0dXJlJyxcbiAgJ2ZvY3VzJyxcbiAgJ2ZvY3VzLXZpc2libGUnLFxuICAnZm9jdXMtd2l0aGluJyxcbiAgJ2hhcycsIC8vIGhhcygpXG4gICdob3N0JywgLy8gaG9zdCBvciBob3N0KClcbiAgJ2hvc3QtY29udGV4dCcsIC8vIGhvc3QtY29udGV4dCgpXG4gICdob3ZlcicsXG4gICdpbmRldGVybWluYXRlJyxcbiAgJ2luLXJhbmdlJyxcbiAgJ2ludmFsaWQnLFxuICAnaXMnLCAvLyBpcygpXG4gICdsYW5nJywgLy8gbGFuZygpXG4gICdsYXN0LWNoaWxkJyxcbiAgJ2xhc3Qtb2YtdHlwZScsXG4gICdsZWZ0JyxcbiAgJ2xpbmsnLFxuICAnbG9jYWwtbGluaycsXG4gICdub3QnLCAvLyBub3QoKVxuICAnbnRoLWNoaWxkJywgLy8gbnRoLWNoaWxkKClcbiAgJ250aC1jb2wnLCAvLyBudGgtY29sKClcbiAgJ250aC1sYXN0LWNoaWxkJywgLy8gbnRoLWxhc3QtY2hpbGQoKVxuICAnbnRoLWxhc3QtY29sJywgLy8gbnRoLWxhc3QtY29sKClcbiAgJ250aC1sYXN0LW9mLXR5cGUnLCAvL250aC1sYXN0LW9mLXR5cGUoKVxuICAnbnRoLW9mLXR5cGUnLCAvL250aC1vZi10eXBlKClcbiAgJ29ubHktY2hpbGQnLFxuICAnb25seS1vZi10eXBlJyxcbiAgJ29wdGlvbmFsJyxcbiAgJ291dC1vZi1yYW5nZScsXG4gICdwYXN0JyxcbiAgJ3BsYWNlaG9sZGVyLXNob3duJyxcbiAgJ3JlYWQtb25seScsXG4gICdyZWFkLXdyaXRlJyxcbiAgJ3JlcXVpcmVkJyxcbiAgJ3JpZ2h0JyxcbiAgJ3Jvb3QnLFxuICAnc2NvcGUnLFxuICAndGFyZ2V0JyxcbiAgJ3RhcmdldC13aXRoaW4nLFxuICAndXNlci1pbnZhbGlkJyxcbiAgJ3ZhbGlkJyxcbiAgJ3Zpc2l0ZWQnLFxuICAnd2hlcmUnIC8vIHdoZXJlKClcbl07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcbmNvbnN0IFBTRVVET19FTEVNRU5UUyA9IFtcbiAgJ2FmdGVyJyxcbiAgJ2JhY2tkcm9wJyxcbiAgJ2JlZm9yZScsXG4gICdjdWUnLFxuICAnY3VlLXJlZ2lvbicsXG4gICdmaXJzdC1sZXR0ZXInLFxuICAnZmlyc3QtbGluZScsXG4gICdncmFtbWFyLWVycm9yJyxcbiAgJ21hcmtlcicsXG4gICdwYXJ0JyxcbiAgJ3BsYWNlaG9sZGVyJyxcbiAgJ3NlbGVjdGlvbicsXG4gICdzbG90dGVkJyxcbiAgJ3NwZWxsaW5nLWVycm9yJ1xuXTtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtcbiAgJ2FsaWduLWNvbnRlbnQnLFxuICAnYWxpZ24taXRlbXMnLFxuICAnYWxpZ24tc2VsZicsXG4gICdhbmltYXRpb24nLFxuICAnYW5pbWF0aW9uLWRlbGF5JyxcbiAgJ2FuaW1hdGlvbi1kaXJlY3Rpb24nLFxuICAnYW5pbWF0aW9uLWR1cmF0aW9uJyxcbiAgJ2FuaW1hdGlvbi1maWxsLW1vZGUnLFxuICAnYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCcsXG4gICdhbmltYXRpb24tbmFtZScsXG4gICdhbmltYXRpb24tcGxheS1zdGF0ZScsXG4gICdhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgJ2F1dG8nLFxuICAnYmFja2ZhY2UtdmlzaWJpbGl0eScsXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2JhY2tncm91bmQtYXR0YWNobWVudCcsXG4gICdiYWNrZ3JvdW5kLWNsaXAnLFxuICAnYmFja2dyb3VuZC1jb2xvcicsXG4gICdiYWNrZ3JvdW5kLWltYWdlJyxcbiAgJ2JhY2tncm91bmQtb3JpZ2luJyxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24nLFxuICAnYmFja2dyb3VuZC1yZXBlYXQnLFxuICAnYmFja2dyb3VuZC1zaXplJyxcbiAgJ2JvcmRlcicsXG4gICdib3JkZXItYm90dG9tJyxcbiAgJ2JvcmRlci1ib3R0b20tY29sb3InLFxuICAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsXG4gICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsXG4gICdib3JkZXItYm90dG9tLXN0eWxlJyxcbiAgJ2JvcmRlci1ib3R0b20td2lkdGgnLFxuICAnYm9yZGVyLWNvbGxhcHNlJyxcbiAgJ2JvcmRlci1jb2xvcicsXG4gICdib3JkZXItaW1hZ2UnLFxuICAnYm9yZGVyLWltYWdlLW91dHNldCcsXG4gICdib3JkZXItaW1hZ2UtcmVwZWF0JyxcbiAgJ2JvcmRlci1pbWFnZS1zbGljZScsXG4gICdib3JkZXItaW1hZ2Utc291cmNlJyxcbiAgJ2JvcmRlci1pbWFnZS13aWR0aCcsXG4gICdib3JkZXItbGVmdCcsXG4gICdib3JkZXItbGVmdC1jb2xvcicsXG4gICdib3JkZXItbGVmdC1zdHlsZScsXG4gICdib3JkZXItbGVmdC13aWR0aCcsXG4gICdib3JkZXItcmFkaXVzJyxcbiAgJ2JvcmRlci1yaWdodCcsXG4gICdib3JkZXItcmlnaHQtY29sb3InLFxuICAnYm9yZGVyLXJpZ2h0LXN0eWxlJyxcbiAgJ2JvcmRlci1yaWdodC13aWR0aCcsXG4gICdib3JkZXItc3BhY2luZycsXG4gICdib3JkZXItc3R5bGUnLFxuICAnYm9yZGVyLXRvcCcsXG4gICdib3JkZXItdG9wLWNvbG9yJyxcbiAgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLFxuICAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLFxuICAnYm9yZGVyLXRvcC1zdHlsZScsXG4gICdib3JkZXItdG9wLXdpZHRoJyxcbiAgJ2JvcmRlci13aWR0aCcsXG4gICdib3R0b20nLFxuICAnYm94LWRlY29yYXRpb24tYnJlYWsnLFxuICAnYm94LXNoYWRvdycsXG4gICdib3gtc2l6aW5nJyxcbiAgJ2JyZWFrLWFmdGVyJyxcbiAgJ2JyZWFrLWJlZm9yZScsXG4gICdicmVhay1pbnNpZGUnLFxuICAnY2FwdGlvbi1zaWRlJyxcbiAgJ2NsZWFyJyxcbiAgJ2NsaXAnLFxuICAnY2xpcC1wYXRoJyxcbiAgJ2NvbG9yJyxcbiAgJ2NvbHVtbi1jb3VudCcsXG4gICdjb2x1bW4tZmlsbCcsXG4gICdjb2x1bW4tZ2FwJyxcbiAgJ2NvbHVtbi1ydWxlJyxcbiAgJ2NvbHVtbi1ydWxlLWNvbG9yJyxcbiAgJ2NvbHVtbi1ydWxlLXN0eWxlJyxcbiAgJ2NvbHVtbi1ydWxlLXdpZHRoJyxcbiAgJ2NvbHVtbi1zcGFuJyxcbiAgJ2NvbHVtbi13aWR0aCcsXG4gICdjb2x1bW5zJyxcbiAgJ2NvbnRlbnQnLFxuICAnY291bnRlci1pbmNyZW1lbnQnLFxuICAnY291bnRlci1yZXNldCcsXG4gICdjdXJzb3InLFxuICAnZGlyZWN0aW9uJyxcbiAgJ2Rpc3BsYXknLFxuICAnZW1wdHktY2VsbHMnLFxuICAnZmlsdGVyJyxcbiAgJ2ZsZXgnLFxuICAnZmxleC1iYXNpcycsXG4gICdmbGV4LWRpcmVjdGlvbicsXG4gICdmbGV4LWZsb3cnLFxuICAnZmxleC1ncm93JyxcbiAgJ2ZsZXgtc2hyaW5rJyxcbiAgJ2ZsZXgtd3JhcCcsXG4gICdmbG9hdCcsXG4gICdmb250JyxcbiAgJ2ZvbnQtZGlzcGxheScsXG4gICdmb250LWZhbWlseScsXG4gICdmb250LWZlYXR1cmUtc2V0dGluZ3MnLFxuICAnZm9udC1rZXJuaW5nJyxcbiAgJ2ZvbnQtbGFuZ3VhZ2Utb3ZlcnJpZGUnLFxuICAnZm9udC1zaXplJyxcbiAgJ2ZvbnQtc2l6ZS1hZGp1c3QnLFxuICAnZm9udC1zdHJldGNoJyxcbiAgJ2ZvbnQtc3R5bGUnLFxuICAnZm9udC12YXJpYW50JyxcbiAgJ2ZvbnQtdmFyaWFudC1saWdhdHVyZXMnLFxuICAnZm9udC12YXJpYXRpb24tc2V0dGluZ3MnLFxuICAnZm9udC13ZWlnaHQnLFxuICAnaGVpZ2h0JyxcbiAgJ2h5cGhlbnMnLFxuICAnaWNvbicsXG4gICdpbWFnZS1vcmllbnRhdGlvbicsXG4gICdpbWFnZS1yZW5kZXJpbmcnLFxuICAnaW1hZ2UtcmVzb2x1dGlvbicsXG4gICdpbWUtbW9kZScsXG4gICdpbmhlcml0JyxcbiAgJ2luaXRpYWwnLFxuICAnanVzdGlmeS1jb250ZW50JyxcbiAgJ2xlZnQnLFxuICAnbGV0dGVyLXNwYWNpbmcnLFxuICAnbGluZS1oZWlnaHQnLFxuICAnbGlzdC1zdHlsZScsXG4gICdsaXN0LXN0eWxlLWltYWdlJyxcbiAgJ2xpc3Qtc3R5bGUtcG9zaXRpb24nLFxuICAnbGlzdC1zdHlsZS10eXBlJyxcbiAgJ21hcmdpbicsXG4gICdtYXJnaW4tYm90dG9tJyxcbiAgJ21hcmdpbi1sZWZ0JyxcbiAgJ21hcmdpbi1yaWdodCcsXG4gICdtYXJnaW4tdG9wJyxcbiAgJ21hcmtzJyxcbiAgJ21hc2snLFxuICAnbWF4LWhlaWdodCcsXG4gICdtYXgtd2lkdGgnLFxuICAnbWluLWhlaWdodCcsXG4gICdtaW4td2lkdGgnLFxuICAnbmF2LWRvd24nLFxuICAnbmF2LWluZGV4JyxcbiAgJ25hdi1sZWZ0JyxcbiAgJ25hdi1yaWdodCcsXG4gICduYXYtdXAnLFxuICAnbm9uZScsXG4gICdub3JtYWwnLFxuICAnb2JqZWN0LWZpdCcsXG4gICdvYmplY3QtcG9zaXRpb24nLFxuICAnb3BhY2l0eScsXG4gICdvcmRlcicsXG4gICdvcnBoYW5zJyxcbiAgJ291dGxpbmUnLFxuICAnb3V0bGluZS1jb2xvcicsXG4gICdvdXRsaW5lLW9mZnNldCcsXG4gICdvdXRsaW5lLXN0eWxlJyxcbiAgJ291dGxpbmUtd2lkdGgnLFxuICAnb3ZlcmZsb3cnLFxuICAnb3ZlcmZsb3ctd3JhcCcsXG4gICdvdmVyZmxvdy14JyxcbiAgJ292ZXJmbG93LXknLFxuICAncGFkZGluZycsXG4gICdwYWRkaW5nLWJvdHRvbScsXG4gICdwYWRkaW5nLWxlZnQnLFxuICAncGFkZGluZy1yaWdodCcsXG4gICdwYWRkaW5nLXRvcCcsXG4gICdwYWdlLWJyZWFrLWFmdGVyJyxcbiAgJ3BhZ2UtYnJlYWstYmVmb3JlJyxcbiAgJ3BhZ2UtYnJlYWstaW5zaWRlJyxcbiAgJ3BlcnNwZWN0aXZlJyxcbiAgJ3BlcnNwZWN0aXZlLW9yaWdpbicsXG4gICdwb2ludGVyLWV2ZW50cycsXG4gICdwb3NpdGlvbicsXG4gICdxdW90ZXMnLFxuICAncmVzaXplJyxcbiAgJ3JpZ2h0JyxcbiAgJ3NyYycsIC8vIEBmb250LWZhY2VcbiAgJ3RhYi1zaXplJyxcbiAgJ3RhYmxlLWxheW91dCcsXG4gICd0ZXh0LWFsaWduJyxcbiAgJ3RleHQtYWxpZ24tbGFzdCcsXG4gICd0ZXh0LWRlY29yYXRpb24nLFxuICAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJyxcbiAgJ3RleHQtZGVjb3JhdGlvbi1saW5lJyxcbiAgJ3RleHQtZGVjb3JhdGlvbi1zdHlsZScsXG4gICd0ZXh0LWluZGVudCcsXG4gICd0ZXh0LW92ZXJmbG93JyxcbiAgJ3RleHQtcmVuZGVyaW5nJyxcbiAgJ3RleHQtc2hhZG93JyxcbiAgJ3RleHQtdHJhbnNmb3JtJyxcbiAgJ3RleHQtdW5kZXJsaW5lLXBvc2l0aW9uJyxcbiAgJ3RvcCcsXG4gICd0cmFuc2Zvcm0nLFxuICAndHJhbnNmb3JtLW9yaWdpbicsXG4gICd0cmFuc2Zvcm0tc3R5bGUnLFxuICAndHJhbnNpdGlvbicsXG4gICd0cmFuc2l0aW9uLWRlbGF5JyxcbiAgJ3RyYW5zaXRpb24tZHVyYXRpb24nLFxuICAndHJhbnNpdGlvbi1wcm9wZXJ0eScsXG4gICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbicsXG4gICd1bmljb2RlLWJpZGknLFxuICAndmVydGljYWwtYWxpZ24nLFxuICAndmlzaWJpbGl0eScsXG4gICd3aGl0ZS1zcGFjZScsXG4gICd3aWRvd3MnLFxuICAnd2lkdGgnLFxuICAnd29yZC1icmVhaycsXG4gICd3b3JkLXNwYWNpbmcnLFxuICAnd29yZC13cmFwJyxcbiAgJ3otaW5kZXgnXG4gIC8vIHJldmVyc2UgbWFrZXMgc3VyZSBsb25nZXIgYXR0cmlidXRlcyBgZm9udC13ZWlnaHRgIGFyZSBtYXRjaGVkIGZ1bGx5XG4gIC8vIGluc3RlYWQgb2YgZ2V0dGluZyBmYWxzZSBwb3NpdGl2ZXMgb24gc2F5IGBmb250YFxuXS5yZXZlcnNlKCk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2thaGVhZChyZSkge1xuICByZXR1cm4gY29uY2F0KCcoPz0nLCByZSwgJyknKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBDU1NcbkNhdGVnb3J5OiBjb21tb24sIGNzc1xuV2Vic2l0ZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY3NzKGhsanMpIHtcbiAgY29uc3QgbW9kZXMgPSBNT0RFUyhobGpzKTtcbiAgY29uc3QgRlVOQ1RJT05fRElTUEFUQ0ggPSB7XG4gICAgY2xhc3NOYW1lOiBcImJ1aWx0X2luXCIsXG4gICAgYmVnaW46IC9bXFx3LV0rKD89XFwoKS9cbiAgfTtcbiAgY29uc3QgVkVORE9SX1BSRUZJWCA9IHtcbiAgICBiZWdpbjogLy0od2Via2l0fG1venxtc3xvKS0oPz1bYS16XSkvXG4gIH07XG4gIGNvbnN0IEFUX01PRElGSUVSUyA9IFwiYW5kIG9yIG5vdCBvbmx5XCI7XG4gIGNvbnN0IEFUX1BST1BFUlRZX1JFID0gL0AtP1xcd1tcXHddKigtXFx3KykqLzsgLy8gQC13ZWJraXQta2V5ZnJhbWVzXG4gIGNvbnN0IElERU5UX1JFID0gJ1thLXpBLVotXVthLXpBLVowLTlfLV0qJztcbiAgY29uc3QgU1RSSU5HUyA9IFtcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NTUycsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvWz18J1xcJF0vLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXlmcmFtZVBvc2l0aW9uOiBcImZyb20gdG9cIlxuICAgIH0sXG4gICAgY2xhc3NOYW1lQWxpYXNlczoge1xuICAgICAgLy8gZm9yIHZpc3VhbCBjb250aW51aXR5IHdpdGggYHRhZyB7fWAgYW5kIGJlY2F1c2Ugd2VcbiAgICAgIC8vIGRvbid0IGhhdmUgYSBncmVhdCBjbGFzcyBmb3IgdGhpcz9cbiAgICAgIGtleWZyYW1lUG9zaXRpb246IFwic2VsZWN0b3ItdGFnXCJcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgVkVORE9SX1BSRUZJWCxcbiAgICAgIC8vIHRvIHJlY29nbml6ZSBrZXlmcmFtZSA0MCUgZXRjIHdoaWNoIGFyZSBvdXRzaWRlIHRoZSBzY29wZSBvZiBvdXJcbiAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZSBtb2RlXG4gICAgICBobGpzLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItaWQnLFxuICAgICAgICBiZWdpbjogLyNbQS1aYS16MC05Xy1dKy8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItY2xhc3MnLFxuICAgICAgICBiZWdpbjogJ1xcXFwuJyArIElERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBtb2Rlcy5BVFRSSUJVVEVfU0VMRUNUT1JfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItcHNldWRvJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJzooJyArIFBTRVVET19DTEFTU0VTLmpvaW4oJ3wnKSArICcpJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICc6OignICsgUFNFVURPX0VMRU1FTlRTLmpvaW4oJ3wnKSArICcpJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIHdlIG1heSBhY3R1YWxseSBuZWVkIHRoaXMgKDEyLzIwMjApXG4gICAgICAvLyB7IC8vIHBzZXVkby1zZWxlY3RvciBwYXJhbXNcbiAgICAgIC8vICAgYmVnaW46IC9cXCgvLFxuICAgICAgLy8gICBlbmQ6IC9cXCkvLFxuICAgICAgLy8gICBjb250YWluczogWyBobGpzLkNTU19OVU1CRVJfTU9ERSBdXG4gICAgICAvLyB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBBVFRSSUJVVEVTLmpvaW4oJ3wnKSArICcpXFxcXGInXG4gICAgICB9LFxuICAgICAgLy8gYXR0cmlidXRlIHZhbHVlc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJzonLFxuICAgICAgICBlbmQ6ICdbO31dJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBtb2Rlcy5IRVhDT0xPUixcbiAgICAgICAgICBtb2Rlcy5JTVBPUlRBTlQsXG4gICAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREUsXG4gICAgICAgICAgLi4uU1RSSU5HUyxcbiAgICAgICAgICAvLyBuZWVkZWQgdG8gaGlnaGxpZ2h0IHRoZXNlIGFzIHN0cmluZ3MgYW5kIHRvIGF2b2lkIGlzc3VlcyB3aXRoXG4gICAgICAgICAgLy8gaWxsZWdhbCBjaGFyYWN0ZXJzIHRoYXQgbWlnaHQgYmUgaW5zaWRlIHVybHMgdGhhdCB3b3VsZCB0aWdnZXIgdGhlXG4gICAgICAgICAgLy8gbGFuZ3VhZ2VzIGlsbGVnYWwgc3RhY2tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLyh1cmx8ZGF0YS11cmkpXFwoLyxcbiAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsIC8vIGZyb20ga2V5d29yZHNcbiAgICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICAgIGJ1aWx0X2luOiBcInVybCBkYXRhLXVyaVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAvLyBhbnkgY2hhcmFjdGVyIG90aGVyIHRoYW4gYClgIGFzIGluIGB1cmwoKWAgd2lsbCBiZSB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICAvLyBvZiBhIHN0cmluZywgd2hpY2ggZW5kcyB3aXRoIGApYCAoZnJvbSB0aGUgcGFyZW50IG1vZGUpXG4gICAgICAgICAgICAgICAgYmVnaW46IC9bXildLyxcbiAgICAgICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIEZVTkNUSU9OX0RJU1BBVENIXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBsb29rYWhlYWQoL0AvKSxcbiAgICAgICAgZW5kOiAnW3s7XScsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgaWxsZWdhbDogLzovLCAvLyBicmVhayBvbiBMZXNzIHZhcmlhYmxlcyBAdmFyOiAuLi5cbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgIGJlZ2luOiBBVF9QUk9QRVJUWV9SRVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cXHMvLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICAgJHBhdHRlcm46IC9bYS16LV0rLyxcbiAgICAgICAgICAgICAga2V5d29yZDogQVRfTU9ESUZJRVJTLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGU6IE1FRElBX0ZFQVRVUkVTLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvW2Etei1dKyg/PTopLyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgLi4uU1RSSU5HUyxcbiAgICAgICAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXRhZycsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIFRBR1Muam9pbignfCcpICsgJylcXFxcYidcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3NzO1xuIiwiY29uc3QgSURFTlRfUkUgPSAnW0EtWmEteiRfXVswLTlBLVphLXokX10qJztcbmNvbnN0IEtFWVdPUkRTID0gW1xuICBcImFzXCIsIC8vIGZvciBleHBvcnRzXG4gIFwiaW5cIixcbiAgXCJvZlwiLFxuICBcImlmXCIsXG4gIFwiZm9yXCIsXG4gIFwid2hpbGVcIixcbiAgXCJmaW5hbGx5XCIsXG4gIFwidmFyXCIsXG4gIFwibmV3XCIsXG4gIFwiZnVuY3Rpb25cIixcbiAgXCJkb1wiLFxuICBcInJldHVyblwiLFxuICBcInZvaWRcIixcbiAgXCJlbHNlXCIsXG4gIFwiYnJlYWtcIixcbiAgXCJjYXRjaFwiLFxuICBcImluc3RhbmNlb2ZcIixcbiAgXCJ3aXRoXCIsXG4gIFwidGhyb3dcIixcbiAgXCJjYXNlXCIsXG4gIFwiZGVmYXVsdFwiLFxuICBcInRyeVwiLFxuICBcInN3aXRjaFwiLFxuICBcImNvbnRpbnVlXCIsXG4gIFwidHlwZW9mXCIsXG4gIFwiZGVsZXRlXCIsXG4gIFwibGV0XCIsXG4gIFwieWllbGRcIixcbiAgXCJjb25zdFwiLFxuICBcImNsYXNzXCIsXG4gIC8vIEpTIGhhbmRsZXMgdGhlc2Ugd2l0aCBhIHNwZWNpYWwgcnVsZVxuICAvLyBcImdldFwiLFxuICAvLyBcInNldFwiLFxuICBcImRlYnVnZ2VyXCIsXG4gIFwiYXN5bmNcIixcbiAgXCJhd2FpdFwiLFxuICBcInN0YXRpY1wiLFxuICBcImltcG9ydFwiLFxuICBcImZyb21cIixcbiAgXCJleHBvcnRcIixcbiAgXCJleHRlbmRzXCJcbl07XG5jb25zdCBMSVRFUkFMUyA9IFtcbiAgXCJ0cnVlXCIsXG4gIFwiZmFsc2VcIixcbiAgXCJudWxsXCIsXG4gIFwidW5kZWZpbmVkXCIsXG4gIFwiTmFOXCIsXG4gIFwiSW5maW5pdHlcIlxuXTtcblxuY29uc3QgVFlQRVMgPSBbXG4gIFwiSW50bFwiLFxuICBcIkRhdGFWaWV3XCIsXG4gIFwiTnVtYmVyXCIsXG4gIFwiTWF0aFwiLFxuICBcIkRhdGVcIixcbiAgXCJTdHJpbmdcIixcbiAgXCJSZWdFeHBcIixcbiAgXCJPYmplY3RcIixcbiAgXCJGdW5jdGlvblwiLFxuICBcIkJvb2xlYW5cIixcbiAgXCJFcnJvclwiLFxuICBcIlN5bWJvbFwiLFxuICBcIlNldFwiLFxuICBcIk1hcFwiLFxuICBcIldlYWtTZXRcIixcbiAgXCJXZWFrTWFwXCIsXG4gIFwiUHJveHlcIixcbiAgXCJSZWZsZWN0XCIsXG4gIFwiSlNPTlwiLFxuICBcIlByb21pc2VcIixcbiAgXCJGbG9hdDY0QXJyYXlcIixcbiAgXCJJbnQxNkFycmF5XCIsXG4gIFwiSW50MzJBcnJheVwiLFxuICBcIkludDhBcnJheVwiLFxuICBcIlVpbnQxNkFycmF5XCIsXG4gIFwiVWludDMyQXJyYXlcIixcbiAgXCJGbG9hdDMyQXJyYXlcIixcbiAgXCJBcnJheVwiLFxuICBcIlVpbnQ4QXJyYXlcIixcbiAgXCJVaW50OENsYW1wZWRBcnJheVwiLFxuICBcIkFycmF5QnVmZmVyXCJcbl07XG5cbmNvbnN0IEVSUk9SX1RZUEVTID0gW1xuICBcIkV2YWxFcnJvclwiLFxuICBcIkludGVybmFsRXJyb3JcIixcbiAgXCJSYW5nZUVycm9yXCIsXG4gIFwiUmVmZXJlbmNlRXJyb3JcIixcbiAgXCJTeW50YXhFcnJvclwiLFxuICBcIlR5cGVFcnJvclwiLFxuICBcIlVSSUVycm9yXCJcbl07XG5cbmNvbnN0IEJVSUxUX0lOX0dMT0JBTFMgPSBbXG4gIFwic2V0SW50ZXJ2YWxcIixcbiAgXCJzZXRUaW1lb3V0XCIsXG4gIFwiY2xlYXJJbnRlcnZhbFwiLFxuICBcImNsZWFyVGltZW91dFwiLFxuXG4gIFwicmVxdWlyZVwiLFxuICBcImV4cG9ydHNcIixcblxuICBcImV2YWxcIixcbiAgXCJpc0Zpbml0ZVwiLFxuICBcImlzTmFOXCIsXG4gIFwicGFyc2VGbG9hdFwiLFxuICBcInBhcnNlSW50XCIsXG4gIFwiZGVjb2RlVVJJXCIsXG4gIFwiZGVjb2RlVVJJQ29tcG9uZW50XCIsXG4gIFwiZW5jb2RlVVJJXCIsXG4gIFwiZW5jb2RlVVJJQ29tcG9uZW50XCIsXG4gIFwiZXNjYXBlXCIsXG4gIFwidW5lc2NhcGVcIlxuXTtcblxuY29uc3QgQlVJTFRfSU5fVkFSSUFCTEVTID0gW1xuICBcImFyZ3VtZW50c1wiLFxuICBcInRoaXNcIixcbiAgXCJzdXBlclwiLFxuICBcImNvbnNvbGVcIixcbiAgXCJ3aW5kb3dcIixcbiAgXCJkb2N1bWVudFwiLFxuICBcImxvY2FsU3RvcmFnZVwiLFxuICBcIm1vZHVsZVwiLFxuICBcImdsb2JhbFwiIC8vIE5vZGUuanNcbl07XG5cbmNvbnN0IEJVSUxUX0lOUyA9IFtdLmNvbmNhdChcbiAgQlVJTFRfSU5fR0xPQkFMUyxcbiAgQlVJTFRfSU5fVkFSSUFCTEVTLFxuICBUWVBFUyxcbiAgRVJST1JfVFlQRVNcbik7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2thaGVhZChyZSkge1xuICByZXR1cm4gY29uY2F0KCcoPz0nLCByZSwgJyknKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBKYXZhU2NyaXB0XG5EZXNjcmlwdGlvbjogSmF2YVNjcmlwdCAoSlMpIGlzIGEgbGlnaHR3ZWlnaHQsIGludGVycHJldGVkLCBvciBqdXN0LWluLXRpbWUgY29tcGlsZWQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2Ugd2l0aCBmaXJzdC1jbGFzcyBmdW5jdGlvbnMuXG5DYXRlZ29yeTogY29tbW9uLCBzY3JpcHRpbmdcbldlYnNpdGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHRcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBqYXZhc2NyaXB0KGhsanMpIHtcbiAgLyoqXG4gICAqIFRha2VzIGEgc3RyaW5nIGxpa2UgXCI8Qm9vZ2VyXCIgYW5kIGNoZWNrcyB0byBzZWVcbiAgICogaWYgd2UgY2FuIGZpbmQgYSBtYXRjaGluZyBcIjwvQm9vZ2VyXCIgbGF0ZXIgaW4gdGhlXG4gICAqIGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2hcbiAgICogQHBhcmFtIHt7YWZ0ZXI6bnVtYmVyfX0gcGFyYW0xXG4gICAqL1xuICBjb25zdCBoYXNDbG9zaW5nVGFnID0gKG1hdGNoLCB7IGFmdGVyIH0pID0+IHtcbiAgICBjb25zdCB0YWcgPSBcIjwvXCIgKyBtYXRjaFswXS5zbGljZSgxKTtcbiAgICBjb25zdCBwb3MgPSBtYXRjaC5pbnB1dC5pbmRleE9mKHRhZywgYWZ0ZXIpO1xuICAgIHJldHVybiBwb3MgIT09IC0xO1xuICB9O1xuXG4gIGNvbnN0IElERU5UX1JFJDEgPSBJREVOVF9SRTtcbiAgY29uc3QgRlJBR01FTlQgPSB7XG4gICAgYmVnaW46ICc8PicsXG4gICAgZW5kOiAnPC8+J1xuICB9O1xuICBjb25zdCBYTUxfVEFHID0ge1xuICAgIGJlZ2luOiAvPFtBLVphLXowLTlcXFxcLl86LV0rLyxcbiAgICBlbmQ6IC9cXC9bQS1aYS16MC05XFxcXC5fOi1dKz58XFwvPi8sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtSZWdFeHBNYXRjaEFycmF5fSBtYXRjaFxuICAgICAqIEBwYXJhbSB7Q2FsbGJhY2tSZXNwb25zZX0gcmVzcG9uc2VcbiAgICAgKi9cbiAgICBpc1RydWx5T3BlbmluZ1RhZzogKG1hdGNoLCByZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgYWZ0ZXJNYXRjaEluZGV4ID0gbWF0Y2hbMF0ubGVuZ3RoICsgbWF0Y2guaW5kZXg7XG4gICAgICBjb25zdCBuZXh0Q2hhciA9IG1hdGNoLmlucHV0W2FmdGVyTWF0Y2hJbmRleF07XG4gICAgICAvLyBuZXN0ZWQgdHlwZT9cbiAgICAgIC8vIEhUTUwgc2hvdWxkIG5vdCBpbmNsdWRlIGFub3RoZXIgcmF3IGA8YCBpbnNpZGUgYSB0YWdcbiAgICAgIC8vIEJ1dCBhIHR5cGUgbWlnaHQ6IGA8QXJyYXk8QXJyYXk8bnVtYmVyPj5gLCBldGMuXG4gICAgICBpZiAobmV4dENoYXIgPT09IFwiPFwiKSB7XG4gICAgICAgIHJlc3BvbnNlLmlnbm9yZU1hdGNoKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIDxzb21ldGhpbmc+XG4gICAgICAvLyBUaGlzIGlzIG5vdyBlaXRoZXIgYSB0YWcgb3IgYSB0eXBlLlxuICAgICAgaWYgKG5leHRDaGFyID09PSBcIj5cIikge1xuICAgICAgICAvLyBpZiB3ZSBjYW5ub3QgZmluZCBhIG1hdGNoaW5nIGNsb3NpbmcgdGFnLCB0aGVuIHdlXG4gICAgICAgIC8vIHdpbGwgaWdub3JlIGl0XG4gICAgICAgIGlmICghaGFzQ2xvc2luZ1RhZyhtYXRjaCwgeyBhZnRlcjogYWZ0ZXJNYXRjaEluZGV4IH0pKSB7XG4gICAgICAgICAgcmVzcG9uc2UuaWdub3JlTWF0Y2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgS0VZV09SRFMkMSA9IHtcbiAgICAkcGF0dGVybjogSURFTlRfUkUsXG4gICAga2V5d29yZDogS0VZV09SRFMsXG4gICAgbGl0ZXJhbDogTElURVJBTFMsXG4gICAgYnVpbHRfaW46IEJVSUxUX0lOU1xuICB9O1xuXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGl0ZXJhbHMtbnVtZXJpYy1saXRlcmFsc1xuICBjb25zdCBkZWNpbWFsRGlnaXRzID0gJ1swLTldKF8/WzAtOV0pKic7XG4gIGNvbnN0IGZyYWMgPSBgXFxcXC4oJHtkZWNpbWFsRGlnaXRzfSlgO1xuICAvLyBEZWNpbWFsSW50ZWdlckxpdGVyYWwsIGluY2x1ZGluZyBBbm5leCBCIE5vbk9jdGFsRGVjaW1hbEludGVnZXJMaXRlcmFsXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYWRkaXRpb25hbC1zeW50YXgtbnVtZXJpYy1saXRlcmFsc1xuICBjb25zdCBkZWNpbWFsSW50ZWdlciA9IGAwfFsxLTldKF8/WzAtOV0pKnwwWzAtN10qWzg5XVswLTldKmA7XG4gIGNvbnN0IE5VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICAvLyBEZWNpbWFsTGl0ZXJhbFxuICAgICAgeyBiZWdpbjogYChcXFxcYigke2RlY2ltYWxJbnRlZ2VyfSkoKCR7ZnJhY30pfFxcXFwuKT98KCR7ZnJhY30pKWAgK1xuICAgICAgICBgW2VFXVsrLV0/KCR7ZGVjaW1hbERpZ2l0c30pXFxcXGJgIH0sXG4gICAgICB7IGJlZ2luOiBgXFxcXGIoJHtkZWNpbWFsSW50ZWdlcn0pXFxcXGIoKCR7ZnJhY30pXFxcXGJ8XFxcXC4pP3woJHtmcmFjfSlcXFxcYmAgfSxcblxuICAgICAgLy8gRGVjaW1hbEJpZ0ludGVnZXJMaXRlcmFsXG4gICAgICB7IGJlZ2luOiBgXFxcXGIoMHxbMS05XShfP1swLTldKSopblxcXFxiYCB9LFxuXG4gICAgICAvLyBOb25EZWNpbWFsSW50ZWdlckxpdGVyYWxcbiAgICAgIHsgYmVnaW46IFwiXFxcXGIwW3hYXVswLTlhLWZBLUZdKF8/WzAtOWEtZkEtRl0pKm4/XFxcXGJcIiB9LFxuICAgICAgeyBiZWdpbjogXCJcXFxcYjBbYkJdWzAtMV0oXz9bMC0xXSkqbj9cXFxcYlwiIH0sXG4gICAgICB7IGJlZ2luOiBcIlxcXFxiMFtvT11bMC03XShfP1swLTddKSpuP1xcXFxiXCIgfSxcblxuICAgICAgLy8gTGVnYWN5T2N0YWxJbnRlZ2VyTGl0ZXJhbCAoZG9lcyBub3QgaW5jbHVkZSB1bmRlcnNjb3JlIHNlcGFyYXRvcnMpXG4gICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFkZGl0aW9uYWwtc3ludGF4LW51bWVyaWMtbGl0ZXJhbHNcbiAgICAgIHsgYmVnaW46IFwiXFxcXGIwWzAtN10rbj9cXFxcYlwiIH0sXG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46ICdcXFxcJFxcXFx7JyxcbiAgICBlbmQ6ICdcXFxcfScsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgY29udGFpbnM6IFtdIC8vIGRlZmluZWQgbGF0ZXJcbiAgfTtcbiAgY29uc3QgSFRNTF9URU1QTEFURSA9IHtcbiAgICBiZWdpbjogJ2h0bWxgJyxcbiAgICBlbmQ6ICcnLFxuICAgIHN0YXJ0czoge1xuICAgICAgZW5kOiAnYCcsXG4gICAgICByZXR1cm5FbmQ6IGZhbHNlLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICBTVUJTVFxuICAgICAgXSxcbiAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJ1xuICAgIH1cbiAgfTtcbiAgY29uc3QgQ1NTX1RFTVBMQVRFID0ge1xuICAgIGJlZ2luOiAnY3NzYCcsXG4gICAgZW5kOiAnJyxcbiAgICBzdGFydHM6IHtcbiAgICAgIGVuZDogJ2AnLFxuICAgICAgcmV0dXJuRW5kOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgU1VCU1RcbiAgICAgIF0sXG4gICAgICBzdWJMYW5ndWFnZTogJ2NzcydcbiAgICB9XG4gIH07XG4gIGNvbnN0IFRFTVBMQVRFX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnYCcsXG4gICAgZW5kOiAnYCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIFNVQlNUXG4gICAgXVxuICB9O1xuICBjb25zdCBKU0RPQ19DT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgIC9cXC9cXCpcXCooPyFcXC8pLyxcbiAgICAnXFxcXCovJyxcbiAgICB7XG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICBiZWdpbjogJ0BbQS1aYS16XSsnLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFx7JyxcbiAgICAgICAgICAgICAgZW5kOiAnXFxcXH0nLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICAgICAgYmVnaW46IElERU5UX1JFJDEgKyAnKD89XFxcXHMqKC0pfCQpJyxcbiAgICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gZWF0IHNwYWNlcyAobm90IG5ld2xpbmVzKSBzbyB3ZSBjYW4gZmluZFxuICAgICAgICAgICAgLy8gdHlwZXMgb3IgdmFyaWFibGVzXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvKD89W15cXG5dKVxccy8sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgKTtcbiAgY29uc3QgQ09NTUVOVCA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29tbWVudFwiLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICBKU0RPQ19DT01NRU5ULFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcbiAgY29uc3QgU1VCU1RfSU5URVJOQUxTID0gW1xuICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIEhUTUxfVEVNUExBVEUsXG4gICAgQ1NTX1RFTVBMQVRFLFxuICAgIFRFTVBMQVRFX1NUUklORyxcbiAgICBOVU1CRVIsXG4gICAgaGxqcy5SRUdFWFBfTU9ERVxuICBdO1xuICBTVUJTVC5jb250YWlucyA9IFNVQlNUX0lOVEVSTkFMU1xuICAgIC5jb25jYXQoe1xuICAgICAgLy8gd2UgbmVlZCB0byBwYWlyIHVwIHt9IGluc2lkZSBvdXIgc3Vic3QgdG8gcHJldmVudFxuICAgICAgLy8gaXQgZnJvbSBlbmRpbmcgdG9vIGVhcmx5IGJ5IG1hdGNoaW5nIGFub3RoZXIgfVxuICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgZW5kOiAvXFx9LyxcbiAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgXCJzZWxmXCJcbiAgICAgIF0uY29uY2F0KFNVQlNUX0lOVEVSTkFMUylcbiAgICB9KTtcbiAgY29uc3QgU1VCU1RfQU5EX0NPTU1FTlRTID0gW10uY29uY2F0KENPTU1FTlQsIFNVQlNULmNvbnRhaW5zKTtcbiAgY29uc3QgUEFSQU1TX0NPTlRBSU5TID0gU1VCU1RfQU5EX0NPTU1FTlRTLmNvbmNhdChbXG4gICAgLy8gZWF0IHJlY3Vyc2l2ZSBwYXJlbnMgaW4gc3ViIGV4cHJlc3Npb25zXG4gICAge1xuICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgZW5kOiAvXFwpLyxcbiAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgICAgY29udGFpbnM6IFtcInNlbGZcIl0uY29uY2F0KFNVQlNUX0FORF9DT01NRU5UUylcbiAgICB9XG4gIF0pO1xuICBjb25zdCBQQVJBTVMgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogL1xcKC8sXG4gICAgZW5kOiAvXFwpLyxcbiAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICBjb250YWluczogUEFSQU1TX0NPTlRBSU5TXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSmF2YXNjcmlwdCcsXG4gICAgYWxpYXNlczogWydqcycsICdqc3gnLCAnbWpzJywgJ2NqcyddLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgIC8vIHRoaXMgd2lsbCBiZSBleHRlbmRlZCBieSBUeXBlU2NyaXB0XG4gICAgZXhwb3J0czogeyBQQVJBTVNfQ09OVEFJTlMgfSxcbiAgICBpbGxlZ2FsOiAvIyg/IVskX0Etel0pLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5TSEVCQU5HKHtcbiAgICAgICAgbGFiZWw6IFwic2hlYmFuZ1wiLFxuICAgICAgICBiaW5hcnk6IFwibm9kZVwiLFxuICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJ1c2Vfc3RyaWN0XCIsXG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICBiZWdpbjogL15cXHMqWydcIl11c2UgKHN0cmljdHxhc20pWydcIl0vXG4gICAgICB9LFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIEhUTUxfVEVNUExBVEUsXG4gICAgICBDU1NfVEVNUExBVEUsXG4gICAgICBURU1QTEFURV9TVFJJTkcsXG4gICAgICBDT01NRU5ULFxuICAgICAgTlVNQkVSLFxuICAgICAgeyAvLyBvYmplY3QgYXR0ciBjb250YWluZXJcbiAgICAgICAgYmVnaW46IGNvbmNhdCgvW3ssXFxuXVxccyovLFxuICAgICAgICAgIC8vIHdlIG5lZWQgdG8gbG9vayBhaGVhZCB0byBtYWtlIHN1cmUgdGhhdCB3ZSBhY3R1YWxseSBoYXZlIGFuXG4gICAgICAgICAgLy8gYXR0cmlidXRlIGNvbWluZyB1cCBzbyB3ZSBkb24ndCBzdGVhbCBhIGNvbW1hIGZyb20gYSBwb3RlbnRpYWxcbiAgICAgICAgICAvLyBcInZhbHVlXCIgY29udGFpbmVyXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBOT1RFOiB0aGlzIG1pZ2h0IG5vdCB3b3JrIGhvdyB5b3UgdGhpbmsuICBXZSBkb24ndCBhY3R1YWxseSBhbHdheXNcbiAgICAgICAgICAvLyBlbnRlciB0aGlzIG1vZGUgYW5kIHN0YXkuICBJbnN0ZWFkIGl0IG1pZ2h0IG1lcmVseSBtYXRjaCBgLFxuICAgICAgICAgIC8vIDxjb21tZW50cyB1cCBuZXh0PmAgYW5kIHRoZW4gaW1tZWRpYXRlbHkgZW5kIGFmdGVyIHRoZSAsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBmYWlscyB0byBmaW5kIGFueSBhY3R1YWwgYXR0cnMuIEJ1dCB0aGlzIHN0aWxsIGRvZXMgdGhlIGpvYiBiZWNhdXNlXG4gICAgICAgICAgLy8gaXQgcHJldmVudHMgdGhlIHZhbHVlIGNvbnRhaW4gcnVsZSBmcm9tIGdyYWJiaW5nIHRoaXMgaW5zdGVhZCBhbmRcbiAgICAgICAgICAvLyBwcmV2ZW5pbmcgdGhpcyBydWxlIGZyb20gZmlyaW5nIHdoZW4gd2UgYWN0dWFsbHkgRE8gaGF2ZSBrZXlzLlxuICAgICAgICAgIGxvb2thaGVhZChjb25jYXQoXG4gICAgICAgICAgICAvLyB3ZSBhbHNvIG5lZWQgdG8gYWxsb3cgZm9yIG11bHRpcGxlIHBvc3NpYmxlIGNvbW1lbnRzIGluYmV0d2VlblxuICAgICAgICAgICAgLy8gdGhlIGZpcnN0IGtleTp2YWx1ZSBwYWlyaW5nXG4gICAgICAgICAgICAvKCgoXFwvXFwvLiokKXwoXFwvXFwqKFxcKlteL118W14qXSkqXFwqXFwvKSlcXHMqKSovLFxuICAgICAgICAgICAgSURFTlRfUkUkMSArICdcXFxccyo6JykpKSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgYmVnaW46IElERU5UX1JFJDEgKyBsb29rYWhlYWQoJ1xcXFxzKjonKSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgLy8gXCJ2YWx1ZVwiIGNvbnRhaW5lclxuICAgICAgICBiZWdpbjogJygnICsgaGxqcy5SRV9TVEFSVEVSU19SRSArICd8XFxcXGIoY2FzZXxyZXR1cm58dGhyb3cpXFxcXGIpXFxcXHMqJyxcbiAgICAgICAga2V5d29yZHM6ICdyZXR1cm4gdGhyb3cgY2FzZScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgQ09NTUVOVCxcbiAgICAgICAgICBobGpzLlJFR0VYUF9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gY291bnQgdGhlIHBhcmVucyB0byBtYWtlIHN1cmUgd2UgYWN0dWFsbHkgaGF2ZSB0aGVcbiAgICAgICAgICAgIC8vIGNvcnJlY3QgYm91bmRpbmcgKCApIGJlZm9yZSB0aGUgPT4uICBUaGVyZSBjb3VsZCBiZSBhbnkgbnVtYmVyIG9mXG4gICAgICAgICAgICAvLyBzdWItZXhwcmVzc2lvbnMgaW5zaWRlIGFsc28gc3Vycm91bmRlZCBieSBwYXJlbnMuXG4gICAgICAgICAgICBiZWdpbjogJyhcXFxcKCcgK1xuICAgICAgICAgICAgJ1teKCldKihcXFxcKCcgK1xuICAgICAgICAgICAgJ1teKCldKihcXFxcKCcgK1xuICAgICAgICAgICAgJ1teKCldKicgK1xuICAgICAgICAgICAgJ1xcXFwpW14oKV0qKSonICtcbiAgICAgICAgICAgICdcXFxcKVteKCldKikqJyArXG4gICAgICAgICAgICAnXFxcXCl8JyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICcpXFxcXHMqPT4nLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgICAgICBlbmQ6ICdcXFxccyo9PicsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IC9cXChcXHMqXFwpLyxcbiAgICAgICAgICAgICAgICAgICAgc2tpcDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluczogUEFSQU1TX0NPTlRBSU5TXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IC8vIGNvdWxkIGJlIGEgY29tbWEgZGVsaW1pdGVkIGxpc3Qgb2YgcGFyYW1zIHRvIGEgZnVuY3Rpb24gY2FsbFxuICAgICAgICAgICAgYmVnaW46IC8sLywgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgYmVnaW46IC9cXHMvLFxuICAgICAgICAgICAgZW5kOiAvXFxzKi8sXG4gICAgICAgICAgICBza2lwOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IC8vIEpTWFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbjogRlJBR01FTlQuYmVnaW4sIGVuZDogRlJBR01FTlQuZW5kIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogWE1MX1RBRy5iZWdpbixcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYXJlZnVsbHkgY2hlY2sgdGhlIG9wZW5pbmcgdGFnIHRvIHNlZSBpZiBpdCB0cnVseVxuICAgICAgICAgICAgICAgIC8vIGlzIGEgdGFnIGFuZCBub3QgYSBmYWxzZSBwb3NpdGl2ZVxuICAgICAgICAgICAgICAgICdvbjpiZWdpbic6IFhNTF9UQUcuaXNUcnVseU9wZW5pbmdUYWcsXG4gICAgICAgICAgICAgICAgZW5kOiBYTUxfVEFHLmVuZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiBYTUxfVEFHLmJlZ2luLFxuICAgICAgICAgICAgICAgIGVuZDogWE1MX1RBRy5lbmQsXG4gICAgICAgICAgICAgICAgc2tpcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250YWluczogWydzZWxmJ11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbicsXG4gICAgICAgIGVuZDogL1t7O10vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwgeyBiZWdpbjogSURFTlRfUkUkMSB9KSxcbiAgICAgICAgICBQQVJBTVNcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogLyUvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBwcmV2ZW50IHRoaXMgZnJvbSBnZXR0aW5nIHN3YWxsb3dlZCB1cCBieSBmdW5jdGlvblxuICAgICAgICAvLyBzaW5jZSB0aGV5IGFwcGVhciBcImZ1bmN0aW9uIGxpa2VcIlxuICAgICAgICBiZWdpbktleXdvcmRzOiBcIndoaWxlIGlmIHN3aXRjaCBjYXRjaCBmb3JcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIGNvdW50IHRoZSBwYXJlbnMgdG8gbWFrZSBzdXJlIHdlIGFjdHVhbGx5IGhhdmUgdGhlIGNvcnJlY3RcbiAgICAgICAgLy8gYm91bmRpbmcgKCApLiAgVGhlcmUgY291bGQgYmUgYW55IG51bWJlciBvZiBzdWItZXhwcmVzc2lvbnMgaW5zaWRlXG4gICAgICAgIC8vIGFsc28gc3Vycm91bmRlZCBieSBwYXJlbnMuXG4gICAgICAgIGJlZ2luOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgK1xuICAgICAgICAgICdcXFxcKCcgKyAvLyBmaXJzdCBwYXJlbnNcbiAgICAgICAgICAnW14oKV0qKFxcXFwoJyArXG4gICAgICAgICAgICAnW14oKV0qKFxcXFwoJyArXG4gICAgICAgICAgICAgICdbXigpXSonICtcbiAgICAgICAgICAgICdcXFxcKVteKCldKikqJyArXG4gICAgICAgICAgJ1xcXFwpW14oKV0qKSonICtcbiAgICAgICAgICAnXFxcXClcXFxccypcXFxceycsIC8vIGVuZCBwYXJlbnNcbiAgICAgICAgcmV0dXJuQmVnaW46dHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBQQVJBTVMsXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwgeyBiZWdpbjogSURFTlRfUkUkMSB9KSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIGhhY2s6IHByZXZlbnRzIGRldGVjdGlvbiBvZiBrZXl3b3JkcyBpbiBzb21lIGNpcmN1bXN0YW5jZXNcbiAgICAgIC8vIC5rZXl3b3JkKClcbiAgICAgIC8vICRrZXl3b3JkID0geFxuICAgICAge1xuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHsgYmVnaW46ICdcXFxcLicgKyBJREVOVF9SRSQxIH0sXG4gICAgICAgICAgeyBiZWdpbjogJ1xcXFwkJyArIElERU5UX1JFJDEgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7IC8vIEVTNiBjbGFzc1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcycsXG4gICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogL1s6XCJbXFxdXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcycgfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcYig/PWNvbnN0cnVjdG9yKS8sXG4gICAgICAgIGVuZDogL1t7O10vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHsgYmVnaW46IElERU5UX1JFJDEgfSksXG4gICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgIFBBUkFNU1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyhnZXR8c2V0KVxcXFxzKyg/PScgKyBJREVOVF9SRSQxICsgJ1xcXFwoKScsXG4gICAgICAgIGVuZDogL1xcey8sXG4gICAgICAgIGtleXdvcmRzOiBcImdldCBzZXRcIixcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7IGJlZ2luOiBJREVOVF9SRSQxIH0pLFxuICAgICAgICAgIHsgYmVnaW46IC9cXChcXCkvIH0sIC8vIGVhdCB0byBhdm9pZCBlbXB0eSBwYXJhbXNcbiAgICAgICAgICBQQVJBTVNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCRbKC5dLyAvLyByZWxldmFuY2UgYm9vc3RlciBmb3IgYSBwYXR0ZXJuIGNvbW1vbiB0byBKUyBsaWJzOiBgJChzb21ldGhpbmcpYCBhbmQgYCQuc29tZXRoaW5nYFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqYXZhc2NyaXB0O1xuIiwiLypcbkxhbmd1YWdlOiBWQlNjcmlwdCBpbiBIVE1MXG5SZXF1aXJlczogeG1sLmpzLCB2YnNjcmlwdC5qc1xuQXV0aG9yOiBJdmFuIFNhZ2FsYWV2IDxtYW5pYWNAc29mdHdhcmVtYW5pYWNzLm9yZz5cbkRlc2NyaXB0aW9uOiBcIkJyaWRnZVwiIGxhbmd1YWdlIGRlZmluaW5nIGZyYWdtZW50cyBvZiBWQlNjcmlwdCBpbiBIVE1MIHdpdGhpbiA8JSAuLiAlPlxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVkJTY3JpcHRcbkNhdGVnb3J5OiBzY3JpcHRpbmdcbiovXG5cbmZ1bmN0aW9uIHZic2NyaXB0SHRtbChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1ZCU2NyaXB0IGluIEhUTUwnLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJzwlJyxcbiAgICAgICAgZW5kOiAnJT4nLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3Zic2NyaXB0J1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YnNjcmlwdEh0bWw7XG4iXSwic291cmNlUm9vdCI6IiJ9