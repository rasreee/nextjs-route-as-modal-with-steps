#!/bin/zsh

if [[ -f $1 || -d $1 ]]; then
  rm -rf $1
fi