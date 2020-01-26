const inquirer = require('inquirer');
var dateFormat = require('dateformat');

inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'));

const datePrompter = async (message) => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'datetime',
                name: `date`,
                message,
                format: ['mm', '/', 'dd', '/', 'yyyy', ' ', 'HH', ':', 'MM' ]
            },
        ])
        .then((answers) => { return dateFormat(answers.date, "isoDateTime")});
    return answer;
};


export default datePrompter;
