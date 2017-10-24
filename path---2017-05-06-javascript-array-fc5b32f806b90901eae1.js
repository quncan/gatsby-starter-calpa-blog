webpackJsonp([0xa7f855b009c3],{401:function(e,n){e.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li>\n<p><a href="#%E5%85%A7%E7%BD%AE%E6%96%B9%E6%B3%95">內置方法</a></p>\n<ul>\n<li><a href="#%E7%AC%AC%E4%B8%80%E6%99%82%E9%96%93%E6%9C%83%E6%83%B3%E5%88%B0%E7%9A%84%E6%96%B9%E6%B3%95">第一時間會想到的方法</a></li>\n<li><a href="#underscore">Underscore</a></li>\n</ul>\n</li>\n</ul>',internal:{content:"---\ntitle: JavaScript 數組去重\ntags:\n  - JavaScript\ndate: 2017-05-05 22:53:00\n---\n\n顧著做化工模擬功課，差點忘記怎樣寫代碼。。。\n\n# 內置方法\n使用JavaScript內置的去重複方法`Set()`，比如說：\n\n```\nlet arr = [1, 2, 3, 3, 4, 5];\nArray.from(new Set(arr)); // [1, 2, 3, 4, 5]\n[...new Set(arr)]; // [1, 2, 3, 4, 5]\n```\n\n## 第一時間會想到的方法\n1. 雙重遍歷\n1. 使用hash table\n\n## Underscore\n最後來看一下underscore是如何實現unique()方法吧。\n\n```\n_.uniq = _.unique = function(array, isSorted, iteratee, context) {\n  // 如果數組不是已經排序\n  if (!_.isBoolean(isSorted)) {\n    // 將function(array, isSorted, iteratee, context)\n    // 換成function(array, false, isSorted, iteratee)\n    context = iteratee;\n    iteratee = isSorted;\n    isSorted = false;\n  }\n\n  // 如果存在iteratee\n  if (iteratee != null) iteratee = cb(iteratee, context);\n  var result = [];\n  var seen = [];\n  for (var i = 0, length = getLength(array); i < length; i++) {\n    var value = array[i],\n        computed = iteratee ? iteratee(value, i, array) : value;\n    // 如果已經排序，就直接增加數值(第一個值)。\n    // 非0 就是 true\n    // 或者see不是computed\n    if (isSorted) {\n      if (!i || seen !== computed) result.push(value);\n      seen = computed;\n    } else if (iteratee) {\n      // 使用_.contains查詢數組裡面是否擁有這個值\n      if (!_.contains(seen, computed)) {\n        seen.push(computed);\n        result.push(value);\n      }\n    } else if (!_.contains(result, value)) {\n      result.push(value);\n    }\n  }\n  return result;\n};\n```\n"},frontmatter:{title:"JavaScript 數組去重"}}},pathContext:{slug:"/javascript-array/"}}}});
//# sourceMappingURL=path---2017-05-06-javascript-array-fc5b32f806b90901eae1.js.map