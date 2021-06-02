# Git Reference

## Basic

![git](https://user-gold-cdn.xitu.io/2019/8/21/16cb4c6ab0579cab?imageView2/0/w/1280/h/960/format/png)

General code commit process:<br>
`git status` -> `git add .` -> `git commit -m "提交描述"` -> `git push`

#### Problem Solved

* 当你改乱了工作区某个文件，想直接丢弃修改时 `git checkout -- file`
* 已经添加到暂存区 `git reset HEAD <file>` 再使用上一步
* 更改commit备注信息 `git commit --amend -m "a"`
* 漏提交 `git add <file>` `git commit --amend --no-edit`
* 错提交 `git reset --soft HEAD~1` --hard 会同时重置暂存区和工作区 commit_id 回退到指定版本
* git revert `HEAD 前一次 HEAD^ 前前次 commit_id 指定版本` 实质为一次逆向commit


#### 使用SSH来远程登录RSA秘钥验证

```
git config --list // 查看是否设置了user.name与user.email，没有的话，去设置
// 设置全局的user.name与user.email
git config --global user.name "XX"
git config --global user.email "XX"

ssh-keygen 默认rsa 等同于 -t rsa
-C 是注释文字，比如邮箱

```

#### frequently used command

* 新建一个分支，但依然停留在当前分支  
$ git branch [branch-name]

* 新建一个分支，并切换到该分支  
$ git checkout -b [branch]

* 删除分支  
$ git branch -d [branch-name]  
$ git branch -dr [remote/branch]  
$ git push origin --delete [branch-name]

* 显示有变更的文件  
$ git status

* 恢复暂存区的所有文件到工作区  
$ git checkout .

---
* 使用 Git 下载指定分支命令为：git clone -b 分支名仓库地址
* 拉取远程新分支 git checkout -b serverfix origin/serverfix
* 合并本地分支 git merge hotfix (将 hotfix 分支合并到当前分支)
* 合并远程分支 git merge origin/serverfix
* 删除本地分支 git branch -d hotfix (删除本地 hotfix 分支)
* 删除远程分支 git push origin --delete serverfix
* 上传新命名的本地分支：git push origin newName
* 创建新分支：git branch branchName (创建名为 branchName 的本地分支)
* 切换到新分支：git checkout branchName (切换到 branchName 分支)
* 创建并切换分支：git checkout -b branchName (相当于以上两条命令的合并)
* 查看本地分支：git branch
* 查看远程仓库所有分支：git branch -a
* 本地分支重命名： git branch -m oldName newName
* 重命名远程分支对应的本地分支：git branch -m oldName newName
* 把修改后的本地分支与远程分支关联：git branch --set-upstream-to origin/newName


#### 优化操作（Caveat）
`git pull --rebase` `git merge --no-ff`
其实和直接使用 git pull git merge 得到的代码应该是一样。

使用 git pull --rebase 主要是为是将提交约线图平坦化，而 git merge --no-ff 则是刻意制造分叉。


#### Other

`git add . -A --all` 都是一样的

`git commit -a` 不会提交untracked files, 除非IDE自动帮你add

`fork` github操作 相应的还有 `pull request`