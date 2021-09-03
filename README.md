# nextjs-generic-landing-page

A generic landing page template, built in Next.js (React) with static HTML export.

Can be used as:

1. Hosted Next.js site
2. Use `yarn export` to export pure HTML pages

![nextjs-generic-landing-page](docs/github_preview.jpg)


## Demo

[Demo of nextjs-generic-landing-page hosted on Vercel](https://nextjs-generic-landing-page.vercel.app/)


## Components

- [x] Title/Tagline
- [x] Footer
- [x] Signup form
- [x] Image
- [x] Video
- [x] 3 features
- [x] Google Analytics with page & event logging
- [ ] Try the app (interactive)
- [ ] 3 testimonials
- [ ] Pricing
- [ ] Login link
- [ ] [React Social Share & Follow](https://github.com/tomsoderlund/react-share-follow)


## How to use

### How to use 1: Import just the components you need

    yarn add nextjs-generic-landing-page  # or npm install nextjs-generic-landing-page

Then in your code:

    import { Headline, Video } from 'nextjs-generic-landing-page'

    <Headline
      title='My Website'
      description='Maybe the best website ever'
    />

See [pages/index.js](pages/index.js) for examples on how to use the components.

### How to use 2: Clone the entire project

Clone this repository:

    git clone https://github.com/tomsoderlund/nextjs-generic-landing-page.git [MY_APP]

Remove the `.git` folder since you want to create a new repository:

    rm -rf .git

Install dependencies:

    cd [MY_APP]
    yarn  # or npm install

Run:

    yarn dev

Export static HTML:

    yarn export

Test the static HTML:

    cd out
    python -m SimpleHTTPServer


## Update the NPM package

    yarn publish  # will run 'yarn prepublish' before

## styled-jsx reference in package.json?

Needed?
Potential problems with version collisions?
