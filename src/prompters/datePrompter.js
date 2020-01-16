const inquirer = require('inquirer');

inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'));

const datePrompter = async (part, message) => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'datetime',
                name: `${part}Date`,
                message,
                format: ['mm', '/', 'dd', '/', 'yyyy', ' ', 'hh', ':', 'MM'],
            },
        ])
        .then((answers) => answers);
    return answer;
};


export default datePrompter;
