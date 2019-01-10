var typedoc = typedoc || {};
            typedoc.search = typedoc.search || {};
            typedoc.search.data = {"kinds":{"4":"Enumeration","16":"Enumeration member","32":"Variable","128":"Class","256":"Interface","512":"Constructor","1024":"Property","2048":"Method","65536":"Type literal","4194304":"Type alias"},"rows":[{"id":0,"kind":256,"name":"IDisposable","url":"interfaces/idisposable.html","classes":"tsd-kind-interface tsd-is-not-exported"},{"id":1,"kind":2048,"name":"dispose","url":"interfaces/idisposable.html#dispose","classes":"tsd-kind-method tsd-parent-kind-interface tsd-is-not-exported","parent":"IDisposable"},{"id":2,"kind":4,"name":"TextStoreEvent","url":"enums/textstoreevent.html","classes":"tsd-kind-enum"},{"id":3,"kind":16,"name":"Insert","url":"enums/textstoreevent.html#insert","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"TextStoreEvent"},{"id":4,"kind":16,"name":"Remove","url":"enums/textstoreevent.html#remove","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"TextStoreEvent"},{"id":5,"kind":16,"name":"Replace","url":"enums/textstoreevent.html#replace","classes":"tsd-kind-enum-member tsd-parent-kind-enum","parent":"TextStoreEvent"},{"id":6,"kind":256,"name":"ITextStoreInsertEvent","url":"interfaces/itextstoreinsertevent.html","classes":"tsd-kind-interface"},{"id":7,"kind":1024,"name":"changeType","url":"interfaces/itextstoreinsertevent.html#changetype","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextStoreInsertEvent"},{"id":8,"kind":1024,"name":"range","url":"interfaces/itextstoreinsertevent.html#range","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextStoreInsertEvent"},{"id":9,"kind":1024,"name":"text","url":"interfaces/itextstoreinsertevent.html#text","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextStoreInsertEvent"},{"id":10,"kind":256,"name":"ITextStoreReplaceEvent","url":"interfaces/itextstorereplaceevent.html","classes":"tsd-kind-interface"},{"id":11,"kind":1024,"name":"changeType","url":"interfaces/itextstorereplaceevent.html#changetype","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextStoreReplaceEvent"},{"id":12,"kind":1024,"name":"range","url":"interfaces/itextstorereplaceevent.html#range","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextStoreReplaceEvent"},{"id":13,"kind":1024,"name":"oldText","url":"interfaces/itextstorereplaceevent.html#oldtext","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextStoreReplaceEvent"},{"id":14,"kind":1024,"name":"newText","url":"interfaces/itextstorereplaceevent.html#newtext","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextStoreReplaceEvent"},{"id":15,"kind":256,"name":"ITextStoreRemoveEvent","url":"interfaces/itextstoreremoveevent.html","classes":"tsd-kind-interface"},{"id":16,"kind":1024,"name":"changeType","url":"interfaces/itextstoreremoveevent.html#changetype","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextStoreRemoveEvent"},{"id":17,"kind":1024,"name":"range","url":"interfaces/itextstoreremoveevent.html#range","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextStoreRemoveEvent"},{"id":18,"kind":1024,"name":"oldText","url":"interfaces/itextstoreremoveevent.html#oldtext","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextStoreRemoveEvent"},{"id":19,"kind":128,"name":"TextStore","url":"classes/textstore.html","classes":"tsd-kind-class"},{"id":20,"kind":512,"name":"constructor","url":"classes/textstore.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class","parent":"TextStore"},{"id":21,"kind":2048,"name":"onDidChange","url":"classes/textstore.html#ondidchange","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TextStore"},{"id":22,"kind":2048,"name":"insert","url":"classes/textstore.html#insert","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TextStore"},{"id":23,"kind":2048,"name":"replace","url":"classes/textstore.html#replace","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TextStore"},{"id":24,"kind":2048,"name":"remove","url":"classes/textstore.html#remove","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TextStore"},{"id":25,"kind":2048,"name":"getSize","url":"classes/textstore.html#getsize","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TextStore"},{"id":26,"kind":2048,"name":"getContents","url":"classes/textstore.html#getcontents","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TextStore"},{"id":27,"kind":2048,"name":"indexToPosition","url":"classes/textstore.html#indextoposition","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TextStore"},{"id":28,"kind":2048,"name":"positionToIndex","url":"classes/textstore.html#positiontoindex","classes":"tsd-kind-method tsd-parent-kind-class","parent":"TextStore"},{"id":29,"kind":256,"name":"ITextPosition","url":"interfaces/itextposition.html","classes":"tsd-kind-interface"},{"id":30,"kind":1024,"name":"line","url":"interfaces/itextposition.html#line","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextPosition"},{"id":31,"kind":1024,"name":"col","url":"interfaces/itextposition.html#col","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextPosition"},{"id":32,"kind":256,"name":"ITextRange","url":"interfaces/itextrange.html","classes":"tsd-kind-interface"},{"id":33,"kind":1024,"name":"start","url":"interfaces/itextrange.html#start","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextRange"},{"id":34,"kind":1024,"name":"end","url":"interfaces/itextrange.html#end","classes":"tsd-kind-property tsd-parent-kind-interface","parent":"ITextRange"},{"id":35,"kind":128,"name":"SCache","url":"classes/scache.html","classes":"tsd-kind-class tsd-has-type-parameter tsd-is-not-exported"},{"id":36,"kind":512,"name":"constructor","url":"classes/scache.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class tsd-is-not-exported","parent":"SCache"},{"id":37,"kind":2048,"name":"get","url":"classes/scache.html#get","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-not-exported","parent":"SCache"},{"id":38,"kind":2048,"name":"set","url":"classes/scache.html#set","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-not-exported","parent":"SCache"},{"id":39,"kind":2048,"name":"flush","url":"classes/scache.html#flush","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-not-exported","parent":"SCache"},{"id":40,"kind":128,"name":"VCache","url":"classes/vcache.html","classes":"tsd-kind-class tsd-has-type-parameter tsd-is-not-exported"},{"id":41,"kind":512,"name":"constructor","url":"classes/vcache.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class tsd-is-not-exported","parent":"VCache"},{"id":42,"kind":2048,"name":"get","url":"classes/vcache.html#get","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-not-exported","parent":"VCache"},{"id":43,"kind":2048,"name":"set","url":"classes/vcache.html#set","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-not-exported","parent":"VCache"},{"id":44,"kind":2048,"name":"flush","url":"classes/vcache.html#flush","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-not-exported","parent":"VCache"},{"id":45,"kind":32,"name":"DEFAULT_BLOCK_SIZE","url":"globals.html#default_block_size","classes":"tsd-kind-variable tsd-is-not-exported"},{"id":46,"kind":4194304,"name":"TextStoreChange","url":"globals.html#textstorechange","classes":"tsd-kind-type-alias"},{"id":47,"kind":4194304,"name":"ChangeCallback","url":"globals.html#changecallback","classes":"tsd-kind-type-alias"},{"id":48,"kind":65536,"name":"__type","url":"globals.html#changecallback.__type","classes":"tsd-kind-type-literal tsd-parent-kind-type-alias tsd-is-not-exported","parent":"ChangeCallback"},{"id":49,"kind":128,"name":"Node","url":"classes/node.html","classes":"tsd-kind-class tsd-is-not-exported"},{"id":50,"kind":128,"name":"CachedToString","url":"classes/cachedtostring.html","classes":"tsd-kind-class tsd-is-not-exported"},{"id":51,"kind":512,"name":"constructor","url":"classes/cachedtostring.html#constructor","classes":"tsd-kind-constructor tsd-parent-kind-class tsd-is-not-exported","parent":"CachedToString"},{"id":52,"kind":2048,"name":"getStringValue","url":"classes/cachedtostring.html#getstringvalue","classes":"tsd-kind-method tsd-parent-kind-class tsd-is-not-exported","parent":"CachedToString"}]};