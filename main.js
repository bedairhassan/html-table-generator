generateTable = (variables,variable)=>{

    let string='<table>\n'

    string+=require('./header').displayheader(variables)
    string += require('./body').displaybody(variables,variable)
    
    return string + '\n</table>'
}

let variables = ['id','description']
console.log(generateTable(variables,'data'))

exports.generateTable = generateTable