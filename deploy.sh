#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress
mkdir build
mkdir build/v1
cp -rf dist/* build/v1
cd build


# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:SoulLyoko/soullyoko.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:SoulLyoko/vue-tianditu.git master:gh-pages
git push -f https://github.com/SoulLyoko/vue-tianditu.git master:gh-pages

rm -r dist
rm -r build
cd -