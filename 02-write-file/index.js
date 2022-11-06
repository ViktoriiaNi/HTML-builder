const fs = require('fs')
const path = require('path');
const { stdin, stdout } = process;

fs.writeFile(path.join(__dirname, 'text.txt'), '', err => {if (err) throw err});
stdout.write('Привеееет, так рада тебя тут видеть!\nНу рассказываа, как дела у тебя?\n');

stdin.on('data', data => {
    if (data.toString().includes('exit')) process.exit();
    fs.appendFile(path.join(__dirname, 'text.txt'), data, err => {if (err) throw err});
});

process.on('exit', () => stdout.write('Интересно конечно, ну ладно, мне на работу пора :( Пиши звони\n'));
process.on('SIGINT', () => process.exit());