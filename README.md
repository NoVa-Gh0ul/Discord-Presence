# Discord-Presence

## Overview

An easily customizable Discord Rich Presence to make your account status pop out even more! This tool is very easy to setup and looks great!

## Features

- Full Customization
- 5 minute setup
- Great Look!

## Installation + Setup

1. Clone this GitHub Repository at https://github.com/NoVa-Gh0ul/Discord-Presence

2. In the terminal, run `npm install`

3. Go to https://discord.com/developers/applications and create a **new application**

-> **Please keep in mind the name of this application will be the name of your Rich Presence** (see example below)

4. Once you've created a new application and named it, copy the application id.

5. Fill in the `config.json` values with your desired options, make sure you replace all of the values with your desired options.

6. In the terminal, run `node .`, your RPC should come online!

**NOTE:** You must have the latest version of node.js installed to your local device | Download: https://nodejs.org/en/download

## Example

Here's an example of how the default RPC looks:

[![Example](https://cdn.discordapp.com/attachments/1202492769545883709/1217894175660445706/Screenshot_2024-03-14_135531.png?ex=6605af56&is=65f33a56&hm=448ef4f2d352c74ef1dc23cc19eba07c58b6a73250a8153e6f5fa91e980a7296&)](https://github.com/NoVa-Gh0ul/Discord-Presence)

## Config Help

Some things to note about the config.json values below:

- You must provide proper values for every option in `config.json`, except the party values at the bottom. Not providing a value for the others above could result in an error. I've added default values for the RPC to revert to using if you do not provide them already in the config, but still you should use your own. If you dont want to have 2 buttons or something, feel free to fork the repo and open a PR.

- The `party_size` and `party_max` will add a new value next to the Activity State. If you fill party size as 1 and party_max as 4, it will appear as (1 out of 4) next to your Activity State. Personally I don't like it so i've left it as null, but for those who want to use it swap `null` out with your desired number value!

- The `Your Large Text` and `Your Small Text` will appear when hovering your cursor over the respective image (see example above).