let displayheader = (variables)=>{


    let string = '<thead>\n<tr>\n'

    for (let i=0;i<variables.length;i++){

        string += `\n<th> ${variables[i]} </th>`
    }

    string+='\n</tr>\n</thead>'

    return string
}

exports.displayheader=displayheader