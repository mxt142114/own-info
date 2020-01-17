import React from 'react'
import { Descriptions } from 'antd'

export default () => {

    return (
        <div className="pages-skill-typeScript">
            <Descriptions title="什么是TypeScript：" column={1}>
                <Descriptions.Item>TypeScript是microsoft开发和维护的一种面向对象的编程语言。它是JavaScript的超集，包含了JavaScript的所有元素，可以载入JavaScript代码运行，并扩展了JavaScript的语法。</Descriptions.Item>
            </Descriptions>
            <Descriptions title="为什么要使用TypeScript：" column={1}>
                <Descriptions.Item>由于JavaScript是一门弱类型语言，变量的数据类型具有动态性，只有执行时才能确定变量的类型，这种后知后觉的认错方法会让开发者成为调试大师，但无益于编程能力的提升，还会降低开发效率。 TypeScript的类型机制可以有效杜绝由变量类型引起的误用问题，而且开发者可以控制对类型的监控程度，是严格限制变量类型还是宽松限制变量类型，都取决于开发者的开发需求。添加类型机制之后，副作用主要有两个：增大了开发人员的学习曲线，增加了设定类型的开发时间。总体而言，这些付出相对于代码的健壮性和可维护性，都是值得的。</Descriptions.Item>
            </Descriptions>
            <Descriptions title="TypeScript的使用方法：" column={1}>
                <Descriptions.Item>npm i -g typescript 全局安装TypeScript，会在全局环境下安装 tsc 命令，安装以后我们就可以在任何终端执行tsc命令了，通过 tsc 文件名.ts将文件编译为js文件。</Descriptions.Item>
            </Descriptions>
            <Descriptions title="TypeScript的优势：" column={1} bordered>
                <Descriptions.Item label="静态输入">静态类型化是一种功能，可以在开发人员编写脚本时检测错误。查找并修复错误是当今开发团队的迫切需求，有了这项功能，就会允许开发人员编写更健壮的代码并对其进行维护以便使得代码质量更好、更清晰</Descriptions.Item>
                <Descriptions.Item label="大型的项目开发">有时为了改进项目，需要对代码库进行小的增量更改，这些小小的变化可能会产生严重的、意想不到的后果，因此有必要撤销这么变化。使用TypeScript工具来进行重构变的更容易、快捷</Descriptions.Item>
                <Descriptions.Item label="更好的协作">当开发大型项目时，会有许多开发人员，此时乱码和错误的几率就会增加，类型安全是一种在编码期间检测错误的功能，而不是在编译项目时检测错误，这为开发团队创建了一个更高效的编码和调试过程</Descriptions.Item>
                <Descriptions.Item label="更强的生产力">干净的EcmaScript6代码，自动完成和动态输入等因素有助于提高开发人员的工作效率这么功能也有助于编译器创建优化的代码</Descriptions.Item>
            </Descriptions>
            <Descriptions title="JavaScript的优势：" column={1} bordered>
                <Descriptions.Item label="人气">JavaScript的开发者社区仍然是巨大而活跃的，在社区中可以很方便地找到大量成熟的开发项目和可用资源</Descriptions.Item>
                <Descriptions.Item label="学习曲线">由于JavaScript语言发展的较早，也较为成熟，所以仍有一大批开发人员坚持使用他们熟悉的脚本语言JavaScript，而不是学习TypeScript</Descriptions.Item>
                <Descriptions.Item label="本地浏览器支持">TypeScript代码需要被编译（输出JavaScript 代码），这是TypeScript代码执行时的一个额外的步骤</Descriptions.Item>
                <Descriptions.Item label="不需要注释">为了充分利用TypeScript特性，开发人员需要不断注释他们的代码，这可能会使项目效率降低</Descriptions.Item>
                <Descriptions.Item label="灵活性">有些开发人员更喜欢JavaScript的灵活性</Descriptions.Item>
            </Descriptions>
            <Descriptions title="基础类型：" column={1} />
            <img
                alt=""
                width={800}
                height="auto"
                src={require('@/images/typeScript/ts1.png')}
            />
            <Descriptions title="函数：" column={1} />
            <img
                alt=""
                width={800}
                height="auto"
                src={require('@/images/typeScript/ts2.png')}
            />
            <Descriptions title="类：" column={1} />
            <img
                alt=""
                width={800}
                height="auto"
                src={require('@/images/typeScript/ts3.png')}
            />
            <Descriptions title="接口：" column={1}>
                <Descriptions.Item>TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。</Descriptions.Item>
            </Descriptions>
            <img
                alt=""
                width={800}
                height="auto"
                src={require('@/images/typeScript/ts4.png')}
            />
            <img
                alt=""
                width={800}
                height="auto"
                src={require('@/images/typeScript/ts5.png')}
            />
            <Descriptions title="枚举：" column={1}>
                <Descriptions.Item>使用枚举我们可以定义一些带名字的常量。使用枚举可以清晰地表达意图或创建一组有区别的用例。TypeScript支持数字的和基于字符串的枚举。</Descriptions.Item>
            </Descriptions>
            <img
                alt=""
                width={800}
                height="auto"
                src={require('@/images/typeScript/ts6.png')}
            />
            <Descriptions title="泛型：" column={1}>
                <Descriptions.Item>软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，泛型在创建大型系统时为你提供了十分灵活的功能。</Descriptions.Item>
            </Descriptions>
            <img
                alt=""
                width={800}
                height="auto"
                src={require('@/images/typeScript/ts7.png')}
            />
        </div>
    )
}
