const fs = require('fs')
const path = require('path')
const {Transform} = require('stream')

function duplicate(fileName)
{
    const ext = path.basename(fileName)
    const base = path.basename(fileName, ext)
    const outputFileName = `${base}.duplicate${ext}`

    const rstream = fs.createReadStream(fileName)
    const wstream = fs.createWriteStream(outputFileName)

    rstream.pipe(wstream)
    console.log(`Filename ${outputFileName} sucessfully duplicate`)
}

function transform(fileName, re, fn)
{
    const outputFileName= getDuplicateName(fileName)

    const rstream = fs.createReadStream(fileName);
    const wstream = fs.createWriteStream(outputFileName)

    const tstream = new stream.Transform({
        transform(chunk, encoding, callback){
            this.push(chunk.toString().replace('Ch0pin', 'Fabian'))
            callback()
        }
    })

    rstream.pipe(tstream).pipe(wstream)
}

module.exports =
    {
        duplicate,
        transform
    }