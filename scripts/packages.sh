#!/bin/bash

sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install php-fpm \
                     php-curl \
                     php-mysql \
                     php-sqlite3 \
                     php-zip \
                     php-xml \
                     git \
                     ufw \
                     gufw \
                     vim \
                     nginx-full \
                     build-essential \
                     subversion \
                     autoconf \
                     g++ \
                     gcc \
                     ntp \
                     curl \
                     comerr-dev \
                     pkg-config \
                     cfv \
                     libtool \
                     libssl-dev \
                     libncurses5-dev \
                     ncurses-term \
                     libsigc++-2.0-dev \
                     libcppunit-dev \
                     libcurl3 \
                     libcurl4-openssl-dev \
                     zip \
                     unzip \
                     zlib1g-dev \
                     ffmpeg \
                     mediainfo \
                     unrar \
                     rar \
                     p7zip-full \
                     p7zip-rar \
                     irssi \
                     libarchive-zip-perl \
                     libnet-ssleay-perl \
                     libhtml-parser-perl \
                     libxml-libxml-perl \
                     libdigest-sha-perl \
                     libjson-perl \
                     libjson-xs-perl \
                     libxml-libxslt-perl \
                     screen \
                     apt-transport-https \
                     ca-certificates \
                     software-properties-common \
                     bzip2
                     
                     
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb http://download.mono-project.com/repo/ubuntu xenial main" | sudo tee /etc/apt/sources.list.d/mono-official.list
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

sudo apt-get update && sudo apt-get install -y \
                                    libmono-cil-dev \
                                    nodejs
                                    
sudo npm install node-gyp -g                                    
sudo npm install wetty -g
sudo npm install cloudcmd -g