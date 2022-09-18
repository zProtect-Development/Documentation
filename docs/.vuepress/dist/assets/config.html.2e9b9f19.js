import{_ as r,o as p,c,a as s,b as a,e,d as i,r as l}from"./app.fe610a35.js";const t={},d=s("h1",{id:"configuration-options",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configuration-options","aria-hidden":"true"},"#"),e(" Configuration Options")],-1),h=s("h2",{id:"introduction",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),e(" Introduction")],-1),u=e("zProtect uses the "),m={href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"},D=e("YAML"),v=e(" data serialization language for configuring the behavior of the zProtect obfuscator. It is possible to hand-write the configuration file to upload on the web interface, however, you may wish to use the configurator tool in the zProtect dashboard area."),y=i(`<h2 id="value-types" tabindex="-1"><a class="header-anchor" href="#value-types" aria-hidden="true">#</a> Value Types</h2><p>There are a few value types used in the zProtect configuration, which are listed below.</p><h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> Boolean</h3><p>Only accepts <code>true</code> and <code>false</code> as the value.</p><p>For example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># A key with value as true</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="simple-option" tabindex="-1"><a class="header-anchor" href="#simple-option" aria-hidden="true">#</a> Simple Option</h3><p>A <a href="#string-array"><code>string array</code></a> with a <a href="#boolean"><code>boolean</code></a> value <code>enabled</code>.</p><p>For example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># Option enabled</span></span>
<span class="line"><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="option-with-path" tabindex="-1"><a class="header-anchor" href="#option-with-path" aria-hidden="true">#</a> Option with Path</h3><p>A <a href="#string-array"><code>string array</code></a> with a <a href="#boolean"><code>boolean</code></a> key <code>enabled</code> and a <a href="#string"><code>string</code></a> key <code>path</code>.</p><p>For example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># Option enabled</span></span>
<span class="line"><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">path</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">something</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><p>These options specify runtime information and general configuration.</p><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h3><p>Name of the obfuscated JAR file.</p><p>Value type: <a href="#string"><code>string</code></a></p><h3 id="libraries" tabindex="-1"><a class="header-anchor" href="#libraries" aria-hidden="true">#</a> Libraries</h3><p>Dependencies required to obfuscate your jar to prevent &quot;Not found&quot; errors.</p><p>Value type: <a href="#string-array"><code>string array</code></a></p><h3 id="exclusions" tabindex="-1"><a class="header-anchor" href="#exclusions" aria-hidden="true">#</a> Exclusions</h3><p>Class files and directories that should be ignored by the obfuscator. They will not have any obfuscation applied to them.</p><p>Value type: <a href="#string-array"><code>string array</code></a></p><h3 id="forceexclusions" tabindex="-1"><a class="header-anchor" href="#forceexclusions" aria-hidden="true">#</a> ForceExclusions</h3><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Transformer priority will fix this in the future.</p></div><p>Class files and directories that should be blacklisted by the obfuscator before processing. This will prevent issues with exclusions if the regular exclusions fail for some unknown reason.</p><p>Value type: <a href="#string-array"><code>string array</code></a></p><h3 id="watermark" tabindex="-1"><a class="header-anchor" href="#watermark" aria-hidden="true">#</a> Watermark</h3><p>Adds a watermark to the obfuscated JAR for advertisement. Only removable for users with a Commercial License.</p><p>Value type: <a href="#boolean"><code>boolean</code></a></p><h2 id="transformers" tabindex="-1"><a class="header-anchor" href="#transformers" aria-hidden="true">#</a> Transformers</h2><p>These options specify wherether to enable available obfuscation techniques.</p>`,42),b={id:"antidebug",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#antidebug","aria-hidden":"true"},"#",-1),C=e(" AntiDebug "),g=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"Warning!"),s("p",null,"This option may cause issues with certain programs.")],-1),x=s("p",null,"Blocks debugging options on terminal.",-1),_=s("p",null,[e("Value type: "),s("a",{href:"#simple-option"},[s("code",null,"simple option")])],-1),k={id:"decompilercrasher",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#decompilercrasher","aria-hidden":"true"},"#",-1),A=e(" DecompilerCrasher "),R=i(`<div class="custom-container tip"><p class="custom-container-title">Warning!</p><p>This option is very buggy at the moment and will likely cause problems. You are strongly advised not to use this.</p></div><p>Manipulates instructions to crash decompilers.</p><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="badannotationcrasher" tabindex="-1"><a class="header-anchor" href="#badannotationcrasher" aria-hidden="true">#</a> BadAnnotationCrasher</h3><p>Manipulates annotations to break bad decompilers. This should not cause any major issues.</p><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="flow" tabindex="-1"><a class="header-anchor" href="#flow" aria-hidden="true">#</a> Flow</h3><p>Adds fake jumps, and such to code.</p><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h2 id="renamers" tabindex="-1"><a class="header-anchor" href="#renamers" aria-hidden="true">#</a> Renamers</h2><p>Renames various components of your jar&#39;s contents.</p><h3 id="classrenamer" tabindex="-1"><a class="header-anchor" href="#classrenamer" aria-hidden="true">#</a> ClassRenamer</h3><p>Renames class files.</p><p>Value type: <a href="#option-with-path"><code>option with path</code></a></p><h3 id="fieldrenamer" tabindex="-1"><a class="header-anchor" href="#fieldrenamer" aria-hidden="true">#</a> FieldRenamer</h3><p>Renames field names.</p><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="localvariablerenamer" tabindex="-1"><a class="header-anchor" href="#localvariablerenamer" aria-hidden="true">#</a> LocalVariableRenamer</h3><p>Renames local variables.</p><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="methodrenamer" tabindex="-1"><a class="header-anchor" href="#methodrenamer" aria-hidden="true">#</a> MethodRenamer</h3><p>Renames methods.</p><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h2 id="optimization" tabindex="-1"><a class="header-anchor" href="#optimization" aria-hidden="true">#</a> Optimization</h2><h3 id="enumoptimiser" tabindex="-1"><a class="header-anchor" href="#enumoptimiser" aria-hidden="true">#</a> EnumOptimiser</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="finalremover" tabindex="-1"><a class="header-anchor" href="#finalremover" aria-hidden="true">#</a> FinalRemover</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="hideclassmembers" tabindex="-1"><a class="header-anchor" href="#hideclassmembers" aria-hidden="true">#</a> HideClassMembers</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="insnremover" tabindex="-1"><a class="header-anchor" href="#insnremover" aria-hidden="true">#</a> InsnRemover</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="kotlinmetadataremover" tabindex="-1"><a class="header-anchor" href="#kotlinmetadataremover" aria-hidden="true">#</a> KotlinMetadataRemover</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="nopinsnremover" tabindex="-1"><a class="header-anchor" href="#nopinsnremover" aria-hidden="true">#</a> NOPInsnRemover</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="removesignatures" tabindex="-1"><a class="header-anchor" href="#removesignatures" aria-hidden="true">#</a> RemoveSignatures</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h2 id="poolers" tabindex="-1"><a class="header-anchor" href="#poolers" aria-hidden="true">#</a> Poolers</h2><h3 id="numberpooler" tabindex="-1"><a class="header-anchor" href="#numberpooler" aria-hidden="true">#</a> NumberPooler</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="stringpooler" tabindex="-1"><a class="header-anchor" href="#stringpooler" aria-hidden="true">#</a> StringPooler</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h2 id="shrinking" tabindex="-1"><a class="header-anchor" href="#shrinking" aria-hidden="true">#</a> Shrinking</h2><h3 id="linenumberremover" tabindex="-1"><a class="header-anchor" href="#linenumberremover" aria-hidden="true">#</a> LineNumberRemover</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="localvariableremover" tabindex="-1"><a class="header-anchor" href="#localvariableremover" aria-hidden="true">#</a> LocalVariableRemover</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="removeinnerclasses" tabindex="-1"><a class="header-anchor" href="#removeinnerclasses" aria-hidden="true">#</a> RemoveInnerClasses</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="sourcedebugremover" tabindex="-1"><a class="header-anchor" href="#sourcedebugremover" aria-hidden="true">#</a> SourceDebugRemover</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="sourcefileremover" tabindex="-1"><a class="header-anchor" href="#sourcefileremover" aria-hidden="true">#</a> SourceFileRemover</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h2 id="shufflers" tabindex="-1"><a class="header-anchor" href="#shufflers" aria-hidden="true">#</a> Shufflers</h2><h3 id="shufflefields" tabindex="-1"><a class="header-anchor" href="#shufflefields" aria-hidden="true">#</a> ShuffleFields</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="shufflemethods" tabindex="-1"><a class="header-anchor" href="#shufflemethods" aria-hidden="true">#</a> ShuffleMethods</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h3 id="shuffleclasses" tabindex="-1"><a class="header-anchor" href="#shuffleclasses" aria-hidden="true">#</a> ShuffleClasses</h3><p>Value type: <a href="#simple-option"><code>simple option</code></a></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Below is a fully functional example configuration file with some zProtect transformers enabled and some disabled.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># Blocks debugging options on terminal, may cause issues with certain programs.</span></span>
<span class="line"><span style="color:#569CD6;">AntiDebug</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Manipulates instructions to crash decompilers. Currently very buggy at the moment and will likely cause problems.</span></span>
<span class="line"><span style="color:#6A9955;"># Strongly advised not to use this.</span></span>
<span class="line"><span style="color:#569CD6;">DecompilerCrasher</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Manipulates annotations to break bad decompilers.</span></span>
<span class="line"><span style="color:#6A9955;"># This should not cause any major issues with Spigot jars.</span></span>
<span class="line"><span style="color:#569CD6;">BadAnnotationCrasher</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Adds fake jumps, and such to code.</span></span>
<span class="line"><span style="color:#569CD6;">Flow</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Renames various components of your jar&#39;s contents.</span></span>
<span class="line"><span style="color:#6A9955;"># Renames class files.</span></span>
<span class="line"><span style="color:#569CD6;">ClassRenamer</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">path</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Renames field names.</span></span>
<span class="line"><span style="color:#569CD6;">FieldRenamer</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Renames local variables.</span></span>
<span class="line"><span style="color:#569CD6;">LocalVariableRenamer</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Renames methods.</span></span>
<span class="line"><span style="color:#569CD6;">MethodRenamer</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Optimization</span></span>
<span class="line"><span style="color:#569CD6;">EnumOptimiser</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">FinalRemover</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">HideClassMembers</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">InsnRemover</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">KotlinMetadataRemover</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">NOPInsnRemover</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">RemoveSignatures</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Poolers</span></span>
<span class="line"><span style="color:#569CD6;">NumberPooler</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">StringPooler</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Shrinking</span></span>
<span class="line"><span style="color:#569CD6;">LineNumberRemover</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">LocalVariableRemover</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">RemoveInnerClasses</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">SourceDebugRemover</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">SourceFileRemover</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">enabled</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># Shufflers</span></span>
<span class="line"><span style="color:#569CD6;">ShuffleFields</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#569CD6;">ShuffleMethods</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#569CD6;">ShuffleClasses</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64);function V(E,S){const o=l("ExternalLinkIcon"),n=l("Badge");return p(),c("div",null,[d,h,s("p",null,[u,s("a",m,[D,a(o)]),v]),y,s("h3",b,[f,C,a(n,{type:"warning",text:"incompatibilities",vertical:"top"})]),g,x,_,s("h3",k,[w,A,a(n,{type:"danger",text:"issues",vertical:"top"})]),R])}var O=r(t,[["render",V],["__file","config.html.vue"]]);export{O as default};
