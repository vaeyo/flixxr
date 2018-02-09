#!/bin/bash

export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8
export LC_CTYPE="en_US.UTF-8"

TORRENT_PATH=$1
TORRENT_NAME=$2
TORRENT_LABEL=$3

# Subtitle language
SUBLANG=en
SKIP_EXTRACT=n
MUSIC=y

if [[ $TORRENT_LABEL == "TV" ]] || [[ $TORRENT_LABEL == "Movies" ]]
then
        filebot -script /opt/filebot/amc.groovy --def music=$MUSIC --def skipExtract=$SKIP_EXTRACT -non-strict --encoding utf8 --def ut_kind=multi --log all --log-file amc.log --def "ut_dir=$TORRENT_PATH" "ut_title=$TORRENT_NAME" --output "$HOME/media" --action symlink --conflict override --def subtitles=$SUBLANG --def artwork=false --def extractfolder="$HOME/torrents/extracted" &
else
       exit
fi