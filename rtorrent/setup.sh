#!/bin/bash

# Create rTorrent user
sudo useradd -g media rtorrent

# XML-RPC
svn co -q https://svn.code.sf.net/p/xmlrpc-c/code/stable /tmp/xmlrpc-c
cd /tmp/xmlrpc-c
./configure --disable-libwww-client --disable-wininet-client --disable-abyss-server --disable-cgi-server
make -j8
sudo make install

# LibTorrent
cd /tmp
curl http://rtorrent.net/downloads/libtorrent-0.13.6.tar.gz | tar xz
cd libtorrent-0.13.6
./autogen.sh
./configure --prefix=/usr --disable-debug --with-posix-fallocate
make -j8
sudo make install

# rTorrent
cd /tmp
curl http://rtorrent.net/downloads/rtorrent-0.9.6.tar.gz | tar xz
cd rtorrent-0.9.6
./autogen.sh
./configure --with-xmlrpc-c
make -j8
sudo make install
sudo ldconfig

# Create Folders
sudo mkdir -p /opt/rtorrent/{session,logs}
sudo cp -r /opt/{.autodl,.irssi} /home/rtorrent/{.autodl,.irssi}
sudo chown -R rtorrent:rtorrent /home/rtorrent/{.autodl,.irssi}

# Start on Boot w/ SystemD
sudo cp /opt/rtorrent/rtorrent.service /etc/systemd/system/rtorrent.service
sudo systemctl enable rtorrent.service

# Autodl-Irssi
sudo cp /opt/rtorrent/autodl-irssi.service /etc/systemd/system/autodl-irssi.service
sudo systemctl enable autodl-irssi.service