#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add deploy.sh
git add dist -f
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git subtree push --prefix dist https://github.com/amoschoomy/my-biography.git gh-pages

cd /