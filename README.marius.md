# Dev Environment

- Install all necessary packages with `npm install`
- Install Tailwind from `https://tailwindcss.com/`
- Run Tailwind builder with `npm run tw`
- See live preview of theme with `shopify theme dev` (make sure Shopify CLI is installed)

# Git issues

- There's an unfixed issue with Git for this project. There's a Git Actions workflow set up to generate the app.css file after a commit has been pushed. This usually causes conflicts with the `app.css` file. To resolve this conflict and be able to fetch/pull the newer versions you must simply delete the `app.css` file from local and pull it from the remote branch. The `app.css` file is auto-generated from other files so it will not be a breaking change

## Translations

### This is an important outline of how the translations should be handled if you want to not use a translation app

The

## Neat tricks

- You can use metafields `{{ product.metafields }}` to output things conditionally `{%- if product.metafields contains "abc" %} class="blue" {% endif -%}`

- You can output any variable you assign with `{% assign my_variable = "variable_name" %}`. Example in `header-mega-menu.liquid`
  - Variable types (you'll most likely only use string, number and boolean, but still useful to know): https://shopify.github.io/liquid/basics/types/
  - Use the previous documentation to find official technical information

## Random intel

- Text highlighting in the header (blue to black gradient) happens thanks to the `--highlighted` class, added conditionally using liquid code that looks for the string `--highlighted` in the link's name and adds the class. See `header-mega-menu.liquid` for the approach. You can add this class anywhere to highlight anything the same way
