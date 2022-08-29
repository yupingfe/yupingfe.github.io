# 使用git revert处理merge commit

revert 可以取消指定的某次提交内容。

## revert merge commit

当讨论 revert 时，需要分两种情况，因为 commit 分为两种：
1. 一种是常规的 commit，也就是使用 git commit 提交的 commit
2. 另一种是 merge commit，在使用 git merge 合并两个分支之后，你将会得到一个新的 merge commit

在revert 一次 merge commit的时候，会有如下提示

```
error: 提交 251782269f479ae5138b54e6b016f3370900366c 是一个合并提交但未提供 -m 选项。
```

这是因为直接使用 git revert ，git 也不知道到底要撤除哪一条分支上的内容，这时需要指定一个 parent 标识出"主线"，主线的内容将会保留，而另一条分支的内容将被 revert。

**如何查看并指定parent？**

使用 git show 命令可以查看 commit 的详细信息
```
commit 251782269f479ae5138b54e6b016f3370900366c
Merge: a6050bf da1d5fc
```
这代表该 merge commit 是从 a6050bf 和 da1d5fc 两个 commit 合并过来的。如果查看常规的commit，是没有merge这一行的！

这时根据情况，找到主线分支的commit id，确定为第一个还是第二个，因为 -m 选项接收的参数是一个数字，数字取值为 1 和 2，如上面的主线为 a6050bf，那么就使用

```
git revert -m 1 a6050bf
```

## revert之后重新上线需要注意

有时，将开发后的feat分支merge到dev，但后来处于某些原因代码需要撤回，那么就需要对该merge执行以上步骤的revert，但该代码修改后最终可能还是会上线，之后想重新合并到dev，只需要再 执行一次merge即可。

**需要注意的是**由于之前在主分支上执行过merge操作，因此之前revert过的代码不会被完整的merge，因此需要对之前revert的那次提交再次执行revert，之后再执行merge。
