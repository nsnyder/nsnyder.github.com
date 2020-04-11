branch=`git symbolic-ref HEAD | sed -e "s#^refs/heads/##"`

if [ -f .git/refs/remotes/origin/$branch ]
then
  exit 0
fi

# If we don't have a head on the remote, push and
# save the trouble of setting the head later.
git push -u origin $branch