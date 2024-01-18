#!/usr/bin/env sh

set -e

# build
npm run build

# navigate into the build output directory
cd dist

echo 'Please Enter a Commit Message: '

read commitmsg

git init
git config --global user.email "lewsley-r@ulster.ac.uk"
git config --global user.name "lewsley-r"

git add -A
git commit -m "$commitmsg"

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:lewsley-r/lewsley-r.github.io.git 

cd -
