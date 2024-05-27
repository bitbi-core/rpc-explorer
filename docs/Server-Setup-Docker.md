### Setup of https://expolorer.bitbi.org on Ubuntu 20.04

	# update and install packages
	apt update
	apt upgrade
	apt install docker.io
	
	# get source, npm install
	git clone https://github.com/bitbi-core/rpc-explorer.git
	cd rpc-explorer
	
	# build docker image
	docker build -t btb-rpc-explorer .

	# run docker image: detached mode, share port 3002, sharing config dir, from the "btb-rpc-explorer" image made above
	docker run --name=btb-rpc-explorer -d -v /host-os/env-dir:/container/env-dir --network="host" btb-rpc-explorer
	