

const args = process.args.slice(2);

const simpleTimer = function (args) {

  for (let arg of args) {
    if (!NaN(Number(arg)) && (Number(arg)) > 0) {
      setTimeout(() => {
        process.stdout.write(`timer's up!`)
      }, arg * 1000)
    }
  }
}


simpleTimer(args)
