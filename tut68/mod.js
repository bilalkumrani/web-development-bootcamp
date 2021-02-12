//we will create a custom module and will export it so our own written module can be used

function greet(name)
{
    return `Hi ${name} this is our custom Module`;
}

//exporting it otherwise it will be not accessable in other files as we write require there

module.exports = greet;
//if we want to export more than one functions we will create an object and then send it
