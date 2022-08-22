import{_ as n,o as r,c as l,a as e,b as o,d as a,e as i,r as p}from"./app.1e085d66.js";const t={},c=e("h1",{id:"configuration-options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration-options","aria-hidden":"true"},"#"),a(" Configuration Options")],-1),d=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),a(" Introduction")],-1),h=a("zProtect uses the "),u={href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"},m=a("YAML"),b=a(" data serialization language for configuring the behavior of the zProtect obfuscator. It is possible to hand-write the configuration file to upload on the web interface, however, you may wish to use the configurator tool in the zProtect dashboard area."),y=i(`<h2 id="value-types" tabindex="-1"><a class="header-anchor" href="#value-types" aria-hidden="true">#</a> Value Types</h2><p>There are a few value types used in the zProtect configuration, which are listed below.</p><h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> Boolean</h3><p>Only accepts <code>true</code> and <code>false</code> as the value.</p><p>For example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># A key with value as true</span></span>
<span class="line"><span style="color:#569CD6;">key1</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># A key with value as false</span></span>
<span class="line"><span style="color:#569CD6;">key2</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3><p>Accepts any text character.</p><p>For example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># A key with a string value</span></span>
<span class="line"><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">value</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-array" tabindex="-1"><a class="header-anchor" href="#string-array" aria-hidden="true">#</a> String Array</h3><p>A list of <a href="#string"><code>strings</code></a>, separated by a newline and prefixed with a dash.</p><p>For example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># An array with entries</span></span>
<span class="line"><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#CE9178;">something</span></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#CE9178;">another thing</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># An empty array</span></span>
<span class="line"><span style="color:#569CD6;">empty</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><p>These options specify runtime information and general configuration.</p><h3 id="outputjar" tabindex="-1"><a class="header-anchor" href="#outputjar" aria-hidden="true">#</a> outputJar</h3><p>Name of the obfuscated JAR file.</p><p>Value type: <a href="#string"><code>string</code></a></p><h3 id="libraries" tabindex="-1"><a class="header-anchor" href="#libraries" aria-hidden="true">#</a> libraries</h3><p>Dependencies required to obfuscate your jar to prevent &quot;Not found&quot; errors.</p><p>Value type: <a href="#string-array"><code>string array</code></a></p><h3 id="exclusions" tabindex="-1"><a class="header-anchor" href="#exclusions" aria-hidden="true">#</a> exclusions</h3><p>Class files and directories that should be ignored by the obfuscator. They will not have any obfuscation applied to them.</p><p>Value type: <a href="#string-array"><code>string array</code></a></p><h3 id="watermark" tabindex="-1"><a class="header-anchor" href="#watermark" aria-hidden="true">#</a> watermark</h3><p>Adds a watermark to the obfuscated JAR for advertisement. Only removable for users with a Commercial License.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h2 id="transformers" tabindex="-1"><a class="header-anchor" href="#transformers" aria-hidden="true">#</a> Transformers</h2><p>These options specify wherether to enable available obfuscation techniques.</p><h3 id="fieldrenamer" tabindex="-1"><a class="header-anchor" href="#fieldrenamer" aria-hidden="true">#</a> FieldRenamer</h3><p>Obfuscates field names.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="methodrenamer" tabindex="-1"><a class="header-anchor" href="#methodrenamer" aria-hidden="true">#</a> MethodRenamer</h3><p>Obfuscates method names.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="classrenamer" tabindex="-1"><a class="header-anchor" href="#classrenamer" aria-hidden="true">#</a> ClassRenamer</h3><p>Obfuscates class names.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="classrenamerpath" tabindex="-1"><a class="header-anchor" href="#classrenamerpath" aria-hidden="true">#</a> ClassRenamerPath</h3><p>Directory to place classes with the <a href="#classrenamer">ClassRenamer</a> transformer applied.</p><p>Value type: <a href="#string"><code>string</code></a></p><h3 id="localvariablerenamer" tabindex="-1"><a class="header-anchor" href="#localvariablerenamer" aria-hidden="true">#</a> LocalVariableRenamer</h3><p>Obfuscates local variable names.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="decompilercrasher" tabindex="-1"><a class="header-anchor" href="#decompilercrasher" aria-hidden="true">#</a> DecompilerCrasher</h3><p>Performs stack manipulation to crash decompilers.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="badannotationcrasher" tabindex="-1"><a class="header-anchor" href="#badannotationcrasher" aria-hidden="true">#</a> BadAnnotationCrasher</h3><p>Performs annotation manipulation to crash decompilers.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="antidebug" tabindex="-1"><a class="header-anchor" href="#antidebug" aria-hidden="true">#</a> AntiDebug</h3><p>Adds anti-tamper / disables certain flags from being used on your program.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="linenumberremover" tabindex="-1"><a class="header-anchor" href="#linenumberremover" aria-hidden="true">#</a> LineNumberRemover</h3><p>Removes the line number attribute from your class.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="sourcedebugremover" tabindex="-1"><a class="header-anchor" href="#sourcedebugremover" aria-hidden="true">#</a> SourceDebugRemover</h3><p>Removes the source debug attribute.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="sourcefileremover" tabindex="-1"><a class="header-anchor" href="#sourcefileremover" aria-hidden="true">#</a> SourceFileRemover</h3><p>Removes the source file attribute.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="kotlinmetadataremover" tabindex="-1"><a class="header-anchor" href="#kotlinmetadataremover" aria-hidden="true">#</a> KotlinMetadataRemover</h3><p>Removes kotlin meta data from your kotlin class files.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="hideclassmembers" tabindex="-1"><a class="header-anchor" href="#hideclassmembers" aria-hidden="true">#</a> HideClassMembers</h3><p>Mark classes as synthetic to hide them from bad decompilers.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="removesignatures" tabindex="-1"><a class="header-anchor" href="#removesignatures" aria-hidden="true">#</a> RemoveSignatures</h3><p>Removes extended type information.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="localvariableremover" tabindex="-1"><a class="header-anchor" href="#localvariableremover" aria-hidden="true">#</a> LocalVariableRemover</h3><p>Removes local variables from your class.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="insnremover" tabindex="-1"><a class="header-anchor" href="#insnremover" aria-hidden="true">#</a> InsnRemover</h3><p>Removes the instructions const_. and tableswitch.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="enumoptimiser" tabindex="-1"><a class="header-anchor" href="#enumoptimiser" aria-hidden="true">#</a> EnumOptimiser</h3><p>Optimises enum values by removing clone call(s).</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="flow" tabindex="-1"><a class="header-anchor" href="#flow" aria-hidden="true">#</a> Flow</h3><p>Applies various obfuscation techniques such as flattening.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="numberpooler" tabindex="-1"><a class="header-anchor" href="#numberpooler" aria-hidden="true">#</a> NumberPooler</h3><p>Moves numbers into an array and obfuscates them.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="stringpooler" tabindex="-1"><a class="header-anchor" href="#stringpooler" aria-hidden="true">#</a> StringPooler</h3><p>Moves your strings into an array and obfuscates them.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="shufflefields" tabindex="-1"><a class="header-anchor" href="#shufflefields" aria-hidden="true">#</a> ShuffleFields</h3><p>Moves around fields.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="shufflemethods" tabindex="-1"><a class="header-anchor" href="#shufflemethods" aria-hidden="true">#</a> ShuffleMethods</h3><p>Moves around methods.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h3 id="shuffleclasses" tabindex="-1"><a class="header-anchor" href="#shuffleclasses" aria-hidden="true">#</a> ShuffleClasses</h3><p>Moves around classes.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Below is a fully functional example configuration file with some zProtect transformers enabled and some disabled.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">outputJar</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">output.jar</span></span>
<span class="line"><span style="color:#569CD6;">libraries</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#569CD6;">exclusions</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#CE9178;">org/</span></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#CE9178;">net/</span></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#CE9178;">me/</span></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#CE9178;">redis</span></span>
<span class="line"><span style="color:#569CD6;">watermark</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">FieldRenamer</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">MethodRenamer</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#569CD6;">ClassRenamer</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#569CD6;">ClassRenamerPath</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;&#39;</span></span>
<span class="line"><span style="color:#569CD6;">LocalVariableRenamer</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#569CD6;">DecompilerCrasher</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">BadAnnotationCrasher</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">AntiDebug</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">LineNumberRemover</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">SourceDebugRemover</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">SourceFileRemover</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">KotlinMetadataRemover</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">HideClassMembers</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">HideFields</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">HideMethods</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">RemoveSignatures</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">LocalVariableRemover</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">InsnRemover</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">EnumOptimiser</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">Flow</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">NumberPooler</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#569CD6;">StringPooler</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">ShuffleFields</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#569CD6;">ShuffleMethods</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,102);function D(v,f){const s=p("ExternalLinkIcon");return r(),l("div",null,[c,d,e("p",null,[h,e("a",u,[m,o(s)]),b]),y])}var g=n(t,[["render",D],["__file","config.html.vue"]]);export{g as default};
