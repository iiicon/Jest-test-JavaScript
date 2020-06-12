# Jest-test-JavaScript
使用 Jest 测试 Javascript 文件

## <<重构>> 名言

- 重构前，先检查自己是否有一套可靠的测试集，这些测试必须要有自我检验能力
- 重构技术就是以微小的步伐修改程序。如果你犯下错误，很容易便可发现它
- 傻瓜都能写出计算机可以理解的代码。唯有能写出人类容易理解的代码的，才是优秀的程序员
- 编程时，需要遵循营地法则：保证你离开时的代码库一定比来时更健康


## statement 重构过程

- 分解 statement 函数
- 移除 play 临时变量，以查询取代
- 提炼计算观众量积分的逻辑
- 移除format变量 (将函数赋值为临时变量，改为一个明确的函数)
- 移除观众量积分总和 (提炼函数和应用内联变量) -> 这两部称为以查询取代临时变量？
- 拆分计算阶段和格式化阶段
- 分离为两个文件（两个阶段）
- 按类型重组计算过程，使用多态计算器来提供数据

## 重构技巧
- 提炼函数
- 内联变量
- 搬移函数
- 以管道取代循环
- 以多态取代条件表达式

