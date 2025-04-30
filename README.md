# Baby Tracking iOS Shortcuts

This repository contains four iOS shortcuts to track your baby's eating and pooping events.

## Available Shortcuts

1. **Record Baby Eat** - Records a new feeding event
2. **Get Last Baby Eat** - Shows the timestamp of the last feeding
3. **Record Baby Poop** - Records a new poop event
4. **Get Last Baby Poop** - Shows the timestamp of the last poop event

## Setup Instructions

### Prerequisites
- The Node.js server (from index.js) must be running on a computer in your network
- You must know the IP address of that computer
- Your iPhone/iPad must be on the same network as the server

### Installation Steps

1. Replace `YOUR_SERVER_IP` in each shortcut file with your actual server IP address 
   (e.g., "192.168.1.100")

2. Transfer the shortcut files to your iOS device:
   - AirDrop
   - iCloud Drive
   - Email
   - Or any other file transfer method

3. On your iOS device:
   - Open each file
   - When prompted, tap "Add Shortcut"
   - The shortcuts will be added to your Shortcuts app

4. For easier access:
   - Add these shortcuts to your home screen
   - Add as widgets
   - Or use them via Siri

## Usage

- Simply tap the shortcut icon to run it
- For feeding and poop events, you'll get a confirmation notification
- For "last event" shortcuts, you'll see the timestamp of the last recorded event 