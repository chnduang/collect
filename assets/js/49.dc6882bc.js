(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{341:function(s,n,a){"use strict";a.r(n);var t=a(4),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"mac下自动保存-git-ssh-key-密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mac下自动保存-git-ssh-key-密码"}},[s._v("#")]),s._v(" mac下自动保存 Git SSH Key 密码")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("首先尝试执行以下命令:\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" credential.helper osxkeychain\n\n如果以上方法没有生效,则执行\nssh-add "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-K")]),s._v("\n或\nssh-add ~/.ssh/id_rsa\n手动添加 Key 到 keychain中\n\n但每次添加后，只在当前会话中有效，如果重启会话，会要求重新输入密码\n\n为了不用每次都要输入密码，可以把命令卸载.bashrc 或者.zshrc 中，使得每次启动终端时，可以自动执行\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions")]),s._v("\n\nname: Node.js CI\n\non:\n  push:\n    branches: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  pull_request:\n    branches: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\njobs:\n  build:\n")])])]),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("runs-on: ubuntu-latest\n\nstrategy:\n  matrix:\n    node-version: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(".x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nsteps:\n- name: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  uses: actions/checkout@v2\n\n- name: Use Node.js "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ matrix.node-version }")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  uses: actions/setup-node@v1\n  with:\n    node-version: "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ matrix.node-version }")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n- name: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" hexo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  run: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n    \n- name: hexo generate public files"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  run: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" clean\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n \n- name: hexo deploy "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n  env:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GH_TOKEN: ${{ secrets.GH_TOKEN }}")]),s._v("\n    HEXO_DEPLOY_PRIVATE_KEY: "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${{ secrets.HEXO_DEPLOY_PRIVATE_KEY }")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  run: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" ~/.ssh/\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HEXO_DEPLOY_PRIVATE_KEY")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.ssh/id_rsa \n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" ~/.ssh/id_rsa\n    ssh-agent "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n    ssh-add ~/.ssh/id_rsa\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhouqd"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhouqd1997@163.com"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" credential.helper osxkeychain\n\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" deploy\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);