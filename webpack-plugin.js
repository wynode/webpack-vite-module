class BeforeComponentLoadPlugin {
  apply(compiler) {
      // 使用 'compilation' 钩子，处理每次重新编译
      compiler.hooks.compilation.tap('BeforeComponentLoadPlugin', (compilation) => {
          // 使用 'buildModule' 钩子，在模块构建之前触发
          compilation.hooks.buildModule.tap('BeforeComponentLoadPlugin', (module) => {
              // 检查模块是否是你感兴趣的类型（例如 JavaScript 模块）
              if (module.constructor.name === 'JavascriptModule') {
                  console.log(`我要加载 ${module.resource} 组件了`);
              }
          });
      });
  }
}

module.exports = BeforeComponentLoadPlugin;