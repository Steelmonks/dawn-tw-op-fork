# Changes Documentation

## Footer Updates (2024-03-XX)

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

## Product Reviews in Collection Grid (2024-03-XX)

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
