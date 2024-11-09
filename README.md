# Strapi-Nuxt Blog

A blog application built using Strapi for the backend and Nuxt.js for the frontend. This project demonstrates a headless CMS architecture, where Strapi manages content, and Nuxt.js serves as the static site generator to fetch and display the content.

## Features

- Content management with Strapi
- Static site generation with Nuxt.js
- Full integration with Strapi API for blog posts, categories, and other content
- Responsive design

## Setup

### Prerequisites
- Node.js (>= 16.x)
- npm, pnpm, yarn, or bun (Choose your preferred package manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/amirhooshmand/strapi-nuxt-blog.git
    cd strapi-nuxt-blog
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

3. Start the development server:
    ```bash
    pnpm run dev
    ```

    Visit [http://localhost:3000](http://localhost:3000) to see the application in action.

### Build for Production

1. Build the application:
    ```bash
    pnpm build
    ```

2. Preview the production build:
    ```bash
    pnpm preview
    ```

## Configuration

Create an `.env` file to set up environment variables for your Strapi API, e.g.,

```
STRAPI_API_URL=http://localhost:1337
```

## About Strapi

[Strapi](https://strapi.io/) is an open-source headless CMS to manage content with an easy-to-use interface and flexible API.

## License

MIT License. See LICENSE for more details.
