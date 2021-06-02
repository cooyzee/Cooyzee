## SSH

## 默认目录

用户家目录
```
C:\Users\cooyz\.ssh
~/.ssh
```

## 生成key

```
ssh-keygen -t rsa
```

## multi host

```
touch ~/.ssh/config

...
#sxb
Host gitlab
  HostName git.local.sxbcar.com
  User git
  Port 10022
  IdentityFile C:\Users\cooyz\.ssh\cooyzee_rsa

#cooyzee
Host github.com
	HostName github.com
	User cooyzee
	IdentityFile C:\Users\cooyz\.ssh\github
```
