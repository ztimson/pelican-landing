<!-- Header -->
<div id="top" align="center">
  <br />

  <!-- Logo -->
  <img src="./src/assets/logo.png" alt="Logo" width="200" height="200">

  <!-- Title -->
  ### Pelican Landing

  <!-- Description -->
  Morson's Pelican Landing Website

  <!-- Repo badges -->
  [![Version](https://img.shields.io/badge/dynamic/json.svg?label=Version&style=for-the-badge&url=https://git.zakscode.com/api/v1/repos/ztimson/pelican-landing/tags&query=$[0].name)](https://git.zakscode.com/ztimson/pelican-landing/tags)
  [![Pull Requests](https://img.shields.io/badge/dynamic/json.svg?label=Pull%20Requests&style=for-the-badge&url=https://git.zakscode.com/api/v1/repos/ztimson/pelican-landing&query=open_pr_counter)](https://git.zakscode.com/ztimson/pelican-landing/pulls)
  [![Issues](https://img.shields.io/badge/dynamic/json.svg?label=Issues&style=for-the-badge&url=https://git.zakscode.com/api/v1/repos/ztimson/pelican-landing&query=open_issues_count)](https://git.zakscode.com/ztimson/pelican-landing/issues)

  <!-- Links -->

  ---
  <div>
    <a href="https://git.zakscode.com/ztimson/pelican-landing/releases" target="_blank">Release Notes</a>
    • <a href="https://git.zakscode.com/ztimson/pelican-landing/issues/new?template=.github%2fissue_template%2fbug.md" target="_blank">Report a Bug</a>
    • <a href="https://git.zakscode.com/ztimson/pelican-landing/issues/new?template=.github%2fissue_template%2fenhancement.md" target="_blank">Request a Feature</a>
  </div>

  ---
</div>

## Table of Contents
- [Pelican Landing](#top)
	- [About](#about)
		- [Demo](#demo)
		- [Built With](#built-with)
	- [Setup](#setup)
		- [Production](#production)
		- [Development](#development)
	- [License](#license)

## About

This is a business website built for Pelican Landing.

Pelican Landing is a family run year-round hunting & fishing lodge. It's located on the beautiful southern shores of Lake of Woods and offers the outdoors-man a tailor made experience. With both road and water access this resort can meet the needs of the angler, hunter, or nature enthusiast.

### Demo

Website: https://pelica-landing.zakscode.com

### Built With
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![Docker](https://img.shields.io/badge/Docker-384d54?style=for-the-badge&logo=docker)](https://docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)

## Setup

<details>
<summary>
  <h3 id="production" style="display: inline">
    Production
  </h3>
</summary>

#### Prerequisites
- [Docker](https://docs.docker.com/install/)

#### Instructions
1. Run the docker image: `docker run -p 80:80 git.zakscode.com/ztimson/pelican-landing:latest`
2. Open [http://localhost](http://localhost)
</details>

<details>
<summary>
  <h3 id="development" style="display: inline">
    Development
  </h3>
</summary>

#### Prerequisites
- [Node.js](https://nodejs.org/en/download)

#### Instructions
1. Install the dependencies: `npm install`
2. Start the Angular server: `npm run start`
3. Open [http://localhost:4200](http://localhost:4200)

</details>

## License
Copyright © 2023 Zakary Timson | All Rights Reserved

See the [license](./LICENSE) for more information.
