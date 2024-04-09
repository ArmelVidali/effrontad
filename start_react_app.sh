#!/bin/bash

echo "swiching to dashboard client folder"
cd client/dashboard
echo "starting react app"
npm run dev
if [ $? -eq 0 ]; then
  echo "React app started successfully."
else
  echo "React app failed to start."
fi
