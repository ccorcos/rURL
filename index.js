#! /usr/bin/env node

const minimist = require('minimist')
const argv = minimist(process.argv.slice(2))

function help() {
  console.log('Usage: rurl <url>')
}

if (argv.h || argv.help) {
  help()
  process.exit(0)
}

const url = argv['_'][0]
if (!url) {
  console.error('no url provided')
  process.exit(1)
}

const jsdom = require('jsdom')

// const virtualConsole = jsdom.createVirtualConsole().sendTo(console)
const virtualConsole = jsdom.createVirtualConsole()

virtualConsole.on("jsdomError", function (error) {
  console.error(error.stack, error.detail)
  process.exit(1)
})

jsdom.env({
	url,
  virtualConsole,
	features: {
    FetchExternalResources: ["script", "frame", "iframe", "link", "img"],
    // FetchExternalResources: ["script", "frame", "iframe"],
		ProcessExternalResources: ["script"],
		SkipExternalResources: false
	},
	done: function (err, window) {
		if (err) {
			console.error(err)
      process.exit(1)
		} else {
			const output = jsdom.serializeDocument(window.document)
			console.log(output)
			window.close()
      process.exit(0)
		}
	},
})
