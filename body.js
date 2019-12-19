
let displaybody = (variables,variable)=>{

    let string = '\n<tbody>\n{\n'

    let item = variable.substring(0, variable.length - 1)

    string+=` this.state.${variable}.map(\n`
    string+=`${item} =>\n`
    //<tr key={course.id}>
    string+= `<tr key = {${item}.${variables[0]}}>\n`
    //<td>{course.id}</td>
    
    for(let i=0;i<variables.length;i++)
        string+=`<td>{${item}.${variables[i]}}</td>\n`

        //<td><button onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>

    let actions = ['update','delete']

    for(let i=0;i<actions.length;i++)
    string+=`\n<td><button onClick={() => this.${actions[i]}(${item}.${variables[0]})}>${actions[i]}</button></td>`

    string+='\n</tr>\n)\n}\n</tbody>\n'
    return string 
}

exports.displaybody=displaybody