#!/bin/bash
cd backend
echo "starting nodemon backend"
nodemon start
if [ $? -eq 0 ]; then
  echo "React app started successfully."
else
  echo "React app failed to start."
fi
