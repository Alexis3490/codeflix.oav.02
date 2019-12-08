const {duplicate, transform } = require ('./streambox')

if(process.argv.length !== 3)
{
    console.log('usage : node main.js <FILENAME>')
    process.exit(1)
}

const filename = process.argv[2];
//duplicate(filename)

transform(filename, 'Ch0pin', function () {
    return 'Fabian'
})