# Changes Documentation

############################################ Footer Updates

### Changes Made:

1. Removed duplicate logo display in footer
2. Fixed heading display in text blocks
3. Added image picker setting for logo in text blocks
4. Added proper Tailwind classes for logo styling (`twcss-h-8 twcss-w-auto twcss-mt-2`)

### Files Modified:

- `sections/footer.liquid`

### How to Use:

1. In the theme editor, go to the footer section
2. Add a text block
3. You can now:
   - Add a heading
   - Upload a logo using the new image picker
   - Add descriptive text

############################################ Product Reviews in Collection Grid

### Changes Made:

1. Added Trusted Shops star rating display to product cards in collection grid
2. Fixed the widget implementation to use the correct product variable (`card_product` instead of `item`)
3. Added proper styling with Tailwind classes (`twcss-mt-2`)
4. Improved SKU handling for variants

### Files Modified:

- `snippets/card-product.liquid`

### How to Use:

1. The star ratings will automatically appear on product cards in collection pages
2. Make sure Trusted Shops is properly configured in your Shopify settings
3. Each product variant's SKU will be included in the widget data
4. The widget will only show if the product has a SKU

### Technical Details:

- Widget ID: `wdg-7e981e7c-c798-40cb-9c30-e695d0aa36ea`
- The widget checks for SKUs using `card_product.selected_or_first_available_variant.sku`
- All variant SKUs are included in the widget data using `{%- for variant in card_product.variants -%}{{ variant.sku -}},{%- endfor -%}`

############################################ Shipping Page Section Updates

### Changes Made:

1. Refactored the `sm-shipping-page.liquid` section for improved flexibility and maintainability.
2. The main heading, first paragraph, second paragraph, and images are now controlled by section settings.
3. The info grid is now implemented using Shopify section blocks, each with:
   - An icon (image picker)
   - A title (text)
   - A description (text)
4. Improved layout using Tailwind classes with the `twcss-` prefix for all styling.
5. Ensured all text colors are controlled via Tailwind classes for consistent appearance (e.g., `twcss-text-white`).
6. Added and adjusted padding for the main section and info grid items using both Tailwind and inline styles for reliability.
7. Cleaned up the schema to remove unused settings and match the actual structure used in the section.
8. Ensured compatibility with both text and image settings, and improved accessibility with proper alt attributes.

### Files Modified:

- `sections/sm-shipping-page.liquid`

### How to Use:

1. In the Shopify theme editor, add or edit the "Cancellation Policy Page" section.
2. Use the section settings to set the main heading, first and second paragraphs, and images.
3. Add info grid items as blocks, each with an icon, title, and description.
4. All layout and color adjustments are handled via Tailwind classes with the `twcss-` prefix.

############################################ Newsletter Page Section Updates

### Changes Made:

1. Created `sm-newsletter-page.liquid` section for a customizable newsletter signup page.
2. Added settings for heading, subheading, button text, and two customizable texts below the form.
3. Implemented a collapsible form container with a toggle button, styled with Tailwind classes using the `twcss-` prefix.
4. Added dynamic and responsive layout using Tailwind flex and gap utilities.
5. Added a customizable padding setting for the main article container.
6. Ensured all text and button styles follow the project's Tailwind conventions.

### Files Modified:

- `sections/sm-newsletter-page.liquid`

### How to Use:

1. In the Shopify theme editor, add or edit the "Newsletter Page" section.
2. Use the section settings to set the heading, subheading, button text, and the two texts below the form.
3. The newsletter form is collapsible and can be toggled by the button.
4. Adjust the padding as needed via the theme editor.

############################################ Questions Page Section Updates

### Changes Made:

1. Created `sm-questions-page.liquid` section for a customizable FAQ or questions page.
2. Added settings for heading, main content (richtext), and padding.
3. Added settings for email and phone icons, which are displayed with contact info below the main content.
4. Used Tailwind classes with the `twcss-` prefix for all layout and styling, including flex, gap, and text alignment utilities.
5. Improved semantic structure by using appropriate HTML elements and accessibility best practices.

### Files Modified:

- `sections/sm-questions-page.liquid`

### How to Use:

1. In the Shopify theme editor, add or edit the "Questions Page" section.
2. Use the section settings to set the heading, main content, padding, and upload icons for email and phone.
3. The contact info is displayed in a flex container with adjustable gap and centered alignment.
