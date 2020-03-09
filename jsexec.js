const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
class JSExec {
    getInfo() {
        return {
            id: 'someBlocks',
            name: 'JS Execution',
            blocks: [
                {
                    opcode: 'evalexpr',
                    blockType: BlockType.REPORTER,
                    text: 'evaluate [expr]',
                    arguments: {
                        expr: {
                            type: ArgumentType.STRING,
                            defaultValue: '1 + 1'
                        }
                    }
                },
				{
                    opcode: 'runcode',
                    blockType: BlockType.COMMAND,
                    text: 'run [code]',
                    arguments: {
                        code: {
                            type: ArgumentType.STRING,
                            defaultValue: ''
                        }
                    }
                }
            ]
        };
    }
    runcode(args) {
		eval(args.code);
	}
	evalexpr(args) {
		return eval(args.code);
	}
}
Scratch.extensions.register(new JSExec());