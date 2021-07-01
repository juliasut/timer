

const args = process.args.slice(2);

args = args.map( x => Number(x));

const simpleTimer = function (args) {

  for (let arg of args) {
    if (!NaN(arg) && (arg) > 0) {
      setTimeout(() => {
        process.stdout.write(`timer's up!`)
      }, arg * 1000)
    }
  }
}


simpleTimer(args)
