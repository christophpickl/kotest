(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),d=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||b[u]||r;return n?s.a.createElement(m,o(o({ref:t},l),{},{components:n})):s.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),s=n(7),r=(n(0),n(159)),c={title:"Test Factories",slug:"test-factories.html"},o={unversionedId:"framework/test_factories",id:"framework/test_factories",isDocsHomePage:!1,title:"Test Factories",description:"Sometimes we may wish to write a set of generic tests and then reuse them for specific inputs. In Kotest we can do this via test factories which create tests that can be included into one or more specs.",source:"@site/docs/framework/test_factories.md",slug:"/framework/test-factories.html",permalink:"/docs/framework/test-factories.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/test_factories.md",version:"current",sidebar:"framework",previous:{title:"Test Extensions",permalink:"/docs/framework/test-extensions.html"},next:{title:"Timeouts",permalink:"/docs/framework/timeouts.html"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Listeners",id:"listeners",children:[]}],l={rightToc:i};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sometimes we may wish to write a set of generic tests and then reuse them for specific inputs. In Kotest we can do this via ",Object(r.b)("em",{parentName:"p"},"test factories")," which create tests that can be ",Object(r.b)("em",{parentName:"p"},"included")," into one or more specs."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Say we wanted to build our own collections library. A slightly trite example, but one that serves the documentation purpose well."),Object(r.b)("p",null,"We could create an interface ",Object(r.b)("inlineCode",{parentName:"p"},"IndexedSeq")," which has two implementations, ",Object(r.b)("inlineCode",{parentName:"p"},"List")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Vector"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"interface IndexedSeq<T> {\n\n    // returns the size of t\n    fun size(): Int\n\n    // returns a new seq with t added\n    fun add(t: T): IndexedSeq<T>\n\n    // returns true if this seq contains t\n    fun contains(t: T): Boolean\n}\n")),Object(r.b)("p",null,"If we wanted to test our ",Object(r.b)("inlineCode",{parentName:"p"},"List")," implementation, we could do this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class ListTest : WordSpec({\n\n   val empty = List<Int>()\n\n   "List" should {\n      "increase size as elements are added" {\n         empty.size() shouldBe 0\n         val plus1 = empty.add(1)\n         plus1.size() shouldBe 1\n         val plus2 = plus2.add(2)\n         plus2.size() shouldBe 2\n      }\n      "contain an element after it is added" {\n         empty.contains(1) shouldBe false\n         empty.add(1).contains(1) shouldBe true\n         empty.add(1).contains(2) shouldBe false\n      }\n   }\n})\n')),Object(r.b)("p",null,"Now, if we wanted to test ",Object(r.b)("inlineCode",{parentName:"p"},"Vector")," we have to copy n paste the test. As we add more implementations and more tests, the likelihood is our test suite will become fragmented and out of sync."),Object(r.b)("p",null,"We can address this by creating a test factory, which accepts an ",Object(r.b)("inlineCode",{parentName:"p"},"IndexedSeq")," as a parameter."),Object(r.b)("p",null,"To create a test factory, we use a builder function such as ",Object(r.b)("inlineCode",{parentName:"p"},"funSpec"),", ",Object(r.b)("inlineCode",{parentName:"p"},"wordSpec")," and so on. A builder function exists for each of the spec ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/testing-styles.html"}),"styles"),"."),Object(r.b)("p",null,"So, to convert our previous tests to a test factory, we simply do the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'fun <T> indexedSeqTests(name: String, empty: IndexedSeq<T>) = wordSpec {\n   name should {\n      "increase size as elements are added" {\n         empty.size() shouldBe 0\n         val plus1 = empty.add(1)\n         plus1.size() shouldBe 1\n         val plus2 = plus2.add(2)\n         plus2.size() shouldBe 2\n      }\n      "contain an element after it is added" {\n         empty.contains(1) shouldBe false\n         empty.add(1).contains(1) shouldBe true\n         empty.add(1).contains(2) shouldBe false\n      }\n   }\n})\n')),Object(r.b)("p",null,"And then to use this, we must include it one or more times into a spec (or several specs)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class IndexedSeqTestSuite : WordSpec({\n   include(indexedSeqTests("vector"), Vector())\n   include(indexedSeqTests("list"), List())\n})\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can include any style factory into any style spec. For example, a fun spec factory can be included into a string spec class."))),Object(r.b)("p",null,"A test class can include several different types of factory, as well as inline tests as normal. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class HugeTestFile : FunSpec({\n\n   test("first test") {\n     // test here\n   }\n\n   include(factory1("foo"))\n   include(factory2(1, 4))\n\n   test("another test") {\n     //  testhere\n   }\n})\n')),Object(r.b)("p",null,"Each included test appears in the test output and reports as if it was individually defined."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Tests from factories are included in the order they are defined in the spec class."))),Object(r.b)("h2",{id:"listeners"},"Listeners"),Object(r.b)("p",null,"Test factories support the usual before and after test callbacks. Any callback added to a factory, will in turn be added to the spec or specs where the factory is included."),Object(r.b)("p",null,"However, only those tests generated ",Object(r.b)("em",{parentName:"p"},"by that factory")," will have the callback applied. This means you can create stand alone factories with their own lifecycle methods and be assured they won't clash with lifecycle methods defined in other factories or specs themselves."),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'val factory1 = funSpec {\n  beforeTest {\n     println("Executing $it")\n  }\n  test("a") {  }\n  test("b") {  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class LifecycleExample : FunSpec({\n   include(factory1)\n   test("c")\n   test("d")\n})\n')),Object(r.b)("p",null,"After executing the test suite, the following would be printed:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Executing a\nExecuting b\n")),Object(r.b)("p",null,"And as you can see, the ",Object(r.b)("inlineCode",{parentName:"p"},"beforeTest")," block added to ",Object(r.b)("inlineCode",{parentName:"p"},"factory1")," only applies to those tests defined in that factory, and not in the tests defined in the spec it was added to."))}d.isMDXComponent=!0}}]);