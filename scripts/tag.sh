cd ..

TO=$(sed 's/.*"version": "\(.*\)".*/\1/;t;d' package.json)

git tag v$TO
git push origin v$TO